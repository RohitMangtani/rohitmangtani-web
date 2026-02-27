import { WritingTemplate } from '@/components/WritingTemplate';
import { thePositiveLoopData } from '@/data/research/the-positive-loop';
import { honestGamblingData } from '@/data/research/honest-gambling';
import { theGameableSocietyData } from '@/data/theses/the-gameable-society';
import { theHumanYieldData } from '@/data/research/the-human-yield';
import { theFutureOfPmData } from '@/data/research/the-future-of-pm';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const articles: Record<string, { data: Parameters<typeof WritingTemplate>[0]['data'] }> = {
  'the-positive-loop': { data: thePositiveLoopData },
  'the-human-yield': { data: theHumanYieldData },
  'honest-gambling': { data: honestGamblingData },
  'the-gameable-society': { data: theGameableSocietyData },
  'the-future-of-pm': { data: theFutureOfPmData },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = articles[slug];

  if (!entry) {
    return { title: 'Not Found' };
  }

  return {
    title: entry.data.title,
    description: entry.data.subtitle,
    openGraph: {
      title: entry.data.title,
      description: entry.data.subtitle,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.data.title,
      description: entry.data.subtitle,
    },
  };
}

export default async function WritingArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = articles[slug];

  if (!entry) {
    notFound();
  }

  return <WritingTemplate data={entry.data} />;
}
