import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentsData = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBranchSubMenuOpen, setIsBranchSubMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    { id: 1, name: 'John Doe', role: 'Full Stack Developer', college: 'MES Pune', gpa: '3.8', branch: 'Computer Engineering' },
    { id: 2, name: 'Jane Smith', role: 'UI/UX Designer', college: 'COEP Pune', gpa: '3.9', branch: 'Information Technology' },
    { id: 3, name: 'Bob Johnson', role: 'Full Stack Developer', college: 'VIT Pune', gpa: '3.5', branch: 'Computer Engineering' },
    { id: 4, name: 'Alice Williams', role: 'Data Scientist', college: 'PICT Pune', gpa: '4.0', branch: 'E&TC' },
    { id: 5, name: 'Charlie Brown', role: 'ML Engineer', college: 'MES Pune', gpa: '3.7', branch: 'CSE - ai&ml' },
  ];

  const branches = ['Computer Engineering', 'CSE - ai&ml', 'Information Technology', 'E&TC'];

  const filteredStudents = students.filter(student => {
    const matchesFilter = activeFilter === 'All' || student.branch === activeFilter;
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          student.branch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Students Data</h2>
          <p className="text-mistral-black/60 font-medium">View and manage student profiles and academic records.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 h-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search students, roles or branches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/20"
            />
          </div>

          {/* Filter Bar */}
          <div className="relative w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full md:w-auto px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter: <span className="text-mistral-orange">{activeFilter}</span>
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-visible"
                >
                  <div className="py-1">
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsBranchSubMenuOpen(true)}
                      onMouseLeave={() => setIsBranchSubMenuOpen(false)}
                    >
                      <button
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex justify-between items-center ${
                          branches.includes(activeFilter) ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                        }`}
                      >
                        Branch
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isBranchSubMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute right-full top-0 mr-1 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl"
                          >
                            {branches.map((branch) => (
                              <button
                                key={branch}
                                onClick={() => {
                                  setActiveFilter(branch);
                                  setIsFilterOpen(false);
                                  setIsBranchSubMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                                  activeFilter === branch ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                                }`}
                              >
                                {branch}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      onClick={() => {
                        setActiveFilter('All');
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:bg-mistral-orange hover:text-white transition-colors"
                    >
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
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-ivory border border-mistral-black/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-mistral-orange transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-cream border border-mistral-black/10 flex items-center justify-center font-bold text-xl uppercase text-mistral-black/40">
                  {student.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold uppercase tracking-tight">{student.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-mistral-orange uppercase tracking-widest">{student.role}</span>
                    <span className="text-[10px] text-mistral-black/40 uppercase font-bold tracking-tighter">[{student.branch}]</span>
                  </div>
                  <span className="text-xs text-mistral-black/60 mt-1">{student.college} • GPA: {student.gpa}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-grow md:flex-grow-0 flex gap-2">
                  <button className="flex-1 md:flex-none px-4 py-2 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-colors">
                    View Profile
                  </button>
                  <button className="p-2 border border-mistral-black/10 hover:bg-brand-yellow transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-brand-ivory border border-dashed border-mistral-black/20">
            <p className="text-mistral-black/40 font-bold uppercase tracking-widest">No students found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsData;
