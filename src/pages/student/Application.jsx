import React from 'react';
import { motion } from 'framer-motion';

const Application = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="bg-brand-ivory border border-mistral-black/10 p-8 shadow-sm">
        <h2 className="font-heading font-semibold text-2xl uppercase tracking-tight mb-2">My Applications</h2>
        <p className="text-mistral-black/60 font-sans text-sm">Track the status of your internship applications.</p>
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm font-sans">
          <thead className="bg-mistral-black text-white text-[10px] uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4 font-normal">Company</th>
              <th className="px-6 py-4 font-normal">Role</th>
              <th className="px-6 py-4 font-normal">Date Applied</th>
              <th className="px-6 py-4 font-normal">Status</th>
              <th className="px-6 py-4 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mistral-black/5 text-mistral-black">
            <tr className="hover:bg-brand-yellow/10 transition-colors">
              <td className="px-6 py-4 font-semibold">TechCorp Solutions</td>
              <td className="px-6 py-4 text-mistral-black/70">Frontend Developer Intern</td>
              <td className="px-6 py-4 text-mistral-black/70">Oct 24, 2023</td>
              <td className="px-6 py-4">
                <span className="bg-brand-yellow/30 text-mistral-black px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm">Pending Review</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-mistral-orange hover:underline text-xs font-semibold uppercase tracking-wider">View Details</button>
              </td>
            </tr>
            <tr className="hover:bg-bg-brand-yellow/10 transition-colors">
              <td className="px-6 py-4 font-semibold">InnovateX</td>
              <td className="px-6 py-4 text-mistral-black/70">Data Science Intern</td>
              <td className="px-6 py-4 text-mistral-black/70">Sep 15, 2023</td>
              <td className="px-6 py-4">
                <span className="bg-red-100 text-red-700 px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm">Rejected</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-mistral-orange hover:underline text-xs font-semibold uppercase tracking-wider">View Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Application;
