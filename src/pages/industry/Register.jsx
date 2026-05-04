import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import logoUrl from '../../assets/logo.png';
import CustomDropdown from '../../components/CustomDropdown';

const IndustryRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    website: '',
    industryType: 'IT Services',
    description: '',
    cinGstin: '',
    yearOfEstablishment: '',
    companySize: '1-50 employees',
    hqLocation: '',
    primaryAddress: '',
    pocName: '',
    pocTitle: '',
    pocMobile: '',
    pocAltMobile: '',
    pocLinkedin: '',
    termsAgreed: false,
  });
  const [verificationFile, setVerificationFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const industryTypes = [
    'IT Services', 'EdTech', 'FinTech', 'Manufacturing', 'Aerospace', 'Core Engineering', 'Healthcare', 'Consulting', 'Other'
  ];

  const companySizes = [
    '1-50 employees', '51-200 employees', '201-500 employees', '500+ employees'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVerificationFile(e.target.files[0]);
    }
  };

  const validateForm = () => {
    setErrorMsg('');
    
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return false;
    }
    
    // Corporate email validation
    const genericDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com'];
    const emailDomain = formData.email.split('@')[1]?.toLowerCase();
    
    if (genericDomains.includes(emailDomain)) {
      setErrorMsg("Please use an official corporate email address, not a generic domain like " + emailDomain);
      return false;
    }

    if (!formData.termsAgreed) {
      setErrorMsg("You must agree to the Terms of Partnership.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const inputClasses = "w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/30";
  const labelClasses = "block text-[11px] font-bold uppercase tracking-widest text-mistral-black/70 mb-2";
  const sectionTitleClasses = "font-heading font-bold text-xl text-mistral-orange uppercase tracking-wider mb-6 flex items-center gap-3";

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-mesh-pattern flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-brand-ivory p-10 border border-mistral-black/10 shadow-2xl text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-3xl text-mistral-black tracking-tight uppercase">Registration Received</h2>
          <p className="text-mistral-black/60 font-medium leading-relaxed">
            Thank you for registering with MES MLCOE! Your profile is currently under review by our administrative team.
          </p>
          <div className="bg-brand-cream p-4 rounded border border-mistral-black/5 text-sm text-mistral-black/70 font-medium my-4">
            Status: <span className="text-mistral-orange font-bold uppercase tracking-wide">Pending Approval</span>
          </div>
          <p className="text-sm text-mistral-black/50 mb-6">
            You will receive an email confirmation once your account is approved, after which you can log in to post internships.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-mistral-black text-white px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-lg w-full"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-pattern pt-24 pb-20 px-4 sm:px-6 font-sans flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-10 space-y-4">
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
            <img src={logoUrl} alt="MES MLCOE Logo" className="h-16 mx-auto mb-4 drop-shadow-sm" />
          </Link>
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-mistral-black tracking-tight uppercase">Industry Partner Registration</h1>
          <p className="text-mistral-black/60 font-medium max-w-2xl mx-auto">
            Provide your company details below to join our network and connect with our talented students.
          </p>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="mb-8 bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg flex items-center gap-3">
            <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="font-medium">{errorMsg}</span>
          </div>
        )}

        {/* Registration Form */}
        <div className="bg-brand-ivory border border-mistral-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-mistral-orange to-brand-yellow"></div>
          
          <form onSubmit={handleSubmit} className="p-6 md:p-10 lg:p-12 space-y-12">
            
            {/* Section 1: Account Setup Credentials */}
            <section>
              <h3 className={sectionTitleClasses}>
                <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Account Setup Credentials
              </h3>
              <p className="text-xs text-mistral-black/50 mb-6 -mt-3 ml-11">This allows you to log back in later to post future internships.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div className="md:col-span-2">
                  <label className={labelClasses}>Official Corporate Email Address <span className="text-red-500 font-bold">*</span></label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="e.g. hr@tcs.com" className={inputClasses} />
                  <p className="text-[10px] text-mistral-black/40 mt-1.5">Must be a company domain (e.g., @tcs.com), not a generic @gmail.com.</p>
                </div>
                <div>
                  <label className={labelClasses}>Password <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative">
                    <input required name="password" value={formData.password} onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="••••••••" className={inputClasses + " pr-10"} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-mistral-black/50 hover:text-mistral-orange transition-colors">
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Confirm Password <span className="text-red-500 font-bold">*</span></label>
                  <div className="relative">
                    <input required name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" className={inputClasses + " pr-10"} />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-mistral-black/50 hover:text-mistral-orange transition-colors">
                      {showConfirmPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <div className="h-px bg-mistral-black/5 w-full"></div>

            {/* Section 2: Company Legal Identity & Profile */}
            <section>
              <h3 className={sectionTitleClasses}>
                <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Company Legal Identity & Profile
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div>
                  <label className={labelClasses}>Official Company Name <span className="text-red-500 font-bold">*</span></label>
                  <input required name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="As legally registered" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Company Website <span className="text-red-500 font-bold">*</span></label>
                  <input required name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://www.example.com" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Industry/Sector <span className="text-red-500 font-bold">*</span></label>
                  <CustomDropdown 
                    options={industryTypes}
                    value={formData.industryType}
                    onChange={(val) => handleChange({ target: { name: 'industryType', value: val, type: 'text' } })}
                    dropdownTitle="Select Industry"
                    buttonClassName={inputClasses + " flex items-center justify-between text-left"}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Year of Establishment <span className="text-red-500 font-bold">*</span></label>
                  <input required name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleChange} type="number" min="1800" max={new Date().getFullYear()} placeholder="e.g. 2010" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>CIN / GSTIN <span className="text-red-500 font-bold">*</span></label>
                  <input required name="cinGstin" value={formData.cinGstin} onChange={handleChange} type="text" placeholder="Corporate Identification Number or GSTIN" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Company Overview <span className="text-red-500 font-bold">*</span></label>
                  <textarea required name="description" value={formData.description} onChange={handleChange} rows="4" placeholder="Tell us about your company and mission (100-200 words)..." className={inputClasses + " resize-none"}></textarea>
                </div>
              </div>
            </section>

            <div className="h-px bg-mistral-black/5 w-full"></div>

            {/* Section 3: Company Scale & Location */}
            <section>
              <h3 className={sectionTitleClasses}>
                <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Company Scale & Location
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div>
                  <label className={labelClasses}>Company Size <span className="text-red-500 font-bold">*</span></label>
                  <CustomDropdown 
                    options={companySizes}
                    value={formData.companySize}
                    onChange={(val) => handleChange({ target: { name: 'companySize', value: val, type: 'text' } })}
                    dropdownTitle="Select Company Size"
                    buttonClassName={inputClasses + " flex items-center justify-between text-left"}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Headquarters Location <span className="text-red-500 font-bold">*</span></label>
                  <input required name="hqLocation" value={formData.hqLocation} onChange={handleChange} type="text" placeholder="City, State" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Primary Office Address <span className="text-red-500 font-bold">*</span></label>
                  <textarea required name="primaryAddress" value={formData.primaryAddress} onChange={handleChange} rows="2" placeholder="Full text address" className={inputClasses + " resize-none"}></textarea>
                </div>
              </div>
            </section>

            <div className="h-px bg-mistral-black/5 w-full"></div>

            {/* Section 4: Primary Point of Contact (PoC) */}
            <section>
              <h3 className={sectionTitleClasses}>
                <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Primary Point of Contact (PoC)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-11">
                <div>
                  <label className={labelClasses}>Full Name of Contact Person <span className="text-red-500 font-bold">*</span></label>
                  <input required name="pocName" value={formData.pocName} onChange={handleChange} type="text" placeholder="First Last" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Designation/Title <span className="text-red-500 font-bold">*</span></label>
                  <input required name="pocTitle" value={formData.pocTitle} onChange={handleChange} type="text" placeholder="e.g. HR Manager, Talent Acquisition" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Direct Mobile/Phone Number <span className="text-red-500 font-bold">*</span></label>
                  <input required name="pocMobile" value={formData.pocMobile} onChange={handleChange} type="tel" placeholder="+91 XXXXXXXXXX" className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Alternative Contact Number</label>
                  <input name="pocAltMobile" value={formData.pocAltMobile} onChange={handleChange} type="tel" placeholder="(Optional)" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>LinkedIn Profile URL of the PoC</label>
                  <input name="pocLinkedin" value={formData.pocLinkedin} onChange={handleChange} type="url" placeholder="https://linkedin.com/in/username (Recommended)" className={inputClasses} />
                </div>
              </div>
            </section>

            <div className="h-px bg-mistral-black/5 w-full"></div>

            {/* Section 5: Verification & Agreement */}
            <section>
              <h3 className={sectionTitleClasses}>
                <span className="bg-mistral-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                Verification & Agreement
              </h3>
              
              <div className="ml-0 md:ml-11 space-y-8">
                <div>
                  <label className={labelClasses}>Verification Document Upload <span className="text-mistral-black/40 font-normal normal-case">(Optional but recommended)</span></label>
                  <div className="mt-2 flex items-center gap-4">
                    <label className="cursor-pointer bg-white border border-mistral-black/20 hover:border-mistral-orange px-5 py-3 text-sm font-medium transition-colors flex items-center gap-2 group">
                      <svg className="w-5 h-5 text-mistral-black/50 group-hover:text-mistral-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                      Choose File
                      <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                    </label>
                    <span className="text-sm text-mistral-black/60 truncate max-w-xs">
                      {verificationFile ? verificationFile.name : 'No file chosen'}
                    </span>
                  </div>
                  <p className="text-[10px] text-mistral-black/40 mt-2">Upload a company incorporation certificate or a formal letterhead requesting partnership.</p>
                </div>

                <div className="bg-mistral-orange/5 border border-mistral-orange/20 p-5 rounded">
                  <label className="flex items-start gap-4 cursor-pointer">
                    <div className="relative flex items-center mt-0.5">
                      <input type="checkbox" name="termsAgreed" checked={formData.termsAgreed} onChange={handleChange} className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-mistral-black/20 bg-white checked:border-mistral-orange checked:bg-mistral-orange transition-all" />
                      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <span className="text-sm font-bold text-mistral-black uppercase tracking-wide">
                        <Link to="/terms-partnership" target="_blank" className="hover:text-mistral-orange underline underline-offset-4 decoration-mistral-orange/30 hover:decoration-mistral-orange transition-all">
                          Terms of Partnership
                        </Link>
                        <span className="text-red-500 font-bold ml-1">*</span>
                      </span>
                      <p className="text-xs text-mistral-black/60 mt-1 leading-relaxed">
                        I agree to the college's placement policies and confirm that I am an authorized representative of this company legally capable of registering for this partnership program.
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-6 border-t border-mistral-black/10 flex flex-col items-end">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto bg-mistral-black text-white px-14 py-4 uppercase tracking-widest text-sm font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl disabled:opacity-50 flex items-center justify-center gap-3 group rounded-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Registration
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        <div className="mt-10 text-center pb-8">
          <Link to="/" className="text-xs uppercase tracking-widest font-bold text-mistral-black/40 hover:text-mistral-orange transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryRegister;
