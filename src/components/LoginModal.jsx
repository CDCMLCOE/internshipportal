import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onClose();
    navigate('/student/dashboard');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-brand-ivory border border-mistral-black/10 shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-heading font-semibold text-2xl uppercase tracking-tight">Login</h2>
                <button type="button" onClick={onClose} className="text-mistral-black/40 hover:text-mistral-orange transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Username or Email</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
                    placeholder="Enter your credentials"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Password</label>
                  <input 
                    type="password" 
                    className="w-full bg-brand-cream/50 border border-mistral-black/10 px-4 py-3 focus:outline-none focus:border-mistral-orange transition-colors font-sans text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-mistral-orange" />
                    <span className="text-[12px] text-mistral-black/60 group-hover:text-mistral-black transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-[12px] text-mistral-orange hover:underline">Forgot Password?</a>
                </div>

                <button type="submit" className="w-full bg-mistral-black text-white py-4 uppercase tracking-widest font-semibold text-sm hover:bg-mistral-orange transition-colors duration-300">
                  Sign In
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
