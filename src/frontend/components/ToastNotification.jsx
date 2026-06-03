import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ToastNotification = ({
  message,
  onDismiss,
  type = 'success',
  position = 'fixed bottom-8 right-8 z-[100]',
  duration = 3000,
  showIcon = true,
  className = ''
}) => {
  const iconMap = {
    success: (
      <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  // Auto-dismiss
  React.useEffect(() => {
    if (message && duration > 0 && onDismiss) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onDismiss]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          className={`${position} flex items-center gap-3 px-6 py-4 bg-mistral-black text-white shadow-2xl border border-white/10 rounded-lg ${className}`}
        >
          {showIcon && iconMap[type] || iconMap.success}
          <span className="text-xs font-bold uppercase tracking-widest">{message}</span>
          {onDismiss && (
            <button onClick={onDismiss} className="ml-2 p-1 hover:text-mistral-orange transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;
