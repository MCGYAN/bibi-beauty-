import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  BUSINESS_ADDRESS,
  OG_IMAGE_PATH,
} from '@/lib/site-brand';
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SITE_URL;

export const SEO_KEYWORDS = [
  SITE_NAME,
  'shapewear Ghana',
  'waist trainer Accra',
  'BBL corset',
  'seamless shapewear',
  'faja Ghana',
  'body shaper',
  'hourglass shapewear',
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
].filter(Boolean);

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = '',
  image = OG_IMAGE_PATH,
}: SeoInput): Metadata {
  return {
    title,
    description,
    keywords: SEO_KEYWORDS.join(', '),
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteUrl}${path}`,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const pageSeoTemplates = {
  home: () =>
    buildPageMetadata({
      title: `${SITE_NAME} | Shapewear & Body Confidence`,
      description: SITE_DESCRIPTION,
      path: '/',
    }),
  shop: () =>
    buildPageMetadata({
      title: `Shop Shapewear | ${SITE_NAME}`,
      description: `Browse waist trainers, BBL corsets, seamless shapewear and fajas at ${SITE_NAME}. Nationwide delivery and pay on delivery.`,
      path: '/shop',
    }),
  categories: () =>
    buildPageMetadata({
      title: `Collections | ${SITE_NAME}`,
      description: `Shop waist trainers, BBL corsets, seamless shapewear and bodysuits at ${SITE_NAME}.`,
      path: '/categories',
    }),
  about: () =>
    buildPageMetadata({
      title: `About | ${SITE_NAME}`,
      description: `Meet ${SITE_NAME}, a women’s body shaping brand for the hourglass look. Based in ${BUSINESS_ADDRESS}.`,
      path: '/about',
    }),
  contact: () =>
    buildPageMetadata({
      title: `Contact | ${SITE_NAME}`,
      description: `WhatsApp ${SITE_NAME} to order waist trainers, BBL corsets and seamless shapewear.`,
      path: '/contact',
    }),
};
