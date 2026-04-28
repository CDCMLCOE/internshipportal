import React from 'react';
import { motion } from 'framer-motion';

const AdminApplicants = () => {
  const applicants = [
    { id: 1, name: 'John Doe', role: 'Full Stack Developer', college: 'MES Pune', gpa: '3.8', status: 'Pending' },
    { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', college: 'COEP Pune', gpa: '3.9', status: 'Reviewed' },
    { id: 3, name: 'Bob Johnson', role: 'Full Stack Developer', college: 'VIT Pune', gpa: '3.5', status: 'Rejected' },
    { id: 4, name: 'Alice Williams', role: 'Data Scientist', college: 'PICT Pune', gpa: '4.0', status: 'Shortlisted' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Reviewed': return 'bg-blue-100 text-blue-800';
      case 'Shortlisted': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Applicant Tracking</h2>
        <p className="text-mistral-black/60 font-medium">Review and manage student applications for all internships.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {applicants.map((applicant, index) => (
          <motion.div
            key={applicant.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-brand-ivory border border-mistral-black/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-mistral-orange transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-cream border border-mistral-black/10 flex items-center justify-center font-bold text-xl uppercase text-mistral-black/40">
                {applicant.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold uppercase tracking-tight">{applicant.name}</span>
                <span className="text-xs font-bold text-mistral-orange uppercase tracking-widest">{applicant.role}</span>
                <span className="text-xs text-mistral-black/60 mt-1">{applicant.college} • GPA: {applicant.gpa}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <span className={`px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold ${getStatusStyle(applicant.status)}`}>
                {applicant.status}
              </span>
              <div className="flex-grow md:flex-grow-0 flex gap-2">
                <button className="flex-1 md:flex-none px-4 py-2 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-colors">
                  Review Profile
                </button>
                <button className="p-2 border border-mistral-black/10 hover:bg-brand-yellow transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminApplicants;
