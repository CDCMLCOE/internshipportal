import React, { useState } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import logoUrl from '../../assets/logo.png';
import { useAuth } from '../../backend/auth/AuthContext';

const NAV_LINKS = [
  {
    to: '/student/dashboard',
    label: 'Dashboard',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    to: '/student/application',
    label: 'My Application',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    to: '/student/profile',
    label: 'Profile',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    to: '/student/assignments',
    label: 'Assignments',
    icon: (
      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const StudentLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => location.pathname === path || (path === '/student/dashboard' && location.pathname === '/student');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  const sidebarElements = (
    <>
      {/* Logo */}
      <div className="h-20 md:h-24 px-6 border-b border-mistral-black/10 flex items-center justify-between">
        <Link to="/" onClick={closeSidebar} className="flex items-center gap-3 group">
          <img src={logoUrl} alt="MES MLCOE Logo" className="h-10 object-contain group-hover:opacity-80 transition-opacity" />
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-mistral-black leading-tight group-hover:text-mistral-orange transition-colors">MES MLCOE</span>
            <span className="text-[9px] uppercase tracking-widest text-mistral-black/60 font-semibold group-hover:text-mistral-orange transition-colors">Student Portal</span>
          </div>
        </Link>
        {/* Close button – only visible inside mobile drawer */}
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

      {/* Nav Links */}
      <nav className="flex-1 py-6 px-3 flex flex-col gap-2">
        {NAV_LINKS.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            onClick={closeSidebar}
            className={`flex items-center gap-3 px-4 py-3 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
              isActive(to)
                ? 'bg-mistral-orange text-white shadow-sm'
                : 'text-mistral-black hover:bg-brand-yellow/30'
            }`}
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-mistral-black/10">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full px-4 py-3 text-left uppercase tracking-widest text-xs font-bold text-mistral-black/60 hover:text-mistral-orange hover:bg-mistral-orange/5 transition-all duration-300 flex items-center gap-3"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Log Out</span>
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
            <h1 className="font-heading font-semibold text-base md:text-2xl uppercase tracking-tight text-mistral-black">
              Student Portal
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              to="/student/profile" 
              className="w-9 h-9 md:w-10 md:h-10 bg-mistral-black rounded-full border border-mistral-black/20 flex items-center justify-center font-bold text-white text-sm uppercase shrink-0 hover:bg-mistral-orange transition-all duration-300 cursor-pointer shadow-sm active:scale-95"
              title="View Profile"
            >
              ST
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

export default StudentLayout;
