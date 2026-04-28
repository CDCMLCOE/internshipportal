import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdminInternships = () => {
  const [internships, setInternships] = useState([
    { id: 1, title: 'Full Stack Developer', company: 'Google', location: 'Mountain View, CA', category: 'Software', status: 'Active' },
    { id: 2, title: 'UI/UX Designer', company: 'Microsoft', location: 'Redmond, WA', category: 'Design', status: 'Active' },
    { id: 3, title: 'Data Scientist', company: 'Amazon', location: 'Seattle, WA', category: 'Data Science', status: 'Closed' },
    { id: 4, title: 'Cloud Engineer', company: 'Infosys', location: 'Bangalore, India', category: 'Cloud', status: 'Active' },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Manage Internships</h2>
          <p className="text-mistral-black/60 font-medium">Add, edit, or remove internship listings from the portal.</p>
        </div>
        <button className="bg-mistral-black text-white px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-lg">
          Add New Listing
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-brand-ivory p-4 border border-mistral-black/10 shadow-sm flex flex-wrap gap-4 items-center">
        <div className="flex-1 min-w-[200px]">
          <input 
            type="text" 
            placeholder="Search internships..." 
            className="w-full bg-transparent border-b border-mistral-black/20 py-2 text-sm focus:outline-none focus:border-mistral-orange transition-colors"
          />
        </div>
        <select className="bg-transparent border-b border-mistral-black/20 py-2 text-sm focus:outline-none font-bold uppercase tracking-widest text-xs">
          <option>All Categories</option>
          <option>Software</option>
          <option>Design</option>
          <option>Data Science</option>
        </select>
        <select className="bg-transparent border-b border-mistral-black/20 py-2 text-sm focus:outline-none font-bold uppercase tracking-widest text-xs">
          <option>All Status</option>
          <option>Active</option>
          <option>Closed</option>
        </select>
      </div>

      {/* Internship Table */}
      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-mistral-black/5">
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Role & Company</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Category</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Location</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Status</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((job) => (
              <motion.tr 
                key={job.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group hover:bg-mistral-orange/5 transition-colors"
              >
                <td className="p-4 border-b border-mistral-black/5">
                  <div className="flex flex-col">
                    <span className="font-bold text-sm uppercase tracking-tight">{job.title}</span>
                    <span className="text-xs text-mistral-black/60">{job.company}</span>
                  </div>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-yellow/30 text-mistral-black">
                    {job.category}
                  </span>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className="text-xs font-medium">{job.location}</span>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className={`text-[10px] uppercase font-bold ${job.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {job.status}
                  </span>
                </td>
                <td className="p-4 border-b border-mistral-black/5 text-right">
                  <div className="flex justify-end gap-3">
                    <button className="p-2 hover:bg-mistral-black hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-red-600 hover:text-white transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInternships;
