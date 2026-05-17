import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentProfileReviewModal = ({ isOpen, onClose, student, onNext, onPrev }) => {
  if (!student) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-brand-ivory shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header Section */}
            <div className="bg-brand-ivory border-b border-mistral-black/10 p-6 sm:p-10 relative shrink-0">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-mistral-black/5 hover:bg-mistral-orange hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-mistral-orange/10 to-brand-yellow/10"></div>
              
              <div className="relative mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Profile Image Circle */}
                <div className="relative w-32 h-32 rounded-full border-4 border-brand-ivory bg-brand-cream flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                  <span className="text-4xl font-heading font-bold text-mistral-black/20 uppercase">
                    {student.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </span>
                </div>

                {/* Student Identity */}
                <div className="flex flex-col space-y-3 text-center sm:text-left pt-6 flex-1">
                  <div>
                    <h3 className="font-heading font-bold text-3xl text-mistral-black tracking-tight uppercase">{student.name}</h3>
                    <p className="text-mistral-orange font-bold text-sm mt-1 uppercase tracking-widest italic">{student.branch || 'Student'}</p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-2">
                    <div className="flex items-center gap-2 text-mistral-black/70">
                      <svg className="w-4 h-4 text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      <span className="font-sans text-sm font-medium">{student.name.toLowerCase().replace(/\s+/g, '.')}@mlcoe.mespune.in</span>
                    </div>
                    <div className="flex items-center gap-2 text-mistral-black/70">
                      <svg className="w-4 h-4 text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      <span className="font-sans text-sm font-medium">{student.college || 'MES MLCOE, Pune'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-mistral-black/70">
                      <svg className="w-4 h-4 text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="font-sans text-sm font-bold">GPA: {student.gpa || '8.5'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-brand-cream/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Bio & Links */}
                <div className="lg:col-span-2 space-y-10">
                  <section>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-mistral-black/10"></span> Professional Bio
                    </h4>
                    <p className="text-mistral-black/80 font-sans leading-relaxed text-lg italic">
                      Motivated student with a strong foundation in {student.branch || 'engineering'}. Passionate about building innovative solutions and eager to contribute to real-world projects. Proficient in modern technologies and consistently maintaining high academic standards.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-mistral-black/10"></span> Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'Python', 'Tailwind CSS', 'SQL', 'Git', 'Agile'].map(skill => (
                        <span key={skill} className="px-4 py-2 bg-brand-ivory border border-mistral-black/10 text-[10px] font-bold uppercase tracking-widest text-mistral-black hover:border-mistral-orange transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                      <span className="w-8 h-px bg-mistral-black/10"></span> Online Presence
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a href="#" target="_blank" className="flex items-center justify-between p-4 bg-white border border-mistral-black/5 hover:border-mistral-orange transition-all group">
                        <span className="text-xs font-bold uppercase tracking-widest text-mistral-black/60 group-hover:text-mistral-black">LinkedIn</span>
                        <svg className="w-4 h-4 text-mistral-black/20 group-hover:text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                      <a href="#" target="_blank" className="flex items-center justify-between p-4 bg-white border border-mistral-black/5 hover:border-mistral-orange transition-all group">
                        <span className="text-xs font-bold uppercase tracking-widest text-mistral-black/60 group-hover:text-mistral-black">GitHub</span>
                        <svg className="w-4 h-4 text-mistral-black/20 group-hover:text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
                  </section>
                </div>

                {/* Right Column: Details & Documents */}
                <div className="space-y-10">
                  <section className="bg-brand-ivory border border-mistral-black/10 p-6 shadow-sm">
                    <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-mistral-black/40 mb-6 border-b border-mistral-black/5 pb-2">Academic Details</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[9px] uppercase font-bold text-mistral-black/30 tracking-tighter">PRN Number</p>
                        <p className="text-sm font-bold text-mistral-black mt-0.5">1234567890</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase font-bold text-mistral-black/30 tracking-tighter">Degree & Year</p>
                        <p className="text-sm font-bold text-mistral-black mt-0.5">B.E. Third Year</p>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase font-bold text-mistral-black/30 tracking-tighter">Current Status</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-brand-yellow/50 text-[9px] font-bold uppercase tracking-widest text-mistral-black">Active Intern</span>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4">Documents</h4>
                    <div className="space-y-3">
                      <button className="w-full flex items-center gap-4 p-4 bg-mistral-black text-white hover:bg-mistral-orange transition-all duration-300 group">
                        <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <div className="text-left">
                          <p className="text-[10px] font-bold uppercase tracking-widest">Download Resume</p>
                          <p className="text-[9px] text-white/50 uppercase mt-0.5 tracking-tighter">PDF • 2.4 MB</p>
                        </div>
                      </button>
                      <button className="w-full flex items-center gap-4 p-4 bg-brand-cream border border-mistral-black/10 hover:border-mistral-orange transition-all group">
                        <svg className="w-5 h-5 text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        <div className="text-left">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-mistral-black">View Certificates</p>
                          <p className="text-[9px] text-mistral-black/40 uppercase mt-0.5 tracking-tighter">Combined PDF • 1.1 MB</p>
                        </div>
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="shrink-0 p-6 bg-brand-ivory border-t border-mistral-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-4 w-full sm:w-auto order-2 sm:order-1">
                {onPrev && (
                  <button 
                    onClick={onPrev}
                    className="flex-1 sm:flex-none px-6 py-3 border border-mistral-black/10 hover:bg-mistral-black hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    Previous
                  </button>
                )}
                {onNext && (
                  <button 
                    onClick={onNext}
                    className="flex-1 sm:flex-none px-6 py-3 border border-mistral-black/10 hover:bg-mistral-black hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    Next
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                )}
              </div>
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-10 py-3 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all duration-300 shadow-lg order-1 sm:order-2"
              >
                Close Review
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StudentProfileReviewModal;
