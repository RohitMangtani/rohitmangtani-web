import Nav from '@/components/Nav';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Things I\'ve been thinking about.',
  openGraph: {
    title: 'Writing - Rohit Mangtani',
    description: 'Things I\'ve been thinking about.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing - Rohit Mangtani',
    description: 'Things I\'ve been thinking about.',
  },
};

const allWriting = [
  {
    slug: 'the-positive-loop',
    title: 'The Positive Loop: How AI Broke the Doom Scroll',
    date: '2026',
  },
  {
    slug: 'the-gameable-society',
    title: 'The Gameable Society',
    date: '2025',
  },
  {
    slug: 'honest-gambling',
    title: 'Preference for Legible Risk',
    date: '2025',
  },
];

export default function WritingPage() {
  return (
    <>
      <Nav />
      <main className="max-w-xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Writing</h1>
          <p className="text-[var(--fg-muted)]">
            Things I've been thinking about.
          </p>
        </header>

        <div className="space-y-3">
          {allWriting.map((item) => (
            <Link
              key={item.slug}
              href={`/writing/${item.slug}`}
              className="block group"
            >
              <div className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-[var(--fg-muted)] flex-shrink-0">{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
