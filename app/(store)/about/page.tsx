'use client';

import {
  SITE_NAME,
  SITE_TAGLINE,
  LOGO_PATH,
  BUSINESS_ADDRESS,
  ABOUT_HEADLINE,
  ABOUT_BODY,
  WHATSAPP_URL,
} from '@/lib/site-brand';
import Link from 'next/link';
import { useCMS } from '@/context/CMSContext';
import PageHero from '@/components/PageHero';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function AboutPage() {
  usePageTitle('Our Story');
  const { getSetting } = useCMS();

  const siteName = getSetting('site_name') || SITE_NAME;

  const values = [
    {
      icon: 'ri-crown-line',
      title: 'Hourglass Focus',
      description:
        'Every piece is chosen to cinch, lift and smooth so your silhouette looks intentional, not accidental.',
    },
    {
      icon: 'ri-shirt-line',
      title: 'Outfit Confidence',
      description:
        'You are not just buying underwear. You are buying how a dress sits, how jeans hug, how you walk into a room.',
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'Social Commerce',
      description:
        'See it on TikTok, order on WhatsApp. We help you choose size and style, then deliver nationwide.',
    },
    {
      icon: 'ri-truck-line',
      title: 'Pay On Delivery',
      description:
        'Shop with peace of mind: nationwide delivery with payment on delivery on eligible orders.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Our Story"
        title={`About ${SITE_NAME}`}
        subtitle={SITE_TAGLINE}
      />

      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">{ABOUT_HEADLINE}</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong>{siteName}</strong> {ABOUT_BODY}
                </p>
                <p>
                  Based in {BUSINESS_ADDRESS}, we serve women who want a premium body confidence brand, not a generic underwear shop.
                </p>
                <div className="pt-4">
                  <Link
                    href="#our-story"
                    className="inline-flex items-center text-pink-700 font-medium hover:text-pink-800 transition-colors group"
                  >
                    <span className="border-b border-transparent group-hover:border-pink-800 transition-colors">See What We Offer</span>
                    <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative bg-black">
                <img
                  src={LOGO_PATH}
                  alt={siteName}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 sm:right-auto sm:-left-6 bg-white p-5 sm:p-6 rounded-xl shadow-xl border border-gray-100 z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                    <i className="ri-map-pin-line text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{SITE_TAGLINE}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{BUSINESS_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-pink-600 text-xs tracking-[0.24em] uppercase font-bold mb-3">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">Shapewear Built For Curves</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-pink-50 p-10 rounded-3xl border border-pink-100">
            <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <i className="ri-focus-3-line text-3xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Waist &amp; BBL</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Waist trainers and BBL corsets that cinch the midsection and enhance hips: the foundation of the hourglass look.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              <i className="ri-t-shirt-line text-3xl text-white"></i>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless &amp; Fajas</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Seamless shapewear, bodysuits and fajas that disappear under clothes while sculpting a smoother, stronger silhouette.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Women Choose {siteName}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Femininity. Confidence. Luxury, in how you wear every outfit.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <i className={`${value.icon} text-xl sm:text-2xl text-pink-600 drop-shadow-sm`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 py-24 border-y border-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-900">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready To Shape The Confidence?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Browse waist trainers, BBL corsets and seamless shapewear, or WhatsApp us to order with pay on delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-3 bg-pink-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-lg hover:bg-pink-700 hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Shop Now
              <i className="ri-arrow-right-line"></i>
            </Link>
            <a
              href={WHATSAPP_URL || '/contact'}
              target={WHATSAPP_URL ? '_blank' : undefined}
              rel={WHATSAPP_URL ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all"
            >
              <i className="ri-whatsapp-line"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
