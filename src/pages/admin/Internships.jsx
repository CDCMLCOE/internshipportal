import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient';

const AdminInternships = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState(location.state?.message || '');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('internships')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching internships:', error);
    } else {
      setInternships(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this internship?')) {
      const { error } = await supabase
        .from('internships')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting internship:', error);
        alert('Failed to delete internship');
      } else {
        fetchInternships();
      }
    }
  };

  const categories = ['Software', 'Design', 'Data Science', 'Cloud'];
  const statuses = ['Active', 'Closed'];

  const filteredInternships = internships.filter(job => {
    const matchesFilter = activeFilter === 'All' || job.category === activeFilter || job.status === activeFilter;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {statusMessage && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 text-xs font-bold uppercase tracking-wide flex items-center justify-between gap-4">
          <span>{statusMessage}</span>
          <button type="button" onClick={() => setStatusMessage('')} className="text-amber-800/60 hover:text-amber-950">
            Dismiss
          </button>
        </div>
      )}

      {/* Header with Integrated Search and Filter */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-mistral-black leading-none">Manage Internships</h2>
          <p className="text-mistral-black/60 font-medium mt-2">Add, edit, or remove internship listings from the portal.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search internships or companies..."
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
                  className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-hidden"
                >
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
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveFilter(cat);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                          activeFilter === cat ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                    
                    <div className="px-4 py-2 text-[8px] uppercase tracking-widest font-bold text-mistral-black/40 border-b border-mistral-black/5 bg-brand-cream/20">Status</div>
                    {statuses.map((status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setActiveFilter(status);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                          activeFilter === status ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                        }`}
                      >
                        {status}
                      </button>
                    ))}

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

      {/* Internship Table */}
      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-mistral-black/5">
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Role & Company</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Category</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Location</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10">Status</th>
              <th className="p-4 uppercase tracking-widest text-[10px] font-bold text-mistral-black/60 border-b border-mistral-black/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInternships.length > 0 ? (
              filteredInternships.map((job) => (
                <motion.tr 
                  key={job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group hover:bg-mistral-orange/5 transition-colors"
                >
                  <td className="p-4 border-b border-mistral-black/5">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm uppercase tracking-tight">{job.title}</span>
                      <span className="text-xs text-mistral-black/60">{job.company}</span>
                    </div>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className="text-[10px] uppercase font-bold px-2 py-1 bg-brand-yellow/30 text-mistral-black">
                      {job.category}
                    </span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className="text-xs font-medium">{job.location}</span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5">
                    <span className={`text-[10px] uppercase font-bold ${job.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="p-4 border-b border-mistral-black/5 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="p-2 hover:bg-mistral-black hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleDelete(job.id)}
                        className="p-2 hover:bg-red-600 hover:text-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-20 text-center">
                   <p className="text-mistral-black/40 font-bold uppercase tracking-widest">No internships found matching your criteria</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Listing Button at Bottom */}
      <div className="flex justify-center md:justify-end">
        <Link 
          to="/admin/internship-access"
          className="bg-mistral-black text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl flex items-center gap-3 group"
        >
          <span>Add New Internship Listing</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default AdminInternships;
