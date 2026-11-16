'use client';

import { useEffect, useState } from 'react';

const INTERVAL_MS = 2000;

type Slide = { src: string; alt: string };

type Props = {
  slides: readonly Slide[];
  /** Edge-to-edge media plane (mobile hero). No inset card chrome. */
  bleed?: boolean;
};

export default function HeroImageSlider({ slides, bleed = false }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div
      className={
        bleed
          ? 'absolute inset-0 overflow-hidden bg-brand-plum'
          : 'relative aspect-[4/5] rounded-3xl overflow-hidden bg-brand-latte shadow-xl ring-1 ring-brand-rose/20'
      }
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== active}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover ${bleed ? 'object-center scale-[1.02]' : 'object-top'}`}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}
      <div
        className={
          bleed
            ? 'absolute inset-0 bg-gradient-to-t from-brand-plum/85 via-brand-plum/35 to-brand-plum/15 pointer-events-none z-20'
            : 'absolute inset-0 bg-gradient-to-t from-brand-rose/20 via-transparent to-transparent pointer-events-none z-20'
        }
        aria-hidden
      />
      {slides.length > 1 && (
        <div
          className={`absolute z-30 flex justify-center ${
            bleed ? 'bottom-[max(1.25rem,env(safe-area-inset-bottom))] left-0 right-0' : 'bottom-3 left-0 right-0'
          }`}
        >
          <div
            className={`flex gap-1.5 ${
              bleed
                ? 'px-1'
                : 'px-2 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-brand-rose/15'
            }`}
          >
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === active
                    ? bleed
                      ? 'w-7 bg-brand-champagne'
                      : 'w-6 md:w-8 bg-brand-rose'
                    : bleed
                      ? 'w-1.5 bg-white/45'
                      : 'w-1.5 bg-brand-rose/30'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
