import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Sıkça Sorulan Sorular | Premium Panel",
    description: "Bayilik sistemi, ödemeler, panel kullanımı ve teknik konular hakkında merak edilenler.",
    alternates: {
        canonical: "https://premiumpanel.com/sss",
    },
};

const faqs = [
    {
        question: "Bayilik paneli nedir ve nasıl çalışır?",
        answer: "Bayilik paneli, kendi markanız altında IPTV hizmeti satmanızı sağlayan bir yönetim sistemidir. Size özel tahsis edilen kredi bakiyesi ile müşteri hesapları oluşturabilir, yönetebilir ve satış yapabilirsiniz.",
    },
    {
        question: "Panel kurulumu ne kadar sürer?",
        answer: "Ödeme işleminizin onaylanmasının ardından paneliniz 15-30 dakika içerisinde otomatik olarak kurulur ve erişim bilgileriniz size iletilir.",
    },
    {
        question: "Hangi cihazlarda yayın izlenebilir?",
        answer: "Smart TV, Android Box, Apple TV, Bilgisayar, Tablet ve Mobil cihazlar dahil olmak üzere internet bağlantısı olan tüm cihazlarda sorunsuz çalışır.",
    },
    {
        question: "Kredi sistemi nasıl işliyor?",
        answer: "Bayilik sisteminde her kredi genellikle 1 aylık aboneliğe eşittir. Müşterilerinize satış yaptıkça kredinizden düşülür. Kredileriniz asla silinmez, süre sınırı yoktur.",
    },
    {
        question: "Kendi markamı kullanabilir miyim (White Label)?",
        answer: "Evet, Pro ve Elite paketlerimizde tamamen kendi markanız (DNS, Panel Adı, Logo) ile hizmet verebilirsiniz. Müşterileriniz bizim altyapımızı görmez.",
    },
    {
        question: "Teknik destek sağlıyor musunuz?",
        answer: "Evet, tüm bayilerimize 7/24 teknik destek sağlıyoruz. WhatsApp ve panel içi ticket sistemi üzerinden bize her zaman ulaşabilirsiniz.",
    },
    {
        question: "Yayın kalitesi ve sunucu durumu nedir?",
        answer: "Sunucularımız %99.9 uptime garantisi ile Avrupa lokasyonlu yüksek hızlı veri merkezlerinde barındırılmaktadır. 4K ve FHD yayınlar donmadan izlenebilir.",
    },
];

export default function FAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            <section className="pt-32 pb-12 text-center bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <ScrollReveal textClassName="text-4xl md:text-5xl font-bold mb-4 text-white">
                        <h1>Sıkça Sorulan Sorular</h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 max-w-2xl mx-auto text-lg">
                        Hizmetlerimizle ilgili aklınıza takılan tüm soruların cevapları.
                    </ScrollReveal>
                </div>
            </section>

            <FAQAccordion />

            <Footer />
        </main>
    );
}
