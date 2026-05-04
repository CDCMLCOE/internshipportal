import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, GraduationCap, Edit, Plus, X, Save, Trash2, ExternalLink } from 'lucide-react';
import { supabase } from '../../services/supabaseClient';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .not('role', 'eq', 'admin')
        .not('role', 'eq', 'superadmin')
        .order('prn_no', { ascending: true });

      if (error) throw error;
      
      const formatted = (data || []).map(p => ({
        id: p.id,
        name: p.name,
        email: p.email,
        branch: p.branch,
        year: p.year || 'N/A',
        prn: p.prn_no,
        status: 'Active'
      }));
      setStudents(formatted);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setEditFormData({ ...student });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: editFormData.name,
          email: editFormData.email,
          branch: editFormData.branch,
          year: editFormData.year,
          prn_no: editFormData.prn
        })
        .eq('id', editFormData.id);

      if (error) throw error;
      
      fetchStudents();
      setIsEditModalOpen(false);
      setSelectedStudent(null);
    } catch (error) {
      console.error('Error saving student:', error);
      alert('Failed to update student record.');
    }
  };

  const handleAddStudent = async (newData) => {
    // Note: Creating a user in Auth requires admin client or user signup.
    // For now, we'll just insert into profiles if the user exists in auth.
    // In a real app, you'd use a service role or invite flow.
    alert('Student registration should be done via Auth signup for security.');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this student record?')) return;
    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student.');
    }
  };

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.branch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-10 pb-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-mistral-black/10 pb-8">
        <div>
          <h3 className="font-portal font-bold text-lg tracking-tight text-mistral-orange italic mb-2">
            # Student Data
          </h3>
          <h2 className="text-4xl font-heading font-bold uppercase tracking-tighter text-mistral-black leading-none">Administrative Panel</h2>
          <p className="text-mistral-black/60 font-medium font-sans mt-3 max-w-xl">Full administrative control over student accounts, academic records, and portal profiles.</p>
        </div>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="px-8 py-4 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all duration-300 flex items-center gap-3 shadow-lg group border border-white/5"
        >
          <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          Register New Student
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-96 group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by name, email or branch..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange transition-all placeholder:text-mistral-black/20"
        />
      </div>

      {/* Students List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredStudents.map((student) => (
          <motion.div 
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-ivory border border-mistral-black/10 p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-mistral-orange transition-all group"
          >
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-16 h-16 bg-mistral-black rounded-full flex items-center justify-center font-bold text-xl text-white shrink-0 shadow-md">
                {student.name[0]}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg font-bold uppercase tracking-tight text-mistral-black truncate">{student.name}</span>
                <div className="flex items-center gap-2 text-xs font-medium text-mistral-black/60">
                  <Mail className="w-3 h-3 text-mistral-orange" />
                  <span className="truncate">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-mistral-black/40 mt-1">
                  <GraduationCap className="w-3 h-3" />
                  <span>{student.branch} • {student.year} • PRN: {student.prn}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={() => handleEditClick(student)}
                className="flex-1 md:flex-none px-6 py-2.5 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all flex items-center justify-center gap-2"
              >
                <Edit className="w-3 h-3" />
                Edit Profile
              </button>
              <button 
                onClick={() => handleDelete(student.id)}
                className="p-2.5 border border-mistral-black/10 text-mistral-black/20 hover:text-red-500 hover:bg-red-50 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {isEditModalOpen && selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm" onClick={() => setIsEditModalOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-4xl bg-brand-ivory shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="h-1.5 bg-mistral-orange" />
              <div className="p-6 border-b border-mistral-black/10 flex justify-between items-center bg-brand-cream/20">
                <h3 className="font-heading font-bold text-xl text-mistral-black tracking-tight uppercase">Edit Student Record</h3>
                <button onClick={() => setIsEditModalOpen(false)} className="p-2 hover:bg-mistral-black/5 rounded-full transition-colors"><X className="w-5 h-5" /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Account Info */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Full Name</label>
                    <input 
                      type="text" 
                      value={editFormData.name} 
                      onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                      className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Email Address</label>
                    <input 
                      type="email" 
                      value={editFormData.email} 
                      onChange={(e) => setEditFormData({...editFormData, email: e.target.value})}
                      className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange transition-all font-bold"
                    />
                  </div>

                  {/* Academic Info */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Branch</label>
                    <select 
                      value={editFormData.branch} 
                      onChange={(e) => setEditFormData({...editFormData, branch: e.target.value})}
                      className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange"
                    >
                      <option>Computer Engineering</option>
                      <option>Information Technology</option>
                      <option>E&TC</option>
                      <option>CSE - ai&ml</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Year</label>
                    <select 
                      value={editFormData.year} 
                      onChange={(e) => setEditFormData({...editFormData, year: e.target.value})}
                      className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange"
                    >
                      <option>First Year</option>
                      <option>Second Year</option>
                      <option>Third Year</option>
                      <option>Fourth Year</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">PRN Number</label>
                    <input 
                      type="text" 
                      value={editFormData.prn} 
                      onChange={(e) => setEditFormData({...editFormData, prn: e.target.value})}
                      className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-mistral-black/10 bg-brand-ivory flex justify-end gap-3">
                <button onClick={() => setIsEditModalOpen(false)} className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-mistral-black/50 hover:text-mistral-black transition-colors">Cancel</button>
                <button 
                  onClick={handleSaveEdit}
                  className="px-8 py-3 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all shadow-lg flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  Update Record
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }} 
              className="relative w-full max-w-2xl bg-brand-ivory shadow-2xl overflow-hidden"
            >
              <div className="h-1.5 bg-mistral-black" />
              <div className="p-6 border-b border-mistral-black/10 flex justify-between items-center bg-brand-cream/20">
                <h3 className="font-heading font-bold text-xl text-mistral-black tracking-tight uppercase">Register New Student</h3>
                <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-mistral-black/5 rounded-full transition-colors"><X className="w-5 h-5" /></button>
              </div>

              <form className="p-8 space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                handleAddStudent({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  branch: formData.get('branch'),
                  year: formData.get('year'),
                  prn: formData.get('prn'),
                  role: 'Not Assigned',
                });
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Full Name</label>
                    <input name="name" required type="text" className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Email ID</label>
                    <input name="email" required type="email" className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Branch</label>
                    <select name="branch" required className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange">
                      <option>Computer Engineering</option>
                      <option>Information Technology</option>
                      <option>E&TC</option>
                      <option>CSE - ai&ml</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Year</label>
                    <select name="year" required className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange">
                      <option>First Year</option>
                      <option>Second Year</option>
                      <option>Third Year</option>
                      <option>Fourth Year</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">PRN Number</label>
                    <input name="prn" required type="text" className="w-full bg-white border border-mistral-black/10 px-4 py-3 font-sans text-sm focus:outline-none focus:border-mistral-orange" />
                  </div>
                </div>
                <div className="pt-6 border-t border-mistral-black/5 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-mistral-black/50 hover:text-mistral-black transition-colors">Cancel</button>
                  <button type="submit" className="px-8 py-3 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all shadow-lg">Create Account</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageStudents;
