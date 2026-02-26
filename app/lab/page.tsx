import Nav from '@/components/Nav';
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

const externalProjects = [
  {
    title: 'Tinkerbox',
    href: 'https://tinkerbox-theta.vercel.app',
    description: 'AI-powered project idea generator — turn your interests into buildable weekend projects.',
    date: '2026',
  },
  {
    title: 'Booksby',
    href: 'https://booksby-ten.vercel.app',
    description: 'Personalized book recommendations that learn your reading taste over time.',
    date: '2026',
  },
  {
    title: 'The Sleepless Rishi',
    href: 'https://www.youtube.com/@TheSleeplessRishi',
    description: 'Fully automated YouTube channel — AI-generated Hindu stories, narration, and visuals end to end.',
    date: '2026',
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
          {externalProjects.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">
                      {item.title} <span className="text-xs text-[var(--fg-muted)]">&#8599;</span>
                    </h3>
                    <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                  </div>
                  <span className="text-xs font-mono text-[var(--fg-muted)] flex-shrink-0">{item.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
