import Nav from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Rohit Mangtani — essays and research on technology, markets, and systems.',
  openGraph: {
    title: 'About - Rohit Mangtani',
    description: 'Essays and research on technology, markets, and systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Rohit Mangtani',
    description: 'Essays and research on technology, markets, and systems.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About</h1>
        </header>

        <div className="space-y-6 text-[var(--fg-muted)] animate-fade-in-delay-1">
          <p className="text-lg leading-relaxed">
            I write about technology, markets, and systems — how they work, where they break, and what happens next.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] space-y-4 text-sm text-[var(--fg-muted)] animate-fade-in-delay-1">
          <p className="leading-relaxed">
            <strong className="text-[var(--fg)]">Writing</strong> is essays and research. Some develop a single argument, others are exploratory.
          </p>
          <p className="leading-relaxed">
            <strong className="text-[var(--fg)]">Lab</strong> is for projects, tools, and applied work.
          </p>
        </div>
      </main>
    </>
  );
}
