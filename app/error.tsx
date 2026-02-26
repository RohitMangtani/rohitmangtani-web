'use client';

import Nav from '@/components/Nav';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <Nav />
      <main className="max-w-xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-[var(--fg)]">Something went wrong</h1>
        <p className="text-[var(--fg-muted)] mb-8">An unexpected error occurred.</p>
        <button
          onClick={reset}
          className="text-sm font-medium text-[var(--fg)] border border-[var(--border)] px-5 py-2.5 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
        >
          Try again
        </button>
      </main>
    </>
  );
}
