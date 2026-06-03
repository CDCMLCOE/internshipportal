import React from 'react';

const PageHeader = ({
  title,
  subtitle,
  children,
  className = '',
  titleClassName = 'text-3xl font-heading font-bold uppercase tracking-tight',
  subtitleClassName = 'text-mistral-black/60 font-medium mt-2'
}) => {
  return (
    <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 ${className}`}>
      <div className="max-w-xl">
        <h2 className={titleClassName}>{title}</h2>
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      </div>
      {children && (
        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {children}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
