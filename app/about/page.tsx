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
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About</h1>
        </header>

        <div className="space-y-6 text-[var(--fg-muted)] animate-fade-in-delay-1">
          <p className="text-lg leading-relaxed">
            I like finance, game theory, internet culture, crypto, psychology, and marketing. Not as separate interests. As one thing. The way markets move, the way people behave online, the way attention concentrates, the way communities form around shared conviction. It is all the same system viewed from different angles.
          </p>
          <p className="leading-relaxed">
            I build things with AI. Products, research pipelines, automated systems, data analyses. The hard part is not the building. It is figuring out what to build and whether it is any good.
          </p>
          <p className="leading-relaxed">
            I write about what I see happening and what I like to think about.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] space-y-4 text-sm text-[var(--fg-muted)] animate-fade-in-delay-1">
          <p className="leading-relaxed">
            <strong className="text-[var(--fg)]">Writing</strong> is where I think out loud. Things I like to think about, written down.
          </p>
          <p className="leading-relaxed">
            <strong className="text-[var(--fg)]">Projects</strong> is where the building lives. Some projects.
          </p>
          <p className="leading-relaxed mt-6">
            <strong className="text-[var(--fg)]">If you are interested in similar things or anything adjacent, reach out. I would love to talk.</strong>
          </p>
        </div>
      </main>
    </>
  );
}
