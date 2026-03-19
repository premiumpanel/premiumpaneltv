import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
import MasonryGallery from "@/components/MasonryGallery";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata_paketler' });
    
    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://premiumpanel.com/${locale}/paketler`,
        },
    };
}

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "pricing_page" });

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            {/* Header Splash */}
            <section className="pt-32 pb-12 bg-slate-900 overflow-hidden relative">
                <div className="container mx-auto px-4 text-center z-10 relative">
                    <ScrollReveal textClassName="text-4xl md:text-5xl font-bold mb-4 text-white">
                        <h1>{t("title")}</h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 max-w-2xl mx-auto text-lg">
                        {t("subtitle")}
                    </ScrollReveal>
                </div>
            </section>

            <PricingCards />

            <MasonryGallery />

            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 text-center border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <ScrollReveal textClassName="text-3xl font-bold mb-6 text-white text-center">
                        <h2>{t("offer_title")}</h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 mb-8 max-w-2xl mx-auto">
                        {t("offer_subtitle")}
                    </ScrollReveal>
                    <CTAButton href="https://wa.me/491632680219" variant="whatsapp" className="px-8 py-3">
                        {t("offer_cta")}
                    </CTAButton>
                </div>
            </section>

            <Footer />
        </main>
    );
}
