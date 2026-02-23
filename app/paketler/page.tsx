import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
import CompareTable from "@/components/CompareTable";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Bayilik Paketleri ve Fiyatları | Premium Panel",
    description: "İhtiyacınıza en uygun IPTV bayilik paketini seçin. Aylık, 3 aylık ve yıllık avantajlı fiyat seçeneklerini inceleyin.",
    alternates: {
        canonical: "https://premiumpanel.com/paketler",
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            {/* Header Splash */}
            <section className="pt-32 pb-12 bg-slate-900 overflow-hidden relative">
                <div className="container mx-auto px-4 text-center z-10 relative">
                    <ScrollReveal textClassName="text-4xl md:text-5xl font-bold mb-4 text-white">
                        <h1>Bayilik Paketleri</h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 max-w-2xl mx-auto text-lg">
                        Sürpriz maliyetler yok. Şeffaf fiyatlandırma ve esnek ödeme seçenekleri ile hemen işinizi büyütün.
                    </ScrollReveal>
                </div>
            </section>

            <PricingCards />

            <CompareTable />

            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950 text-center border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <ScrollReveal textClassName="text-3xl font-bold mb-6 text-white text-center">
                        <h2>Özel Bir Teklif mi Arıyorsunuz?</h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 mb-8 max-w-2xl mx-auto">
                        100+ üzeri toplu kredi alımları ve kurumsal işbirlikleri için size özel fiyat teklifi hazırlayabiliriz.
                    </ScrollReveal>
                    <CTAButton href="https://wa.me/491632680219" variant="whatsapp" className="px-8 py-3">
                        WhatsApp'tan Teklif Alın
                    </CTAButton>
                </div>
            </section>

            <Footer />
        </main>
    );
}
