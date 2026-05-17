import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../backend/auth/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { loginPortalUser } = useAuth();
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await loginPortalUser({ role, email, password });
      if (!result.ok) {
        setError(result.message || 'Login failed. Please try again.');
        return;
      }

      onClose();
      if (role === 'superadmin') {
        navigate('/superadmin/dashboard');
      } else if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-brand-ivory border border-mistral-black/10 shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-heading font-semibold text-2xl uppercase tracking-tight">Login</h2>
                <button type="button" onClick={handleClose} className="text-mistral-black/40 hover:text-mistral-orange transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Portal</label>
                  <select
                    value={role}
                    onChange={(event) => {
                      setRole(event.target.value);
                      setError('');
                    }}
                    className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
                  >
                    <option value="student">Student Portal</option>
                    <option value="admin">Admin Portal</option>
                    <option value="superadmin">Superadmin Portal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
                    placeholder={role === 'admin' ? 'admin@mlcoe.in' : 'student@mlcoe.mespune.in'}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 pr-10 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
                      placeholder="Password"
                      required
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

                <button type="submit" disabled={loading} className="w-full bg-mistral-black text-white py-4 uppercase tracking-widest font-semibold text-sm hover:bg-mistral-orange transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
