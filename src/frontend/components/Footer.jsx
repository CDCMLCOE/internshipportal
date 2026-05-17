import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-mistral-black text-brand-ivory pt-14 md:pt-20 pb-8 md:pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 pr-4">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white p-2 rounded-xl shadow-sm">
              <img src={logoUrl} alt="MES Logo" className="h-14 w-auto object-contain" />
            </div>
            <div className="flex flex-col mt-1">
              <span className="font-heading font-semibold text-xl leading-tight text-white tracking-wide">MES MLCOE</span>
              <span className="text-xs text-white/70 font-medium mt-1">Mukunddas Lohia College of Engineering</span>
              <span className="text-[10px] uppercase tracking-widest text-mistral-orange mt-2 font-bold">Internship Portal</span>
            </div>
          </div>
          <p className="text-sm text-brand-ivory/60 leading-relaxed max-w-sm mb-6">
            Empowering students with real-world experience through strategic industry partnerships and career guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-sm text-brand-ivory/60">
            <li><Link to="/" className="hover:text-mistral-orange transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-mistral-orange transition-colors">About MES MLCOE</Link></li>
            <li><Link to="/help" className="hover:text-mistral-orange transition-colors">Support & FAQ</Link></li>
            <li><Link to="/student-guidelines" className="hover:text-mistral-orange transition-colors">Student Guidelines</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-brand-ivory/60">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-mistral-orange">•</span>
              <a href="https://maps.google.com/?q=CTS,+30,+F.P.28,+Karve+Road,+Pune+411004" target="_blank" rel="noopener noreferrer" className="hover:text-mistral-orange transition-colors">
                CTS, 30, F.P.28, Karve Road, Pune 411004
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-mistral-orange">•</span>
              <a href="mailto:internships@mlcoe.pune" className="hover:text-mistral-orange transition-colors">internships@mlcoe.pune</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-mistral-orange">•</span>
              <a href="tel:+9175973637" className="hover:text-mistral-orange transition-colors">+91759 73637</a>
            </li>
          </ul>
        </div>

        {/* Portals */}
        <div className="lg:justify-self-end">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white">Social Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/mesmlcoe/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.instagram.com/mesmlcoe?igsh=b2ZoNmppbjB0MWl2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.youtube.com/@mesmlcoe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/18QRf5hziR/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[11px] md:text-[12px] text-brand-ivory/40 uppercase tracking-widest font-medium text-center">
        <p>© {new Date().getFullYear()} Maharashtra Education Society. All rights reserved.</p>
        <div className="flex gap-12">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/terms-partnership" className="hover:text-white transition-colors">Terms of Partnership</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
