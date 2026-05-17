import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StudentProfileReviewModal from '../../../frontend/components/StudentProfileReviewModal';
import { supabase } from '../../../backend/services/supabaseClient';

const StudentsData = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBranchSubMenuOpen, setIsBranchSubMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exact values from DB
  const branches = [
    { value: 'Computer_Engineering', label: 'Computer Engineering' },
    { value: 'AI_ML', label: 'AI & ML' },
    { value: 'Information_Technology', label: 'Information Technology' },
    { value: 'Electronics_and_Telecommunication_Engineering', label: 'E&TC' },
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .not('role', 'eq', 'admin')
        .not('role', 'eq', 'superadmin')
        .order('prn_no', { ascending: true });

      if (error) {
        console.error('Error fetching students:', error);
      } else {
        setStudents(data || []);
      }
      setLoading(false);
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(student => {
    const matchesFilter = activeFilter === 'All' || student.branch === activeFilter;
    const matchesSearch =
      (student.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.branch || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (student.prn_no || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleNext = () => {
    const currentIndex = filteredStudents.findIndex(s => s.id === selectedStudent?.id);
    if (currentIndex < filteredStudents.length - 1) {
      setSelectedStudent(filteredStudents[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = filteredStudents.findIndex(s => s.id === selectedStudent?.id);
    if (currentIndex > 0) {
      setSelectedStudent(filteredStudents[currentIndex - 1]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Students Data</h2>
          <p className="text-mistral-black/60 font-medium">
            View and manage student profiles and academic records.{' '}
            {!loading && (
              <span className="text-mistral-orange font-bold">{filteredStudents.length} students</span>
            )}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name, branch, email or PRN..."
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
              Filter: <span className="text-mistral-orange">{activeFilter === 'All' ? 'All' : branches.find(b => b.value === activeFilter)?.label || activeFilter}</span>
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
                                key={branch.value}
                                onClick={() => {
                                  setActiveFilter(branch.value);
                                  setIsFilterOpen(false);
                                  setIsBranchSubMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                                  activeFilter === branch.value ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                                }`}
                              >
                                {branch.label}
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
        {loading ? (
          <div className="text-center py-20 bg-brand-ivory border border-dashed border-mistral-black/20">
            <p className="text-mistral-black/40 font-bold uppercase tracking-widest animate-pulse">Loading students from database...</p>
          </div>
        ) : filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: Math.min(index * 0.03, 0.5) }}
              className="bg-brand-ivory border border-mistral-black/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-mistral-orange transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-brand-cream border border-mistral-black/10 flex items-center justify-center font-bold text-xl uppercase text-mistral-black/40">
                  {(student.name || '?').split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold uppercase tracking-tight">{student.name}</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-mistral-orange uppercase tracking-widest">{student.preferred_role || 'Student'}</span>
                    <span className="text-[10px] text-mistral-black/40 uppercase font-bold tracking-tighter">[{branches.find(b => b.value === student.branch)?.label || student.branch}]</span>
                  </div>
                  <span className="text-xs text-mistral-black/60 mt-1">
                    {student.college} • PRN: {student.prn_no}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="flex-grow md:flex-grow-0 flex gap-2">
                  <button 
                    onClick={() => {
                      setSelectedStudent(student);
                      setIsProfileModalOpen(true);
                    }}
                    className="flex-1 md:flex-none px-4 py-2 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-colors"
                  >
                    View Profile
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

      <StudentProfileReviewModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        student={selectedStudent}
        onNext={filteredStudents.findIndex(s => s.id === selectedStudent?.id) < filteredStudents.length - 1 ? handleNext : null}
        onPrev={filteredStudents.findIndex(s => s.id === selectedStudent?.id) > 0 ? handlePrev : null}
      />
    </div>
  );
};

export default StudentsData;
