'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Link from 'next/link';
import References from '@/components/References';
import DataAvailability from '@/components/DataAvailability';
import type { ResearchData } from '@/types/research';

interface ArticleTemplateProps {
  data: ResearchData;
}

export function ArticleTemplate({ data }: ArticleTemplateProps) {
  return (
    <>
      <Nav />
      <main className="max-w-[680px] mx-auto px-6 py-20">
        <Link 
          href="/writing"
          className="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-6 inline-block hover:opacity-60"
        >
          ← Writing
        </Link>
        
        <header className="mb-8">
          {(data.version || data.date) && (
            <div className="flex items-center gap-3 mb-2">
              {data.version && (
                <span className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg-muted)]">
                  {data.version}
                </span>
              )}
              <span className="text-xs text-[var(--fg-muted)]">{data.date}</span>
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight mb-2">{data.title}</h1>
          <p className="text-[var(--fg-muted)]">{data.subtitle}</p>
        </header>

        {/* Reader on-ramp */}
        <div className="mb-10 p-4 border-l-2 border-[var(--border)] text-sm text-[var(--fg-muted)]">
          <p className="mb-3">{data.onRamp.description}</p>
          <p className="mb-2">
            <strong className="text-[var(--fg)]">What this does:</strong> {data.onRamp.whatItDoes}
          </p>
          <p>
            <strong className="text-[var(--fg)]">What this does not do:</strong> {data.onRamp.whatItDoesNot}
          </p>
        </div>

        {/* Key Numbers */}
        {data.keyNumbers && data.keyNumbers.length > 0 && (
          <section className="mb-12 grid grid-cols-4 gap-3 text-center">
            {data.keyNumbers.map((num, i) => (
              <div key={i} className="p-4 border border-[var(--border)] rounded">
                <div className={`text-xl font-bold ${getColorClass(num.color)}`}>{num.value}</div>
                <div className="text-xs text-[var(--fg-muted)]">{num.label}</div>
              </div>
            ))}
          </section>
        )}

        {/* Claim Box */}
        {data.claim && (
          <section className="mb-12 p-6 border border-[var(--border)] rounded bg-[var(--bg-secondary)]">
            <h2 className="text-xs uppercase tracking-wider text-[var(--fg-muted)] mb-3">The Claim</h2>
            <p className="text-lg text-[var(--fg)] leading-relaxed font-medium">{data.claim}</p>
          </section>
        )}

        {/* Main Content Sections */}
        <article className="prose">
          {data.sections.map((section) => (
            <section key={section.id} className="mb-12">
              <h2 id={section.id}>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
              
              {section.subsections?.map((sub, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold mb-2 mt-6">{sub.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: sub.content }} />
                </div>
              ))}
            </section>
          ))}
        </article>

        {/* References */}
        {data.references && data.references.length > 0 && (
          <References>
            <ol className="space-y-2 text-xs text-[var(--fg-muted)]">
              {data.references.map((ref, i) => (
                <li key={i}>
                  {i + 1}. {ref.url ? (
                    <a href={ref.url} className="underline hover:opacity-60" target="_blank" rel="noopener">
                      {ref.text}
                    </a>
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: ref.text }} />
                  )}
                </li>
              ))}
            </ol>
          </References>
        )}

        {/* Data Availability */}
        {data.dataAvailability && data.dataAvailability.length > 0 && (
          <DataAvailability>
            <div className="space-y-2 text-sm text-[var(--fg-muted)]">
              {data.dataAvailability.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </DataAvailability>
        )}

        {/* Related Work */}
        {data.relatedWork && data.relatedWork.length > 0 && (
          <section className="mb-12">
            <p className="text-xs text-[var(--fg-muted)]">
              Related work:{' '}
              {data.relatedWork.map((link, i) => (
                <span key={i}>
                  <Link href={link.href} className="underline hover:opacity-60">
                    {link.title}
                  </Link>
                  {i < data.relatedWork!.length - 1 && ', '}
                </span>
              ))}
            </p>
          </section>
        )}

        {/* Footer */}
        <footer className="text-center text-xs text-[var(--fg-muted)] pt-8 border-t border-[var(--border)]">
          <p>{data.footerVersion || `${data.date} • Rohit Mangtani`}</p>
        </footer>
      </main>
    </>
  );
}

function getColorClass(color?: string): string {
  switch (color) {
    case 'green': return 'text-green-700';
    case 'blue': return 'text-blue-700';
    case 'yellow': return 'text-amber-700';
    case 'red': return 'text-red-700';
    case 'zinc': return 'text-stone-500';
    default: return '';
  }
}
