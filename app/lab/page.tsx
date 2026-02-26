import Nav from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Projects and experiments.',
  openGraph: {
    title: 'Lab - Rohit Mangtani',
    description: 'Projects and experiments.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lab - Rohit Mangtani',
    description: 'Projects and experiments.',
  },
};

export default function LabPage() {
  return (
    <>
      <Nav />
      <main className="max-w-xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Lab</h1>
          <p className="text-[var(--fg-muted)]">
            Projects and experiments.
          </p>
        </header>

        <div className="py-12 text-center">
          <p className="text-[var(--fg-muted)] text-sm">Nothing here yet.</p>
        </div>
      </main>
    </>
  );
}
