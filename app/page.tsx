import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-[calc(100vh-57px)] flex flex-col justify-center items-center text-center px-6">
        <p className="text-sm md:text-base text-[var(--fg-muted)] tracking-widest uppercase mb-8 animate-fade-in">
          Writing &nbsp;&nbsp;&middot;&nbsp;&nbsp; Research &nbsp;&nbsp;&middot;&nbsp;&nbsp; Projects
        </p>
        <p className="text-lg md:text-xl text-[var(--fg-muted)] max-w-lg leading-relaxed animate-fade-in-delay-1">
          Exploring tech, game theory, and systems. Sharing what I find.
        </p>
      </main>
    </>
  );
}
