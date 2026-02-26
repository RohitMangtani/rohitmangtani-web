import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Writing - Rohit Mangtani';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafaf9',
        }}
      >
        <div style={{ fontSize: 20, color: '#a8a29e', letterSpacing: '0.1em', marginBottom: 12 }}>
          ROHIT MANGTANI
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, color: '#1c1917', letterSpacing: '-0.02em' }}>
          Writing
        </div>
        <div style={{ fontSize: 22, color: '#78716c', marginTop: 16 }}>
          Ideas, essays, and observations
        </div>
      </div>
    ),
    { ...size }
  );
}
