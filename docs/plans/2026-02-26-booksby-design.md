# Booksby Design

Personalized book recommendation app. Same concept as Blogsby but for books.

## Core Flow
1. Landing page → Google auth → Onboarding (enter 3+ books) → Dashboard
2. Dashboard shows AI book suggestion with cover, description, buy link
3. User rates (1-5 stars) + notes → feedback trains future suggestions
4. "Generate new suggestion" gets another rec
5. Profile page: custom prompt + review history
6. Weekly email with one book suggestion

## Stack
- Next.js 15, Tailwind CSS, TypeScript
- NextAuth.js (Google OAuth)
- Supabase (PostgreSQL)
- Anthropic Claude API
- Resend (weekly emails)
- Vercel

## Design
Same visual DNA as Blogsby: cream bg, bordered cards, serif headings, yellow accents.
