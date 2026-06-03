import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StudentProfileReviewModal = ({ isOpen, onClose, student, onNext, onPrev, onShortlist, onReject }) => {
  if (!student) return null;

  const profile = student.profile || {};
  const initials = student.name.split(' ').map(n => n[0]).join('').substring(0, 2);

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
            <div className="bg-brand-ivory border-b border-mistral-black/10 relative shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-mistral-orange/[0.07] to-brand-yellow/[0.07]" />
              
              <button 
                onClick={onClose}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-mistral-black/5 hover:bg-mistral-orange hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              
              <div className="relative p-5 sm:p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-white bg-brand-cream flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                  <span className="text-lg font-heading font-bold text-mistral-black/20 uppercase">
                    {initials}
                  </span>
                </div>

                <div className="flex flex-col flex-1 min-w-0 justify-center">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-mistral-black uppercase truncate tracking-wide">{student.name}</h3>
                  <p className="text-mistral-orange font-bold text-xs uppercase tracking-[0.15em] mt-1">{student.branch || 'Student'}</p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-0.5 mt-2 text-xs font-medium text-mistral-black/60">
                    {profile.email && (
                      <span className="inline-flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-mistral-black/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>{profile.email}</span>
                      </span>
                    )}
                    {student.prn && student.prn !== 'N/A' && (
                      <span className="inline-flex items-center gap-1.5 font-bold text-mistral-black/70">
                        <svg className="w-3.5 h-3.5 text-mistral-black/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        PRN: {student.prn}
                      </span>
                    )}
                    {profile.college && (
                      <span className="font-semibold">{profile.college}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-brand-cream/10 space-y-10">
              {/* Application Info */}
              <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-mistral-black/5">
                <span className="text-xs font-bold uppercase tracking-widest text-mistral-black/40">Applied for</span>
                <span className="text-sm font-bold uppercase tracking-widest text-mistral-black">{student.role}</span>
                <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm ${student.status === 'Shortlisted' ? 'bg-green-100 text-green-800' : student.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {student.status}
                </span>
              </div>

              {profile.about && (
                <section>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-mistral-black/10"></span> About
                  </h4>
                  <p className="text-mistral-black/80 font-sans leading-relaxed text-lg italic">
                    {profile.about}
                  </p>
                </section>
              )}

              {/* Full Profile Info */}
              <section>
                <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-mistral-black/10"></span> Profile Information
                </h4>
                <div className="bg-brand-ivory border border-mistral-black/10">
                  <div className="divide-y divide-mistral-black/5">
                    {profile.year && (
                      <div className="flex items-center px-6 py-3">
                        <span className="w-40 text-[10px] uppercase font-bold text-mistral-black/40 tracking-tighter">Year</span>
                        <span className="text-sm text-mistral-black">{profile.year}</span>
                      </div>
                    )}
                    {profile.mobile && (
                      <div className="flex items-center px-6 py-3">
                        <span className="w-40 text-[10px] uppercase font-bold text-mistral-black/40 tracking-tighter">Contact</span>
                        <span className="text-sm text-mistral-black">{profile.mobile}</span>
                      </div>
                    )}
                    {profile.gender && (
                      <div className="flex items-center px-6 py-3">
                        <span className="w-40 text-[10px] uppercase font-bold text-mistral-black/40 tracking-tighter">Gender</span>
                        <span className="text-sm text-mistral-black">{profile.gender}</span>
                      </div>
                    )}
                    {profile.dob && (
                      <div className="flex items-center px-6 py-3">
                        <span className="w-40 text-[10px] uppercase font-bold text-mistral-black/40 tracking-tighter">Date of Birth</span>
                        <span className="text-sm text-mistral-black">{profile.dob}</span>
                      </div>
                    )}
                    {profile.address && (
                      <div className="flex items-center px-6 py-3">
                        <span className="w-40 text-[10px] uppercase font-bold text-mistral-black/40 tracking-tighter">Address</span>
                        <span className="text-sm text-mistral-black">{profile.address}</span>
                      </div>
                    )}
                    {profile.preferred_role && (
                      <div className="flex items-center px-6 py-3">
                        <span className="w-40 text-[10px] uppercase font-bold text-mistral-black/40 tracking-tighter">Preferred Role</span>
                        <span className="text-sm font-semibold text-mistral-black">{profile.preferred_role}</span>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {profile.skills && profile.skills.length > 0 && (
                <section>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-mistral-black/10"></span> Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(Array.isArray(profile.skills) ? profile.skills : []).map(skill => (
                      <span key={skill} className="px-4 py-2 bg-brand-ivory border border-mistral-black/10 text-[10px] font-bold uppercase tracking-widest text-mistral-black hover:border-mistral-orange transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {(profile.linkedin || profile.github || profile.portfolio || profile.other_links?.length > 0) && (
                <section>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-mistral-black/40 mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-mistral-black/10"></span> Online Presence
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {profile.linkedin && (
                      <a href={profile.linkedin} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white border border-mistral-black/5 text-[10px] font-bold uppercase tracking-widest text-mistral-black/60 hover:border-mistral-orange hover:text-mistral-black transition-all">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        LinkedIn
                      </a>
                    )}
                    {profile.github && (
                      <a href={profile.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white border border-mistral-black/5 text-[10px] font-bold uppercase tracking-widest text-mistral-black/60 hover:border-mistral-orange hover:text-mistral-black transition-all">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        GitHub
                      </a>
                    )}
                    {profile.portfolio && (
                      <a href={profile.portfolio} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white border border-mistral-black/5 text-[10px] font-bold uppercase tracking-widest text-mistral-black/60 hover:border-mistral-orange hover:text-mistral-black transition-all">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        Portfolio
                      </a>
                    )}
                    {Array.isArray(profile.other_links) && profile.other_links.map((link, i) => (
                      <a key={`link-${i}`} href={link.url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-white border border-mistral-black/5 text-[10px] font-bold uppercase tracking-widest text-mistral-black/60 hover:border-mistral-orange hover:text-mistral-black transition-all">
                        {link.platform || 'Link'}
                      </a>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Footer Action Bar */}
            <div className="shrink-0 p-6 bg-brand-ivory border-t border-mistral-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex gap-4 w-full sm:w-auto flex-wrap">
                {onPrev && (
                  <button 
                    onClick={onPrev}
                    className="px-3 py-1.5 border border-mistral-black/10 hover:bg-mistral-black hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    Prev
                  </button>
                )}
                {onNext && (
                  <button 
                    onClick={onNext}
                    className="px-3 py-1.5 border border-mistral-black/10 hover:bg-mistral-black hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
                  >
                    Next
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                )}
              </div>
              <div className="flex gap-4 w-full sm:w-auto flex-wrap">
                {onShortlist && (
                  <button
                    onClick={onShortlist}
                    className="flex-1 sm:flex-none px-6 py-3 bg-mistral-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all"
                  >
                    Shortlist
                  </button>
                )}
                {onReject && (
                  <button
                    onClick={onReject}
                    className="flex-1 sm:flex-none px-6 py-3 border border-mistral-black/10 text-mistral-black text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange hover:text-white transition-all"
                  >
                    Reject
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StudentProfileReviewModal;
