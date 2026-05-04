import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoUrl from '../../assets/logo.png';
import { useAuth } from '../../auth/AuthContext';

const IndustryLogin = () => {
  const navigate = useNavigate();
  const { user, loginIndustry } = useAuth();
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user?.role === 'industry') {
      navigate('/industry/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');

    // Validate inputs
    if (!company.trim() || !password.trim()) {
      setError('Please enter both company name and password.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await loginIndustry({ company, password });
      if (!result.ok) {
        setError(result.message);
        return;
      }
      navigate('/industry/dashboard');
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-mesh-pattern flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="bg-brand-ivory border border-mistral-black/10 shadow-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-mistral-orange to-brand-yellow" />

          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center gap-4 mb-10">
              <Link to="/">
                <img src={logoUrl} alt="MES MLCOE Logo" className="h-16 object-contain hover:opacity-80 transition-opacity" />
              </Link>
              <div className="text-center">
                <h1 className="font-heading font-bold text-xl uppercase tracking-wider text-mistral-black">MES MLCOE</h1>
                <p className="text-[10px] uppercase tracking-widest font-bold text-mistral-orange mt-1">Industry Partner Portal</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="font-heading font-bold text-2xl text-mistral-black tracking-tight">Welcome Back</h2>
              <p className="text-xs text-mistral-black/50 font-medium mt-1">Sign in to manage your internship listings and applicants.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/60">Company Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Registered company name"
                  className="w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium text-mistral-black focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/60">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pr-10 bg-brand-cream border border-mistral-black/10 text-sm font-medium text-mistral-black focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/30"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-mistral-black/50 hover:text-mistral-orange transition-colors">
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wide">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-mistral-orange text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-black transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
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
          </div>
        </div>

        <p className="text-center text-[10px] uppercase tracking-widest font-bold text-mistral-black/30 mt-6">
          <Link to="/" className="hover:text-mistral-orange transition-colors">Back to Public Portal</Link>
        </p>
      </div>
    </div>
  );
};

export default IndustryLogin;
