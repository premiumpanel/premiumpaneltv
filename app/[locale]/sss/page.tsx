import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata_sss' });
    
    const { getAlternates } = await import('@/lib/seo');
    return {
        title: t("title"),
        description: t("description"),
        alternates: getAlternates(locale, '/sss'),
    };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "faq_page" });

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            <section className="pt-32 pb-12 text-center bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <ScrollReveal textClassName="text-4xl md:text-5xl font-bold mb-4 text-white">
                        <h1>{t("title")}</h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 max-w-2xl mx-auto text-lg">
                        {t("subtitle")}
                    </ScrollReveal>
                </div>
            </section>

            <FAQAccordion />

            <Footer />
        </main>
    );
}
