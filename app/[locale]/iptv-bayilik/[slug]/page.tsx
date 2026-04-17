import { cities, getCitySEOContent, getCityFAQs } from "@/lib/cities";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import { Link } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

import { setRequestLocale, getTranslations } from 'next-intl/server';

// Canonical for city pages always points to the TR version because the
// long-form SEO copy is Turkish-only. Non-TR locale renders the same page
// (so gurbetçi visitors still see useful content), but their canonical is
// the TR URL — this eliminates the duplicate-content flags that were
// showing up in Search Console as "noindex cache", "Crawled - not indexed"
// and "Alternate page with proper canonical".
function trCanonical(slug: string) {
    return `https://www.premiumpaneltv.com/iptv-bayilik/${slug}`;
}

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
            canonical: trCanonical(slug),
            languages: {
                'tr': trCanonical(slug),
                'x-default': trCanonical(slug),
            },
        },
    }
}

// ---------------------------------------------------------------------------
// Lightweight markdown -> HTML converter for the specific patterns used by
// getCitySEOContent(). Only the subset we emit is supported:
//   ### heading           -> <h2> (page h1 is the hero title)
//   - **label**: text     -> <ul><li>
//   - **label** — text    -> <ul><li>
//   - plain line          -> <ul><li>
//   1. **label** — text   -> <ol><li>
//   **bold**              -> <strong>
//   blank line            -> paragraph break
// ---------------------------------------------------------------------------
function renderContent(markdown: string): string {
    const lines = markdown.split("\n");
    const out: string[] = [];
    let listType: "ul" | "ol" | null = null;
    let paragraph: string[] = [];

    const inlineBold = (s: string) =>
        s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>');

    const flushParagraph = () => {
        if (paragraph.length > 0) {
            out.push(`<p>${inlineBold(paragraph.join(" ").trim())}</p>`);
            paragraph = [];
        }
    };
    const closeList = () => {
        if (listType) {
            out.push(`</${listType}>`);
            listType = null;
        }
    };

    for (const raw of lines) {
        const line = raw.trim();

        if (line === "") {
            flushParagraph();
            closeList();
            continue;
        }

        // Heading
        const h = /^###\s+(.+)$/.exec(line);
        if (h) {
            flushParagraph();
            closeList();
            out.push(`<h2>${inlineBold(h[1])}</h2>`);
            continue;
        }

        // Ordered list item: "1. **label** — text" or "1. text"
        const ol = /^(\d+)\.\s+(.+)$/.exec(line);
        if (ol) {
            flushParagraph();
            if (listType !== "ol") {
                closeList();
                listType = "ol";
                out.push(`<ol class="mt-4 list-decimal list-outside ml-6 space-y-2">`);
            }
            out.push(`<li>${inlineBold(ol[2])}</li>`);
            continue;
        }

        // Unordered list item: "- ..."
        const ul = /^-\s+(.+)$/.exec(line);
        if (ul) {
            flushParagraph();
            if (listType !== "ul") {
                closeList();
                listType = "ul";
                out.push(`<ul class="mt-4 list-disc list-outside ml-6 space-y-2">`);
            }
            out.push(`<li>${inlineBold(ul[1])}</li>`);
            continue;
        }

        // Regular paragraph line (collect until blank line)
        closeList();
        paragraph.push(line);
    }

    flushParagraph();
    closeList();
    return out.join("\n");
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
    const formattedContent = renderContent(rawContent);

    const t = await getTranslations({ locale, namespace: 'iptv_bayilik_page' });

    // Related cities from same region (max 6, excluding current)
    const relatedCities = cities
        .filter(c => c.region === region && c.slug !== slug)
        .slice(0, 6);

    const faqs = getCityFAQs(name, region);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": `https://www.premiumpaneltv.com${locale === 'tr' ? '' : `/${locale}`}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "IPTV Bayilik",
                "item": `https://www.premiumpaneltv.com${locale === 'tr' ? '' : `/${locale}`}/iptv-bayilik`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `${name} IPTV Bayilik`,
                "item": `https://www.premiumpaneltv.com${locale === 'tr' ? '' : `/${locale}`}/iptv-bayilik/${slug}`
            }
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${name} IPTV Bayilik Hizmeti`,
        "provider": {
            "@type": "Organization",
            "name": "Premium Panel"
        },
        "areaServed": {
            "@type": "City",
            "name": name
        },
        "description": t('hero_desc', { name }),
    };

    // FAQPage structured data — harvests featured-snippet and "People also ask"
    // positions in Google SERP for the seven questions embedded in the page.
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col pt-32">
            <Header />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={localBusinessSchema} />
            <JsonLd data={faqSchema} />

            {/* Breadcrumb Navigation */}
            <nav className="container mx-auto px-4 max-w-4xl pt-4" aria-label="Breadcrumb">
                <ol className="flex items-center text-sm text-slate-400 space-x-2">
                    <li><Link href="/" className="hover:text-[#d5900a] transition-colors">Ana Sayfa</Link></li>
                    <li className="text-slate-600">/</li>
                    <li><Link href="/iptv-bayilik" className="hover:text-[#d5900a] transition-colors">IPTV Bayilik</Link></li>
                    <li className="text-slate-600">/</li>
                    <li><span className="text-slate-300">{name} IPTV Bayilik</span></li>
                </ol>
            </nav>

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
                    <article className="prose prose-invert prose-lg max-w-none hover:prose-a:text-[#d5900a] prose-a:text-[#d5900a]/80 prose-a:transition-colors prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#d5900a] prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white prose-p:text-slate-300 prose-li:text-slate-300">
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

            {/* Related Cities - Internal Linking */}
            {relatedCities.length > 0 && (
                <section className="py-12 bg-slate-950">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h3 className="text-xl font-bold text-white mb-6">
                            {region} Bölgesinde IPTV Bayilik
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {relatedCities.map(c => (
                                <Link
                                    key={c.slug}
                                    href={`/iptv-bayilik/${c.slug}`}
                                    className="text-sm text-slate-400 hover:text-[#d5900a] transition-colors py-2 px-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#d5900a]/30"
                                >
                                    {c.name} IPTV Bayilik
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
