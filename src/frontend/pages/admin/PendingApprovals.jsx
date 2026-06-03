import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../../backend/services/supabaseClient';
import { SearchBar, PageHeader, StatCard, StatusBadge, ToastNotification } from '../../../frontend/components';
import FilterDropdown from '../../../frontend/components/FilterDropdown';
import Modal from '../../../frontend/components/Modal';

const PendingApprovals = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchApprovals(); }, []);

  const fetchApprovals = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('industry_registrations').select('*')
      .order('created_at', { ascending: false });
    if (error) console.error('Error fetching registrations:', error);
    else setApprovals(data || []);
    setLoading(false);
  };

  const handleApprove = async (id) => {
    const { error } = await supabase
      .from('industry_registrations').update({ status: 'Approved' }).eq('id', id);
    if (error) { console.error('Error approving registration:', error); alert('Failed to approve registration'); }
    else { setStatusMessage('Registration approved successfully.'); fetchApprovals(); setSelectedRegistration(null); }
  };

  const handleReject = async (id) => {
    const { error } = await supabase
      .from('industry_registrations').update({ status: 'Rejected' }).eq('id', id);
    if (error) { console.error('Error rejecting registration:', error); alert('Failed to reject registration'); }
    else { setStatusMessage('Registration rejected successfully.'); fetchApprovals(); setSelectedRegistration(null); }
  };

  const filteredApprovals = approvals.filter(app => {
    const matchesFilter = activeFilter === 'All' ? true : app.status === activeFilter;
    const matchesSearch = app.company_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.industry_type?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Calculate average days from submission to now
  const calculateAvgDays = () => {
    if (approvals.length === 0) return 'N/A';
    const validTimestamps = approvals
      .map(p => p.createdAt || p.submittedAt)
      .filter(ts => ts && !isNaN(Date.parse(ts)))
      .map(ts => (Date.now() - Date.parse(ts)) / (1000 * 60 * 60 * 24));
    if (validTimestamps.length === 0) return '-';
    const avg = validTimestamps.reduce((a, b) => a + b, 0) / validTimestamps.length;
    return avg.toFixed(1);
  };

  const thisWeekCount = approvals.filter(p => {
    const ts = p.createdAt || p.submittedAt;
    if (!ts || isNaN(Date.parse(ts))) return false;
    return Date.parse(ts) > Date.now() - 7 * 24 * 60 * 60 * 1000;
  }).length;

  return (
    <div className="space-y-8">
      <PageHeader title="Pending Approvals" subtitle="Review and manage industry partner registration requests.">
        <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search companies or emails..." wrapperClassName="relative w-full md:w-80 group" />
        <FilterDropdown
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          onClose={() => setIsFilterOpen(false)}
          triggerLabel={<>Filter: <span className="text-mistral-orange">{activeFilter}</span></>}
        >
          {['All','Pending','Under Review','Shortlisted'].map(f => (
            <button key={f} onClick={() => { setActiveFilter(f); setIsFilterOpen(false); }}
              className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${activeFilter === f ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>{f}</button>
          ))}
          <button onClick={() => { setActiveFilter('All'); setIsFilterOpen(false); }}
            className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:bg-mistral-orange hover:text-white transition-colors border-t border-mistral-black/5">Clear Filters</button>
        </FilterDropdown>
      </PageHeader>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Pending" value={loading ? '...' : approvals.length} />
        <StatCard label="This Week" value={loading ? '...' : thisWeekCount} />
        <StatCard label="Companies" value={loading ? '...' : new Set(approvals.map(p => p.company_name)).size} />
        <StatCard label="Avg. Days" value={loading ? '...' : calculateAvgDays()} />
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-mistral-black/5">
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Company</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Industry Type</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Email</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Status</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApprovals.length > 0 ? (
              filteredApprovals.map((app) => (
                <motion.tr key={app.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="group hover:bg-mistral-orange/5 transition-colors">
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className="font-bold text-sm uppercase tracking-tight">{app.company_name}</span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <StatusBadge status={app.industry_type} baseClassName="text-[10px] uppercase font-bold px-2 py-1" />
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className="text-xs font-medium">{app.email}</span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <StatusBadge status={app.status || 'Pending'} />
                  </td>
                  <td className="p-4 border-b border-mistral-black/5 text-right">
                    <div className="flex justify-end gap-3">
                      <button onClick={() => setSelectedRegistration(app)} aria-label="View registration" className="p-2 hover:bg-mistral-black hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      </button>
                      <button onClick={() => handleApprove(app.id)} aria-label="Approve registration" className="p-2 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      </button>
                      <button onClick={() => handleReject(app.id)} aria-label="Reject registration" className="p-2 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr><td colSpan="5" className="p-20 text-center"><p className="text-mistral-black/40 font-bold uppercase tracking-widest">No pending registrations found</p></td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Registration Detail Modal */}
      <Modal isOpen={!!selectedRegistration} onClose={() => setSelectedRegistration(null)}
        panelClassName="relative w-full bg-brand-ivory shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        showCloseButton={false}>
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-mistral-orange mb-2 block">Registration Request</span>
                <h3 className="text-3xl font-heading font-bold uppercase text-mistral-black">{selectedRegistration?.company_name}</h3>
              </div>
              <button onClick={() => setSelectedRegistration(null)} className="p-2 hover:bg-mistral-black/5 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <p className="text-[8px] font-bold uppercase tracking-widest text-mistral-black/40">Industry Type</p>
                <p className="font-bold text-mistral-black uppercase tracking-tight">{selectedRegistration?.industry_type}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] font-bold uppercase tracking-widest text-mistral-black/40">Email Address</p>
                <p className="font-bold text-mistral-black">{selectedRegistration?.email}</p>
              </div>
            </div>
            <div className="bg-brand-cream/30 p-6 border border-mistral-black/5 mb-8">
              <p className="text-[8px] font-bold uppercase tracking-widest text-mistral-black/40 mb-3">Registration Details</p>
              <p className="text-sm text-mistral-black/70 leading-relaxed italic">"Industry partner registration request submitted via the portal. Background verification pending."</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => handleApprove(selectedRegistration?.id)}
                className="flex-1 py-4 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300">Approve Partner</button>
              <button onClick={() => handleReject(selectedRegistration?.id)}
                className="flex-1 py-4 border border-mistral-black/10 text-mistral-black text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">Reject Request</button>
            </div>
          </div>
      </Modal>

      <ToastNotification message={statusMessage} onDismiss={() => setStatusMessage('')} duration={4000} />
    </div>
  );
};

export default PendingApprovals;
