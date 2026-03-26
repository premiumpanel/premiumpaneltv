
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://premiumpaneltv.com';
    const locales = ['tr', 'en', 'de', 'fr', 'nl'];
    const siteLastUpdated = new Date('2026-03-19');

    const baseRoutes = [
        { path: '', priority: 1.0, changeFreq: 'weekly' as const },
        { path: '/paketler', priority: 0.9, changeFreq: 'monthly' as const },
        { path: '/ozellikler', priority: 0.8, changeFreq: 'monthly' as const },
        { path: '/sss', priority: 0.7, changeFreq: 'monthly' as const },
        { path: '/iletisim', priority: 0.6, changeFreq: 'monthly' as const },
        { path: '/gizlilik', priority: 0.3, changeFreq: 'yearly' as const },
        { path: '/kullanim', priority: 0.3, changeFreq: 'yearly' as const },
        { path: '/blog', priority: 0.8, changeFreq: 'weekly' as const },
    ];

    const localizedRoutes = locales.flatMap(locale =>
        baseRoutes.map(route => ({
            url: `${baseUrl}/${locale}${route.path}`,
            lastModified: siteLastUpdated,
            changeFrequency: route.changeFreq,
            priority: route.priority,
            alternates: {
                languages: Object.fromEntries([
                    ...locales.map(loc => [loc, `${baseUrl}/${loc}${route.path}`]),
                    ['x-default', `${baseUrl}/tr${route.path}`],
                ]),
            },
        }))
    );

    // Blog posts (per locale) - with hreflang alternates
    const localizedPosts = locales.flatMap(locale =>
        blogPosts.map(post => ({
            url: `${baseUrl}/${locale}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
            alternates: {
                languages: Object.fromEntries([
                    ...locales.map(loc => [loc, `${baseUrl}/${loc}/blog/${post.slug}`]),
                    ['x-default', `${baseUrl}/tr/blog/${post.slug}`],
                ]),
            },
        }))
    );

    // City pages - only Turkish locale (other locales have same Turkish content = duplicate)
    const cityPages = cities.map(city => ({
        url: `${baseUrl}/tr/iptv-bayilik/${city.slug}`,
        lastModified: siteLastUpdated,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...localizedRoutes, ...localizedPosts, ...cityPages];
}
