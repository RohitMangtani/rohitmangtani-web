import { ImageResponse } from 'next/og';
import { hiveData } from '@/data/research/hive';

export const runtime = 'edge';
export const alt = 'Project - Rohit Mangtani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const articles: Record<string, { title: string; subtitle: string }> = {
  hive: hiveData,
};

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  const title = article?.title ?? 'Projects';
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ fontSize: 16, color: '#a8a29e', letterSpacing: '0.1em' }}>
            ROHIT MANGTANI
          </div>
          <div style={{ fontSize: 14, color: '#78716c', padding: '2px 10px', border: '1px solid #e7e5e4', borderRadius: 6 }}>
            Projects
          </div>
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
