import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, UserCheck, TrendingUp } from 'lucide-react';
import { supabase } from '../../../backend/services/supabaseClient';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: '—',
    computerEng: '—',
    infoTech: '—',
    aiml: '—',
    etc: '—',
  });
  const [recentStudents, setRecentStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Total students (exclude admin/superadmin)
      const { data: allProfiles } = await supabase
        .from('profiles')
        .select('id, name, branch, email, created_at')
        .not('role', 'eq', 'admin')
        .not('role', 'eq', 'superadmin')
        .order('created_at', { ascending: false });

      if (allProfiles) {
        const ce = allProfiles.filter(p => p.branch === 'Computer Engineering').length;
        const it = allProfiles.filter(p => p.branch === 'Information Technology').length;
        const aiml = allProfiles.filter(p => p.branch === 'CSE - ai&ml').length;
        const etc = allProfiles.filter(p => p.branch === 'E&TC').length;

        setStats({
          totalStudents: allProfiles.length,
          computerEng: ce,
          infoTech: it,
          aiml: aiml,
          etc: etc,
        });

        // 5 most recently added students
        setRecentStudents(allProfiles.slice(0, 5));
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const statCards = [
    { label: 'Total Students', value: stats.totalStudents, icon: Users, color: 'bg-mistral-orange text-white' },
    { label: 'Computer Engineering', value: stats.computerEng, icon: GraduationCap, color: 'bg-mistral-orange text-white' },
    { label: 'Information Technology', value: stats.infoTech, icon: UserCheck, color: 'bg-mistral-orange text-white' },
    { label: 'AI & ML', value: stats.aiml, icon: TrendingUp, color: 'bg-mistral-orange text-white' },
    { label: 'E&TC', value: stats.etc, icon: GraduationCap, color: 'bg-mistral-orange text-white' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">System Overview</h2>
        <p className="text-mistral-black/60 font-medium">Welcome back, Administrator. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-brand-ivory p-6 border border-mistral-black/10 shadow-sm flex items-center gap-4 group hover:border-mistral-orange transition-all duration-300"
          >
            <div className={`w-12 h-12 ${stat.color} flex items-center justify-center border border-mistral-black/5 shadow-inner`}>
              <stat.icon size={20} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/40">{stat.label}</p>
              <p className="text-2xl font-bold font-heading">
                {loading ? <span className="animate-pulse">...</span> : stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Students */}
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-mistral-black/5 pb-4">
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Recently Added Students</h3>
            <span className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/30">Live from DB</span>
          </div>
          <div className="space-y-4">
            {loading ? (
              <p className="text-xs text-mistral-black/40 uppercase tracking-widest font-bold">Loading...</p>
            ) : recentStudents.length === 0 ? (
              <p className="text-xs text-mistral-black/40 uppercase tracking-widest font-bold">No students found.</p>
            ) : (
              recentStudents.map((student) => {
                const branchLabels = {
                  'Computer Engineering': 'Computer Engineering',
                  'CSE - ai&ml': 'CSE - AI & ML',
                  'Information Technology': 'Information Technology',
                  'E&TC': 'E&TC',
                };
                return (
                  <div key={student.id} className="flex justify-between items-start p-4 hover:bg-brand-cream/50 transition-colors border-l-2 border-transparent hover:border-mistral-orange">
                    <div>
                      <p className="font-bold text-sm uppercase tracking-tight">{student.name}</p>
                      <p className="text-xs text-mistral-black/60">{student.email} • {branchLabels[student.branch] || student.branch}</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-mistral-black/30">
                      {new Date(student.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
