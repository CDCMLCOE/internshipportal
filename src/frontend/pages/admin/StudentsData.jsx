import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StudentProfileReviewModal from '../../../frontend/components/StudentProfileReviewModal';
import { supabase } from '../../../backend/services/supabaseClient';
import { SearchBar, PageHeader } from '../../../frontend/components';
import FilterDropdown from '../../../frontend/components/FilterDropdown';
import { BRANCHES, getBranchLabel } from '../../../backend/constants';

const StudentsData = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBranchSubMenuOpen, setIsBranchSubMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const branches = BRANCHES.map(b => ({ value: b, label: getBranchLabel(b) }));

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles').select('*')
        .not('role', 'eq', 'admin').not('role', 'eq', 'superadmin')
        .order('prn_no', { ascending: true });
      if (error) console.error('Error fetching students:', error);
      else setStudents(data || []);
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
    if (currentIndex < filteredStudents.length - 1) setSelectedStudent(filteredStudents[currentIndex + 1]);
  };
  const handlePrev = () => {
    const currentIndex = filteredStudents.findIndex(s => s.id === selectedStudent?.id);
    if (currentIndex > 0) setSelectedStudent(filteredStudents[currentIndex - 1]);
  };

  return (
    <div className="space-y-8">
      <PageHeader title="Students Data" subtitle={<>View and manage student profiles and academic records.{!loading && <span className="text-mistral-orange font-bold"> {filteredStudents.length} students</span>}</>}>
        <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by name, branch, email or PRN..." />
        <FilterDropdown
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          onClose={() => setIsFilterOpen(false)}
          triggerLabel={<>Branch: <span className="text-mistral-orange">{activeFilter === 'All' ? 'All' : branches.find(b => b.value === activeFilter)?.label || activeFilter}</span></>}
          panelClassName="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-visible"
        >
          {branches.map(b => (
            <button key={b.value} onClick={() => { setActiveFilter(b.value); setIsFilterOpen(false); }}
              className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${activeFilter === b.value ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
              {b.label}
            </button>
          ))}
          <button onClick={() => { setActiveFilter('All'); setIsFilterOpen(false); }}
            className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:bg-mistral-orange hover:text-white transition-colors border-t border-mistral-black/5">Clear Filters</button>
        </FilterDropdown>
      </PageHeader>

      {/* Students Table */}
      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-mistral-black/5">
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Name</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">PRN No</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Branch</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Email</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? filteredStudents.map((student, i) => (
              <motion.tr key={student.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="border-b border-mistral-black/5 hover:bg-brand-cream/50 transition-colors">
                <td className="p-4"><span className="font-bold text-sm">{student.name}</span></td>
                <td className="p-4"><span className="text-xs font-medium">{student.prn_no || 'N/A'}</span></td>
                <td className="p-4"><span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-yellow/30 text-mistral-black">{student.branch}</span></td>
                <td className="p-4"><span className="text-xs text-mistral-black/60">{student.email}</span></td>
                <td className="p-4">
                  <button onClick={() => { setSelectedStudent(student); setIsProfileModalOpen(true); }}
                    className="text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:text-mistral-black transition-colors">View Profile</button>
                </td>
              </motion.tr>
            )) : (
              <tr><td colSpan="5" className="p-20 text-center"><p className="text-mistral-black/40 font-bold uppercase tracking-widest">No students found</p></td></tr>
            )}
          </tbody>
        </table>
      </div>

      <StudentProfileReviewModal
        isOpen={isProfileModalOpen}
        onClose={() => { setIsProfileModalOpen(false); setSelectedStudent(null); }}
        student={selectedStudent}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={filteredStudents.indexOf(selectedStudent) < filteredStudents.length - 1}
        hasPrev={filteredStudents.indexOf(selectedStudent) > 0}
      />
    </div>
  );
};

export default StudentsData;
