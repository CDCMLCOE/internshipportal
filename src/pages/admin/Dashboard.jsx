import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, UserCheck, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Internships', value: '12', icon: GraduationCap, color: 'bg-mistral-orange text-white' },
    { label: 'Active Applicants', value: '48', icon: Users, color: 'bg-mistral-orange text-white' },
    { label: 'Verified Students', value: '156', icon: UserCheck, color: 'bg-mistral-orange text-white' },
    { label: 'New This Week', value: '5', icon: TrendingUp, color: 'bg-mistral-orange text-white' },
  ];

  const recentActivity = [
    { id: 1, action: 'New Internship Posted', details: 'Full Stack Developer at Google', time: '2 hours ago' },
    { id: 2, action: 'New Applicant', details: 'John Doe applied for UI/UX Designer', time: '4 hours ago' },
    { id: 3, action: 'Profile Verified', details: 'Jane Smith profile was approved', time: 'Yesterday' },
    { id: 4, action: 'Internship Updated', details: 'Data Science role requirements changed', time: '2 days ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">System Overview</h2>
        <p className="text-mistral-black/60 font-medium">Welcome back, Administrator. Here's what's happening today.</p>
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

export default AdminDashboard;
