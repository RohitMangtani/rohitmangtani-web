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
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Contact</h1>
          <p className="text-[var(--fg-muted)]">
            If you have any feedback or are interested in similar things, please reach out. I would love to talk.
          </p>
        </header>

        <div className="space-y-8 animate-fade-in-delay-1">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[var(--fg-muted)] mb-2">Email</h2>
            <a
              href="mailto:mangtani.rohit20@gmail.com"
              className="text-xl font-medium hover:opacity-70 transition-all duration-200 inline-block"
            >
              mangtani.rohit20@gmail.com
            </a>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wider text-[var(--fg-muted)] mb-2">Phone</h2>
            <a
              href="tel:6033050320"
              className="text-xl font-medium hover:opacity-70 transition-all duration-200 inline-block"
            >
              603.305.0320
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
