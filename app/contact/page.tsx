import Nav from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Rohit Mangtani.',
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Contact</h1>
          <p className="text-[var(--fg-muted)]">
            Inquiries, collaborations, or feedback.
          </p>
        </header>

        <div className="space-y-8 animate-fade-in-delay-1">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[var(--fg-muted)] mb-2">Twitter</h2>
            <a
              href="https://twitter.com/rmgtni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium hover:opacity-70 transition-all duration-200 inline-block"
            >
              @rmgtni
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
