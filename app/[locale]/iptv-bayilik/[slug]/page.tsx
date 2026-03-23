import { cities, getCitySEOContent } from "@/lib/cities";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

import { setRequestLocale, getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const city = cities.find(c => c.slug === slug);
    if (!city) return {};
    
    const t = await getTranslations({ locale, namespace: 'metadata_iptv_bayilik' });

    return {
        title: t('title', { city: city.name }),
        description: t('description', { city: city.name, region: city.region }),
        alternates: {
            canonical: `https://premiumpaneltv.com/${locale}/iptv-bayilik/${slug}`
        }
    }
}

export default async function CityPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    
    const city = cities.find((c) => c.slug === slug);

    if (!city) {
        notFound();
    }

    const { name, region } = city;
    const rawContent = getCitySEOContent(name, region);
    
    const formattedContent = rawContent
        .replace(/\n\n### (.*?)\n\n/g, '<h3>$1</h3>')
        .replace(/\n\n1\. (.*?)\n2\. (.*?)\n3\. (.*?)\n4\. (.*?)$/g, '<ol class="mt-4 list-decimal list-outside ml-6 space-y-2"><li>$1</li><li>$2</li><li>$3</li><li>$4</li></ol>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>');

    const t = await getTranslations({ locale, namespace: 'iptv_bayilik_page' });

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col pt-32">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(213,144,10,0.15)_0%,transparent_70%)] opacity-50"></div>
                
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <span className="inline-block py-1 px-4 rounded-full border border-[#d5900a]/30 bg-[#d5900a]/10 text-[#d5900a] text-sm font-bold uppercase tracking-wider mb-6 hover:shadow-[0_0_15px_rgba(213,144,10,0.5)] transition-shadow">
                        {t('hero_badge', { region })}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold italic text-white mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] leading-tight">
                        {t('hero_title', { name })}<br /> <span className="text-[#d5900a]">{t('hero_title_highlight')}</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                        {t('hero_desc', { name })}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <CTAButton 
                            href="https://wa.me/491632680219" 
                            variant="amber" 
                        >
                            {t('cta_customer', { name })}
                        </CTAButton>
                        <CTAButton 
                            href="/paketler" 
                            variant="outline" 
                        >
                            {t('cta_packages')}
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-slate-900 border-t border-b border-slate-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <article className="prose prose-invert prose-lg max-w-none hover:prose-a:text-[#d5900a] prose-a:text-[#d5900a]/80 prose-a:transition-colors prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[#d5900a] prose-p:text-slate-300">
                        <div dangerouslySetInnerHTML={{ __html: formattedContent }} />
                        
                        <div className="mt-12 p-6 bg-slate-950/50 border border-slate-700/50 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                            <div className="md:w-2/3">
                                <h4 className="text-xl font-bold text-white mb-2">{t('bottom_title')}</h4>
                                <p className="text-sm text-slate-400 mb-0">
                                    {t('bottom_desc', { name })}
                                </p>
                            </div>
                            <div className="md:w-1/3 flex justify-center">
                                <a href="https://wa.me/491632680219" className="inline-flex w-full items-center justify-center px-6 py-3 font-semibold text-white bg-[#d5900a] rounded-lg hover:scale-105 transition-transform">
                                    {t('wa_button')}
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}
