import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoUrl from '../../../assets/logo.png';
import { supabase } from '../../../backend/services/supabaseClient';

const IndustryRegister = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industryType: 'Technology',
    website: '',
    contactPerson: '',
    email: '',
    phone: '',
    description: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const industryTypes = [
    'Technology', 'Manufacturing', 'Finance', 'Healthcare', 'Education', 'Media & Entertainment', 'Consulting', 'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { role: 'industry' },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (!data.user) {
        setError('Failed to create account. Please try again.');
        return;
      }

      const { error: regError } = await supabase.from('industry_registrations').insert({
        email: formData.email,
        company_name: formData.companyName,
        website: formData.website || null,
        industry_type: formData.industryType,
        description: formData.description || null,
        poc_name: formData.contactPerson,
        poc_mobile: formData.phone || null,
        status: 'Pending',
      });

      if (regError) {
        console.error('Registration insert error:', regError);
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-mesh-pattern flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-brand-ivory p-10 border border-mistral-black/10 shadow-2xl text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-heading font-bold text-3xl text-mistral-black tracking-tight uppercase">Registration Received!</h2>
          <p className="text-mistral-black/60 font-medium leading-relaxed">
            Your account has been created. You can now log in with your email and password. Our team will review and approve your registration.
          </p>
          <Link
            to="/"
            className="inline-block bg-mistral-black text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-lg mt-4"
          >
            Go to Login
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-pattern pt-24 pb-12 px-6 font-sans flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <img src={logoUrl} alt="MES MLCOE Logo" className="h-20 mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl text-mistral-black tracking-tight uppercase">Industry Partner Registration</h1>
          <p className="text-mistral-black/60 font-medium max-w-2xl mx-auto">
            Join our network of industry leaders and provide transformative internship opportunities for our students.
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-brand-ivory border border-mistral-black/10 shadow-2xl overflow-hidden rounded-xl">
          <div className="h-2 bg-gradient-to-r from-mistral-orange to-brand-yellow"></div>
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Company Info */}
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-lg text-mistral-black uppercase tracking-wider border-b border-mistral-black/5 pb-2">Company Information</h3>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Company Name *</label>
                  <input required name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="e.g. Google India" className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Industry Sector</label>
                  <select name="industryType" value={formData.industryType} onChange={handleChange} className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all appearance-none cursor-pointer">
                    {industryTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Company Website</label>
                  <input name="website" value={formData.website} onChange={handleChange} type="url" placeholder="https://www.company.com" className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="font-heading font-bold text-lg text-mistral-black uppercase tracking-wider border-b border-mistral-black/5 pb-2">Contact Details</h3>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Contact Person Name *</label>
                  <input required name="contactPerson" value={formData.contactPerson} onChange={handleChange} type="text" placeholder="Full Name" className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Official Email ID *</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="hr@company.com" className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Contact Phone Number *</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">Create Password *</label>
                  <input required name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Choose a password" className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all" />
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/50">About the Company / Internship Goals</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="4" placeholder="Briefly describe your company and the type of internships you wish to offer..." className="w-full bg-brand-cream border border-mistral-black/10 px-4 py-3 text-sm font-medium focus:outline-none focus:border-mistral-orange transition-all resize-none" />
              </div>
            </div>

            {error && (
              <div className="px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wide mb-6">
                {error}
              </div>
            )}

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-mistral-black/5">
              <p className="text-[10px] text-mistral-black/40 font-bold uppercase tracking-widest text-center md:text-left">
                By submitting, you agree to our Terms of Partnership.
              </p>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto bg-mistral-black text-white px-12 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                    Processing...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 hover:text-mistral-orange transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryRegister;
