import { User, UserCheck, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
    const steps = [
        {
            title: "1. 1500 Kredi Yükleyin",
            description: "Hiçbir kurulum bedeli ödemeden, yalnızca satacağınız ürünün sermayesi olan 1500 krediyi satın alarak hesabınızı aktif hale getirin.",
            icon: User,
            color: "bg-[#d5900a]",
        },
        {
            title: "2. Bayi Paneline Giriş Yapın",
            description: "Size özel tanımlanan IPTV reseller paneline cihazınızdan erişin. Arayüz üzerinden test hesapları açarak platformu deneyimleyin.",
            icon: Smartphone,
            color: "bg-[#d5900a]/90",
        },
        {
            title: "3. 12 Aylık Satış (150 Kredi Düşer)",
            description: "Müşterilerinize abonelik açın. Yaptığınız her 1 yıllık (12 ay) satış için bakiyenizden yalnızca 150 kredi eksilir. Kalan kredileriniz silinmez.",
            icon: UserCheck,
            color: "bg-[#d5900a]/80",
        },
    ];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="how-it-works">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <ScrollReveal textClassName="text-3xl md:text-5xl font-extrabold mb-6 text-white italic drop-shadow-md">
                        <h2 className="pb-2">Süreç Nasıl İşliyor?</h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg max-w-2xl mx-auto">
                        Giriş ücreti veya aylık taahhüt yok, adım adım şeffaf kredi modeli ile işinizi kurun.
                    </ScrollReveal>
                </div>

                <div className="relative">
                    {/* Continuous Timeline Line */}
                    <div className="absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-800 hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#d5900a]/50 via-amber-400 to-[#d5900a]/50 w-full animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center text-center group">
                                {/* Step Indicator */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center transition-all duration-500 group-hover:border-[#d5900a] group-hover:shadow-[0_0_30px_rgba(213,144,10,0.2)] relative z-10 overflow-hidden shimmer-main">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#d5900a]/10 to-transparent group-hover:opacity-100 opacity-0 transition-opacity" />
                                        <step.icon className="w-8 h-8 text-slate-500 group-hover:text-[#d5900a] transition-colors duration-500" />
                                    </div>

                                    {/* Number Badge */}
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#d5900a] text-black font-black text-sm flex items-center justify-center border-4 border-slate-950 z-20">
                                        {idx + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <ScrollReveal textClassName="text-2xl font-bold text-white mb-4 italic group-hover:text-[#d5900a] transition-colors">
                                    <h3>{step.title.split('. ')[1]}</h3>
                                </ScrollReveal>
                                <ScrollReveal textClassName="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                                    {step.description}
                                </ScrollReveal>

                                {/* Connector for Mobile (Optional dot) */}
                                <div className="md:hidden w-1 h-12 bg-slate-800 my-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
