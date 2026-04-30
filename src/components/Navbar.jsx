import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.png';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Handle closing mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 md:py-6 flex justify-between items-center bg-brand-ivory/80 backdrop-blur-md border-b border-mistral-black/10">
        <div className="flex items-center gap-4 md:gap-12">
          {/* Mobile Menu Toggle (Left Side) */}
          <button 
            className="md:hidden text-mistral-black p-2 -ml-2 focus:outline-none hover:text-mistral-orange transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo Link */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoUrl} alt="MES MLCOE Logo" className="h-10 md:h-12 object-contain group-hover:opacity-80 transition-opacity" />
            <div className="hidden lg:flex flex-col">
              <span className="font-heading font-bold text-sm uppercase tracking-wider text-mistral-black leading-tight group-hover:text-mistral-orange transition-colors">MES MLCOE</span>
              <span className="text-[10px] uppercase tracking-widest text-mistral-black/60 font-semibold group-hover:text-mistral-orange transition-colors">Internship Portal</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group py-2">
              <button 
                className={`transition-colors duration-200 uppercase tracking-widest text-sm font-semibold flex items-center gap-1 ${isActive('/about') || isActive('/principal-message') ? 'text-mistral-orange' : 'text-mistral-black group-hover:text-mistral-orange'}`}
              >
                About Us
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-0 w-64 bg-brand-ivory border border-mistral-black/10 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden z-50 flex flex-col">
                <Link 
                  to="/about"
                  className={`px-5 py-4 text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-mistral-orange/10 hover:text-mistral-orange ${isActive('/about') ? 'text-mistral-orange bg-mistral-orange/5' : 'text-mistral-black'}`}
                >
                  MES MLCOE
                </Link>
                <Link 
                  to="/principal-message"
                  className={`px-5 py-4 text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-mistral-orange/10 hover:text-mistral-orange border-t border-mistral-black/5 ${isActive('/principal-message') ? 'text-mistral-orange bg-mistral-orange/5' : 'text-mistral-black'}`}
                >
                  Principal's Message
                </Link>
              </div>
            </div>
            <Link 
              to="/help" 
              className={`transition-colors duration-200 uppercase tracking-widest text-sm font-semibold ${isActive('/help') ? 'text-mistral-orange' : 'text-mistral-black hover:text-mistral-orange'}`}
            >
              Help
            </Link>
            <a 
              href="https://mlcoe.mespune.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-colors duration-200 uppercase tracking-widest text-sm font-semibold text-mistral-black hover:text-mistral-orange"
            >
              Admissions
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <Link 
            to="/industry-register"
            className="hidden md:block border border-mistral-black/20 text-mistral-black px-5 md:px-6 py-2.5 md:py-3 uppercase tracking-wide font-normal text-xs md:text-sm hover:bg-mistral-black hover:text-white transition-all duration-300"
          >
            Company Register
          </Link>
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="bg-mistral-black text-white px-5 md:px-6 py-2.5 md:py-3 uppercase tracking-wide font-normal text-xs md:text-sm hover:bg-mistral-orange transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed top-[76px] left-0 right-0 bg-brand-ivory/95 backdrop-blur-xl border-b border-mistral-black/10 z-40 transition-all duration-300 overflow-hidden md:hidden shadow-2xl ${isMobileMenuOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col">
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            className={`uppercase tracking-widest text-sm font-semibold px-8 py-5 border-b border-mistral-black/5 transition-colors ${isActive('/') ? 'text-mistral-orange bg-mistral-orange/5' : 'text-mistral-black hover:bg-black/5'}`}
          >
            Home
          </Link>
          
          <div className="flex flex-col border-b border-mistral-black/5">
            <button 
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              className={`uppercase tracking-widest text-sm font-semibold px-8 py-5 flex justify-between items-center transition-colors ${isActive('/about') || isActive('/principal-message') ? 'text-mistral-orange bg-mistral-orange/5' : 'text-mistral-black hover:bg-black/5'}`}
            >
              About Us
              <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180 text-mistral-orange' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`flex flex-col bg-mistral-black/5 overflow-hidden transition-all duration-300 ${isMobileAboutOpen ? 'max-h-48' : 'max-h-0'}`}>
              <Link 
                to="/about"
                onClick={closeMobileMenu}
                className={`px-8 py-4 pl-12 text-sm font-semibold uppercase tracking-widest transition-colors ${isActive('/about') ? 'text-mistral-orange bg-mistral-orange/10' : 'text-mistral-black hover:bg-mistral-orange/5'}`}
              >
                MES MLCOE
              </Link>
              <Link 
                to="/principal-message"
                onClick={closeMobileMenu}
                className={`px-8 py-4 pl-12 text-sm font-semibold uppercase tracking-widest border-t border-mistral-black/5 transition-colors ${isActive('/principal-message') ? 'text-mistral-orange bg-mistral-orange/10' : 'text-mistral-black hover:bg-mistral-orange/5'}`}
              >
                Principal's Message
              </Link>
            </div>
          </div>

          <Link 
            to="/help" 
            onClick={closeMobileMenu}
            className={`uppercase tracking-widest text-sm font-semibold px-8 py-5 border-b border-mistral-black/5 transition-colors ${isActive('/help') ? 'text-mistral-orange bg-mistral-orange/5' : 'text-mistral-black hover:bg-black/5'}`}
          >
            Help
          </Link>
          <a 
            href="https://mlcoe.mespune.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="uppercase tracking-widest text-sm font-semibold px-8 py-5 border-b border-mistral-black/5 text-mistral-black hover:bg-black/5 transition-colors"
          >
            Admissions
          </a>
          <Link 
            to="/industry-register" 
            onClick={closeMobileMenu}
            className="uppercase tracking-widest text-sm font-semibold px-8 py-5 text-mistral-orange hover:bg-mistral-orange/5 transition-colors"
          >
            Company Register
          </Link>
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
