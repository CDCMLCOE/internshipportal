import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../../backend/auth/AuthContext';
import { supabase } from '../../../backend/services/supabaseClient';

const Profile = () => {
  const { user } = useAuth();

  // Form state — pre-filled from DB
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [preferredRole, setPreferredRole] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [additionalLinks, setAdditionalLinks] = useState([]);

  // File upload state
  const [profilePicFile, setProfilePicFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [certificateFile, setCertificateFile] = useState(null);

  // UI state
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success' | 'error'

  // Load existing profile data on mount
  useEffect(() => {
    if (!user?.id) return;
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('dob,gender,mobile,preferred_role,address,about,linkedin,github,portfolio,other_links')
        .eq('id', user.id)
        .single();
      if (error || !data) return;
      setDob(data.dob || '');
      setGender(data.gender || '');
      setMobile(data.mobile || '');
      setPreferredRole(data.preferred_role || '');
      setAddress(data.address || '');
      setAbout(data.about || '');
      setLinkedin(data.linkedin || '');
      setGithub(data.github || '');
      setPortfolio(data.portfolio || '');
      setAdditionalLinks(data.other_links || []);
    };
    fetchProfile();
  }, [user?.id]);

  const addLink = () => setAdditionalLinks([...additionalLinks, { platform: '', url: '' }]);

  const removeLink = (index) => setAdditionalLinks(additionalLinks.filter((_, i) => i !== index));

  const updateLink = (index, field, value) => {
    const updated = [...additionalLinks];
    updated[index] = { ...updated[index], [field]: value };
    setAdditionalLinks(updated);
  };

  const showToast = (msg, type = 'success') => {
    setToast(msg);
    setToastType(type);
    setTimeout(() => setToast(''), 3500);
  };

  const uploadFile = async (file, bucket, path) => {
    const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
    if (error && !error.message?.includes('bucket')) throw error;
    const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(path);
    return publicUrl;
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user?.id) return;
    setSaving(true);

    const updates = {
      dob,
      gender,
      mobile,
      preferred_role: preferredRole,
      address,
      about,
      linkedin,
      github,
      portfolio,
      other_links: additionalLinks,
      updated_at: new Date().toISOString(),
    };

    try {
      if (profilePicFile) {
        updates.profile_pic_url = await uploadFile(profilePicFile, 'profile-pictures', `${user.id}/profile.${profilePicFile.name.split('.').pop()}`);
      }
      if (resumeFile) {
        updates.resume_url = await uploadFile(resumeFile, 'resumes', `${user.id}/resume.${resumeFile.name.split('.').pop()}`);
      }
      if (certificateFile) {
        updates.certificate_url = await uploadFile(certificateFile, 'certificates', `${user.id}/certificate.${certificateFile.name.split('.').pop()}`);
      }
    } catch (uploadError) {
      console.error('Upload error:', uploadError);
      showToast('File upload failed. Check storage buckets and try again.', 'error');
      setSaving(false);
      return;
    }

    const { error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    setSaving(false);
    if (error) {
      console.error('Save error:', error);
      showToast('Failed to save changes. Please try again.', 'error');
    } else {
      setProfilePicFile(null);
      setResumeFile(null);
      setCertificateFile(null);
      showToast('Profile saved successfully!', 'success');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8 w-full pb-12"
    >
      {/* Profile Header Card */}
      <div className="bg-brand-ivory border border-mistral-black/10 p-8 shadow-sm relative overflow-hidden">
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
              onChange={(e) => setProfilePicFile(e.target.files[0] || null)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              title="Upload Profile Picture"
            />
          </div>

          {/* Right side: Student Details */}
          <div className="flex flex-col space-y-3 text-center sm:text-left pt-14 flex-1">
            <div>
              <h3 className="font-heading font-bold text-3xl text-mistral-black tracking-tight">{user?.name || 'Student Name'}</h3>
              <p className="text-mistral-orange font-medium text-sm mt-1 uppercase tracking-wider">{user?.branch || 'Computer Engineering'}</p>
              <p className="text-mistral-black/40 text-[10px] font-bold uppercase tracking-widest mt-1">{user?.college || user?.institution || 'MES MLCOE'}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-mistral-black/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-sans text-sm">{user?.email || 'student@mlcoe.mespune.in'}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-mistral-black/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                <span className="font-sans text-sm font-medium">PRN: <span className="font-semibold text-mistral-black">{user?.prn_no || user?.prn || '1234567890'}</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-mistral-black/10 bg-brand-cream/30">
          <h2 className="font-heading font-semibold text-xl text-mistral-black">Personal Information</h2>
          <p className="text-mistral-black/60 font-sans text-sm mt-1">Update your personal details and resume.</p>
        </div>
        
        <div className="p-8">
          <form className="space-y-12" onSubmit={handleSave}>
            {/* Core Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Date of Birth</label>
                <input 
                  type="date" 
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all font-sans text-base shadow-sm text-mistral-black"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Gender</label>
                <select 
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all font-sans text-base shadow-sm text-mistral-black"
                >
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
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="+91 "
                  className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all font-sans text-base shadow-sm text-mistral-black"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Preferred Job Role</label>
                <input 
                  type="text" 
                  value={preferredRole}
                  onChange={(e) => setPreferredRole(e.target.value)}
                  placeholder="e.g. Frontend Developer, Data Scientist"
                  className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all font-sans text-base shadow-sm text-mistral-black"
                />
              </div>
            </div>

            {/* Address & About Section */}
            <div className="space-y-8 pt-8 border-t border-mistral-black/5">
              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Address</label>
                <textarea 
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all font-sans text-base resize-none shadow-sm text-mistral-black"
                  placeholder="Enter your full residential address"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">About</label>
                <textarea 
                  rows="4"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all font-sans text-base resize-none shadow-sm text-mistral-black"
                  placeholder="Tell us a little about yourself, your skills, and what kind of internship you are looking for."
                />
              </div>
            </div>

            {/* Professional Profiles Section */}
            <div className="space-y-8 pt-8 border-t border-mistral-black/5">
              <div className="space-y-6">
                <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Social & Professional Profiles</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40">LinkedIn Profile</label>
                    <input 
                      type="url" 
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all text-sm text-mistral-black shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40">GitHub Profile</label>
                    <input 
                      type="url" 
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder="https://github.com/username"
                      className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all text-sm text-mistral-black shadow-sm"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40">Portfolio / Website</label>
                    <input 
                      type="url" 
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="https://yourportfolio.com"
                      className="w-full bg-white border border-mistral-black/15 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-all text-sm text-mistral-black shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-mistral-black/5">
                <div className="flex items-center justify-between">
                  <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Other Professional Links</label>
                  <button 
                    type="button"
                    onClick={addLink}
                    className="text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:text-mistral-black transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" /></svg>
                    Add Another Link
                  </button>
                </div>

                <AnimatePresence>
                  {additionalLinks.map((link, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-8 relative pb-6 border-b border-mistral-black/5 last:border-0 last:pb-0"
                    >
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40">Platform Name</label>
                        <input 
                          type="text"
                          value={link.platform}
                          onChange={(e) => updateLink(index, 'platform', e.target.value)}
                          placeholder="e.g. Behance"
                          className="w-full bg-white border border-mistral-black/15 px-4 py-2.5 focus:outline-none focus:border-mistral-orange transition-all text-sm"
                        />
                      </div>
                      <div className="space-y-2 relative">
                        <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40">URL</label>
                        <div className="flex gap-3">
                          <input 
                            type="url"
                            value={link.url}
                            onChange={(e) => updateLink(index, 'url', e.target.value)}
                            placeholder="https://..."
                            className="flex-1 bg-white border border-mistral-black/15 px-4 py-2.5 focus:outline-none focus:border-mistral-orange transition-all text-sm"
                          />
                          <button 
                            type="button"
                            onClick={() => removeLink(index)}
                            className="text-mistral-black/20 hover:text-red-500 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Document Uploads Section */}
            <div className="space-y-8 pt-8 border-t border-mistral-black/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Resume (PDF)</label>
                  <div className="relative w-full">
                    <input 
                      type="file" 
                      accept=".pdf"
                      onChange={(e) => setResumeFile(e.target.files[0] || null)}
                      className="block w-full text-base text-mistral-black/60
                        file:mr-4 file:py-2.5 file:px-6
                        file:border-0
                        file:text-sm file:font-bold file:uppercase file:tracking-widest
                        file:bg-brand-cream file:text-mistral-black
                        hover:file:bg-brand-yellow/30 file:transition-colors file:cursor-pointer
                        cursor-pointer border border-mistral-black/15 bg-white shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm uppercase tracking-widest font-bold text-mistral-black/60">Certificate (PDF/Image)</label>
                  <div className="relative w-full">
                    <input 
                      type="file" 
                      accept=".pdf,image/*"
                      onChange={(e) => setCertificateFile(e.target.files[0] || null)}
                      className="block w-full text-base text-mistral-black/60
                        file:mr-4 file:py-2.5 file:px-6
                        file:border-0
                        file:text-sm file:font-bold file:uppercase file:tracking-widest
                        file:bg-brand-cream file:text-mistral-black
                        hover:file:bg-brand-yellow/30 file:transition-colors file:cursor-pointer
                        cursor-pointer border border-mistral-black/15 bg-white shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-8 border-t border-mistral-black/10 flex flex-col sm:flex-row justify-end">
               <button 
                 type="submit"
                 disabled={saving}
                 className="w-full sm:w-auto bg-mistral-black text-white px-10 py-4 uppercase tracking-widest font-bold text-xs hover:bg-mistral-orange transition-all duration-300 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
               >
                 {saving ? 'Saving...' : 'Save Changes'}
               </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-4 shadow-2xl border rounded-lg ${
              toastType === 'success'
                ? 'bg-mistral-black text-white border-white/10'
                : 'bg-red-600 text-white border-red-500'
            }`}
          >
            {toastType === 'success' ? (
              <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="text-xs font-bold uppercase tracking-widest">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;
