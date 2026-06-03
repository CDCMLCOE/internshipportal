import React from 'react';

const statusStyles = {
  // Task/Student statuses
  'Task Complete': 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
  'Task Incomplete': 'bg-rose-500/10 text-rose-700 border-rose-500/30',
  'Pending': 'bg-brand-yellow/50 text-mistral-black border-brand-yellow',
  'No Task': 'bg-brand-cream text-mistral-black/60 border-mistral-black/10',
  // Application statuses
  'Shortlisted': 'bg-green-100 text-green-800',
  'Reviewed': 'bg-blue-100 text-blue-800',
  'Rejected': 'bg-red-100 text-red-800',
  // Industry registration statuses
  'Under Review': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
  // Internship statuses
  'Active': 'text-green-600',
  'Closed': 'text-red-500',
  // Approval statuses
  'approved': 'bg-green-100 text-green-700',
  'rejected': 'bg-red-100 text-red-700',
  'pending': 'bg-amber-100 text-amber-700',
  // Category badges
  'category': 'bg-brand-yellow/30 text-mistral-black',
};

const StatusBadge = ({
  status,
  className = '',
  baseClassName = 'text-[10px] uppercase font-bold px-2 py-1',
  style = null // 'pill' | 'inline' | null
}) => {
  const normalizedStatus = status || 'Pending';
  const colorClass = statusStyles[normalizedStatus] || 'bg-gray-100 text-gray-800';
  
  const styleClass = style === 'pill' 
    ? `${baseClassName} border`
    : style === 'inline'
      ? 'text-[10px] uppercase font-bold'
      : baseClassName;

  return (
    <span className={`${styleClass} ${colorClass} ${className}`}>
      {normalizedStatus}
    </span>
  );
};

export default StatusBadge;
