import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../services/supabaseClient';

const TypewriterText = ({ text, delay = 0 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{text.substring(0, index)}</span>;
};

const Dashboard = () => {
  const [stats, setStats] = useState([
    { label: 'Total Users', value: '0', change: 'Loading...', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )},
    { label: 'Active Listings', value: '0', change: 'Stable', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
    { label: 'Pending Approvals', value: '0', change: 'Action Required', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )},
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
        const { count: internshipCount } = await supabase.from('internships').select('*', { count: 'exact', head: true }).eq('status', 'Active');
        const { count: pendingCount } = await supabase.from('industry_registrations').select('*', { count: 'exact', head: true }).eq('status', 'Pending');

        setStats(prev => [
          { ...prev[0], value: userCount?.toString() || '0', change: 'Total Registered' },
          { ...prev[1], value: internshipCount?.toString() || '0', change: 'Live' },
          { ...prev[2], value: pendingCount?.toString() || '0', change: 'Waiting Review' },
        ]);
      } catch (error) {
        console.error('Error fetching system stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-mistral-black/10 pb-8">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mb-2"
          >
            <h3 className="font-portal font-bold text-lg tracking-tight text-mistral-orange italic">
              # System Control
            </h3>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-mistral-black leading-none">
            <TypewriterText text="Superadmin Console" delay={0.2} />
          </h2>
          <p className="text-mistral-black/60 font-medium font-sans mt-3 max-w-xl">Centralized monitoring and administrative controls for the MES MLCOE Internship Management System.</p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-mistral-black text-white text-[11px] uppercase font-bold tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.1)] border border-white/10">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          System Status: Online
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-brand-ivory p-6 border border-mistral-black/10 shadow-sm hover:border-mistral-orange transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-mistral-black/5 text-mistral-black group-hover:bg-mistral-orange group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${stat.change.includes('+') ? 'text-green-600' : 'text-mistral-black/40'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40 mb-1">{stat.label}</p>
            <p className="text-3xl font-heading font-bold text-mistral-black tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm">
        <div className="p-6 border-b border-mistral-black/5">
          <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-mistral-black">System Activity Log</h3>
        </div>
        <div className="p-6 space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-sm font-sans">
              <div className="w-2 h-2 bg-mistral-orange rounded-full" />
              <span className="text-mistral-black/40 font-bold uppercase tracking-widest text-[9px]">10:4{i} AM</span>
              <span className="text-mistral-black font-medium">Administrator modified user permissions for <span className="font-bold">staff@mlcoe.in</span></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
