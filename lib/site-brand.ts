/**
 * ShapewearBoss brand identity & site copy
 * Palette: Deep Burgundy + Champagne Gold + Warm Nude
 */

export const SITE_NAME = 'ShapewearBoss';
export const SITE_SHORT_NAME = 'ShapewearBoss';
export const SITE_DESCRIPTION =
  'Premium waist trainers, BBL corsets, seamless shapewear and fajas for women who want an hourglass fit, confidence in how every outfit sits.';
export const SITE_TAGLINE = 'Shape the Confidence.';
export const SITE_HERO_TAGLINE = 'Body shaping that transforms how you show up.';
export const SITE_LOCATION_TAGLINE = 'Ghana';

export const HERO_HEADLINE = 'Your Silhouette. Your Power.';
export const HERO_SUBHEADLINE =
  'Waist trainers, BBL corsets, seamless shapewear and fajas, made for the hourglass look. Shop nationwide with pay on delivery.';

export const SITE_URL = 'https://shapewearboss.com';
export const CONTACT_EMAIL = 'hello@shapewearboss.com';
export const CONTACT_PHONE = '';
export const CONTACT_PHONE_DISPLAY = 'WhatsApp to order';
export const CONTACT_PHONE_SECONDARY = '';
export const CONTACT_PHONE_SECONDARY_DISPLAY = '';
/** Set your WhatsApp number (country code, no +) e.g. 233XXXXXXXXX */
export const WHATSAPP_URL = 'https://wa.me/';
export const BUSINESS_ADDRESS = 'Ghana';
export const BUSINESS_CITY = 'Accra';
export const BUSINESS_COUNTRY = 'Ghana';

export const LOGO_VERSION = '1';
export const LOGO_PATH = `/logo.png?v=${LOGO_VERSION}`;
export const HEADER_LOGO_PATH = LOGO_PATH;
export const FOOTER_LOGO_PATH = LOGO_PATH;

export function resolveSiteLogo(cmsValue?: string | null): string {
  const v = (cmsValue ?? '').trim().toLowerCase();
  if (!v) return LOGO_PATH;
  return LOGO_PATH;
}

export const OG_IMAGE_PATH = '/og-image.png';
export const HERO_IMAGE_VERSION = '1';
export const HERO_IMAGE_PATH = `/hero-2.jpg?v=${HERO_IMAGE_VERSION}`;

export const HERO_SLIDES = [
  {
    src: `/hero-1.jpg?v=${HERO_IMAGE_VERSION}`,
    alt: 'ShapewearBoss waist cinching bodysuit, adjustable compression for an hourglass waist',
  },
  {
    src: `/hero-2.jpg?v=${HERO_IMAGE_VERSION}`,
    alt: 'Seamless shapewear bodysuit, smooth silhouette and confident curves',
  },
  {
    src: `/hero-3.jpg?v=${HERO_IMAGE_VERSION}`,
    alt: 'BBL enhancing shapewear, sculpted hips and a defined waist',
  },
] as const;

export const SOCIAL_INSTAGRAM = '';
export const SOCIAL_FACEBOOK = '';
export const SOCIAL_TIKTOK = '';
export const SOCIAL_SNAPCHAT = '';

export const DEFAULT_PRODUCT_BRAND = 'ShapewearBoss';
export const CATALOG_PDF_PREFIX = 'shapewearboss-catalog';

export const SHOP_CATEGORIES = [
  { label: 'Waist Trainers', href: '/shop?category=waist-trainers' },
  { label: 'BBL Corsets', href: '/shop?category=bbl-corsets' },
  { label: 'Seamless Shapewear', href: '/shop?category=seamless-shapewear' },
  { label: 'Bodysuits & Fajas', href: '/shop?category=bodysuits-fajas' },
] as const;

export const CUSTOMER_REVIEWS = [
  {
    text: 'My dresses finally sit the way I want. The waist looks snatched without feeling trapped all day.',
    rating: 5,
  },
  {
    text: 'Ordered on WhatsApp, paid on delivery, and the BBL corset gave me the curve I was after. Packaging was neat.',
    rating: 5,
  },
  {
    text: 'Seamless under my office wear, no lines, just a smoother silhouette. I feel more confident walking into rooms.',
    rating: 5,
  },
  {
    text: 'This is not just underwear. It is how my outfits look finished. ShapewearBoss gets the assignment.',
    rating: 5,
  },
] as const;

export const ABOUT_HEADLINE = 'Confidence In How You Fit';
export const ABOUT_BODY =
  'is a women’s body shaping brand for the hourglass look: waist trainers, BBL corsets, seamless shapewear, bodysuits and fajas. We sell appearance transformation: the confidence of clothes that skim, lift and define. Shop via TikTok, WhatsApp and nationwide delivery with pay on delivery.';

/** PWA / browser theme. Keep in sync with brand.rose in tailwind.config.js. */
export const THEME_COLOR = '#641D35';
export const THEME_SURFACE = '#E8D5C8';

export const BRAND_COLORS = {
  burgundy: '#641D35',
  gold: '#D6B58A',
  nude: '#E8D5C8',
  charcoal: '#292125',
  cream: '#F6EEE8',
  white: '#FFFFFF',
} as const;
