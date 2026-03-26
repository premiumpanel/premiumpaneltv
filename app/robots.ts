import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/', '/_next/'],
            },
        ],
        sitemap: 'https://premiumpaneltv.com/sitemap.xml',
        host: 'https://premiumpaneltv.com',
    };
}
