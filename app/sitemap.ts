
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://premiumpanel.com';
    const locales = ['tr', 'en', 'de', 'fr', 'nl'];

    const baseRoutes = [
        '',
        '/paketler',
        '/ozellikler',
        '/sss',
        '/iletisim',
        '/gizlilik',
        '/kullanim',
        '/blog',
    ];

    const localizedRoutes = locales.flatMap(locale => 
        baseRoutes.map(route => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: route === '' ? 1 : 0.8,
        }))
    );

    // Blog posts (per locale)
    const localizedPosts = locales.flatMap(locale =>
        blogPosts.map(post => ({
            url: `${baseUrl}/${locale}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        }))
    );

    // City pages (IPTV Bayilik Local Cluster)
    const cityPages = locales.flatMap(locale =>
        cities.map(city => ({
            url: `${baseUrl}/${locale}/iptv-bayilik/${city.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    );

    return [...localizedRoutes, ...localizedPosts, ...cityPages];
}
