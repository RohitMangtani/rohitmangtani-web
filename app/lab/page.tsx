import Nav from '@/components/Nav';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Tools, experiments, and independent analyses.',
  openGraph: {
    title: 'Lab - Rohit Mangtani',
    description: 'Tools, experiments, and independent analyses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab - Rohit Mangtani',
    description: 'Tools, experiments, and independent analyses.',
  },
};

const items = [
  {
    href: '/lab/hive',
    title: 'Hive',
    description:
      'An operating system for directing AI labor. Run multiple Claude Code agents simultaneously with status visibility, coordination, and compound learning.',
  },
  {
    href: '/lab/the-reference-point',
    title: 'The Reference Point',
    description:
      'Cross-reference of every article, product, and system, mapped to resume language and tailored for three career paths.',
  },
];

export default function LabPage() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Lab</h1>
          <p className="text-[var(--fg-muted)]">
            Tools, experiments, and independent analyses.
          </p>
        </header>

        <div className="space-y-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block group"
            >
              <div className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]">
                <div>
                  <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
