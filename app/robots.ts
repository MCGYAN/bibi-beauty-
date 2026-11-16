import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-brand';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || SITE_URL;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/checkout', '/cart', '/account/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
