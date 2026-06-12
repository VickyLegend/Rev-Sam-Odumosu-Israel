import React from 'react';

export default function SectionBadge({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-display tracking-widest uppercase mb-4 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-2"></span>
      {children}
    </div>
  );
}
