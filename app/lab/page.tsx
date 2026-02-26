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

const allLab = [
  {
    slug: 'medicaid-fraud-analysis',
    title: 'Medicaid Provider Spending Anomalies',
    date: '2026'
  },
  {
    slug: 'medicaid-fraud-phase2',
    title: 'Medicaid Fraud Detection: Cross-Validation Analysis',
    date: '2026'
  },
];

export default function LabPage() {
  return (
    <>
      <Nav />
      <main className="max-w-xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Lab</h1>
          <p className="text-[var(--fg-muted)]">
            Tools, experiments, and independent analyses.
          </p>
        </header>

        <div className="space-y-3">
          {allLab.map((item) => (
            <Link
              key={item.slug}
              href={`/lab/${item.slug}`}
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
