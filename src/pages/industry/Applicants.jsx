import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StudentProfileReviewModal from '../../components/StudentProfileReviewModal';

const IndustryApplicants = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isBranchSubMenuOpen, setIsBranchSubMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const applicants = [
    { id: 1, name: 'John Doe', role: 'Full Stack Developer', college: 'MES Pune', gpa: '3.8', status: 'Pending', branch: 'Computer Engineering' },
    { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', college: 'COEP Pune', gpa: '3.9', status: 'Reviewed', branch: 'Information Technology' },
    { id: 3, name: 'Bob Johnson', role: 'Full Stack Developer', college: 'VIT Pune', gpa: '3.5', status: 'Rejected', branch: 'Computer Engineering' },
    { id: 4, name: 'Alice Williams', role: 'Data Scientist', college: 'PICT Pune', gpa: '4.0', status: 'Shortlisted', branch: 'E&TC' },
    { id: 5, name: 'Charlie Brown', role: 'ML Engineer', college: 'MES Pune', gpa: '3.7', status: 'Pending', branch: 'CSE - ai&ml' },
  ];

  const statusFilters = ['Shortlisted', 'Reviewed', 'Pending', 'Rejected'];
  const branches = ['Computer Engineering', 'CSE - ai&ml', 'Information Technology', 'E&TC'];

  const filteredApplicants = applicants.filter(app => {
    const matchesFilter = activeFilter === 'All'
      ? true
      : branches.includes(activeFilter) ? app.branch === activeFilter : app.status === activeFilter;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.branch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending': return 'bg-brand-yellow/20 text-mistral-black font-bold';
      case 'Reviewed': return 'bg-brand-cream text-mistral-black font-bold';
      case 'Shortlisted': return 'bg-mistral-orange/10 text-mistral-orange font-bold';
      case 'Rejected': return 'bg-red-50 text-red-600 font-bold';
      default: return 'bg-mistral-black/5 text-mistral-black';
    }
  };

  const handleNext = () => {
    const currentIndex = filteredApplicants.findIndex(app => app.id === selectedStudent?.id);
    if (currentIndex < filteredApplicants.length - 1) {
      setSelectedStudent(filteredApplicants[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = filteredApplicants.findIndex(app => app.id === selectedStudent?.id);
    if (currentIndex > 0) {
      setSelectedStudent(filteredApplicants[currentIndex - 1]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-mistral-black leading-none">Applicant Tracking</h2>
          <p className="text-mistral-black/60 font-medium mt-2">Review and manage student applications for your internship listings.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder="Search applicants, roles or branches..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/20"
            />
          </div>

          <div className="relative w-full md:w-auto">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full md:w-auto px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter: <span className="text-mistral-orange">{activeFilter}</span>
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-visible">
                  <div className="py-1">
                    <div className="relative"
                      onMouseEnter={() => setIsBranchSubMenuOpen(true)}
                      onMouseLeave={() => setIsBranchSubMenuOpen(false)}>
                      <button className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex justify-between items-center ${branches.includes(activeFilter) ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
                        Branch
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isBranchSubMenuOpen && (
                          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                            className="absolute right-full top-0 mr-1 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl">
                            {branches.map(branch => (
                              <button key={branch} onClick={() => { setActiveFilter(branch); setIsFilterOpen(false); setIsBranchSubMenuOpen(false); }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${activeFilter === branch ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
                                {branch}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {statusFilters.map(filter => (
                      <button key={filter} onClick={() => { setActiveFilter(filter); setIsFilterOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${activeFilter === filter ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
                        {filter}
                      </button>
                    ))}

                    <button onClick={() => { setActiveFilter('All'); setIsFilterOpen(false); }}
                      className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:bg-mistral-orange hover:text-white transition-colors">
                      Clear Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredApplicants.length > 0 ? (
          filteredApplicants.map((applicant, index) => (
            <motion.div key={applicant.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-ivory border border-mistral-black/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-mistral-orange transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-cream border border-mistral-black/10 flex items-center justify-center font-bold text-xl uppercase text-mistral-black/40">
                  {applicant.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold uppercase tracking-tight">{applicant.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-mistral-orange uppercase tracking-widest">{applicant.role}</span>
                    <span className="text-[10px] text-mistral-black/40 uppercase font-bold tracking-tighter">[{applicant.branch}]</span>
                  </div>
                  <span className="text-xs text-mistral-black/60 mt-1">{applicant.college} • GPA: {applicant.gpa}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <span className={`px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold ${getStatusStyle(applicant.status)}`}>
                  {applicant.status}
                </span>
                <div className="flex-grow md:flex-grow-0 flex gap-2">
                  <button 
                    onClick={() => {
                      setSelectedStudent(applicant);
                      setIsProfileModalOpen(true);
                    }}
                    className="flex-1 md:flex-none px-4 py-2 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-colors"
                  >
                    Review Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-brand-ivory border border-dashed border-mistral-black/20">
            <p className="text-mistral-black/40 font-bold uppercase tracking-widest">No applicants found for this filter</p>
          </div>
        )}
      </div>

      <StudentProfileReviewModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        student={selectedStudent}
        onNext={filteredApplicants.findIndex(app => app.id === selectedStudent?.id) < filteredApplicants.length - 1 ? handleNext : null}
        onPrev={filteredApplicants.findIndex(app => app.id === selectedStudent?.id) > 0 ? handlePrev : null}
      />
    </div>
  );
};

export default IndustryApplicants;
