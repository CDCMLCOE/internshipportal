import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth = 'max-w-2xl',
  showCloseButton = true,
  closeButtonClassName = 'w-8 h-8 flex items-center justify-center rounded-full bg-mistral-black/5 hover:bg-mistral-orange hover:text-white transition-colors',
  panelClassName = 'relative w-full bg-brand-ivory rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]',
  backdropClassName = 'absolute inset-0 bg-mistral-black/60 backdrop-blur-sm',
  containerClassName = 'fixed inset-0 z-50 flex items-center justify-center p-4'
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={containerClassName}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={backdropClassName}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`${panelClassName} ${maxWidth}`}
          >
            {showCloseButton && (
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 z-10 ${closeButtonClassName}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
