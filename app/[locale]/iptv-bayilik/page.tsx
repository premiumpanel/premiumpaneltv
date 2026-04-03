import { cities } from "@/lib/cities";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'metadata_iptv_bayilik' });

    return {
        title: t('list_title', { default: 'IPTV Bayilik Bölgeleri' }),
        description: t('list_description', { default: 'Türkiye genelinde IPTV bayilik hizmeti verdiğimiz şehirler ve bölgeler.' }),
        alternates: {
            canonical: `https://www.premiumpaneltv.com${locale === 'tr' ? '' : `/${locale}`}/iptv-bayilik`,
            languages: {
                'tr': 'https://www.premiumpaneltv.com/iptv-bayilik',
                'en': 'https://www.premiumpaneltv.com/en/iptv-bayilik',
                'de': 'https://www.premiumpaneltv.com/de/iptv-bayilik',
                'fr': 'https://www.premiumpaneltv.com/fr/iptv-bayilik',
                'nl': 'https://www.premiumpaneltv.com/nl/iptv-bayilik',
                'x-default': 'https://www.premiumpaneltv.com/iptv-bayilik',
            },
        },
    };
}

export default async function IptvBayilikListPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'iptv_bayilik_page' });

    // Group cities by region
    const regions = Array.from(new Set(cities.map(c => c.region)));

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col pt-32">
            <Header />

            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            IPTV Bayilik <span className="text-[#d5900a]">Hizmet Bölgelerimiz</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            Türkiye'nin 81 ilinde profesyonel IPTV bayilik altyapısı sunuyoruz. Bulunduğunuz şehri seçerek size özel avantajları inceleyin.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {regions.map(region => (
                            <div key={region} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
                                <h2 className="text-2xl font-bold text-[#d5900a] mb-8 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[#d5900a]/10 flex items-center justify-center text-sm">📍</span>
                                    {region} Bölgesi
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {cities
                                        .filter(c => c.region === region)
                                        .map(city => (
                                            <Link
                                                key={city.slug}
                                                href={`/iptv-bayilik/${city.slug}`}
                                                className="group p-4 bg-slate-950/50 border border-slate-800 rounded-xl hover:border-[#d5900a]/50 hover:bg-slate-900 transition-all duration-300"
                                            >
                                                <span className="text-slate-300 group-hover:text-white font-medium transition-colors">
                                                    {city.name}
                                                </span>
                                                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">IPTV Bayilik</p>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
