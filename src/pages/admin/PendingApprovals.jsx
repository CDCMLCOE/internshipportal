import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPendingApprovals, setPendingApprovals as updateStorage, pendingApprovalsEventName } from '../../services/pendingApprovals';

const PendingApprovals = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    const load = () => setApprovals(getPendingApprovals());
    load();
    const handleUpdate = () => load();
    window.addEventListener(pendingApprovalsEventName, handleUpdate);
    return () => window.removeEventListener(pendingApprovalsEventName, handleUpdate);
  }, []);

  const handleApprove = (id) => {
    const current = getPendingApprovals();
    const approved = current.find(p => p.id === id);
    if (!approved) return;
    const updated = current.filter(p => p.id !== id);
    setApprovals(updated);
    updateStorage(updated);
    setStatusMessage(`Registration for "${approved.companyName}" approved.`);
    setSelectedRegistration(null);
  };

  const handleReject = (id) => {
    const current = getPendingApprovals();
    const rejected = current.find(p => p.id === id);
    if (!rejected) return;
    const updated = current.filter(p => p.id !== id);
    setApprovals(updated);
    updateStorage(updated);
    setStatusMessage(`Registration for "${rejected.companyName}" rejected.`);
    setSelectedRegistration(null);
  };



  const filteredApprovals = approvals.filter(app => {
    const matchesFilter = activeFilter === 'All' ? true : app.status === activeFilter;
    const matchesSearch = app.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.industryType?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Under Review': return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      case 'Shortlisted': return 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
      default: return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    }
  };

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

  // Calculate "This Week" count using valid timestamp field
  const thisWeekCount = approvals.filter(p => {
    const ts = p.createdAt || p.submittedAt;
    if (!ts || isNaN(Date.parse(ts))) return false;
    return Date.parse(ts) > Date.now() - 7 * 24 * 60 * 60 * 1000;
  }).length;

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-mistral-black leading-none">Pending Approvals</h2>
          <p className="text-mistral-black/60 font-medium mt-2">Review and manage industry partner registration requests.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-4 h-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input type="text" placeholder="Search companies or emails..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/20" />
          </div>
          <div className="relative">
            <button onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
              Filter: <span className="text-mistral-orange">{activeFilter}</span>
            </button>
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50">
                  <div className="flex justify-end p-2 border-b border-mistral-black/5 bg-brand-cream/20">
                    <button onClick={() => setIsFilterOpen(false)} className="p-1 hover:bg-mistral-black/5 rounded-full transition-colors text-mistral-black/40 hover:text-mistral-orange">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  {['All','Pending','Under Review','Shortlisted'].map(f => (
                    <button key={f} onClick={() => { setActiveFilter(f); setIsFilterOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${activeFilter === f ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'}`}>{f}</button>
                  ))}
                  <button onClick={() => { setActiveFilter('All'); setIsFilterOpen(false); }}
                    className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:bg-mistral-orange hover:text-white transition-colors border-t border-mistral-black/5">Clear Filters</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-ivory border border-mistral-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Total Pending</p><p className="text-3xl font-heading font-bold text-mistral-black">{approvals.length}</p></div>
        <div className="bg-brand-ivory border border-mistral-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">This Week</p><p className="text-3xl font-heading font-bold text-mistral-black">{thisWeekCount}</p></div>
        <div className="bg-brand-ivory border border-mistral-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Companies</p><p className="text-3xl font-heading font-bold text-mistral-black">{new Set(approvals.map(p => p.companyName)).size}</p></div>
        <div className="bg-brand-ivory border border-mistral-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Avg. Days</p><p className="text-3xl font-heading font-bold text-mistral-black">{calculateAvgDays()}</p></div>
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
                    <span className="font-bold text-sm uppercase tracking-tight">{app.companyName}</span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-yellow/30 text-mistral-black">{app.industryType}</span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className="text-xs font-medium">{app.email}</span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 ${getStatusStyle(app.status)}`}>{app.status || 'Pending'}</span>
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

      <AnimatePresence>
        {selectedRegistration && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mistral-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-brand-ivory w-full max-w-2xl border border-mistral-black/10 shadow-2xl relative overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-mistral-orange mb-2 block">Registration Request</span>
                    <h3 className="text-3xl font-heading font-bold uppercase text-mistral-black">{selectedRegistration.companyName}</h3>
                  </div>
                  <button onClick={() => setSelectedRegistration(null)} className="p-2 hover:bg-mistral-black/5 transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                </div>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="space-y-1">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-mistral-black/40">Industry Type</p>
                    <p className="font-bold text-mistral-black uppercase tracking-tight">{selectedRegistration.industryType}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[8px] font-bold uppercase tracking-widest text-mistral-black/40">Email Address</p>
                    <p className="font-bold text-mistral-black">{selectedRegistration.email}</p>
                  </div>
                </div>

                <div className="bg-brand-cream/30 p-6 border border-mistral-black/5 mb-8">
                  <p className="text-[8px] font-bold uppercase tracking-widest text-mistral-black/40 mb-3">Registration Details</p>
                  <p className="text-sm text-mistral-black/70 leading-relaxed italic">"Industry partner registration request submitted via the portal. Background verification pending."</p>
                </div>

                <div className="flex gap-4">
                  <button onClick={() => handleApprove(selectedRegistration.id)}
                    className="flex-1 py-4 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300">Approve Partner</button>
                  <button onClick={() => handleReject(selectedRegistration.id)}
                    className="flex-1 py-4 border border-mistral-black/10 text-mistral-black text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300">Reject Request</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {statusMessage && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 bg-mistral-black text-white px-8 py-4 border border-white/10 shadow-2xl z-50 flex items-center gap-4">
          <div className="w-2 h-2 bg-mistral-orange animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-widest">{statusMessage}</p>
          <button onClick={() => setStatusMessage('')} className="ml-4 p-1 hover:text-mistral-orange transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PendingApprovals;
