import Nav from '@/components/Nav';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="max-w-xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-4 text-[var(--fg)]">404</h1>
        <p className="text-[var(--fg-muted)] mb-8">This page doesn't exist.</p>
        <Link
          href="/"
          className="text-sm font-medium text-[var(--fg)] border border-[var(--border)] px-5 py-2.5 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
