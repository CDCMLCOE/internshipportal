import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, UserCheck, TrendingUp } from 'lucide-react';
import { supabase } from '../../../backend/services/supabaseClient';

const IndustryDashboard = () => {
  const [stats, setStats] = useState([
    { label: 'My Active Listings', value: '0', icon: GraduationCap, color: 'bg-mistral-orange text-white' },
    { label: 'Total Applicants', value: '0', icon: Users, color: 'bg-mistral-orange text-white' },
    { label: 'Shortlisted', value: '0', icon: UserCheck, color: 'bg-mistral-orange text-white' },
    { label: 'Positions Filled', value: '0', icon: TrendingUp, color: 'bg-mistral-orange text-white' },
  ]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        // Fetch user's internships
        const { data: myInternships, error: intError } = await supabase
          .from('internships')
          .select('id, status')
          .eq('created_by', user.id);

        if (intError) throw intError;

        const activeCount = myInternships.filter(i => i.status === 'Active').length;
        const myInternshipIds = myInternships.map(i => i.id);

        // Fetch applicants for these internships
        const { data: applicants, error: appError } = await supabase
          .from('applications')
          .select('status')
          .in('internship_id', myInternshipIds);

        if (appError) throw appError;

        const totalApplicants = applicants.length;
        const shortlisted = applicants.filter(a => a.status === 'Shortlisted').length;
        const filled = applicants.filter(a => a.status === 'Accepted').length;

        setStats([
          { label: 'My Active Listings', value: activeCount.toString(), icon: GraduationCap, color: 'bg-mistral-orange text-white' },
          { label: 'Total Applicants', value: totalApplicants.toString(), icon: Users, color: 'bg-mistral-orange text-white' },
          { label: 'Shortlisted', value: shortlisted.toString(), icon: UserCheck, color: 'bg-mistral-orange text-white' },
          { label: 'Positions Filled', value: filled.toString(), icon: TrendingUp, color: 'bg-mistral-orange text-white' },
        ]);

        // Mock activity for now until we have an activity log table
        setRecentActivity([
          { id: 1, action: 'Dashboard Updated', details: 'Real-time stats are now live.', time: 'Just now' },
        ]);

      } catch (error) {
        console.error('Error fetching industry stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Industry Overview</h2>
        <p className="text-mistral-black/60 font-medium">Welcome back. Here's a summary of your internship listings and applicants.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
              <p className="text-2xl font-bold font-heading">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-8">
        {/* Recent Activity */}
        <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm p-6 space-y-6">
          <div className="flex justify-between items-center border-b border-mistral-black/5 pb-4">
            <h3 className="font-heading font-bold uppercase tracking-wider text-sm">Recent Activity</h3>
            <button className="text-[10px] uppercase tracking-widest font-bold text-mistral-orange hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex justify-between items-start p-4 hover:bg-brand-cream/50 transition-colors border-l-2 border-transparent hover:border-mistral-orange">
                <div>
                  <p className="font-bold text-sm uppercase tracking-tight">{activity.action}</p>
                  <p className="text-xs text-mistral-black/60">{activity.details}</p>
                </div>
                <span className="text-[10px] uppercase font-bold text-mistral-black/30">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDashboard;
