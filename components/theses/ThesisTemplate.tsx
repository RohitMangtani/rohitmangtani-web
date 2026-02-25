'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import References from '@/components/References';
import DataAvailability from '@/components/DataAvailability';
import type { ThesisArticleData } from '@/types/theses';

interface ThesisTemplateProps {
  data: ThesisArticleData;
}

export function ThesisTemplate({ data }: ThesisTemplateProps) {
  // Build TOC items from sections
  const tocItems = data.sections.map(section => ({
    id: section.id,
    label: section.title.replace(/:.*/,'').trim()
  }));

  return (
    <>
      <Nav />
      <main className="max-w-[680px] mx-auto px-6 py-20">
        <Link 
          href="/writing"
          className="text-xs text-[var(--fg-muted)] uppercase tracking-wider mb-8 inline-block hover:opacity-60"
        >
          ← Writing
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{data.title}</h1>
          <p className="text-lg text-[var(--fg-muted)] mb-4">{data.subtitle}</p>
          <p className="text-sm text-[var(--fg-muted)]">{data.date}</p>
        </header>

        <TableOfContents items={tocItems} />

        {/* Reader on-ramp */}
        <div className="mb-12 p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
          <p className="text-sm text-[var(--fg-muted)] mb-4">{data.onRamp.description}</p>
          <p className="text-sm text-[var(--fg-muted)] mb-3">
            <strong className="text-[var(--fg)]">What this does:</strong> {data.onRamp.whatItDoes}
          </p>
          <p className="text-sm text-[var(--fg-muted)] mb-3">
            <strong className="text-[var(--fg)]">What this does not do:</strong> {data.onRamp.whatItDoesNot}
          </p>
          {data.onRamp.howToRead && (
            <p className="text-xs text-[var(--fg-muted)] opacity-70">
              <em>How to read:</em> {data.onRamp.howToRead}
            </p>
          )}
        </div>

        {/* Intro paragraph */}
        {data.intro && (
          <p className="text-sm text-[var(--fg-muted)] mb-12">{data.intro}</p>
        )}

        {/* Main Content */}
        <article className="prose">
          {data.sections.map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
              
              {section.subsections?.map((sub, i) => (
                <div key={i}>
                  <h3 id={sub.id} className="text-base font-semibold mb-3 mt-6">{sub.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: sub.content }} />
                  
                  {sub.table && (
                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-sm border border-[var(--border)]">
                        <thead>
                          <tr className="border-b border-[var(--border)]">
                            {sub.table.headers.map((h, j) => (
                              <th key={j} className="text-left p-3 font-medium text-[var(--fg)]">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sub.table.rows.map((row, j) => (
                            <tr key={j} className="border-b border-[var(--border)]">
                              {sub.table!.headers.map((h, k) => (
                                <td key={k} className="p-3">{row[h.toLowerCase().replace(/\s+/g, '_')]}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {sub.list && (
                    <ul className="list-disc pl-6 mb-6">
                      {sub.list.map((item, j) => (
                        <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </article>

        {/* References */}
        {data.references && data.references.length > 0 && (
          <References>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--fg-muted)]">
              {data.references.map((ref, i) => (
                <li key={i}>
                  {ref.url ? (
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

        <footer className="mt-20 pt-8 border-t border-[var(--border)] text-xs text-[var(--fg-muted)]">
          <p>{data.footerText || `Rohit Mangtani | ${data.date}`}</p>
        </footer>
      </main>
    </>
  );
}
