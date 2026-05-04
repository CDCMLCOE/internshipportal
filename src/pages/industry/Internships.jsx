import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../auth/AuthContext';
import { addPendingApproval } from '../../services/pendingApprovals';

// All internships across companies (simulates a shared DB)
const ALL_INTERNSHIPS = [
  { id: 1, title: 'Full Stack Developer', company: 'Google', location: 'Mountain View, CA', category: 'Software', status: 'Active' },
  { id: 2, title: 'UI/UX Designer', company: 'Microsoft', location: 'Redmond, WA', category: 'Design', status: 'Active' },
  { id: 3, title: 'Data Scientist', company: 'Amazon', location: 'Seattle, WA', category: 'Data Science', status: 'Closed' },
  { id: 4, title: 'Cloud Engineer', company: 'Infosys', location: 'Bangalore, India', category: 'Cloud', status: 'Active' },
  { id: 5, title: 'Android Developer', company: 'Google', location: 'New York, NY', category: 'Software', status: 'Active' },
  { id: 6, title: 'Data Engineer', company: 'Amazon', location: 'Austin, TX', category: 'Data Science', status: 'Active' },
];

const categories = ['Software', 'Design', 'Data Science', 'Cloud'];
const statuses = ['Active', 'Closed'];

const BLANK_FORM = { title: '', location: '', category: 'Software', status: 'Active' };

const IndustryInternships = () => {
  const { user } = useAuth();
  const myCompany = user?.company || '';

  const [internships, setInternships] = useState(
    ALL_INTERNSHIPS.filter(j => j.company === myCompany)
  );
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null); // null = add mode
  const [form, setForm] = useState(BLANK_FORM);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const filtered = internships.filter(job => {
    const matchesFilter = activeFilter === 'All' || job.category === activeFilter || job.status === activeFilter;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openAdd = () => { setEditingJob(null); setForm(BLANK_FORM); setIsModalOpen(true); };
  const openEdit = (job) => { setEditingJob(job); setForm({ title: job.title, location: job.location, category: job.category, status: job.status }); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setEditingJob(null); setForm(BLANK_FORM); };

  const handleSave = () => {
    if (!form.title.trim() || !form.location.trim()) return;
    if (editingJob) {
      setInternships(prev => prev.map(j => j.id === editingJob.id ? { ...j, ...form } : j));
    } else {
      const newJob = { 
        id: Date.now(), 
        company: myCompany, 
        ...form, 
        status: 'Pending Admin Approval' // Default status for new industry listings
      };
      
      // Update local state for immediate feedback (optional, or just wait for approval)
      setInternships(prev => [...prev, newJob]);

      addPendingApproval(newJob);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setInternships(prev => prev.filter(j => j.id !== id));
    setDeleteConfirmId(null);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Manage Internships</h2>
          <p className="text-mistral-black/60 font-medium mt-1">
            Showing listings for <span className="text-mistral-orange font-bold">{myCompany}</span>. You can add, edit, or remove your own listings.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full md:w-72 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" placeholder="Search your listings..." value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/20" />
          </div>

          <div className="relative w-full md:w-auto">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full md:w-auto px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter: <span className="text-mistral-orange">{activeFilter}</span>
            </button>
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50">
                  <div className="flex justify-end p-2 border-b border-mistral-black/5 bg-brand-cream/20">
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1 hover:bg-mistral-black/5 rounded-full transition-colors text-mistral-black/40 hover:text-mistral-orange"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  <div className="py-1">
                    <div className="px-4 py-2 text-[8px] uppercase tracking-widest font-bold text-mistral-black/40 border-b border-mistral-black/5">Categories</div>
                    {categories.map(cat => (
                      <button key={cat} onClick={() => { setActiveFilter(cat); setIsFilterOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 ${activeFilter === cat ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
                        {cat}
                      </button>
                    ))}
                    <div className="px-4 py-2 text-[8px] uppercase tracking-widest font-bold text-mistral-black/40 border-b border-mistral-black/5 bg-brand-cream/20">Status</div>
                    {statuses.map(s => (
                      <button key={s} onClick={() => { setActiveFilter(s); setIsFilterOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 ${activeFilter === s ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>
                        {s}
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

      {/* Table */}
      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-mistral-black/5">
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Role</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Category</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Location</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Status</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? filtered.map(job => (
              <motion.tr key={job.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-brand-cream/50 transition-colors">
                <td className="p-4 border-b border-mistral-black/5">
                  <span className="font-bold text-sm uppercase tracking-tight">{job.title}</span>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-yellow/30 text-mistral-black">{job.category}</span>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className="text-xs font-medium">{job.location}</span>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className={`text-[10px] uppercase font-bold ${job.status === 'Active' ? 'text-green-600' : 'text-red-500'}`}>{job.status}</span>
                </td>
                <td className="p-4 border-b border-mistral-black/5 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(job)} title="Edit" className="p-2 hover:bg-mistral-orange hover:text-white transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button onClick={() => setDeleteConfirmId(job.id)} title="Delete" className="p-2 hover:bg-red-600 hover:text-white transition-all duration-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </motion.tr>
            )) : (
              <tr>
                <td colSpan="5" className="p-20 text-center">
                  <p className="text-mistral-black/40 font-bold uppercase tracking-widest">No listings found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Button */}
      <div className="flex justify-end">
        <button onClick={openAdd}
          className="bg-mistral-black text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl flex items-center gap-3 group">
          <span>Add New Listing</span>
          <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm" onClick={closeModal} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-brand-ivory rounded-xl shadow-2xl overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-mistral-orange to-brand-yellow" />
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-xl text-mistral-black tracking-tight uppercase">
                    {editingJob ? 'Edit Listing' : 'New Listing'}
                  </h3>
                  <button onClick={closeModal}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-mistral-black/5 hover:bg-red-100 hover:text-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Role Title <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                      placeholder="e.g. Full Stack Developer"
                      className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Location <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                      placeholder="e.g. Mumbai, India"
                      className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Category</label>
                      <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                        className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all">
                        {categories.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Status</label>
                      <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
                        className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all">
                        {statuses.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-8">
                  <button onClick={closeModal}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-mistral-black/50 hover:text-mistral-black transition-colors">
                    Cancel
                  </button>
                  <button onClick={handleSave}
                    className="px-8 py-2.5 bg-mistral-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-black transition-colors shadow-md">
                    {editingJob ? 'Save Changes' : 'Add Listing'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirm Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm" onClick={() => setDeleteConfirmId(null)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-brand-ivory p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-mistral-black mb-2">Delete Listing?</h3>
              <p className="text-xs text-mistral-black/50 mb-6">This action cannot be undone. The internship listing will be permanently removed.</p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => setDeleteConfirmId(null)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest border border-mistral-black/20 text-mistral-black/60 hover:text-mistral-black transition-colors">
                  Cancel
                </button>
                <button onClick={() => handleDelete(deleteConfirmId)}
                  className="px-5 py-2.5 bg-red-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                  Yes, Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndustryInternships;
