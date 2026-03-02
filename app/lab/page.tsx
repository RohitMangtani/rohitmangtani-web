import Nav from '@/components/Nav';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Tools, experiments, and independent analyses.',
  openGraph: {
    title: 'Projects - Rohit Mangtani',
    description: 'Tools, experiments, and independent analyses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Rohit Mangtani',
    description: 'Tools, experiments, and independent analyses.',
  },
};

const projects: { href: string; title: string; description: string; projectUrl?: string }[] = [
  {
    href: '/lab/hive',
    title: 'Hive',
    description:
      'An operating system for directing AI labor. Run multiple Claude Code agents simultaneously with status visibility, coordination, and compound learning.',
    projectUrl: 'https://github.com/RohitMangtani/hive',
  },
];

const lab = [
  {
    href: '/lab/tech-is-not-tech-anymore',
    title: 'Tech Is Not Tech Anymore',
    description:
      'How I built all of this by talking to four robots. No code, no jargon, just what happened.',
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
          <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
          <p className="text-[var(--fg-muted)]">
            Tools, experiments, and independent analyses.
          </p>
        </header>

        <div className="space-y-3">
          {projects.map((item) => (
            <div
              key={item.href}
              className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link href={item.href} className="hover:opacity-80 transition-opacity">
                    <h3 className="font-medium text-[var(--fg)]">{item.title}</h3>
                  </Link>
                  <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                </div>
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors flex-shrink-0"
                  >
                    GitHub &#8599;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-4">Lab</h2>
          <div className="space-y-3">
            {lab.map((item) => (
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
        </section>
      </main>
    </>
  );
}
