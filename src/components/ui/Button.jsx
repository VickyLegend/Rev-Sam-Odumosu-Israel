import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  to, 
  onClick, 
  children, 
  className = '' 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded cursor-pointer';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#c9a94b] to-[#a07a20] text-white hover:shadow-[0_0_20px_rgba(201,169,75,0.5)]',
    outline: 'bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy',
    crimson: 'bg-gradient-to-r from-brand-crimson to-brand-crimson-light text-white hover:opacity-90'
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
