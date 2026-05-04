import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomDropdown from '../../components/CustomDropdown';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    institution: 'MES MLCOE', // Pre-filled
    prn: '',
    degree: 'B.Tech in Computer Engineering',
    yearOfStudy: '3rd Year',
    graduationYear: '',
    cgpa: '',
    linkedin: '',
    github: '',
    portfolio: '',
    skills: '',
    projects: '',
    experience: '',
    preferredDomains: [],
    workType: 'Hybrid',
    duration: '6 Months',
    availabilityDate: '',
    shareConsent: false,
    accuracyConsent: false,
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [resume, setResume] = useState(null);
  const [idCard, setIdCard] = useState(null);

  const branches = [
    'B.Tech in Computer Engineering',
    'B.Tech in CSE - ai&ml',
    'B.Tech in Information Technology',
    'B.Tech in E&TC',
    'B.Tech in Mechanical Engineering',
    'B.Tech in Civil Engineering'
  ];

  const yearsOfStudy = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const workTypes = ['Remote', 'In-Office', 'Hybrid'];
  const durations = ['2 Months', '3 Months', '6 Months', 'Full Time (Post-Grad)'];
  const domains = [
    'Software Development', 'Data Science', 'AI & Machine Learning', 
    'UI/UX Design', 'Cloud Computing', 'Cybersecurity', 
    'Mechanical Design', 'Civil Construction', 'Marketing', 'HR', 'Finance'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDomainToggle = (domain) => {
    setFormData(prev => ({
      ...prev,
      preferredDomains: prev.preferredDomains.includes(domain)
        ? prev.preferredDomains.filter(d => d !== domain)
        : [...prev.preferredDomains, domain]
    }));
  };

  const inputClasses = "w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/30";
  const labelClasses = "block text-[11px] font-bold uppercase tracking-widest text-mistral-black/70 mb-2";
  const sectionTitleClasses = "font-heading font-bold text-xl text-mistral-orange uppercase tracking-wider mb-6 flex items-center gap-3";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12 w-full pb-20"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-mistral-black leading-none">Student Profile</h2>
          <p className="text-mistral-black/60 font-medium mt-2">Complete your professional profile to match with top industry partners.</p>
        </div>
        <button className="bg-mistral-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all shadow-lg">
          Save All Changes
        </button>
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-xl overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-mistral-orange to-brand-yellow"></div>
        
        <form className="p-6 md:p-10 lg:p-12 space-y-12">
          
          {/* Section 1: Basic Identity & Contact Information */}
          <section>
            <h3 className={sectionTitleClasses}>
              <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
              Basic Identity & Contact Information
            </h3>
            
            <div className="flex flex-col md:flex-row gap-10 ml-0 md:ml-11">
              {/* Profile Photo Upload */}
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div className="relative w-32 h-32 rounded-full border-2 border-mistral-black/10 bg-brand-cream flex items-center justify-center overflow-hidden group shadow-inner">
                  {profilePicture ? (
                    <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-12 h-12 text-mistral-black/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  <div className="absolute inset-0 bg-mistral-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-white text-[8px] font-bold uppercase tracking-widest">Update</span>
                  </div>
                  <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <span className="text-[10px] text-mistral-black/40 font-bold uppercase tracking-widest">Profile Picture</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                <div>
                  <label className={labelClasses}>First Name <span className="text-red-500">*</span></label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder="John" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Last Name <span className="text-red-500">*</span></label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Doe" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Primary Email Address <span className="text-red-500">*</span></label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="student@mespune.in" className={inputClasses} />
                  <p className="text-[10px] text-mistral-orange mt-1.5 font-bold uppercase tracking-tighter">Recommended: Use official college email for verification.</p>
                </div>
                <div>
                  <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Current Location/City <span className="text-red-500">*</span></label>
                  <input required name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Pune, Maharashtra" className={inputClasses} />
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-mistral-black/5 w-full"></div>

          {/* Section 2: Academic Profile */}
          <section>
            <h3 className={sectionTitleClasses}>
              <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
              Academic Profile
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
              <div className="md:col-span-2">
                <label className={labelClasses}>Institution Name</label>
                <input readOnly value={formData.institution} className={inputClasses + " bg-brand-cream/50 cursor-not-allowed"} />
              </div>
              <div>
                <label className={labelClasses}>University Reg. Number / PRN <span className="text-red-500">*</span></label>
                <input required name="prn" value={formData.prn} onChange={handleChange} type="text" placeholder="10-digit number" className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Degree & Branch <span className="text-red-500">*</span></label>
                <CustomDropdown 
                  options={branches}
                  value={formData.degree}
                  onChange={(val) => setFormData({...formData, degree: val})}
                  dropdownTitle="Select Branch"
                  buttonClassName={inputClasses + " text-left flex justify-between items-center"}
                />
              </div>
              <div>
                <label className={labelClasses}>Current Year of Study <span className="text-red-500">*</span></label>
                <CustomDropdown 
                  options={yearsOfStudy}
                  value={formData.yearOfStudy}
                  onChange={(val) => setFormData({...formData, yearOfStudy: val})}
                  dropdownTitle="Select Year"
                  buttonClassName={inputClasses + " text-left flex justify-between items-center"}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Graduation Year <span className="text-red-500">*</span></label>
                  <input required name="graduationYear" value={formData.graduationYear} onChange={handleChange} type="number" placeholder="2025" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Current CGPA <span className="text-red-500">*</span></label>
                  <input required name="cgpa" value={formData.cgpa} onChange={handleChange} type="number" step="0.01" placeholder="e.g. 9.15" className={inputClasses} />
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-mistral-black/5 w-full"></div>

          {/* Section 3: Professional & Technical Portfolio */}
          <section>
            <h3 className={sectionTitleClasses}>
              <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
              Professional & Technical Portfolio
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
              <div className="md:col-span-2">
                <label className={labelClasses}>Primary Skills (Comma Separated) <span className="text-red-500">*</span></label>
                <input required name="skills" value={formData.skills} onChange={handleChange} type="text" placeholder="Python, React, Linux, AWS..." className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>LinkedIn Profile URL <span className="text-red-500">*</span></label>
                <input required name="linkedin" value={formData.linkedin} onChange={handleChange} type="url" placeholder="https://linkedin.com/in/username" className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>GitHub Profile URL <span className="text-red-500">*</span></label>
                <input required name="github" value={formData.github} onChange={handleChange} type="url" placeholder="https://github.com/username" className={inputClasses} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses}>Personal Portfolio Website</label>
                <input name="portfolio" value={formData.portfolio} onChange={handleChange} type="url" placeholder="https://yourportfolio.com" className={inputClasses} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses}>Project Highlights <span className="text-red-500">*</span></label>
                <textarea required name="projects" value={formData.projects} onChange={handleChange} rows="4" placeholder="Describe 1-2 major projects (architecture, tech stack, and your role)..." className={inputClasses + " resize-none"}></textarea>
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses}>Past Experience</label>
                <textarea name="experience" value={formData.experience} onChange={handleChange} rows="3" placeholder="Previous internships, club leadership roles, or hackathons..." className={inputClasses + " resize-none"}></textarea>
              </div>
            </div>
          </section>

          <div className="h-px bg-mistral-black/5 w-full"></div>

          {/* Section 4: Internship Preferences */}
          <section>
            <h3 className={sectionTitleClasses}>
              <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
              Internship Preferences
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
              <div className="md:col-span-2">
                <label className={labelClasses}>Preferred Internship Domains <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {domains.map(domain => (
                    <button
                      key={domain}
                      type="button"
                      onClick={() => handleDomainToggle(domain)}
                      className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                        formData.preferredDomains.includes(domain)
                          ? 'bg-mistral-orange border-mistral-orange text-white shadow-md'
                          : 'bg-white border-mistral-black/10 text-mistral-black/60 hover:border-mistral-orange'
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClasses}>Work Type Preference <span className="text-red-500">*</span></label>
                <CustomDropdown 
                  options={workTypes}
                  value={formData.workType}
                  onChange={(val) => setFormData({...formData, workType: val})}
                  dropdownTitle="Select Type"
                  buttonClassName={inputClasses + " text-left flex justify-between items-center"}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Max Duration <span className="text-red-500">*</span></label>
                  <CustomDropdown 
                    options={durations}
                    value={formData.duration}
                    onChange={(val) => setFormData({...formData, duration: val})}
                    dropdownTitle="Select Duration"
                    buttonClassName={inputClasses + " text-left flex justify-between items-center"}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Availability Date <span className="text-red-500">*</span></label>
                  <input required name="availabilityDate" value={formData.availabilityDate} onChange={handleChange} type="date" className={inputClasses} />
                </div>
              </div>
            </div>
          </section>

          <div className="h-px bg-mistral-black/5 w-full"></div>

          {/* Section 5: Documents & Verification */}
          <section>
            <h3 className={sectionTitleClasses}>
              <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
              Documents & Verification
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-0 md:ml-11">
              <div>
                <label className={labelClasses}>Resume/CV Upload (PDF only) <span className="text-red-500">*</span></label>
                <div className="mt-2 flex flex-col gap-3">
                  <label className="cursor-pointer bg-white border border-mistral-black/20 hover:border-mistral-orange px-5 py-4 text-sm font-medium transition-colors flex items-center gap-3 group shadow-sm">
                    <svg className="w-6 h-6 text-mistral-black/50 group-hover:text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <div className="flex flex-col">
                      <span className="font-bold uppercase tracking-widest text-[10px]">Select Resume</span>
                      <span className="text-[10px] text-mistral-black/40 mt-0.5">{resume ? resume.name : 'Max size 5MB'}</span>
                    </div>
                    <input type="file" className="hidden" accept=".pdf" onChange={(e) => setResume(e.target.files[0])} />
                  </label>
                </div>
              </div>

              <div>
                <label className={labelClasses}>College ID Card Upload <span className="text-red-500">*</span></label>
                <div className="mt-2 flex flex-col gap-3">
                  <label className="cursor-pointer bg-white border border-mistral-black/20 hover:border-mistral-orange px-5 py-4 text-sm font-medium transition-colors flex items-center gap-3 group shadow-sm">
                    <svg className="w-6 h-6 text-mistral-black/50 group-hover:text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>
                    <div className="flex flex-col">
                      <span className="font-bold uppercase tracking-widest text-[10px]">Select ID Card</span>
                      <span className="text-[10px] text-mistral-black/40 mt-0.5">{idCard ? idCard.name : 'Image or PDF'}</span>
                    </div>
                    <input type="file" className="hidden" accept=".pdf,image/*" onChange={(e) => setIdCard(e.target.files[0])} />
                  </label>
                </div>
              </div>

              <div className="md:col-span-2 space-y-4 pt-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center mt-0.5">
                    <input type="checkbox" name="shareConsent" checked={formData.shareConsent} onChange={handleChange} className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-mistral-black/20 bg-white checked:border-mistral-orange checked:bg-mistral-orange transition-all" />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[11px] font-bold text-mistral-black/70 uppercase tracking-widest group-hover:text-mistral-orange transition-colors">I agree to share my profile data with registered corporate partners.</span>
                </label>

                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative flex items-center mt-0.5">
                    <input type="checkbox" name="accuracyConsent" checked={formData.accuracyConsent} onChange={handleChange} className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-mistral-black/20 bg-white checked:border-mistral-orange checked:bg-mistral-orange transition-all" />
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[11px] font-bold text-mistral-black/70 uppercase tracking-widest group-hover:text-mistral-orange transition-colors">I confirm that all provided academic and project information is accurate.</span>
                </label>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8 border-t border-mistral-black/10 flex justify-end">
            <button 
              type="submit" 
              className="w-full md:w-auto bg-mistral-black text-white px-16 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group"
            >
              Update Full Profile
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

        </form>
      </div>
    </motion.div>
  );
};

export default Profile;
