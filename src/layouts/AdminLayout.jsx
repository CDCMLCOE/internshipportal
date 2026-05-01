import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../assets/logo.png';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [pendingInternships, setPendingInternships] = useState([]);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const isActive = (path) => location.pathname === path;

  const loadPending = () => {
    const pending = JSON.parse(localStorage.getItem('pendingApprovals') || '[]');
    setPendingInternships(pending);
  };

  useEffect(() => {
    loadPending();
    
    // Listen for custom event from industry side
    const handleNewPending = () => loadPending();
    window.addEventListener('newPendingInternship', handleNewPending);
    
    // Also poll every 10 seconds just in case across tabs
    const interval = setInterval(loadPending, 10000);
    
    return () => {
      window.removeEventListener('newPendingInternship', handleNewPending);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleApprove = (id) => {
    const jobToApprove = pendingInternships.find(j => j.id === id);
    if (!jobToApprove) return;

    // Remove from pending
    const updatedPending = pendingInternships.filter(j => j.id !== id);
    setPendingInternships(updatedPending);
    localStorage.setItem('pendingApprovals', JSON.stringify(updatedPending));

    // In a real app, you'd add to the main internships list
    // For this demo, we'll just show it was approved
    alert(`Internship "${jobToApprove.title}" from ${jobToApprove.company} has been APPROVED!`);
  };

  const handleReject = (id) => {
    const jobToReject = pendingInternships.find(j => j.id === id);
    if (!jobToReject) return;

    const updatedPending = pendingInternships.filter(j => j.id !== id);
    setPendingInternships(updatedPending);
    localStorage.setItem('pendingApprovals', JSON.stringify(updatedPending));
    
    alert(`Internship "${jobToReject.title}" from ${jobToReject.company} has been REJECTED.`);
  };

  return (
    <div className="min-h-screen bg-brand-cream/30 flex flex-col md:flex-row font-sans text-mistral-black">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-brand-ivory border-r border-mistral-black/10 flex flex-col">
        <div className="h-20 md:h-24 px-6 md:px-8 border-b border-mistral-black/10 flex items-center justify-center md:justify-start">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoUrl} alt="MES MLCOE Logo" className="h-10 md:h-12 object-contain group-hover:opacity-80 transition-opacity" />
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-sm uppercase tracking-wider text-mistral-black leading-tight group-hover:text-mistral-orange transition-colors">MES MLCOE</span>
              <span className="text-[9px] uppercase tracking-widest text-mistral-black/60 font-semibold group-hover:text-mistral-orange transition-colors">Admin Portal</span>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
          <Link to="/admin/dashboard" className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive('/admin/dashboard') || isActive('/admin') ? 'bg-mistral-orange text-white shadow-sm' : 'text-mistral-black hover:bg-brand-yellow/30'}`}>Dashboard</Link>
          <Link to="/admin/internships" className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive('/admin/internships') ? 'bg-mistral-orange text-white shadow-sm' : 'text-mistral-black hover:bg-brand-yellow/30'}`}>Manage Internships</Link>
          <Link to="/admin/applicants" className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive('/admin/applicants') ? 'bg-mistral-orange text-white shadow-sm' : 'text-mistral-black hover:bg-brand-yellow/30'}`}>Applicants</Link>
          <Link to="/admin/students" className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive('/admin/students') ? 'bg-mistral-orange text-white shadow-sm' : 'text-mistral-black hover:bg-brand-yellow/30'}`}>Students Data</Link>
          <Link to="/admin/manage-students" className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive('/admin/manage-students') ? 'bg-mistral-orange text-white shadow-sm' : 'text-mistral-black hover:bg-brand-yellow/30'}`}>Manage Students</Link>
          <Link to="/admin/users" className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive('/admin/users') ? 'bg-mistral-orange text-white shadow-sm' : 'text-mistral-black hover:bg-brand-yellow/30'}`}>User Management</Link>
        </nav>

        <div className="p-4 border-t border-mistral-black/10">
          <button onClick={handleLogout} className="w-full px-4 py-3 text-left uppercase tracking-widest text-xs font-bold text-mistral-black/60 hover:text-mistral-orange hover:bg-mistral-orange/5 transition-all duration-300 flex items-center justify-between">
            <span>Log Out</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 md:h-24 bg-brand-ivory border-b border-mistral-black/10 px-4 md:px-8 flex justify-between items-center z-10 shadow-sm">
          <h1 className="font-heading font-semibold text-xl md:text-2xl uppercase tracking-tight text-mistral-black">Admin Management Control</h1>
          <div className="flex items-center gap-6">
            {/* Inbox Icon */}
            <div className="relative cursor-pointer group" onClick={() => setIsInboxOpen(true)}>
              <svg className="w-6 h-6 text-mistral-black/60 group-hover:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0l-8 4-8-4" />
              </svg>
              {pendingInternships.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                  {pendingInternships.length}
                </span>
              )}
            </div>

            <div className="w-10 h-10 bg-mistral-black rounded-full border border-mistral-black/20 flex items-center justify-center font-bold text-white text-sm uppercase">AD</div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-mesh-pattern">
          <Outlet />
        </div>
      </main>

      {/* Inbox Popup Modal */}
      <AnimatePresence>
        {isInboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm" onClick={() => setIsInboxOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-2xl bg-brand-ivory rounded-xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
              <div className="h-1.5 bg-mistral-orange" />
              <div className="p-6 border-b border-mistral-black/10 flex justify-between items-center">
                <div>
                  <h3 className="font-heading font-bold text-xl text-mistral-black tracking-tight uppercase">Approval Inbox</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Pending Internships from Industry Partners</p>
                </div>
                <button onClick={() => setIsInboxOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-mistral-black/5 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {pendingInternships.length === 0 ? (
                  <div className="text-center py-12 opacity-40">
                    <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <p className="uppercase tracking-widest text-xs font-bold">Inbox is empty</p>
                  </div>
                ) : (
                  pendingInternships.map(job => (
                    <div key={job.id} className="bg-brand-cream/50 border border-mistral-black/10 p-4 rounded-lg flex flex-col md:flex-row justify-between gap-4 group">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm uppercase tracking-tight">{job.title}</span>
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 uppercase rounded">{job.company}</span>
                        </div>
                        <p className="text-xs text-mistral-black/60 font-medium">{job.location} • {job.category}</p>
                        <p className="text-[9px] uppercase font-bold text-mistral-black/30">Submitted: {new Date(job.id).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setSelectedInternship(job)} className="flex-1 md:flex-none px-4 py-2 bg-mistral-black/5 text-mistral-black text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-black/10 transition-colors">View Details</button>
                        <button onClick={() => handleApprove(job.id)} className="flex-1 md:flex-none px-4 py-2 bg-green-600 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-green-700 transition-colors shadow-sm">Approve</button>
                        <button onClick={() => handleReject(job.id)} className="flex-1 md:flex-none px-4 py-2 bg-red-500 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 transition-colors shadow-sm">Reject</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedInternship && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-mistral-black/40 backdrop-blur-sm" onClick={() => setSelectedInternship(null)} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-md bg-brand-ivory rounded-xl shadow-2xl overflow-hidden">
              <div className="h-1.5 bg-blue-600" />
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2 inline-block">{selectedInternship.company}</span>
                    <h3 className="font-heading font-bold text-2xl text-mistral-black tracking-tight uppercase leading-none">{selectedInternship.title}</h3>
                  </div>
                  <button onClick={() => setSelectedInternship(null)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-mistral-black/5 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-mistral-black/30">Location</p>
                    <p className="text-sm font-bold text-mistral-black">{selectedInternship.location}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-mistral-black/30">Category</p>
                    <p className="text-sm font-bold text-mistral-black">{selectedInternship.category}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-mistral-black/30">Status</p>
                    <p className="text-sm font-bold text-green-600">{selectedInternship.status}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-mistral-black/30">ID</p>
                    <p className="text-sm font-bold text-mistral-black">#{selectedInternship.id}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-mistral-black/5 flex gap-3">
                  <button onClick={() => { handleApprove(selectedInternship.id); setSelectedInternship(null); }} className="flex-1 py-3 bg-green-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-colors shadow-lg">Approve Internship</button>
                  <button onClick={() => { handleReject(selectedInternship.id); setSelectedInternship(null); }} className="px-6 py-3 border border-red-500 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-50 transition-colors">Reject</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
