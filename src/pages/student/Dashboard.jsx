import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="bg-brand-ivory border border-mistral-black/10 p-8 shadow-sm">
        <h2 className="font-heading font-semibold text-2xl uppercase tracking-tight mb-2">Welcome Back, Student</h2>
        <p className="text-mistral-black/60 font-sans text-sm">Here is an overview of your internship applications and activities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-ivory border border-mistral-black/10 p-6 shadow-sm">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-4">Total Applications</h3>
          <div className="text-4xl font-heading font-semibold text-mistral-orange">3</div>
        </div>
        <div className="bg-brand-ivory border border-mistral-black/10 p-6 shadow-sm">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-4">Under Review</h3>
          <div className="text-4xl font-heading font-semibold text-mistral-black">1</div>
        </div>
        <div className="bg-brand-ivory border border-mistral-black/10 p-6 shadow-sm">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-4">Accepted</h3>
          <div className="text-4xl font-heading font-semibold text-green-600">0</div>
        </div>
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 p-8 shadow-sm">
        <h3 className="font-heading font-semibold text-lg uppercase tracking-tight mb-6">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-mistral-black/5 last:border-0">
            <div>
              <p className="font-bold text-sm">Application submitted to TechCorp</p>
              <p className="text-xs text-mistral-black/50">2 days ago</p>
            </div>
            <span className="bg-brand-yellow/30 text-mistral-black px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full">Pending</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-mistral-black/5 last:border-0">
            <div>
              <p className="font-bold text-sm">Profile updated</p>
              <p className="text-xs text-mistral-black/50">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
