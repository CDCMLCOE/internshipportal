import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoUrl from '../assets/logo.png';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-brand-ivory/80 backdrop-blur-md border-b border-mistral-black/10">
        <div className="flex items-center gap-12">
          {/* Home Link */}
          <Link 
            to="/" 
            className={`transition-colors duration-200 uppercase tracking-widest text-sm font-semibold ${isActive('/') ? 'text-mistral-orange' : 'text-mistral-black hover:text-mistral-orange'}`}
          >
            Home
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`transition-colors duration-200 uppercase tracking-widest text-sm font-semibold ${isActive('/about') ? 'text-mistral-orange' : 'text-mistral-black hover:text-mistral-orange'}`}
            >
              About Us
            </Link>
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

        <div>
          <button 
            onClick={() => setIsLoginOpen(true)}
            className="bg-mistral-black text-white px-6 py-3 uppercase tracking-wide font-normal text-sm hover:bg-mistral-orange transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Navbar;
