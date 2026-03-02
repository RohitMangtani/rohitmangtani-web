'use client';

import { useState, useCallback } from 'react';

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7.5a3 3 0 0 0 4.2.4l1.5-1.5a3 3 0 0 0-4.2-4.2L6.3 3.4" />
      <path d="M8 6.5a3 3 0 0 0-4.2-.4L2.3 7.6a3 3 0 0 0 4.2 4.2l1.2-1.2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7.5l3 3 5-6" />
    </svg>
  );
}

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, []);

  return (
    <button
      onClick={handleCopy}
      className={`p-1 rounded transition-all duration-200 print:hidden ${
        copied
          ? 'text-[var(--fg)] scale-110'
          : 'text-[var(--fg-muted)] opacity-40 hover:opacity-70'
      }`}
      title="Copy link"
      aria-label="Copy link to clipboard"
    >
      {copied ? <CheckIcon /> : <LinkIcon />}
    </button>
  );
}
