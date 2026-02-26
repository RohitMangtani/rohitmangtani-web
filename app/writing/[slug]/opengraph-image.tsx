import { ImageResponse } from 'next/og';
import { thePositiveLoopData } from '@/data/research/the-positive-loop';
import { honestGamblingData } from '@/data/research/honest-gambling';
import { theGameableSocietyData } from '@/data/theses/the-gameable-society';

export const runtime = 'edge';
export const alt = 'Article - Rohit Mangtani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const articles: Record<string, { title: string; subtitle: string }> = {
  'the-positive-loop': thePositiveLoopData,
  'honest-gambling': honestGamblingData,
  'the-gameable-society': theGameableSocietyData,
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  const title = article?.title ?? 'Article';
  const subtitle = article?.subtitle ?? '';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          backgroundColor: '#fafaf9',
        }}
      >
        <div style={{ fontSize: 16, color: '#a8a29e', letterSpacing: '0.1em', marginBottom: 20 }}>
          ROHIT MANGTANI
        </div>
        <div
          style={{
            fontSize: title.length > 40 ? 42 : 52,
            fontWeight: 700,
            color: '#1c1917',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 20, color: '#78716c', lineHeight: 1.5 }}>
          {subtitle.length > 120 ? subtitle.slice(0, 117) + '...' : subtitle}
        </div>
      </div>
    ),
    { ...size }
  );
}
