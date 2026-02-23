import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { Star, Shield, Users, Radio, Zap, Headphones } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { ThreeDMarquee, MarqueeImage } from "@/components/ui/3d-marquee";

const marqueeImages: MarqueeImage[] = [
    { src: "/assets/images/media/heroimg/nba-iptv-izlemek.jpg", alt: "NBA IPTV İzleme" },
    { src: "/assets/images/media/heroimg/iptv-18-icerik.jpg", alt: "IPTV 18+ İçerik" },
    { src: "/assets/images/media/heroimg/iptv-canli-mac.jpg", alt: "IPTV Canlı Maç" },
    { src: "/assets/images/media/heroimg/güncel-sinema-iptv.jpg", alt: "Güncel Sinema IPTV" },
    { src: "/assets/images/media/heroimg/iptv-de-en-iyi-filmler.jpg", alt: "IPTV En İyi Filmler" },
    { src: "/assets/images/media/heroimg/iptv-netflix-disney.jpg", alt: "IPTV Netflix ve Disney" },
    { src: "/assets/images/media/heroimg/iptv-mac-izle.jpg", alt: "IPTV Maç İzle" },
    { src: "/assets/images/media/heroimg/iptv-dizi-izleme.jpg", alt: "IPTV Dizi İzleme" },
    { src: "/assets/images/media/heroimg/vizyon-filmleri-iptv.jpg", alt: "Vizyon Filmleri IPTV" },
    { src: "/assets/images/media/heroimg/iptv-popüler-diziler.jpg", alt: "IPTV Popüler Diziler" },
    { src: "/assets/images/media/heroimg/iptv-spor-kanallari.jpg", alt: "IPTV Spor Kanalları" },
    { src: "/assets/images/media/heroimg/iptv-dizi-listesi.jpg", alt: "IPTV Dizi Listesi" },
    { src: "/assets/images/media/heroimg/iptv-acik-film-icerikleri.jpg", alt: "IPTV Açık Film İçerikleri" },
    { src: "/assets/images/media/heroimg/iptv-film-izle.jpg", alt: "IPTV Film İzle" },
    { src: "/assets/images/media/heroimg/iptv-yetiskin-icerik.jpg", alt: "IPTV Yetişkin İçerik" },
    { src: "/assets/images/media/heroimg/iptv-guncel-filmler.jpg", alt: "IPTV Güncel Filmler" },
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950">

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-950/80 z-10 opactiy-90" /> {/* Overlay for better text readability */}
                <video
                    src="/assets/images/media/lexend-home-8.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-30"
                />
                {/* Top gradient fade */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10" />
                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 z-20 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="text-left max-w-4xl mx-auto lg:mx-0">
                        <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold mb-8 leading-[1.15] text-white tracking-tight drop-shadow-2xl pb-4">
                            <ScrollReveal>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x block">
                                    Kredili IPTV Bayilik Paneli
                                </span>
                            </ScrollReveal>
                            <ScrollReveal>
                                <span className="block text-white">
                                    ile Kolayca Satışa Başlayın
                                </span>
                            </ScrollReveal>
                        </h1>

                        <ScrollReveal
                            textClassName="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed drop-shadow-md"
                        >
                            Bayilik ücretsizdir. Paneli aktif etmek için minimum 1500 kredi yüklemeniz yeterlidir. Sistem tamamen ön ödemeli ve şeffaftır: Oluşturduğunuz her 12 aylık üyelik için yalnızca 150 kredi düşer. 1500 kredi ile 10 adet yıllık satış yapabilir, fiyat politikanızı kendiniz belirleyerek kârınızı kontrol edebilirsiniz.
                        </ScrollReveal>

                        <div className="flex flex-col sm:flex-row items-center lg:items-start justify-start gap-4 mb-8">
                            <CTAButton href="https://wa.me/491632680219" variant="primary" className="w-full sm:w-auto shadow-xl shadow-blue-600/20">
                                1500 Kredi ile Başla
                            </CTAButton>
                            <CTAButton href="#demo" variant="outline" className="w-full sm:w-auto shadow-xl shadow-white/10" icon={false}>
                                Paneli Demo İncele
                            </CTAButton>
                        </div>

                        {/* TrustPilot Style Reviews */}
                        <div className="flex flex-row items-center justify-start gap-4 text-sm text-slate-300 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700 backdrop-blur-sm">
                                <span className="font-bold text-white">Mükemmel</span>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="p-1">
                                            <Star className="w-3 h-3 text-[#d5900a] fill-current" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <span className="opacity-80 font-medium">%98.7 Olumlu Geri Dönüş</span>
                        </div>
                    </div>

                    {/* Right Column: 3D Marquee Gallery */}
                    <div className="relative w-full overflow-visible py-10">
                        <ThreeDMarquee images={marqueeImages} />
                    </div>
                </div>

                {/* Stats Row - Minimalist Indicator Design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-20 border-t border-white/5">
                    {[
                        {
                            label: "Geniş bayi ağımızla daha fazla müşteriye güvenle ulaşın.",
                            value: "800+ Aktif Bayi",
                            icon: <Users className="w-5 h-5" />
                        },
                        {
                            label: "Kesintisiz yayın kalitesi için %99.9 çalışma süresi taahhüdü.",
                            value: "%99.9 Uptime",
                            icon: <Shield className="w-5 h-5" />
                        },
                        {
                            label: "Her türlü teknik desteğe ve talebe anında uzman müdahalesi.",
                            value: "7/24 Teknik Destek",
                            icon: <Headphones className="w-5 h-5" />
                        },
                    ].map((stat, i) => (
                        <div key={i} className="group relative p-8 transition-all duration-300 hover:bg-white/[0.02] border-r border-white/5 last:border-r-0">
                            {/* Left Indicator Pill */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-12 bg-slate-800 rounded-full group-hover:bg-[#d5900a] transition-all duration-300 shadow-[0_0_15px_rgba(213,144,10,0)] group-hover:shadow-[0_0_15px_rgba(213,144,10,0.5)]"></div>

                            <div className="flex flex-col gap-4 pl-2">
                                <div className="text-slate-400 group-hover:text-[#d5900a] transition-colors duration-300">
                                    {stat.icon}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                                        {stat.value}
                                    </h4>
                                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
