'use client';

import {
  SITE_NAME,
  SITE_SHORT_NAME,
  HERO_HEADLINE,
  HERO_SUBHEADLINE,
  HERO_SLIDES,
  CUSTOMER_REVIEWS,
  ABOUT_HEADLINE,
  ABOUT_BODY,
} from '@/lib/site-brand';
import { MOCK_SHOP_CATEGORIES, MOCK_FEATURED_PRODUCTS } from '@/lib/mock-catalog';
import Link from 'next/link';
import HeroImageSlider from '@/components/HeroImageSlider';
import MockCategoryCard from '@/components/MockCategoryCard';
import MockProductCard from '@/components/MockProductCard';
import AnimatedSection, { AnimatedGrid } from '@/components/AnimatedSection';
import NewsletterSection from '@/components/NewsletterSection';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Home() {
  usePageTitle('');

  return (
    <main className="min-h-screen bg-brand-cream">
      {/* SECTION 1 HERO */}
      <section className="relative overflow-hidden bg-brand-cream lg:min-h-[90vh] lg:flex lg:items-center">
        {/* Mobile: full-bleed brand plane */}
        <div className="lg:hidden relative min-h-[100svh] flex flex-col">
          <HeroImageSlider slides={HERO_SLIDES} bleed />
          <div className="relative z-30 flex flex-1 flex-col justify-end px-5 pb-14 pt-28">
            <AnimatedSection>
              <p className="font-serif text-[clamp(2.35rem,11vw,3.4rem)] text-white leading-[0.95] tracking-tight mb-3 drop-shadow-sm">
                {SITE_NAME}
              </p>
              <h1 className="text-[11px] font-semibold tracking-[0.28em] uppercase text-brand-champagne mb-4">
                {HERO_HEADLINE}
              </h1>
              <p className="text-white/80 text-[15px] leading-relaxed max-w-[20rem] mb-7 font-light">
                {HERO_SUBHEADLINE}
              </p>
              <div className="flex flex-col gap-3 max-w-xs">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-rose text-white text-sm font-semibold tracking-wide rounded-full shadow-[0_12px_40px_rgba(100,29,53,0.45)] active:scale-[0.98] transition-transform"
                >
                  Shop the shape
                </Link>
                <Link
                  href="#shop-by-category"
                  className="inline-flex items-center justify-center px-7 py-3 text-white/90 text-[11px] font-semibold uppercase tracking-[0.22em] border border-white/25 rounded-full backdrop-blur-md bg-white/5 active:bg-white/10 transition-colors"
                >
                  Browse collections
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Desktop: split composition */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-latte to-brand-champagne/40" />
        <div className="hidden lg:block absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-brand-rose/8 blur-3xl animate-float" />
        <div className="hidden lg:block absolute bottom-1/4 -right-16 w-96 h-96 rounded-full bg-brand-sage/25 blur-3xl animate-float animate-delay-300" />
        <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-[0.04] pointer-events-none select-none">
          <span className="font-serif text-[14vw] text-brand-rose/[0.06] whitespace-nowrap tracking-tight">
            {SITE_SHORT_NAME}
          </span>
        </div>

        <div className="hidden lg:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <p className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-plum/45 mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-plum/25" />
                {SITE_NAME}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-brand-plum leading-[1.02] mb-6">
                {HERO_HEADLINE}
              </h1>
              <p className="text-brand-plum/75 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-light">
                {HERO_SUBHEADLINE}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop" className="boutique-btn-primary">
                  Shop the shape
                </Link>
                <Link href="#shop-by-category" className="boutique-btn-secondary">
                  Browse collections
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative md:p-4 md:glass-card md:rounded-[2rem] md:shadow-boutique-lg">
                <HeroImageSlider slides={HERO_SLIDES} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2, SHOP BY CATEGORY */}
      <section id="shop-by-category" className="py-12 md:py-24 bg-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 md:mb-16 md:text-center">
            <span className="boutique-section-eyebrow">Explore</span>
            <h2 className="boutique-section-title mb-2 md:mb-3">Shop By Category</h2>
            <p className="text-brand-plum/65 text-sm md:text-base max-w-md md:mx-auto">
              Waist trainers, BBL corsets, seamless shapewear and fajas.
            </p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6">
            {MOCK_SHOP_CATEGORIES.map((cat, i) => (
              <MockCategoryCard
                key={cat.id}
                label={cat.label}
                href={cat.href}
                image={cat.image}
                index={i}
              />
            ))}
          </AnimatedGrid>
        </div>
      </section>

      {/* SECTION 3, FEATURED PRODUCTS */}
      <section id="featured-products" className="py-12 md:py-24 bg-gradient-to-b from-white/40 via-brand-cream/80 to-brand-cream scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 md:mb-16 md:text-center">
            <span className="boutique-section-eyebrow">Featured</span>
            <h2 className="boutique-section-title mb-2 md:mb-3">Featured Products</h2>
            <p className="text-brand-plum/65 text-sm md:text-base max-w-md md:mx-auto">
              Bestsellers for the hourglass look: smooth, sculpt, and show up.
            </p>
          </AnimatedSection>
          <AnimatedGrid className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
            {MOCK_FEATURED_PRODUCTS.map((product) => (
              <MockProductCard
                key={product.id}
                slug={product.slug}
                name={product.name}
                category={product.category}
                price={product.price}
                originalPrice={'originalPrice' in product ? product.originalPrice : undefined}
                image={product.image}
                tagline={product.tagline}
              />
            ))}
          </AnimatedGrid>
          <div className="text-center mt-8 md:mt-12">
            <Link href="/shop" className="boutique-btn-secondary w-full sm:w-auto">
              View all shapewear
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4, CUSTOMER REVIEWS */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-6 md:mb-16 md:text-center">
            <h2 className="font-serif text-[1.85rem] sm:text-4xl md:text-5xl text-brand-plum mb-1 md:mb-3">
              Confidence Stories
            </h2>
          </AnimatedSection>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible scrollbar-none">
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div
                key={i}
                className="snap-start shrink-0 w-[78vw] max-w-[280px] md:w-auto md:max-w-none rounded-2xl p-5 md:p-8 border border-brand-rose/10 bg-brand-cream/40 md:glass-card boutique-card-hover"
              >
                <div className="flex gap-0.5 text-brand-plum/30 mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-sm text-brand-rose/70" />
                  ))}
                </div>
                <p className="text-brand-plum/90 text-sm md:text-base leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5, ABOUT */}
      <section className="py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-latte via-brand-cream to-brand-champagne/50" />
        <div className="absolute -right-16 top-8 w-56 h-56 rounded-full bg-brand-rose/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 text-left md:text-center">
          <AnimatedSection>
            <p className="boutique-section-eyebrow">The brand</p>
            <h2 className="font-serif text-[1.85rem] sm:text-4xl md:text-5xl text-brand-plum mb-5 md:mb-6">
              {ABOUT_HEADLINE}
            </h2>
            <p className="text-brand-plum/75 text-[15px] md:text-lg leading-relaxed">
              <strong className="text-brand-plum font-semibold">{SITE_NAME}</strong> {ABOUT_BODY}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-7 md:mt-8 text-brand-plum font-semibold text-sm tracking-wide hover:text-brand-rose transition-colors"
            >
              Learn more <i className="ri-arrow-right-line" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6, NEWSLETTER */}
      <section className="py-12 md:py-20 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-[1.75rem] md:rounded-3xl p-6 md:p-12 border border-brand-rose/10 bg-white/50 backdrop-blur-sm md:glass-frosted">
            <NewsletterSection />
          </div>
        </div>
      </section>
    </main>
  );
}
