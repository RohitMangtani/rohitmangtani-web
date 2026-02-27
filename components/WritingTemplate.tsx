'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import References from '@/components/References';
import DataAvailability from '@/components/DataAvailability';

interface WritingTemplateProps {
  data: {
    slug: string;
    date: string;
    title: string;
    subtitle: string;
    onRamp: {
      description: string;
      whatItDoes: string;
      whatItDoesNot: string;
      howToRead?: string;
    };
    sections: {
      id: string;
      title: string;
      content: string;
      subsections?: {
        id?: string;
        title: string;
        content: string;
        table?: {
          headers: string[];
          rows: Record<string, string>[];
        };
        list?: string[];
      }[];
    }[];
    // Optional fields, rendered when present
    version?: string;
    keyNumbers?: { value: string; label: string; color?: string }[];
    claim?: string;
    intro?: string;
    references?: { text: string; url?: string }[];
    dataAvailability?: string[];
    relatedWork?: { title: string; href: string }[];
    footerText?: string;
    footerVersion?: string;
  };
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

// Note: All HTML content rendered via dangerouslySetInnerHTML comes from
// trusted, developer-authored data files within the codebase, not from
// user input or external sources.

export function WritingTemplate({ data }: WritingTemplateProps) {
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

        {/* Header */}
        <header className="mb-12">
          {data.version && (
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--fg-muted)]">
                {data.version}
              </span>
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight mb-4">{data.title}</h1>
          <p className="text-lg text-[var(--fg-muted)] mb-4">{data.subtitle}</p>
          <p className="text-sm text-[var(--fg-muted)]">{data.date}</p>
        </header>

        {/* Table of Contents */}
        <TableOfContents items={tocItems} />

        {/* Reader on-ramp */}
        <div className="mb-12 p-5 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]">
          <p className="text-sm text-[var(--fg-muted)] mb-4">{data.onRamp.description}</p>
          <p className="text-sm text-[var(--fg-muted)] mb-3">
            <strong className="text-[var(--fg)]">Scope:</strong> {data.onRamp.whatItDoes}
          </p>
          {data.onRamp.howToRead && (
            <p className="text-xs text-[var(--fg-muted)] opacity-70">
              <em>How to read:</em> {data.onRamp.howToRead}
            </p>
          )}
        </div>

        {/* Key Numbers */}
        {data.keyNumbers && data.keyNumbers.length > 0 && (
          <section className="mb-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
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

        {/* Intro paragraph */}
        {data.intro && (
          <p className="text-sm text-[var(--fg-muted)] mb-12">{data.intro}</p>
        )}

        {/* Main Content */}
        <article className="prose">
          {data.sections.map((section) => (
            <section key={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              {/* eslint-disable-next-line react/no-danger -- trusted developer-authored content */}
              <div dangerouslySetInnerHTML={{ __html: section.content }} />

              {section.subsections?.map((sub, i) => (
                <div key={i}>
                  <h3 id={sub.id} className="text-base font-semibold mb-3 mt-6">{sub.title}</h3>
                  {/* eslint-disable-next-line react/no-danger -- trusted developer-authored content */}
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
                        // eslint-disable-next-line react/no-danger -- trusted developer-authored content
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
                    // eslint-disable-next-line react/no-danger -- trusted developer-authored content
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
        <footer className="mt-20 pt-8 border-t border-[var(--border)] text-xs text-[var(--fg-muted)]">
          <p>{data.footerText || data.footerVersion || `Rohit Mangtani | ${data.date}`}</p>
        </footer>
      </main>
    </>
  );
}
