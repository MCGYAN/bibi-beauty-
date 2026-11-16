# ShapewearBoss

> Premium women’s shapewear and body-confidence fashion in Ghana — Shape the Confidence.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Without Supabase keys, the shop uses the sample catalog in `lib/mock-catalog.ts`.

## Brand

- Identity & copy: `lib/site-brand.ts`
- Colors: Deep Burgundy `#641D35`, Champagne Gold `#D6B58A`, Warm Nude `#E8D5C8`, Soft Charcoal `#292125`
- Tokens: `app/globals.css` and `tailwind.config.js`
- Assets: `public/logo.png`, `public/hero-1.jpg` … `hero-3.jpg`

Hero slider interval is **2 seconds** (`components/HeroImageSlider.tsx`).

## Customization

See [CUSTOMIZE.md](./CUSTOMIZE.md). Add WhatsApp number and TikTok URL in `lib/site-brand.ts`.

Regenerate logo icons:

```bash
node scripts/process-shapewearboss-assets.mjs
```

## License

See [LICENSE](./LICENSE).
