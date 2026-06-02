import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../../backend/services/supabaseClient';

const InternshipAccess = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    category: 'Software',
    location: '',
    duration: '',
    stipend: '',
    description: '',
    requirements: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      const { error } = await supabase
        .from('internships')
        .insert([{
          title: formData.title,
          company: formData.company,
          category: formData.category,
          location: formData.location,
          duration: formData.duration,
          stipend: formData.stipend,
          description: formData.description,
          requirements: formData.requirements,
          status: 'Active',
          approval_status: 'approved',
          created_by: user.id
        }]);

      if (error) throw error;

      navigate('/admin/internships', {
        state: {
          message: `Internship "${formData.title}" has been published successfully.`,
        },
      });
    } catch (error) {
      console.error('Error publishing internship:', error);
      alert('Failed to publish internship.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex justify-between items-center border-b border-mistral-black/10 pb-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-mistral-black">Create New Internship</h2>
          <p className="text-mistral-black/60 font-medium">Fill in the details below to post a new internship opportunity.</p>
        </div>
        <button 
          onClick={() => navigate('/admin/internships')}
          className="text-xs font-bold uppercase tracking-widest text-mistral-black/40 hover:text-mistral-orange transition-colors"
        >
          ← Back to Manage
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-brand-ivory border border-mistral-black/10 shadow-xl p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Internship Title</label>
            <input 
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text" 
              placeholder="e.g. Full Stack Developer"
              className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Company Name</label>
            <input 
              required
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text" 
              placeholder="e.g. Google"
              className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Category</label>
            <select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all uppercase font-bold tracking-widest text-[10px]"
            >
              <option>Software</option>
              <option>Design</option>
              <option>Data Science</option>
              <option>Cloud</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Location</label>
            <input 
              required
              name="location"
              value={formData.location}
              onChange={handleChange}
              type="text" 
              placeholder="e.g. Pune, Remote"
              className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Duration</label>
            <input 
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              type="text" 
              placeholder="e.g. 6 Months"
              className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Stipend</label>
            <input 
              name="stipend"
              value={formData.stipend}
              onChange={handleChange}
              type="text" 
              placeholder="e.g. ₹15,000 / Month"
              className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Description</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the role and responsibilities..."
            className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
          ></textarea>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Requirements</label>
          <textarea 
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="3"
            placeholder="List skills, qualifications, etc..."
            className="w-full bg-brand-cream/30 border border-mistral-black/10 px-4 py-3 text-sm focus:outline-none focus:border-mistral-orange transition-all"
          ></textarea>
        </div>

        <div className="pt-6 border-t border-mistral-black/5 flex justify-end">
          <button 
            type="submit"
            disabled={loading}
            className="bg-mistral-black text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl disabled:opacity-50"
          >
            {loading ? 'Publishing...' : 'Post Internship Listing'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default InternshipAccess;
