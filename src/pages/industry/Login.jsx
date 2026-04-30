import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoUrl from '../../assets/logo.png';

// Mock industry credentials: company name → password
const INDUSTRY_ACCOUNTS = {
  'Google': 'google123',
  'Microsoft': 'ms2024',
  'Amazon': 'amzn456',
  'Infosys': 'infosys789',
};

const IndustryLogin = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const trimmed = company.trim();
    if (!trimmed || !password) {
      setError('Please fill in all fields.');
      return;
    }
    const validPass = INDUSTRY_ACCOUNTS[trimmed];
    if (!validPass || validPass !== password) {
      setError('Invalid company name or password. Please try again.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('industryCompany', trimmed);
      navigate('/industry/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-mesh-pattern flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-brand-ivory border border-mistral-black/10 shadow-2xl overflow-hidden">
          {/* Header stripe */}
          <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-400" />

          <div className="p-8 sm:p-10">
            {/* Logo + Title */}
            <div className="flex flex-col items-center gap-4 mb-10">
              <Link to="/">
                <img src={logoUrl} alt="MES MLCOE Logo" className="h-16 object-contain hover:opacity-80 transition-opacity" />
              </Link>
              <div className="text-center">
                <h1 className="font-heading font-bold text-xl uppercase tracking-wider text-mistral-black">MES MLCOE</h1>
                <p className="text-[10px] uppercase tracking-widest font-bold text-blue-600 mt-1">Industry Partner Portal</p>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-mistral-black tracking-tight">Welcome Back</h2>
              <p className="text-xs text-mistral-black/50 font-medium mt-1">Sign in to manage your internship listings and applicants.</p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/60">Company Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Google"
                  className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium text-mistral-black focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-mistral-black/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/60">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium text-mistral-black focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-mistral-black/30"
                />
              </div>

              {error && (
                <div className="px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wide">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-black transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Signing In...
                  </>
                ) : 'Sign In to Portal'}
              </button>
            </form>

            {/* Demo hint */}
            <div className="mt-8 pt-6 border-t border-mistral-black/5">
              <p className="text-[10px] uppercase tracking-widest font-bold text-mistral-black/30 mb-3">Demo Accounts</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(INDUSTRY_ACCOUNTS).map(c => (
                  <button key={c} onClick={() => { setCompany(c); setPassword(INDUSTRY_ACCOUNTS[c]); }}
                    className="text-left px-3 py-2 bg-brand-cream border border-mistral-black/5 hover:border-blue-300 hover:bg-blue-50 transition-all">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-mistral-black">{c}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] uppercase tracking-widest font-bold text-mistral-black/30 mt-6">
          <Link to="/" className="hover:text-blue-600 transition-colors">← Back to Public Portal</Link>
        </p>
      </div>
    </div>
  );
};

export default IndustryLogin;
