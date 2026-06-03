import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FilterDropdown = ({
  isOpen,
  onToggle,
  onClose,
  triggerLabel = 'Filter',
  children,
  buttonClassName = 'w-full md:w-auto px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm',
  panelClassName = 'absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-hidden',
  showCloseButton = true,
  closeButtonColor = 'text-mistral-black/40 hover:text-mistral-orange'
}) => {
  return (
    <div className="relative w-full md:w-auto">
      <button
        onClick={onToggle}
        className={buttonClassName}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        {triggerLabel}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={panelClassName}
          >
            {showCloseButton && (
              <div className="flex justify-end p-2 border-b border-mistral-black/5 bg-brand-cream/20">
                <button
                  onClick={onClose}
                  className={`p-1 hover:bg-mistral-black/5 rounded-full transition-colors ${closeButtonColor}`}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
