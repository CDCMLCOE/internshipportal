import React from 'react';

const StatCard = ({
  label,
  value,
  className = 'bg-brand-ivory border border-mistral-black/10 p-4',
  labelClassName = 'text-[10px] font-bold uppercase tracking-widest text-mistral-black/40',
  valueClassName = 'text-3xl font-heading font-bold text-mistral-black'
}) => {
  return (
    <div className={className}>
      <p className={labelClassName}>{label}</p>
      <p className={valueClassName}>{value}</p>
    </div>
  );
};

export default StatCard;
