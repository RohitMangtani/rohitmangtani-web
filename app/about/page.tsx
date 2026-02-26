import Nav from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Rohit Mangtani. Writing on game theory, coordination systems, AI, and cultural frameworks.',
  openGraph: {
    title: 'About - Rohit Mangtani',
    description: 'Writing on game theory, coordination systems, AI, and cultural frameworks.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Rohit Mangtani',
    description: 'Writing on game theory, coordination systems, AI, and cultural frameworks.',
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
            I write about game theory, coordination systems, AI, and cultural frameworks.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] space-y-4 text-sm text-[var(--fg-muted)] animate-fade-in-delay-1">
          <p className="leading-relaxed">
            This site contains two sections: <strong className="text-[var(--fg)]">Writing</strong> and <strong className="text-[var(--fg)]">Lab</strong>.
          </p>
          <p className="leading-relaxed">
            <strong className="text-[var(--fg)]">Writing</strong> includes essays, theses, and frameworks. Some develop a single argument; others are exploratory analyses. They aim to be falsifiable and hold up to scrutiny.
          </p>
          <p className="leading-relaxed">
            <strong className="text-[var(--fg)]">Lab</strong> contains tools, experiments, and independent data analyses, projects that demonstrate applied research and engineering.
          </p>
          <p className="leading-relaxed">
            All content is educational and reflects personal research interests.
          </p>
        </div>
      </main>
    </>
  );
}
