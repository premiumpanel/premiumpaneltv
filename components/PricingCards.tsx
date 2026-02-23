"use client";

import { Check, Shield } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "./ScrollReveal";

const plans = [
    {
        name: "Başlangıç Bayi",
        description: "Piyasayı test etmek ve ilk kazancını sağlamak isteyenler için.",
        credits: "1500",
        mathText: "10 Adet 1 Yıllık Satış",
        features: [
            "Ücretsiz Gelişmiş IPTV Paneli",
            "Sınırsız Test Hesabı Açma",
            "Canlı İstatistik Görünümü",
            "Standart Yönetim Desteği",
        ],
        popular: false,
        bonus: "Yeni Başlayanlar İçin İdeal",
        color: "slate",
        ctaText: "1500 Kredi Yükle & Başla"
    },
    {
        name: "Pro Reseller",
        description: "Kendi alt bayilerini kurmak ve markalaşmak isteyenler için.",
        credits: "3500",
        mathText: "23 Adet 1 Yıllık Satış Planlanabilir",
        bonus: "500 Kredi Hediye Dahil",
        features: [
            "Alt Bayi (Subreseller) Oluşturma",
            "Kendi Alan Adınızla Panel Girişi",
            "White Label Özelliği",
            "7/24 Öncelikli Teknik Destek",
        ],
        popular: true,
        color: "blue",
        ctaText: "Pro Paketi Seç"
    },
    {
        name: "Master Toptancı",
        description: "Çok sayıda satış yapan ana toptancılar için.",
        credits: "6500",
        mathText: "43 Adet 1 Yıllık Satış Planlanabilir",
        bonus: "1500 Kredi Hediye Dahil",
        features: [
            "En Düşük Birim Kredi Maliyeti",
            "Öncelikli VIP Teknik Destek",
            "Özel API & Marka Entegrasyonu",
            "Tam White Label & Özel DNS",
        ],
        popular: false,
        color: "amber",
        ctaText: "Master Bayi Ol"
    },
];

export default function PricingCards() {
    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden" id="pricing">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d5900a]/10 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal textClassName="text-3xl md:text-5xl font-bold mb-6 text-white min-h-[4rem]">
                        <h2>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x italic shadow-sm drop-shadow-md">
                                İhtiyacınıza Uygun IPTV Reseller Paketleri
                            </span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg mb-8">
                        Net fiyatlarla bütçenize en uygun paketi seçin, hemen kazanmaya başlayın.
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
                    {plans.map((plan) => (
                        <div key={plan.name} className="group relative w-full h-full">
                            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[#d5900a]/25 shimmer-main">
                                {/* Ambient glow backgrounds */}
                                <div className={`absolute inset-0 bg-gradient-to-b opacity-20 ${plan.popular ? "from-[#d5900a] to-amber-600" : "from-slate-700 to-slate-900"
                                    }`} />

                                <div className="relative h-full rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 p-8 flex flex-col">
                                    {/* Animated light orbs */}
                                    <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-[#d5900a]/20 to-amber-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />
                                    <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/20 to-[#d5900a]/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70" />

                                    {/* Popular Badge */}
                                    {plan.popular && (
                                        <div className="absolute -right-[1px] -top-[1px] overflow-hidden rounded-tr-3xl">
                                            <div className="absolute h-20 w-20 bg-gradient-to-r from-[#d5900a] to-amber-600" />
                                            <div className="absolute h-20 w-20 bg-slate-950/90" />
                                            <div className="absolute right-0 top-[22px] h-[2px] w-[56px] rotate-45 bg-gradient-to-r from-[#d5900a] to-amber-600" />
                                            <span className="absolute right-1 top-1 text-[9px] font-bold text-white tracking-widest">POPÜLER</span>
                                        </div>
                                    )}

                                    <div className="relative mb-6">
                                        <h3 className={`text-sm font-bold uppercase tracking-widest ${plan.popular ? "text-[#d5900a]" : "text-amber-500/80"
                                            }`}>
                                            {plan.name}
                                        </h3>
                                        <div className="mt-4 flex items-baseline gap-2">
                                            <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                                {plan.credits}
                                            </span>
                                            <span className="text-lg text-slate-400 font-medium">Kredi</span>
                                        </div>
                                        {plan.bonus && (
                                            <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#d5900a]/10 text-amber-500 border border-[#d5900a]/20">
                                                {plan.bonus}
                                            </div>
                                        )}
                                        <p className="mt-4 text-sm text-slate-400 leading-relaxed font-medium">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Unique IPTV Info Box */}
                                    <div className="relative mb-8 p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm group-hover:bg-slate-800/60 transition-colors">
                                        <p className="text-white font-bold text-center text-sm">
                                            {plan.mathText}
                                        </p>
                                    </div>

                                    <div className="relative space-y-4 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3 group/feat">
                                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d5900a]/10 group-hover/feat:bg-[#d5900a]/20 transition-colors">
                                                    <Check className="h-4 w-4 text-[#d5900a]" />
                                                </div>
                                                <p className="text-sm font-medium text-slate-300 group-hover/feat:text-white transition-colors">{feature}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="relative mt-10">
                                        <CTAButton
                                            href={`https://wa.me/491632680219?text=${encodeURIComponent(`Merhaba, ${plan.name} paketiniz hakkında bilgi almak istiyorum.`)}`}
                                            variant={plan.popular ? "amber" : "outline"}
                                            className="w-full py-2.5 justify-center text-base shadow-xl"
                                        >
                                            {plan.ctaText}
                                        </CTAButton>
                                    </div>

                                    <div className="mt-6 flex items-center justify-center gap-2">
                                        <Shield className="h-4 w-4 text-slate-500" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Güvenli ve Şeffaf Altyapı</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <ScrollReveal textClassName="text-slate-400 text-lg font-medium">
                        <p>
                            <strong className="text-white block sm:inline">Maliyetini Çıkar, Kârını Katla!</strong> <span className="opacity-90">İlk 1500 Kredini Hemen Yükle.</span>
                        </p>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
