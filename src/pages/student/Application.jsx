import React from 'react';
import { motion } from 'framer-motion';

const Application = () => {
  const applications = [
    {
      company: 'TechCorp Solutions',
      role: 'Frontend Developer Intern',
      date: 'Oct 24, 2023',
      status: 'Pending Review',
      statusClass: 'bg-brand-yellow/30 text-mistral-black',
    },
    {
      company: 'InnovateX',
      role: 'Data Science Intern',
      date: 'Sep 15, 2023',
      status: 'Rejected',
      statusClass: 'bg-red-100 text-red-700',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Page Header */}
      <div className="bg-brand-ivory border border-mistral-black/10 p-6 md:p-8 shadow-sm rounded-xl">
        <h2 className="font-heading font-semibold text-xl md:text-2xl uppercase tracking-tight mb-1">My Applications</h2>
        <p className="text-mistral-black/60 font-sans text-sm">Track the status of your internship applications.</p>
      </div>

      {/* ── Desktop Table (md+) ── */}
      <div className="hidden md:block bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-hidden rounded-xl">
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
            {applications.map((app, i) => (
              <tr key={i} className="hover:bg-brand-yellow/10 transition-colors">
                <td className="px-6 py-4 font-semibold">{app.company}</td>
                <td className="px-6 py-4 text-mistral-black/70">{app.role}</td>
                <td className="px-6 py-4 text-mistral-black/70">{app.date}</td>
                <td className="px-6 py-4">
                  <span className={`${app.statusClass} px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-mistral-orange hover:underline text-xs font-semibold uppercase tracking-wider">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile Cards (< md) ── */}
      <div className="flex flex-col gap-4 md:hidden">
        {applications.map((app, i) => (
          <div key={i} className="bg-brand-ivory border border-mistral-black/10 rounded-xl p-5 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-heading font-bold text-base text-mistral-black leading-tight">{app.company}</p>
                <p className="text-xs text-mistral-black/60 mt-0.5">{app.role}</p>
              </div>
              <span className={`${app.statusClass} shrink-0 px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm`}>
                {app.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-mistral-black/50 border-t border-mistral-black/5 pt-3">
              <span>Applied: {app.date}</span>
              <button className="text-mistral-orange font-semibold uppercase tracking-wider hover:underline">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Application;
