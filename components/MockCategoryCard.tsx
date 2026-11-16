'use client';

import Link from 'next/link';

type Props = {
  label: string;
  href: string;
  image?: string;
  index?: number;
};

export default function MockCategoryCard({ label, href, image = '', index = 0 }: Props) {
  const hasImage = Boolean(image?.trim());
  const imageSrc = image.split('?')[0];

  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-brand-rose/10 bg-brand-latte/30 shadow-sm transition-shadow duration-500 active:shadow-boutique md:rounded-2xl md:glass-card md:border-white/40 boutique-card-hover"
    >
      <div className="relative aspect-[3/4] bg-gradient-to-b from-brand-latte to-brand-champagne/60 boutique-image-zoom overflow-hidden">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={label}
            className="boutique-img-target absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 border-2 border-dashed border-brand-rose/20 m-3 rounded-xl bg-white/40">
            <span className="font-serif text-2xl md:text-3xl text-brand-rose/25 tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-plum/40 text-center">
              Image coming soon
            </span>
          </div>
        )}

        {hasImage && (
          <>
            <span className="boutique-image-vignette" aria-hidden />
            <span className="boutique-image-shine" aria-hidden />
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-brand-plum/70 via-brand-plum/10 to-transparent opacity-90 md:opacity-60 md:group-hover:opacity-90 transition-opacity duration-500" />

        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex items-end justify-between gap-2">
          <span className="font-serif text-[13px] md:text-lg lg:text-xl text-white tracking-wide leading-snug drop-shadow-sm">
            {label}
          </span>
          <span className="hidden md:flex w-9 h-9 rounded-full bg-white/15 border border-white/25 items-center justify-center text-white shrink-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <i className="ri-arrow-right-line" />
          </span>
        </div>
      </div>
    </Link>
  );
}
