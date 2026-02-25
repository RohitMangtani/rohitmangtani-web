import { ArticleTemplate } from '@/components/research/ArticleTemplate';
import { ThesisTemplate } from '@/components/theses/ThesisTemplate';
import { thePositiveLoopData } from '@/data/research/the-positive-loop';
import { honestGamblingData } from '@/data/research/honest-gambling';
import { theGameableSocietyData } from '@/data/theses/the-gameable-society';
import { beliefEscalationInCoordinationSystemsData } from '@/data/theses/belief-escalation-in-coordination-systems';
import { coordinationDominantAssetsData } from '@/data/theses/coordination-dominant-assets';
import { predictionMarketContrarianSignalsData } from '@/data/theses/prediction-market-contrarian-signals';
import type { ResearchData } from '@/types/research';
import type { ThesisArticleData } from '@/types/theses';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ArticleEntry =
  | { type: 'research'; data: ResearchData }
  | { type: 'thesis'; data: ThesisArticleData };

const articles: Record<string, ArticleEntry> = {
  'the-positive-loop': { type: 'research', data: thePositiveLoopData },
  'honest-gambling': { type: 'research', data: honestGamblingData },
  'the-gameable-society': { type: 'thesis', data: theGameableSocietyData },
  'belief-escalation-in-coordination-systems': { type: 'thesis', data: beliefEscalationInCoordinationSystemsData },
  'coordination-dominant-assets': { type: 'thesis', data: coordinationDominantAssetsData },
  'prediction-market-contrarian-signals': { type: 'thesis', data: predictionMarketContrarianSignalsData },
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

  if (entry.type === 'research') {
    return <ArticleTemplate data={entry.data} />;
  }

  return <ThesisTemplate data={entry.data} />;
}
