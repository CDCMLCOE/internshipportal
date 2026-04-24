import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 max-w-3xl"
    >
      <div className="bg-brand-ivory border border-mistral-black/10 p-8 shadow-sm">
        <h2 className="font-heading font-semibold text-2xl uppercase tracking-tight mb-2">My Profile</h2>
        <p className="text-mistral-black/60 font-sans text-sm">Update your personal information and resume.</p>
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 p-8 shadow-sm">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">First Name</label>
              <input 
                type="text" 
                defaultValue="Student"
                className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Last Name</label>
              <input 
                type="text" 
                defaultValue="Name"
                className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Email Address</label>
            <input 
              type="email" 
              defaultValue="student@mlcoe.mespune.in"
              className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm text-mistral-black/60"
              disabled
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Bio / Summary</label>
            <textarea 
              rows="4"
              className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm resize-none"
              placeholder="Tell us a little about yourself, your skills, and what kind of internship you are looking for."
            ></textarea>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Resume (PDF)</label>
            <div className="flex items-center gap-4">
              <input 
                type="file" 
                accept=".pdf"
                className="text-sm font-sans text-mistral-black/60 file:mr-4 file:py-2 file:px-4 file:border file:border-mistral-black/10 file:bg-brand-cream file:text-mistral-black file:uppercase file:tracking-widest file:text-[10px] file:font-bold hover:file:bg-brand-yellow/30 transition-all cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-mistral-black/10 flex justify-end">
             <button type="button" className="bg-mistral-black text-white px-8 py-3 uppercase tracking-widest font-semibold text-sm hover:bg-mistral-orange transition-colors duration-300">
               Save Changes
             </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Profile;
