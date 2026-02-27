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

const tools = [
  {
    href: '/lab/dashboard',
    title: 'Hindu Stories — Upload Dashboard',
    description: 'Step-by-step upload guide for The Sleepless Rishi. Shows what to upload today.',
  },
];

const externalProjects = [
  {
    title: 'Crawler',
    href: 'https://trycrawler.com',
    description: 'Paste a GitHub repo, get a visual project map. Flowcharts, layer breakdowns, and context blocks.',
    date: '2026',
  },
  {
    title: 'Nudge',
    href: 'https://nudge-jade.vercel.app',
    description: 'Life maintenance on autopilot — smart reminders for health, car, home, finance, and more.',
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
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Lab</h1>
          <p className="text-[var(--fg-muted)]">
            Tools, experiments, and independent analyses.
          </p>
        </header>

        {/* Tools */}
        <div className="space-y-3 mb-8">
          {tools.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block group"
            >
              <div className="p-4 border border-green-300 bg-green-50/50 rounded-lg transition-all duration-200 hover:border-green-500 hover:bg-green-50">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                  </div>
                  <span className="text-xs font-mono text-green-600 flex-shrink-0">Live</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

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
