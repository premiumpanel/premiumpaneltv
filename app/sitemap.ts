
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { cities } from '@/lib/cities';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.premiumpaneltv.com';
    const locales = ['tr', 'en', 'de', 'fr', 'nl'];
    const siteLastUpdated = new Date();

    const baseRoutes = [
        { path: '', priority: 1.0, changeFreq: 'weekly' as const },
        { path: '/paketler', priority: 0.9, changeFreq: 'monthly' as const },
        { path: '/ozellikler', priority: 0.8, changeFreq: 'monthly' as const },
        { path: '/sss', priority: 0.7, changeFreq: 'monthly' as const },
        { path: '/iletisim', priority: 0.6, changeFreq: 'monthly' as const },
        { path: '/gizlilik', priority: 0.3, changeFreq: 'yearly' as const },
        { path: '/kullanim', priority: 0.3, changeFreq: 'yearly' as const },
        { path: '/blog', priority: 0.8, changeFreq: 'weekly' as const },
        { path: '/iptv-bayilik', priority: 0.8, changeFreq: 'monthly' as const },
    ];

    const localizedRoutes = locales.flatMap(locale =>
        baseRoutes.map(route => ({
            url: `${baseUrl}${locale === 'tr' ? '' : `/${locale}`}${route.path}`,
            lastModified: siteLastUpdated,
            changeFrequency: route.changeFreq,
            priority: route.priority,
            alternates: {
                languages: Object.fromEntries([
                    ...locales.map(loc => [loc, `${baseUrl}${loc === 'tr' ? '' : `/${loc}`}${route.path}`]),
                    ['x-default', `${baseUrl}${route.path}`],
                ]),
            },
        }))
    );

    // Blog posts (per locale) - with hreflang alternates
    const localizedPosts = locales.flatMap(locale =>
        blogPosts.map(post => ({
            url: `${baseUrl}${locale === 'tr' ? '' : `/${locale}`}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
            alternates: {
                languages: Object.fromEntries([
                    ...locales.map(loc => [loc, `${baseUrl}${loc === 'tr' ? '' : `/${loc}`}/blog/${post.slug}`]),
                    ['x-default', `${baseUrl}/blog/${post.slug}`],
                ]),
            },
        }))
    );

    // City pages — Turkish-only in the sitemap. The long-form SEO copy is
    // Turkish, so the non-TR locale URLs canonical back to the TR version
    // (see app/[locale]/iptv-bayilik/[slug]/page.tsx). Including only the TR
    // URL here stops Google from repeatedly discovering 5 near-duplicate
    // copies per city, which was the root cause of the "Discovered - not
    // indexed" and "Crawled - not indexed" Search Console categories.
    const cityPages = cities.map(city => ({
        url: `${baseUrl}/iptv-bayilik/${city.slug}`,
        lastModified: siteLastUpdated,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
            languages: {
                'tr': `${baseUrl}/iptv-bayilik/${city.slug}`,
                'x-default': `${baseUrl}/iptv-bayilik/${city.slug}`,
            },
        },
    }));

    return [...localizedRoutes, ...localizedPosts, ...cityPages];
}
