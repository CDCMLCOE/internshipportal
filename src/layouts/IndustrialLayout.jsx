import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

const IndustrialLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [company, setCompany] = useState('');

  useEffect(() => {
    setCompany(localStorage.getItem('industryCompany') || '');
  }, []);

  const initials = company ? company.slice(0, 2).toUpperCase() : 'IN';

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('industryCompany');
    navigate('/industry');
  };

  return (
    <div className="min-h-screen bg-brand-cream/30 flex flex-col md:flex-row font-sans text-mistral-black">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-brand-ivory border-r border-mistral-black/10 flex flex-col">
        <div className="p-6 md:p-8 border-b border-mistral-black/10 flex justify-center md:justify-start">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoUrl} alt="MES MLCOE Logo" className="h-10 md:h-12 object-contain group-hover:opacity-80 transition-opacity" />
            <div className="flex flex-col text-left">
              <span className="font-heading font-bold text-sm uppercase tracking-wider text-mistral-black leading-tight group-hover:text-blue-600 transition-colors">MES MLCOE</span>
              <span className="text-[9px] uppercase tracking-widest text-blue-600 font-semibold">Industry Portal</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
          <Link
            to="/industry/dashboard"
            className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
              isActive('/industry/dashboard') || isActive('/industry/dashboard')
                ? 'bg-mistral-black text-white'
                : 'text-mistral-black hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/industry/internships"
            className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
              isActive('/industry/internships')
                ? 'bg-mistral-black text-white'
                : 'text-mistral-black hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            Manage Internships
          </Link>
          <Link
            to="/industry/applicants"
            className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
              isActive('/industry/applicants')
                ? 'bg-mistral-black text-white'
                : 'text-mistral-black hover:bg-blue-50 hover:text-blue-700'
            }`}
          >
            Applicants
          </Link>
        </nav>

        <div className="p-4 border-t border-mistral-black/10">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-left uppercase tracking-widest text-xs font-bold text-mistral-black/60 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-between"
          >
            <span>Log Out</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-brand-ivory border-b border-mistral-black/10 p-4 md:p-8 flex justify-between items-center z-10 shadow-sm">
          <h1 className="font-heading font-semibold text-xl md:text-2xl uppercase tracking-tight text-mistral-black">
            {company ? `${company} — Industry Portal` : 'Industry Management Control'}
          </h1>
          <div className="flex items-center gap-3">
            {company && <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 hidden md:block">{company}</span>}
            <div className="w-10 h-10 bg-blue-600 rounded-full border border-blue-700 flex items-center justify-center font-bold text-white text-sm uppercase">
              {initials}
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-mesh-pattern">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default IndustrialLayout;
