import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-mistral-black text-brand-ivory pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoUrl} alt="MES Logo" className="h-12 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-lg leading-tight text-white">MES MLCOE</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">Internship Portal</span>
            </div>
          </div>
          <p className="text-sm text-brand-ivory/60 leading-relaxed max-w-xs">
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
            <li><a href="#" className="hover:text-mistral-orange transition-colors">Student Guidelines</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-brand-ivory/60">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-mistral-orange">•</span>
              <span>CTS, 30, F.P.28, Karve Road, Pune 411004</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-mistral-orange">•</span>
              <span>internships@mlcoe.pune</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-mistral-orange">•</span>
              <span>+91759 73637</span>
            </li>
          </ul>
        </div>

        {/* Portals */}
        <div>
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest mb-6 text-white">Social Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.134l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mistral-orange hover:text-white transition-all duration-300 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 transition-opacity">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-brand-ivory/40 uppercase tracking-widest font-medium">
        <p>© {new Date().getFullYear()} Maharashtra Education Society. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
