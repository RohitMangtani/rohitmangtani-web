'use client';

import { useEffect, useState, useRef } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const navRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Scrollspy: track which section is in view (top-down order)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // offset for header
      
      // Find the last section that's above the current scroll position
      let currentId = items[0]?.id || '';
      
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollY >= top) {
            currentId = item.id;
          }
        }
      }
      
      setActiveId(currentId);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  // Auto-scroll active chip into view (horizontal bar)
  useEffect(() => {
    if (activeRef.current && navRef.current) {
      activeRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      });
    }
  }, [activeId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderChip = (item: TOCItem, isVertical: boolean = false) => {
    const isActive = activeId === item.id;
    return (
      <a
        key={item.id}
        ref={isActive && !isVertical ? activeRef : null}
        href={`#${item.id}`}
        onClick={(e) => handleClick(e, item.id)}
        className={`
          relative shrink-0 transition-all duration-200
          ${isVertical 
            ? `block text-xs py-1.5 pl-3 border-l-2 ${isActive 
                ? 'border-blue-500 text-blue-500 font-semibold bg-blue-500/10' 
                : 'border-transparent text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--border)]'
              }`
            : `text-xs px-3 py-1.5 rounded-full border ${isActive 
                ? 'bg-blue-500 text-white border-blue-500 font-semibold shadow-lg shadow-blue-500/25' 
                : 'bg-[var(--bg)] border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--fg-muted)] hover:text-[var(--fg)]'
              }`
          }
        `}
      >
        {item.label}
      </a>
    );
  };

  return (
    <>
      {/* Horizontal sticky bar (mobile + desktop) */}
      <nav
        className="sticky top-0 z-50 -mx-6 px-6 py-2 bg-[var(--bg)]/95 backdrop-blur-sm border-b border-[var(--border)] lg:hidden"
        style={{ height: '44px' }}
      >
        <div
          ref={navRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide"
          style={{ 
            whiteSpace: 'nowrap',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {items.map((item) => renderChip(item, false))}
        </div>
      </nav>

      {/* Vertical sidebar (desktop only) */}
      <nav
        className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40 max-h-[70vh] overflow-y-auto"
        style={{ width: '160px' }}
      >
        <div className="bg-[var(--bg)]/90 backdrop-blur-sm rounded-lg border border-[var(--border)] p-3 shadow-lg">
          <div className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] mb-2 px-3">
            Sections
          </div>
          <div className="flex flex-col gap-0.5">
            {items.map((item) => renderChip(item, true))}
          </div>
        </div>
      </nav>
    </>
  );
}
