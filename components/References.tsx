'use client';

import { useState } from 'react';
import { ReactNode } from 'react';

interface ReferencesProps {
  children: ReactNode;
}

export default function References({ children }: ReferencesProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left py-3 border-t border-[var(--border)]"
      >
        <span className="text-sm font-medium text-[var(--fg-muted)]">References</span>
        <span 
          className={`text-xs text-[var(--fg-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          ▼
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pt-3 pb-2">
          {children}
        </div>
      </div>
    </section>
  );
}
