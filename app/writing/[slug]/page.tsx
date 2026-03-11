import { WritingTemplate } from '@/components/WritingTemplate';
import { thePositiveLoopData } from '@/data/research/the-positive-loop';
import { honestGamblingData } from '@/data/research/honest-gambling';
import { theGameableSocietyData } from '@/data/theses/the-gameable-society';
import { theHumanYieldData } from '@/data/research/the-human-yield';
import { theFutureOfPmData } from '@/data/research/the-future-of-pm';
import { theHumanSensorLayerData } from '@/data/research/the-human-sensor-layer';
import { theHumanBridgeData } from '@/data/research/the-human-bridge';
import { theFiveInputsData } from '@/data/research/the-five-inputs';
import { closeYourEyesData } from '@/data/research/close-your-eyes';
import { safeModeData } from '@/data/research/safe-mode';
import { techIsNotTechAnymoreData } from '@/data/research/tech-is-not-tech-anymore';
import { theCompoundData } from '@/data/research/the-compound';
import { theSplitData } from '@/data/research/the-split';
import { aVisualWorkflowForAiAgentsData } from '@/data/research/a-visual-workflow-for-ai-agents';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const articles: Record<string, { data: Parameters<typeof WritingTemplate>[0]['data'] }> = {
  'tech-is-not-tech-anymore': { data: techIsNotTechAnymoreData },
  'the-positive-loop': { data: thePositiveLoopData },
  'the-human-yield': { data: theHumanYieldData },
  'preference-for-legible-risk': { data: honestGamblingData },
  'the-gameable-society': { data: theGameableSocietyData },
  'the-future-of-pm': { data: theFutureOfPmData },
  'the-human-sensor-layer': { data: theHumanSensorLayerData },
  'the-human-bridge': { data: theHumanBridgeData },
  'the-five-inputs': { data: theFiveInputsData },
  'close-your-eyes': { data: closeYourEyesData },
  'safe-mode': { data: safeModeData },
  'the-compound': { data: theCompoundData },
  'the-split': { data: theSplitData },
  'a-visual-workflow-for-ai-agents': { data: aVisualWorkflowForAiAgentsData },
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
