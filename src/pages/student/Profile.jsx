import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 w-full pb-12"
    >
      {/* Profile Header Card */}
      <div className="bg-brand-ivory border border-mistral-black/10 rounded-xl p-8 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-mistral-orange/20 to-brand-yellow/20"></div>
        
        <div className="relative mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Left side: Profile Image Circle */}
          <div className="relative w-36 h-36 rounded-full border-4 border-brand-ivory bg-brand-cream flex items-center justify-center shrink-0 overflow-hidden group shadow-md transition-transform hover:scale-105 duration-300">
            <svg className="w-12 h-12 text-mistral-black/20 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div className="absolute inset-0 bg-mistral-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-[10px] text-center px-2 uppercase tracking-widest font-bold">Update Photo</span>
            </div>
            <input 
              type="file" 
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              title="Upload Profile Picture"
            />
          </div>

          {/* Right side: Student Details */}
          <div className="flex flex-col space-y-3 text-center sm:text-left pt-14 flex-1">
            <div>
              <h3 className="font-heading font-bold text-3xl text-mistral-black tracking-tight">Student Name</h3>
              <p className="text-mistral-orange font-medium text-sm mt-1 uppercase tracking-wider">Computer Engineering</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-mistral-black/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-sans text-sm">student@mlcoe.mespune.in</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-mistral-black/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                <span className="font-sans text-sm font-medium">PRN: <span className="font-semibold text-mistral-black">1234567890</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-brand-ivory border border-mistral-black/10 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-mistral-black/10 bg-brand-cream/30">
          <h2 className="font-heading font-semibold text-xl text-mistral-black">Personal Information</h2>
          <p className="text-mistral-black/60 font-sans text-sm mt-1">Update your personal details and resume.</p>
        </div>
        
        <div className="p-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base shadow-sm text-mistral-black"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Gender</label>
                <select className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base shadow-sm text-mistral-black">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 "
                  className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Education</label>
                <input 
                  type="text" 
                  placeholder="e.g. B.Tech Computer Engineering"
                  className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Preferred Job Role</label>
                <input 
                  type="text" 
                  placeholder="e.g. Frontend Developer, Data Scientist"
                  className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Social Media / Portfolio Link</label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/in/username"
                  className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Address</label>
              <textarea 
                rows="3"
                className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base resize-none shadow-sm"
                placeholder="Enter your full residential address"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">About</label>
              <textarea 
                rows="4"
                className="w-full bg-white border border-mistral-black/15 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mistral-orange/50 focus:border-mistral-orange transition-all font-sans text-base resize-none shadow-sm"
                placeholder="Tell us a little about yourself, your skills, and what kind of internship you are looking for."
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Resume (PDF)</label>
              <div className="flex items-center gap-4">
                <div className="relative w-full sm:w-auto">
                  <input 
                    type="file" 
                    accept=".pdf"
                    className="block w-full text-base text-mistral-black/60
                      file:mr-4 file:py-2.5 file:px-6
                      file:rounded-lg file:border-0
                      file:text-sm file:font-bold file:uppercase file:tracking-widest
                      file:bg-brand-cream file:text-mistral-black
                      hover:file:bg-brand-yellow/30 file:transition-colors file:cursor-pointer
                      cursor-pointer border border-mistral-black/15 rounded-lg bg-white shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-mistral-black/10 flex flex-col sm:flex-row justify-end">
               <button type="button" className="w-full sm:w-auto bg-mistral-black text-white rounded-lg px-8 py-3 uppercase tracking-widest font-semibold text-sm hover:bg-mistral-orange hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                 Save Changes
               </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
