import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomDropdown = ({
  options,
  value,
  onChange,
  label = '',
  placeholder = 'Select an option',
  dropdownTitle = 'Options',
  wrapperClassName = 'relative w-full',
  buttonClassName = 'w-full px-4 py-3 bg-brand-cream border border-mistral-black/10 text-sm font-medium text-mistral-black hover:border-mistral-orange transition-all flex items-center justify-between',
  iconColor = 'text-mistral-black/40'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={wrapperClassName} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName}
      >
        <span className="flex items-center gap-2 truncate">
          {label && <span className="font-bold">{label}</span>}
          <span className={!value ? 'text-mistral-black/30' : ''}>
            {value || placeholder}
          </span>
        </span>
        <svg 
          className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${iconColor}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 mt-2 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-hidden"
          >
            <div className="flex justify-between items-center p-2 px-4 border-b border-mistral-black/5 bg-brand-cream/20">
              <span className="text-[8px] uppercase tracking-widest font-bold text-mistral-black/40">{dropdownTitle}</span>
              <button 
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-mistral-black/5 rounded-full transition-colors text-mistral-black/40 hover:text-mistral-orange"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="py-1 max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                    value === opt ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropdown;
