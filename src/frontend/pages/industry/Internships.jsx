import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../backend/auth/AuthContext';
import { supabase } from '../../../backend/services/supabaseClient';
import { SearchBar, PageHeader, StatusBadge, EmptyState } from '../../../frontend/components';
import FilterDropdown from '../../../frontend/components/FilterDropdown';
import Modal from '../../../frontend/components/Modal';
import ConfirmModal from '../../../frontend/components/ConfirmModal';

const categories = ['Software', 'Design', 'Data Science', 'Cloud'];
const statuses = ['Active', 'Closed'];

const BLANK_FORM = { 
  title: '', location: '', category: 'Software', status: 'Active',
  stipend: '', duration: '', deadline: '', about_company: '',
  role_description: '', requirements: '', skills: ''
};

const IndustryInternships = () => {
  const { user } = useAuth();
  const myCompany = user?.company || 'My Company';

  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [form, setForm] = useState(BLANK_FORM);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => { fetchInternships(); }, []);

  const fetchInternships = async () => {
    setLoading(true);
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (!currentUser) return;
      const { data, error } = await supabase
        .from('internships').select('*')
        .eq('created_by', currentUser.id)
        .order('created_at', { ascending: false });
      if (error) throw error;
      setInternships(data || []);
    } catch (error) { console.error('Error fetching internships:', error); }
    finally { setLoading(false); }
  };

  const filtered = internships.filter(job => {
    const matchesFilter = activeFilter === 'All' || job.type === activeFilter || job.status === activeFilter;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openAdd = () => { setEditingJob(null); setForm(BLANK_FORM); setIsModalOpen(true); };
  const openEdit = (job) => { 
    setEditingJob(job); 
    setForm({ title: job.title, location: job.location, category: job.type, status: job.status,
      stipend: job.stipend, duration: job.duration, deadline: job.deadline,
      about_company: job.about_company, role_description: job.role_description,
      requirements: (job.requirements || []).join('\n'), skills: (job.skills || []).join(', ') }); 
    setIsModalOpen(true); 
  };
  const closeModal = () => { setIsModalOpen(false); setEditingJob(null); setForm(BLANK_FORM); };

  const handleSave = async () => {
    if (!form.title.trim() || !form.location.trim()) return;
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (!currentUser) return;
      const internshipData = {
        title: form.title, company: myCompany, location: form.location, type: form.category,
        status: form.status, stipend: form.stipend, duration: form.duration, deadline: form.deadline,
        about_company: form.about_company, role_description: form.role_description,
        requirements: form.requirements.split('\n').filter(r => r.trim()),
        skills: form.skills.split(',').map(s => s.trim()).filter(s => s),
        created_by: currentUser.id, approval_status: 'pending'
      };
      if (editingJob) {
        const { error } = await supabase.from('internships').update(internshipData).eq('id', editingJob.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('internships').insert([internshipData]);
        if (error) throw error;
      }
      fetchInternships();
      closeModal();
    } catch (error) {
      console.error('Failed to save internship:', error);
      alert('Failed to save internship. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('internships').delete().eq('id', id);
      if (error) throw error;
      fetchInternships();
      setDeleteConfirmId(null);
    } catch (error) {
      console.error('Failed to delete internship:', error);
      alert('Failed to delete internship.');
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="Manage Internships"
        subtitle={<>Showing listings for <span className="text-mistral-orange font-bold">{myCompany}</span>. You can add, edit, or remove your own listings.</>}
      >
        <SearchBar value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search your listings..." />
        <FilterDropdown
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          onClose={() => setIsFilterOpen(false)}
          triggerLabel={<>Filter: <span className="text-mistral-orange">{activeFilter}</span></>}
        >
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
        </FilterDropdown>
      </PageHeader>

      {/* Table */}
      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-mistral-black/5">
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Role</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Category</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Location</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Status</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Approval</th>
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
                  <StatusBadge status={job.type} baseClassName="text-[10px] uppercase font-bold px-2 py-1" />
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <span className="text-xs font-medium">{job.location}</span>
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <StatusBadge status={job.status} style="inline" />
                </td>
                <td className="p-4 border-b border-mistral-black/5">
                  <StatusBadge status={job.approval_status || 'pending'} />
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
              <EmptyState message="No listings found" colSpan={5} />
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
      <Modal isOpen={isModalOpen} onClose={closeModal} maxWidth="max-w-xl" panelClassName="relative w-full bg-brand-ivory rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="h-1.5 bg-gradient-to-r from-mistral-orange to-brand-yellow" />
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading font-bold text-xl text-mistral-black tracking-tight uppercase">
              {editingJob ? 'Edit Listing' : 'New Listing'}
            </h3>
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
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Stipend <span className="text-red-500 font-bold">*</span></label>
                <input type="text" value={form.stipend} onChange={e => setForm(f => ({ ...f, stipend: e.target.value }))}
                  placeholder="e.g. Rs. 15,000 /month"
                  className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Duration <span className="text-red-500 font-bold">*</span></label>
                <input type="text" value={form.duration} onChange={e => setForm(f => ({ ...f, duration: e.target.value }))}
                  placeholder="e.g. 6 Months"
                  className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Application Deadline <span className="text-red-500 font-bold">*</span></label>
              <input type="date" value={form.deadline} onChange={e => setForm(f => ({ ...f, deadline: e.target.value }))}
                className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
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
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">About Company</label>
              <textarea value={form.about_company} onChange={e => setForm(f => ({ ...f, about_company: e.target.value }))}
                rows="3" className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all resize-none" />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Role Description</label>
              <textarea value={form.role_description} onChange={e => setForm(f => ({ ...f, role_description: e.target.value }))}
                rows="3" className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all resize-none" />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Requirements (one per line)</label>
              <textarea value={form.requirements} onChange={e => setForm(f => ({ ...f, requirements: e.target.value }))}
                rows="3" className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all resize-none" />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50 block mb-1.5">Skills (comma separated)</label>
              <input type="text" value={form.skills} onChange={e => setForm(f => ({ ...f, skills: e.target.value }))}
                placeholder="React, Node.js, SQL"
                className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button onClick={closeModal}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-mistral-black/50 hover:text-mistral-black transition-colors">Cancel</button>
            <button onClick={handleSave}
              className="px-8 py-2.5 bg-mistral-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-black transition-colors shadow-md">
              {editingJob ? 'Save Changes' : 'Add Listing'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirm Modal */}
      <ConfirmModal
        isOpen={!!deleteConfirmId}
        onClose={() => setDeleteConfirmId(null)}
        onConfirm={() => handleDelete(deleteConfirmId)}
        title="Delete Listing?"
        message="This action cannot be undone. The internship listing will be permanently removed."
        confirmLabel="Yes, Delete"
        iconType="delete"
      />
    </div>
  );
};

export default IndustryInternships;
