import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import logoUrl from '../../assets/logo.png';
import { useAuth } from '../../backend/auth/AuthContext';

const NAV_LINKS = [
  { to: '/superadmin/dashboard', label: 'Dashboard' },
  { to: '/superadmin/analytics', label: 'Analytics' },
  { to: '/superadmin/users', label: 'User Management' },
  { to: '/superadmin/students', label: 'Manage Students' },
];

const SuperadminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const sidebarElements = (
    <>
      <div className="h-20 md:h-24 px-6 md:px-8 border-b border-mistral-black/10 flex items-center justify-between md:justify-start">
        <Link to="/" onClick={closeSidebar} className="flex items-center gap-3 group">
          <img src={logoUrl} alt="MES MLCOE Logo" className="h-10 md:h-12 object-contain group-hover:opacity-80 transition-opacity" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-mistral-black leading-tight group-hover:text-mistral-orange transition-colors">MES MLCOE</span>
            <span className="text-[9px] uppercase tracking-widest text-mistral-black/60 font-semibold group-hover:text-mistral-orange transition-colors">Superadmin Portal</span>
          </div>
        </Link>
        <button
          onClick={closeSidebar}
          className="md:hidden p-1 text-mistral-black/40 hover:text-mistral-orange transition-colors"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
        {NAV_LINKS.map(link => (
          <Link 
            key={link.to}
            to={link.to} 
            onClick={closeSidebar}
            className={`px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${isActive(link.to) ? 'bg-mistral-black text-white shadow-lg scale-[1.02]' : 'text-mistral-black hover:bg-brand-yellow/30'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-mistral-black/10">
        <button 
          type="button"
          onClick={handleLogout} 
          className="w-full px-4 py-3 text-left uppercase tracking-widest text-xs font-bold text-mistral-black/60 hover:text-mistral-orange hover:bg-mistral-orange/5 transition-all duration-300 flex items-center justify-between"
        >
          <span>Log Out</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-brand-cream/30 flex font-sans text-mistral-black">
      {/* ── Mobile: Backdrop overlay ── */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-mistral-black/50 backdrop-blur-sm md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* ── Desktop: Static Sidebar ── */}
      <aside className="hidden md:flex w-64 bg-brand-ivory border-r border-mistral-black/10 flex-col flex-shrink-0 h-screen sticky top-0">
        {sidebarElements}
      </aside>

      {/* ── Mobile: Slide-in Drawer ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-brand-ivory border-r border-mistral-black/10 flex flex-col z-40 transition-transform duration-300 md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarElements}
      </aside>

      {/* ── Main Content Area ── */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 md:h-24 bg-brand-ivory border-b border-mistral-black/10 px-4 md:px-8 flex justify-between items-center z-10 shadow-sm sticky top-0">
          <div className="flex items-center gap-3">
            {/* Hamburger – mobile only */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 -ml-1 text-mistral-black hover:text-mistral-orange transition-colors focus:outline-none"
              aria-label="Open sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="font-heading font-semibold text-base md:text-2xl uppercase tracking-tight text-mistral-black truncate">System Admin</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Active Session</span>
              <span className="text-xs font-bold text-mistral-orange">SUPER_USER_01</span>
            </div>
            <Link 
              to="/superadmin/users" 
              className="w-10 h-10 bg-mistral-orange rounded-full border border-mistral-black/20 flex items-center justify-center font-bold text-white text-sm uppercase shadow-md hover:bg-mistral-black transition-colors"
              title="View Superadmin Users"
            >
              SA
            </Link>
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

export default SuperadminLayout;
