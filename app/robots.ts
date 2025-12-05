import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/','/projects','/contact'],
    },
    sitemap: 'https://www.nerdboi.online/sitemap.xml',
  }
}