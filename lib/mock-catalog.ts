/**
 * Frontend-only sample catalog for ShapewearBoss.
 * Replace with live data once NEXT_PUBLIC_SUPABASE_* env vars are set.
 */

import { isSupabaseConfigured } from '@/lib/supabase';

export function isMockCatalogMode(): boolean {
  return !isSupabaseConfigured();
}

export const MOCK_SHOP_CATEGORIES = [
  {
    id: 'waist-trainers',
    label: 'Waist Trainers',
    href: '/shop?category=waist-trainers',
    image: '/category-waist-trainers.jpg',
  },
  {
    id: 'bbl-corsets',
    label: 'BBL Corsets',
    href: '/shop?category=bbl-corsets',
    image: '/category-bbl-corsets.jpg',
  },
  {
    id: 'seamless-shapewear',
    label: 'Seamless Shapewear',
    href: '/shop?category=seamless-shapewear',
    image: '/category-seamless-shapewear.jpg',
  },
  {
    id: 'bodysuits-fajas',
    label: 'Bodysuits & Fajas',
    href: '/shop?category=bodysuits-fajas',
    image: '/category-bodysuits-fajas.jpg',
  },
] as const;

export type MockCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  parent_id: string | null;
  position: number;
};

export const MOCK_CATEGORIES: MockCategory[] = [
  {
    id: 'cat-waist',
    name: 'Waist Trainers',
    slug: 'waist-trainers',
    description: 'Cinch and define the waist for a sharper hourglass line.',
    image_url: '/category-waist-trainers.jpg',
    parent_id: null,
    position: 1,
  },
  {
    id: 'cat-bbl',
    name: 'BBL Corsets',
    slug: 'bbl-corsets',
    description: 'Support and enhance hips and buttocks under your clothes.',
    image_url: '/category-bbl-corsets.jpg',
    parent_id: null,
    position: 2,
  },
  {
    id: 'cat-seamless',
    name: 'Seamless Shapewear',
    slug: 'seamless-shapewear',
    description: 'Invisible under dresses and everyday outfits: smooth, no lines.',
    image_url: '/category-seamless-shapewear.jpg',
    parent_id: null,
    position: 3,
  },
  {
    id: 'cat-bodysuits',
    name: 'Bodysuits & Fajas',
    slug: 'bodysuits-fajas',
    description: 'Full body compression garments that sculpt from bust to thigh.',
    image_url: '/category-bodysuits-fajas.jpg',
    parent_id: null,
    position: 4,
  },
];

export type MockProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compare_at_price?: number;
  category: string;
  categorySlug: string;
  image: string;
  images?: string[];
  tagline?: string;
  rating_avg: number;
  quantity: number;
  moq: number;
  featured?: boolean;
};

const MOCK_PRODUCTS: MockProduct[] = [
  {
    id: 'mock-classic-trainer',
    slug: 'classic-hourglass-waist-trainer',
    name: 'Classic Hourglass Waist Trainer',
    description:
      'Targeted compression for the waist so dresses and sets skim the way you want: firm support without bulk.',
    price: 220,
    category: 'Waist Trainers',
    categorySlug: 'waist-trainers',
    image: '/product-classic-hourglass-waist-trainer.jpg',
    images: ['/product-classic-hourglass-waist-trainer.jpg'],
    tagline: 'Define the waist',
    rating_avg: 4.9,
    quantity: 35,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-bbl-corset',
    slug: 'curve-lift-bbl-corset',
    name: 'Curve Lift BBL Corset',
    description:
      'Designed to support and enhance hips and buttocks while smoothing the waist: built for that rounded, lifted look.',
    price: 320,
    compare_at_price: 380,
    category: 'BBL Corsets',
    categorySlug: 'bbl-corsets',
    image: '/product-curve-lift-bbl-corset.jpg',
    images: ['/product-curve-lift-bbl-corset.jpg'],
    tagline: 'Hips up, waist in',
    rating_avg: 4.9,
    quantity: 28,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-seamless-suit',
    slug: 'seamless-sculpt-bodysuit',
    name: 'Seamless Sculpt Bodysuit',
    description:
      'Matte, high compression knit with a clean V neck: invisible under clothes, dramatic in how everything fits.',
    price: 260,
    category: 'Seamless Shapewear',
    categorySlug: 'seamless-shapewear',
    image: '/product-seamless-sculpt-bodysuit.jpg',
    images: ['/product-seamless-sculpt-bodysuit.jpg'],
    tagline: 'No lines, all shape',
    rating_avg: 4.8,
    quantity: 45,
    moq: 1,
    featured: true,
  },
  {
    id: 'mock-faja',
    slug: 'full-body-faja-shaper',
    name: 'Full Body Faja Shaper',
    description:
      'Compression from bust to thigh: a classic faja silhouette for stage ready shape and all day support.',
    price: 360,
    compare_at_price: 420,
    category: 'Bodysuits & Fajas',
    categorySlug: 'bodysuits-fajas',
    image: '/product-full-body-faja-shaper.jpg',
    images: ['/product-full-body-faja-shaper.jpg'],
    tagline: 'Full body control',
    rating_avg: 5.0,
    quantity: 22,
    moq: 1,
    featured: true,
  },
];

export const MOCK_FEATURED_PRODUCTS = MOCK_PRODUCTS.filter((p) => p.featured).map((p) => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  category: p.category,
  price: p.price,
  originalPrice: p.compare_at_price,
  image: p.image,
  tagline: p.tagline,
}));

export function getMockCategories(): MockCategory[] {
  return MOCK_CATEGORIES;
}

export function getMockProductBySlug(slug: string): MockProduct | undefined {
  return MOCK_PRODUCTS.find((p) => p.slug === slug || p.id === slug);
}

export type MockShopFilters = {
  search?: string | null;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  minRating?: number;
  sortBy?: string;
  page?: number;
  perPage?: number;
};

export function filterMockProducts(filters: MockShopFilters = {}) {
  const {
    search,
    category = 'all',
    priceMin = 0,
    priceMax = 5000,
    minRating = 0,
    sortBy = 'popular',
    page = 1,
    perPage = 9,
  } = filters;

  let results = [...MOCK_PRODUCTS];

  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tagline?.toLowerCase().includes(q) ?? false)
    );
  }

  if (category !== 'all') {
    results = results.filter((p) => p.categorySlug === category);
  } else if (sortBy === 'new' || sortBy === 'newest') {
    results = results.filter((p) => p.featured);
  }

  if (priceMax < 5000) {
    results = results.filter((p) => p.price >= priceMin && p.price <= priceMax);
  }

  if (minRating > 0) {
    results = results.filter((p) => p.rating_avg >= minRating);
  }

  switch (sortBy) {
    case 'price-low':
      results.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      results.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
    case 'new':
    case 'newest':
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default:
      results.sort((a, b) => b.rating_avg - a.rating_avg);
      break;
  }

  const total = results.length;
  const from = (page - 1) * perPage;
  const pageItems = results.slice(from, from + perPage);

  return { products: pageItems, total, totalPages: Math.ceil(total / perPage) || 1 };
}

export function mockProductToCard(product: MockProduct) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    originalPrice: product.compare_at_price,
    image: product.image,
    rating: product.rating_avg,
    reviewCount: 0,
    badge: product.compare_at_price && product.compare_at_price > product.price ? 'Sale' : undefined,
    inStock: product.quantity > 0,
    maxStock: product.quantity,
    moq: product.moq,
    category: product.category,
    hasVariants: false,
    minVariantPrice: undefined,
    colorVariants: [] as { name: string; hex: string }[],
  };
}

export function mockProductToDetail(product: MockProduct) {
  const images = (product.images?.length ? product.images : [product.image]).filter((src) =>
    Boolean(src?.trim())
  );
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    compare_at_price: product.compare_at_price,
    images,
    category: product.category,
    rating: product.rating_avg,
    rating_avg: product.rating_avg,
    reviewCount: 0,
    stockCount: product.quantity,
    quantity: product.quantity,
    moq: product.moq,
    colors: [] as string[],
    colorHexMap: {} as Record<string, string>,
    variants: [] as unknown[],
    sizes: [] as string[],
    features: [
      'Hourglass focused fit',
      'Nationwide delivery',
      'Pay on delivery available',
    ],
    featured: [
      'Hourglass focused fit',
      'Nationwide delivery',
      'Pay on delivery available',
    ],
    care: 'Hand wash cold or gentle cycle. Air dry. Do not bleach. Avoid high heat.',
    preorderShipping: null,
  };
}

export function getRelatedMockProducts(product: MockProduct, limit = 4) {
  return MOCK_PRODUCTS.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, limit)
    .map(mockProductToCard);
}
