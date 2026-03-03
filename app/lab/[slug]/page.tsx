import Nav from '@/components/Nav';
import Link from 'next/link';
import CopyLinkButton from '@/components/CopyLinkButton';
import ExportPDFButton from '@/components/ExportPDFButton';
import { ResearchData } from '@/types/research';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hiveData } from '@/data/research/hive';
import { theSteeringWheelData } from '@/data/research/the-steering-wheel';
const articles: Record<string, ResearchData> = {
  hive: hiveData,
  'the-steering-wheel': theSteeringWheelData,
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${article.title} | Projects`,
    description: article.subtitle,
    openGraph: {
      title: `${article.title} | Projects`,
      description: article.subtitle,
    },
  };
}

function ArticleContent({ article }: { article: ResearchData }) {
  // Note: All HTML content comes from trusted, developer-authored data files
  // within the codebase, not from user input or external sources
  return (
    <main className="max-w-[680px] mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/lab"
          className="text-xs text-[var(--fg-muted)] uppercase tracking-wider hover:opacity-60"
        >
          ← Projects
        </Link>
        <div className="flex items-center gap-2">
          <CopyLinkButton />
          <ExportPDFButton />
        </div>
      </div>

      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg-muted)]">
            Internal
          </span>
          <span className="text-xs text-[var(--fg-muted)]">{article.date}</span>
          {article.liveUrl && (
            <a
              href={article.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              Live Dashboard &#8599;
            </a>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{article.title}</h1>
        <p className="text-[var(--fg-muted)]">{article.subtitle}</p>
      </header>

      <div className="mb-10 p-4 border-l-2 border-[var(--border)] text-sm text-[var(--fg-muted)]">
        <p className="mb-3">{article.onRamp.description}</p>
        <p className="mb-2">
          <strong className="text-[var(--fg)]">Scope:</strong> {article.onRamp.whatItDoes}
        </p>
      </div>

      {article.claim && (
        <section className="mb-12 p-6 border border-[var(--border)] rounded bg-[var(--bg-secondary)]">
          <h2 className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-3">The Claim</h2>
          <p className="text-lg text-[var(--fg)] leading-relaxed font-medium">{article.claim}</p>
        </section>
      )}

      <article className="prose max-w-none">
        {article.sections.map((section) => (
          <section key={section.id} className="mb-12">
            <h2 id={section.id} className="text-xl font-bold mb-4 text-[var(--fg)]">{section.title}</h2>
            <div
              className="text-[var(--fg-muted)] [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_strong]:text-[var(--fg)] [&_code]:bg-[var(--bg-secondary)] [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-[var(--bg-secondary)] [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-4"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
            {section.subsections?.map((sub, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-[var(--fg)]">{sub.title}</h3>
                <div
                  className="text-[var(--fg-muted)] [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2 [&_strong]:text-[var(--fg)] [&_code]:bg-[var(--bg-secondary)] [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-[var(--bg-secondary)] [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-4"
                  dangerouslySetInnerHTML={{ __html: sub.content }}
                />
              </div>
            ))}
          </section>
        ))}
      </article>

      {article.relatedWork && article.relatedWork.length > 0 && (
        <section className="mb-12 pt-8 border-t border-[var(--border)]">
          <h2 className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-4">Related Work</h2>
          <ul className="space-y-2">
            {article.relatedWork.map((work, i) => (
              <li key={i}>
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors text-sm"
                >
                  {work.title} →
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {article.footerVersion && (
        <footer className="pt-8 border-t border-[var(--border)] text-xs text-[var(--fg-muted)] whitespace-pre-line">
          {article.footerVersion}
        </footer>
      )}
    </main>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <Nav />
      <ArticleContent article={article} />
    </>
  );
}
