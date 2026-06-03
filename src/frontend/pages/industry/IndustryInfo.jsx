import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoUrl from '../../../assets/logo.png';

const IndustryInfo = () => {
  const steps = [
    {
      num: '01',
      title: 'Register Your Company',
      desc: 'Fill out the registration form with your company details, legal identity, and point of contact.',
    },
    {
      num: '02',
      title: 'Verification & Approval',
      desc: 'Our admin team reviews your application within 48 hours. You will receive an email once approved.',
    },
    {
      num: '03',
      title: 'Post Internships',
      desc: 'Log in to your dashboard and create internship listings with roles, stipends, and requirements.',
    },
    {
      num: '04',
      title: 'Hire Top Talent',
      desc: 'Review student applications, conduct interviews, and select the best candidates for your organization.',
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      title: 'Access Skilled Students',
      desc: 'Connect with pre-vetted engineering students from IT, CS, Mechanical, and other disciplines.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      title: 'Verified Platform',
      desc: 'A trusted portal backed by MES MLCOE with 160+ years of educational excellence.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      ),
      title: 'Fast Hiring',
      desc: 'Streamlined application and selection process — post an internship and start receiving applications within hours.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
      ),
      title: 'Manage Applications',
      desc: 'Track applications, shortlist candidates, and manage your hiring pipeline from a single dashboard.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-20 px-4 md:px-8 max-w-5xl mx-auto"
    >
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-mistral-black mb-4 md:mb-6">
          Become an Industry Partner.
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed max-w-3xl mx-auto font-sans">
          Join our network of 500+ companies and connect with talented engineering students ready to contribute to your organization.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="bg-mistral-black text-white p-6 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center rounded-2xl shadow-xl mb-24">
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">500+</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Industry Partners</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">2000+</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Internships Posted</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">95%</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Hiring Success Rate</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">10k+</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Students Available</div>
        </div>
      </div>

      {/* Why Partner Section */}
      <div className="mb-24">
        <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-10"># Why Partner With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-mistral-orange/10 text-mistral-orange flex items-center justify-center rounded-lg">
                {b.icon}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-mistral-black mb-2">{b.title}</h3>
                <p className="text-mistral-black/60 leading-relaxed text-base">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-10"># How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.title} className="text-center md:text-left">
              <div className="text-4xl font-bold font-portal text-mistral-orange/20 mb-3">{s.num}</div>
              <h3 className="font-heading font-semibold text-lg text-mistral-black mb-2">{s.title}</h3>
              <p className="text-mistral-black/60 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requirements Section */}
      <div className="mb-24">
        <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-10"># What You Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-mistral-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-mistral-black/70">Official corporate email address (not personal Gmail/Yahoo)</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-mistral-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-mistral-black/70">Company CIN or GSTIN for legal verification</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-mistral-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-mistral-black/70">Authorized representative details (HR or Talent Acquisition)</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-mistral-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-mistral-black/70">Company incorporation certificate (recommended)</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-mistral-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-mistral-black/70">Agreement to our Terms of Partnership</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-mistral-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <p className="text-mistral-black/70">Valid phone number for verification purposes</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-cream border border-mistral-black/5 p-8 sm:p-10 md:p-14 text-center rounded-2xl">
        <img src={logoUrl} alt="MES MLCOE Logo" className="h-16 mx-auto mb-6 object-contain" />
        <h2 className="font-heading font-semibold text-2xl md:text-3xl text-mistral-black mb-4">Ready to Get Started?</h2>
        <p className="text-mistral-black/60 mb-8 max-w-xl mx-auto">
          Registration takes less than 5 minutes. Your account will be reviewed and approved within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/industry-register"
            className="bg-mistral-black text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-orange transition-all duration-300 shadow-xl"
          >
            Register Now
          </Link>
          <Link 
            to="/terms-partnership"
            className="border border-mistral-black/20 text-mistral-black px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-mistral-black hover:text-white transition-all duration-300"
          >
            Read Partnership Terms
          </Link>
        </div>
      </div>

      {/* Footer Link */}
      <div className="mt-16 text-center">
        <Link to="/" className="text-xs uppercase tracking-widest font-bold text-mistral-black/40 hover:text-mistral-orange transition-colors">
          ← Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default IndustryInfo;
