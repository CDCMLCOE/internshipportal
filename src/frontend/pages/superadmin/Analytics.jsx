import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../../backend/services/supabaseClient';
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const COLORS = ['#ea580c', '#1a1a1a', '#ffe8a1', '#f4f0e6', '#22c55e', '#3b82f6'];

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);
  const [internships, setInternships] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [applications, setApplications] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const [dbStatus, setDbStatus] = useState({ status: 'Checking...', latency: null });
  const [authStatus, setAuthStatus] = useState({ status: 'Checking...' });
  const [realtimeStatus, setRealtimeStatus] = useState('Connecting...');

  useEffect(() => {
    fetchAllData();

    try {
      const channel = supabase
        .channel('analytics-realtime')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'profiles' }, () => fetchAllData())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'internships' }, () => fetchAllData())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'industry_registrations' }, () => fetchAllData())
        .subscribe((status) => {
          setRealtimeStatus(status === 'SUBSCRIBED' ? 'Connected' : 'Disconnected');
        });

      return () => supabase.removeChannel(channel);
    } catch (e) {
      console.warn('Realtime subscription failed:', e);
      setRealtimeStatus('Error');
    }
  }, []);

  const fetchAllData = async () => {
    const start = performance.now();
    try {
      const profilesRes = await supabase.from('profiles').select('id, name, email, role, branch, year, created_at').order('created_at', { ascending: true });
      setProfiles(profilesRes.data || []);
    } catch (e) { console.warn('Profiles fetch failed:', e); }

    try {
      const internshipsRes = await supabase.from('internships').select('id, title, status, company, approval_status, created_at').order('created_at', { ascending: true });
      setInternships(internshipsRes.data || []);
    } catch (e) { console.warn('Internships fetch failed:', e); }

    try {
      const registrationsRes = await supabase.from('industry_registrations').select('id, company_name, status, industry_type, created_at').order('created_at', { ascending: true });
      setRegistrations(registrationsRes.data || []);
    } catch (e) { console.warn('Registrations fetch failed:', e); }

    try {
      const applicationsRes = await supabase.from('applications').select('id, status, created_at').order('created_at', { ascending: true });
      setApplications(applicationsRes.data || []);
    } catch (e) { console.warn('Applications fetch failed:', e); }

    try {
      const assignmentsRes = await supabase.from('assignments').select('id');
      setAssignments(assignmentsRes.data || []);
    } catch (e) { console.warn('Assignments fetch failed:', e); }

    try {
      const submissionsRes = await supabase.from('submissions').select('id, status');
      setSubmissions(submissionsRes.data || []);
    } catch (e) { console.warn('Submissions fetch failed:', e); }

    try {
      await supabase.from('profiles').select('id', { count: 'exact', head: true });
      const latency = Math.round(performance.now() - start);
      setDbStatus({ status: 'Healthy', latency });
    } catch {
      setDbStatus({ status: 'Error', latency: null });
    }

    try {
      const { error } = await supabase.auth.getSession();
      setAuthStatus({ status: error ? 'Error' : 'Online' });
    } catch {
      setAuthStatus({ status: 'Error' });
    }

    setLastRefresh(new Date());
    setLoading(false);
  };

  const userGrowthData = useMemo(() => {
    const monthly = {};
    profiles.forEach(p => {
      const d = new Date(p.created_at);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      monthly[key] = (monthly[key] || 0) + 1;
    });
    let cumulative = 0;
    return Object.entries(monthly).slice(-6).map(([month, count]) => {
      cumulative += count;
      return { month, total: cumulative, new: count };
    });
  }, [profiles]);

  const internshipTrends = useMemo(() => {
    const monthly = {};
    internships.forEach(i => {
      const d = new Date(i.created_at);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      monthly[key] = (monthly[key] || 0) + 1;
    });
    return Object.entries(monthly).slice(-6).map(([month, count]) => ({ month, count }));
  }, [internships]);

  const roleDistribution = useMemo(() => {
    const roles = {};
    profiles.forEach(p => { roles[p.role || 'Unknown'] = (roles[p.role || 'Unknown'] || 0) + 1; });
    return Object.entries(roles).map(([name, value]) => ({ name, value }));
  }, [profiles]);

  const branchDistribution = useMemo(() => {
    const branches = {};
    profiles.filter(p => p.role === 'student').forEach(p => {
      branches[p.branch || 'Unknown'] = (branches[p.branch || 'Unknown'] || 0) + 1;
    });
    return Object.entries(branches).map(([name, value]) => ({ name, value }));
  }, [profiles]);

  const industryDistribution = useMemo(() => {
    const types = {};
    registrations.forEach(r => { types[r.industry_type || 'Unknown'] = (types[r.industry_type || 'Unknown'] || 0) + 1; });
    return Object.entries(types).map(([name, value]) => ({ name, value }));
  }, [registrations]);

  const applicationStatusData = useMemo(() => {
    const statuses = {};
    applications.forEach(a => { statuses[a.status || 'Unknown'] = (statuses[a.status || 'Unknown'] || 0) + 1; });
    return Object.entries(statuses).map(([name, value]) => ({ name, value }));
  }, [applications]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const newUsersToday = useMemo(() =>
    profiles.filter(p => new Date(p.created_at) >= today).length
  , [profiles]);

  const stats = useMemo(() => [
    { label: 'Total Users', value: profiles.length, sub: `${profiles.filter(p => p.role === 'student').length} students`, color: 'bg-mistral-orange' },
    { label: 'Internships', value: internships.length, sub: `${internships.filter(i => i.status === 'Active').length} active`, color: 'bg-green-500' },
    { label: 'Industry Partners', value: registrations.length, sub: `${registrations.filter(r => r.status === 'Pending').length} pending`, color: 'bg-blue-500' },
    { label: 'Applications', value: applications.length, sub: `${applications.filter(a => a.status === 'Accepted').length} accepted`, color: 'bg-purple-500' },
    { label: 'New Today', value: newUsersToday, sub: `${internships.filter(i => i.approval_status === 'pending').length} pending approvals`, color: 'bg-yellow-500' },
    { label: 'Submissions', value: submissions.length, sub: `${assignments.length} assignments`, color: 'bg-pink-500' },
  ], [profiles, internships, registrations, applications, submissions, assignments, newUsersToday]);

  const recentActivity = useMemo(() => {
    const logs = [];
    profiles.slice(-5).forEach(p => logs.push({ time: p.created_at, type: 'user', msg: `New user registered: ${p.name}` }));
    internships.slice(-5).forEach(i => logs.push({ time: i.created_at, type: 'internship', msg: `Internship posted: ${i.title}` }));
    registrations.slice(-5).forEach(r => logs.push({ time: r.created_at, type: 'registration', msg: `Industry registration: ${r.company_name || r.company || 'Unknown'}` }));
    applications.slice(-5).forEach(a => logs.push({ time: a.created_at, type: 'application', msg: `New application submitted` }));
    return logs.sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 10);
  }, [profiles, internships, registrations, applications]);

  const formatTime = (t) => {
    const d = new Date(t);
    const now = new Date();
    const diff = Math.floor((now - d) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3 text-mistral-black/40">
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
          <span className="text-xs uppercase tracking-widest font-bold">Loading Analytics...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-mistral-black/10 pb-8">
        <div>
          <h3 className="font-portal font-bold text-lg tracking-tight text-mistral-orange italic mb-2"># System Analytics</h3>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-mistral-black leading-none">Real-Time Dashboard</h2>
          <p className="text-mistral-black/60 font-medium font-sans mt-3 max-w-xl">
            Live metrics from Supabase with automatic refresh on data changes.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[9px] uppercase tracking-widest text-mistral-black/30 font-bold">
            Last: {lastRefresh.toLocaleTimeString('en-IN')}
          </span>
          <div className="flex items-center gap-2 px-4 py-2 bg-mistral-black text-white text-[10px] uppercase font-bold tracking-widest">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Live
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-brand-ivory p-5 border border-mistral-black/10 hover:border-mistral-orange transition-all group"
          >
            <div className={`w-2 h-2 ${s.color} rounded-full mb-3`} />
            <p className="text-[9px] uppercase font-bold tracking-widest text-mistral-black/40 mb-1">{s.label}</p>
            <p className="text-3xl font-heading font-bold text-mistral-black tracking-tight">{s.value}</p>
            <p className="text-[10px] text-mistral-black/40 mt-1">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-brand-ivory border border-mistral-black/10 p-6">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40 mb-4">User Growth (Cumulative)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={userGrowthData}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ea580c" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ea580c" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a10" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#1a1a1a60' }} />
              <YAxis tick={{ fontSize: 10, fill: '#1a1a1a60' }} />
              <Tooltip contentStyle={{ background: '#fcfaf6', border: '1px solid #1a1a1a10', fontSize: 12 }} />
              <Area type="monotone" dataKey="total" stroke="#ea580c" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Internship Trends */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-brand-ivory border border-mistral-black/10 p-6">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40 mb-4">Internships Posted</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={internshipTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a10" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#1a1a1a60' }} />
              <YAxis tick={{ fontSize: 10, fill: '#1a1a1a60' }} />
              <Tooltip contentStyle={{ background: '#fcfaf6', border: '1px solid #1a1a1a10', fontSize: 12 }} />
              <Bar dataKey="count" fill="#1a1a1a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Role Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-brand-ivory border border-mistral-black/10 p-6">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40 mb-4">User Roles</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={roleDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                {roleDistribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#fcfaf6', border: '1px solid #1a1a1a10', fontSize: 12 }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Branch Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.53 }} className="bg-brand-ivory border border-mistral-black/10 p-6">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40 mb-4">Students by Branch</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={branchDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                {branchDistribution.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#fcfaf6', border: '1px solid #1a1a1a10', fontSize: 12 }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Application Status */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-brand-ivory border border-mistral-black/10 p-6">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40 mb-4">Application Status</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={applicationStatusData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                {applicationStatusData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#fcfaf6', border: '1px solid #1a1a1a10', fontSize: 12 }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Security & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Log */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} className="bg-brand-ivory border border-mistral-black/10">
          <div className="p-5 border-b border-mistral-black/5 flex justify-between items-center">
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Recent Activity</h3>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div className="divide-y divide-mistral-black/5 max-h-[360px] overflow-y-auto">
            {recentActivity.map((log, i) => (
              <div key={i} className="px-5 py-3.5 flex items-start gap-3 hover:bg-mistral-orange/5 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  log.type === 'user' ? 'bg-blue-500' :
                  log.type === 'internship' ? 'bg-green-500' :
                  log.type === 'registration' ? 'bg-purple-500' : 'bg-mistral-orange'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-mistral-black font-medium truncate">{log.msg}</p>
                  <p className="text-[10px] text-mistral-black/40 mt-0.5">{formatTime(log.time)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Health */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="bg-brand-ivory border border-mistral-black/10 p-6 space-y-6">
          <h3 className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">System Health</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-mistral-black">Database Connection</span>
                <span className={`font-bold ${dbStatus.status === 'Healthy' ? 'text-green-600' : 'text-red-600'}`}>
                  {dbStatus.status}{dbStatus.latency ? ` (${dbStatus.latency}ms)` : ''}
                </span>
              </div>
              <div className="h-1.5 bg-mistral-black/5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${dbStatus.status === 'Healthy' ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: dbStatus.latency ? `${Math.min(100, Math.max(10, 100 - dbStatus.latency / 5))}%` : '50%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-mistral-black">Auth Service</span>
                <span className={`font-bold ${authStatus.status === 'Online' ? 'text-green-600' : 'text-red-600'}`}>
                  {authStatus.status}
                </span>
              </div>
              <div className="h-1.5 bg-mistral-black/5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${authStatus.status === 'Online' ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: authStatus.status === 'Online' ? '100%' : '50%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-mistral-black">Realtime Channels</span>
                <span className={`font-bold ${realtimeStatus === 'Connected' ? 'text-green-600' : 'text-amber-600'}`}>
                  {realtimeStatus}
                </span>
              </div>
              <div className="h-1.5 bg-mistral-black/5 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${realtimeStatus === 'Connected' ? 'bg-green-500' : 'bg-amber-500'}`}
                  style={{ width: realtimeStatus === 'Connected' ? '100%' : '50%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-mistral-black">API Usage</span>
                <a href="https://supabase.com/dashboard/project/uzmfxxfbphfzdtspflro/settings/usage" target="_blank" rel="noopener noreferrer" className="text-mistral-orange font-bold hover:underline">
                  View Dashboard ↗
                </a>
              </div>
              <p className="text-[10px] text-mistral-black/40 mt-1">
                Rate limit and quota details available in the Supabase Dashboard.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-mistral-black/5 grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-mistral-black">{profiles.length + internships.length + registrations.length + applications.length + submissions.length + assignments.length}</p>
              <p className="text-[9px] uppercase tracking-widest text-mistral-black/40 font-bold">Total Records</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-mistral-orange">7</p>
              <p className="text-[9px] uppercase tracking-widest text-mistral-black/40 font-bold">Live Tables</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
