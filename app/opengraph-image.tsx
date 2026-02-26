import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rohit Mangtani - Writing, Research, Projects';
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
          backgroundImage: 'radial-gradient(circle at 25% 25%, #f5f5f4 0%, #fafaf9 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: '#1c1917',
              letterSpacing: '-0.03em',
              marginBottom: 16,
            }}
          >
            Rohit Mangtani
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#78716c',
              letterSpacing: '0.05em',
            }}
          >
            Writing · Projects
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
