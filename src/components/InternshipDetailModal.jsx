import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../services/supabaseClient';

const InternshipDetailModal = ({ isOpen, onClose, internship, showApplyButton = true, showDeadline = true }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setApplySuccess(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleApply = async () => {
    setIsApplying(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not logged in');

      const { error } = await supabase
        .from('applications')
        .insert([{
          internship_id: internship.id,
          student_id: user.id,
          status: 'Pending Review'
        }]);

      if (error) {
        if (error.code === '23505') {
          alert('You have already applied for this internship!');
        } else {
          throw error;
        }
      } else {
        setApplySuccess(true);
      }
    } catch (error) {
      console.error('Apply error:', error);
      alert('Failed to apply. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  if (!internship) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-ivory border border-mistral-black/10 shadow-2xl"
          >
            {/* Top Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-mistral-orange via-brand-yellow to-mistral-orange" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-mistral-black/5 hover:bg-mistral-orange/10 text-mistral-black/40 hover:text-mistral-orange transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              {/* Company Header */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-mistral-orange/10 to-brand-yellow/40 rounded-2xl flex items-center justify-center text-mistral-orange font-heading font-bold text-2xl shrink-0 border border-mistral-orange/15">
                  {internship.company.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading font-bold text-2xl md:text-3xl text-mistral-black leading-tight mb-1">
                    {internship.title}
                  </h2>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-mistral-black/40">
                    {internship.company}
                  </p>
                </div>
              </div>

              {/* Quick Info Chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white border border-mistral-black/8 px-4 py-2.5 rounded-xl">
                  <svg className="w-4 h-4 text-mistral-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-mistral-black/70">{internship.location}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-mistral-black/8 px-4 py-2.5 rounded-xl">
                  <svg className="w-4 h-4 text-mistral-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-mistral-black/70">{internship.stipend}</span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-mistral-black/8 px-4 py-2.5 rounded-xl">
                  <svg className="w-4 h-4 text-mistral-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-mistral-black/70">{internship.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-mistral-black/5 border border-mistral-black/8 px-4 py-2.5 rounded-xl">
                  <svg className="w-4 h-4 text-mistral-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium text-mistral-black/70">{internship.type}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-mistral-black/8 mb-8" />

              {/* About the Company */}
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-mistral-black/40 mb-3">About the Company</h3>
                <p className="text-sm leading-relaxed text-mistral-black/70 font-sans max-w-prose">
                  {internship.about_company}
                </p>
              </div>

              {/* Role Description */}
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-mistral-black/40 mb-3">Role Description</h3>
                <p className="text-sm leading-relaxed text-mistral-black/70 font-sans max-w-prose">
                  {internship.role_description}
                </p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-mistral-black/40 mb-3">Requirements</h3>
                <ul className="space-y-2.5">
                  {internship.requirements?.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-mistral-black/70 font-sans">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-mistral-orange shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perks & Benefits */}
              <div className="mb-8">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-mistral-black/40 mb-4">Perks & Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {internship.perks?.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-white border border-mistral-black/5 px-3.5 py-2.5 rounded-lg">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-medium text-mistral-black/70">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Tags */}
              {internship.skills && internship.skills.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-mistral-black/40 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-mistral-orange/8 text-mistral-orange border border-mistral-orange/15 px-3 py-1.5 text-xs font-semibold rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="h-px w-full bg-mistral-black/8 mb-8" />

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {showApplyButton && (
                  <button
                    onClick={handleApply}
                    disabled={isApplying || applySuccess}
                    className={`w-full sm:flex-1 py-4 uppercase tracking-[0.2em] font-semibold text-sm transition-colors duration-300 flex items-center justify-center gap-3 group ${
                      applySuccess 
                        ? 'bg-green-600 text-white cursor-default' 
                        : 'bg-mistral-black text-white hover:bg-mistral-orange'
                    }`}
                  >
                    {isApplying ? (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    ) : applySuccess ? (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Applied Successfully
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Apply Now
                      </>
                    )}
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-8 py-4 border border-mistral-black/10 text-mistral-black/60 uppercase tracking-[0.2em] font-semibold text-sm hover:border-mistral-black/30 hover:text-mistral-black transition-all duration-200"
                >
                  Close
                </button>
              </div>

              {/* Application Deadline Notice */}
              {internship.deadline && showDeadline && (
                <div className="mt-6 flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/40 px-4 py-3 rounded-lg">
                  <svg className="w-4 h-4 text-mistral-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-mistral-black/70">
                    Application Deadline: <span className="text-mistral-orange">{internship.deadline}</span>
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default InternshipDetailModal;
