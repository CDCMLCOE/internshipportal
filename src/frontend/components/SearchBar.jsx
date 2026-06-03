import React from 'react';

const SearchBar = ({
  value,
  onChange,
  placeholder = 'Search...',
  wrapperClassName = 'relative w-full md:w-80 group',
  inputClassName = 'block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/20',
  iconColor = 'text-mistral-black/40 group-focus-within:text-mistral-orange'
}) => {
  return (
    <div className={wrapperClassName}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className={`w-4 h-4 ${iconColor} transition-colors`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputClassName}
      />
    </div>
  );
};

export default SearchBar;
