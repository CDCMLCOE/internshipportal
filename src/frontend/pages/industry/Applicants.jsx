import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StudentProfileReviewModal from '../../../frontend/components/StudentProfileReviewModal';
import { supabase } from '../../../backend/services/supabaseClient';
import { SearchBar, PageHeader, StatusBadge } from '../../../frontend/components';
import FilterDropdown from '../../../frontend/components/FilterDropdown';

const IndustryApplicants = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isBranchSubMenuOpen, setIsBranchSubMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  const statusFilters = ['Shortlisted', 'Pending Review', 'Rejected'];
  const branches = ['Computer Engineering', 'AI & ML', 'Information Technology', 'Electronics & Telecommunication'];

  useEffect(() => { fetchApplicants(); }, []);

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data: myInternships } = await supabase.from('internships').select('id').eq('created_by', user.id);
      const myIds = myInternships?.map(i => i.id) || [];
      const { data, error } = await supabase
        .from('applications').select('*, profiles!student_id (*), internships!internship_id (title)')
        .in('internship_id', myIds).order('created_at', { ascending: false });
      if (error) throw error;
      const formatted = (data || []).map(app => ({
        id: app.id, name: app.profiles?.name || 'Unknown', role: app.internships?.title || 'Unknown',
        college: app.profiles?.college || 'N/A', prn: app.profiles?.prn_no || 'N/A', gpa: 'N/A',
        status: app.status, branch: app.profiles?.branch || 'N/A', student_id: app.student_id
      }));
      setApplicants(formatted);
    } catch (error) { console.error('Error fetching applicants:', error); }
    finally { setLoading(false); }
  };

  const filteredApplicants = applicants.filter(app => {
    const matchesFilter = activeFilter === 'All'
      ? true : branches.includes(activeFilter) ? app.branch === activeFilter : app.status === activeFilter;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.branch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  }).sort((a, b) => (a.prn || '').localeCompare(b.prn || '', undefined, { numeric: true }));

  const handleNext = () => {
    const index = filteredApplicants.findIndex(a => a.id === selectedStudent?.id);
    if (index < filteredApplicants.length - 1) setSelectedStudent(filteredApplicants[index + 1]);
  };
  const handlePrev = () => {
    const index = filteredApplicants.findIndex(a => a.id === selectedStudent?.id);
    if (index > 0) setSelectedStudent(filteredApplicants[index - 1]);
  };

  return (
    <div className="space-y-8">
      <PageHeader title="Applicant Tracking" subtitle="Review and manage student applications for your internship listings.">
        <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search applicants, roles or branches..." />
        <FilterDropdown
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          onClose={() => setIsFilterOpen(false)}
          triggerLabel={<>Filter: <span className="text-mistral-orange">{activeFilter}</span></>}
          panelClassName="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-visible"
        >
          <div className="relative"
            onMouseEnter={() => setIsBranchSubMenuOpen(true)}
            onMouseLeave={() => setIsBranchSubMenuOpen(false)}>
            <button className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex justify-between items-center ${branches.includes(activeFilter) ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
              Branch <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
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
        </FilterDropdown>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6">
        {loading ? (
          <div className="text-center py-20 bg-brand-ivory border border-dashed border-mistral-black/20">
            <p className="text-mistral-black/40 font-bold uppercase tracking-widest">Loading applicants...</p>
          </div>
        ) : filteredApplicants.length > 0 ? (
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
                    <span className="text-xs text-mistral-black/60">{applicant.role}</span>
                    <span className="text-[8px] text-mistral-black/30">|</span>
                    <span className="text-xs text-mistral-black/60">{applicant.college}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <StatusBadge status={applicant.status} />
                <button onClick={() => { setSelectedStudent(applicant); setIsProfileModalOpen(true); }}
                  className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-mistral-black/10 text-mistral-black hover:bg-mistral-black hover:text-white transition-all duration-300">
                  View Profile
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20 bg-brand-ivory border border-dashed border-mistral-black/20">
            <p className="text-mistral-black/40 font-bold uppercase tracking-widest">No applicants found</p>
            <p className="text-mistral-black/30 text-xs mt-2 uppercase tracking-wider">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <StudentProfileReviewModal
        isOpen={isProfileModalOpen}
        onClose={() => { setIsProfileModalOpen(false); setSelectedStudent(null); }}
        student={selectedStudent}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={filteredApplicants.indexOf(selectedStudent) < filteredApplicants.length - 1}
        hasPrev={filteredApplicants.indexOf(selectedStudent) > 0}
      />
    </div>
  );
};

export default IndustryApplicants;
