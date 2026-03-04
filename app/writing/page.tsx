import Nav from '@/components/Nav';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing about things I like to think about.',
  openGraph: {
    title: 'Writing - Rohit Mangtani',
    description: 'Writing about things I like to think about.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writing - Rohit Mangtani',
    description: 'Writing about things I like to think about.',
  },
};

const featured: { slug: string; title: string; description: string; date: string; projectUrl?: string }[] = [
  {
    slug: 'the-split',
    title: 'The Split',
    description: 'How AI is pushing everyone toward the thing they actually care about, and why both directions work.',
    date: '2026',
  },
  {
    slug: 'a-visual-workflow-for-ai-agents',
    title: 'A Visual Workflow for AI Agents',
    description: 'I built a visual layer for managing AI agents. It changed how I build everything.',
    date: '2026',
    projectUrl: '/projects/hive',
  },
  {
    slug: 'the-positive-loop',
    title: 'The Positive Loop',
    description: 'The first productive dopamine cycle in internet history. AI flipped the doom scroll into building.',
    date: '2026',
  },
];

const allWriting = [
  {
    slug: 'the-five-inputs',
    title: 'The Five Inputs',
    description: 'Taste, direction, judgment, presence, context-holding. What humans are still for when everything else is automated.',
    date: '2026',
  },
  {
    slug: 'the-future-of-pm',
    title: 'The Future of PM',
    description: 'One person, a terminal, and a swarm of agents. Context is the bottleneck, not intelligence.',
    date: '2026',
  },
  {
    slug: 'close-your-eyes',
    title: 'Close Your Eyes',
    description: 'The gap between thinking and building was never code. It was seeing.',
    date: '2026',
  },
  {
    slug: 'the-compound',
    title: 'The Compound',
    description: 'What happens when you build with AI long enough that it starts building you back.',
    date: '2026',
  },
  {
    slug: 'tech-is-not-tech-anymore',
    title: 'Tech Is Not Tech Anymore',
    description: 'How I built all of this by talking to four robots. For friends.',
    date: '2026',
  },
  {
    slug: 'the-human-bridge',
    title: 'The Human Bridge',
    description: 'Two coordination roles that emerge when companies deploy AI. The gap between installation and adoption.',
    date: '2026',
  },
  {
    slug: 'the-human-yield',
    title: 'The Human Yield',
    description: 'When showing up is the whole job. Presence economics and the AFK economy.',
    date: '2026',
  },
  {
    slug: 'the-human-sensor-layer',
    title: 'The Human Sensor Layer',
    description: 'What happens when markets price belief instead of output. Sensors, nodes, and a floor.',
    date: '2026',
  },
  {
    slug: 'safe-mode',
    title: 'Safe Mode',
    description: 'Regime detection as the skill behind every skill. Knowing when to stop pushing.',
    date: '2026',
  },
  {
    slug: 'the-gameable-society',
    title: 'The Gameable Society',
    description: 'Spectatorship, optimization, and value concentration in a society legible enough to exploit.',
    date: '2025',
  },
  {
    slug: 'preference-for-legible-risk',
    title: 'Preference for Legible Risk',
    description: 'Why people choose transparent bad odds over opaque systems that claim to be fair.',
    date: '2024',
  },
];

export default function WritingPage() {
  return (
    <>
      <Nav />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Writing</h1>
          <p className="text-[var(--fg-muted)]">
            Writing about things I like to think about.
          </p>
        </header>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-1">Featured</p>
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/writing/${item.slug}`}
              className="block group"
            >
              <div className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors relative z-10"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Hive &#8599;
                      </a>
                    )}
                    <span className="text-xs font-mono text-[var(--fg-muted)]">{item.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="space-y-3 mt-8">
          {allWriting.map((item) => (
            <Link
              key={item.slug}
              href={`/writing/${item.slug}`}
              className="block group"
            >
              <div className="p-4 border border-[var(--border)] rounded-lg transition-all duration-200 hover:border-[var(--fg-muted)] hover:bg-[var(--bg-secondary)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-[var(--fg)] group-hover:opacity-80 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--fg-muted)] mt-1">{item.description}</p>
                  </div>
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
