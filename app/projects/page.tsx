import Nav from '@/components/Nav';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Some projects.',
  openGraph: {
    title: 'Projects - Rohit Mangtani',
    description: 'Some projects.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Rohit Mangtani',
    description: 'Some projects.',
  },
};

const projects: { href: string; title: string; description: string; projectUrl?: string }[] = [
  {
    href: '/projects/hive',
    title: 'Hive',
    description:
      'An operating system for directing AI labor. Run multiple Claude Code agents simultaneously with status visibility, coordination, and compound learning.',
    projectUrl: 'https://github.com/RohitMangtani/hive',
  },
  {
    href: '/projects/the-steering-wheel',
    title: 'The Steering Wheel',
    description:
      'Why the gap between thinking and building was never intelligence. It was seeing. Visual cognition, cognitive load theory, and the case for steering layers over prompts.',
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
            Some projects.
          </p>
        </header>

        <div className="space-y-3">
          {projects.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block group"
            >
              <div className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">{item.title}</h3>
                    <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                  </div>
                  {item.projectUrl && (
                    <span
                      className="text-xs text-[var(--fg-muted)] flex-shrink-0"
                    >
                      GitHub &#8599;
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
