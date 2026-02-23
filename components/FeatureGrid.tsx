import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
    {
        title: "Bayi Olmak Ücretsizdir",
        description: "Premium Panel ile ücretsiz IPTV satabilir, bayi ol sürecini herhangi bir başlangıç ücreti ödemeden tamamlayabilirsin. Sistemimiz kredili altyapı ile çalışır. Yüklenen krediler silinmez ve sonraki satışlar için devreder.",
        image: "/assets/images/media/ucretsiz-iptv-bayilik.png",
        link: "/ozellikler",
        colSpan: "lg:col-span-4",
    },
    {
        title: "Kredili IPTV Bayi Paneli",
        description: "IPTV bayi panelimiz ön ödemeli kredi sistemi ile çalışır. Yüklediğin kredi kadar satış yaparsın, her üyelik bakiyenden düşer.",
        image: "/assets/images/media/iptv-bayilik-kredisi.png",
        link: "/ozellikler",
        colSpan: "lg:col-span-4",
    },
    {
        title: "Alt Bayilik (Subreseller) İmkanı",
        description: "Kendi IPTV reseller ağını kur! Alt bayi oluşturabilir, kar oranını belirleyebilir ve kredi transferi yaparak kendi satış ağınızı kurabilirsiniz.",
        image: "/assets/images/media/iptv-alt-bayi-olmak.png",
        link: "/ozellikler",
        colSpan: "lg:col-span-4",
    },
    {
        title: "Anlık Yönetim & Hat Kontrolü",
        description: "IPTV bayi paneli üzerinden kullanıcı oluşturma, süre uzatma, şifre yenileme ve istatistik görüntüleme işlemlerini tek ekrandan yönet. Geniş cihaz uyumluluğu ile MAC tabanlı veya m3u listesi kullanan cihazlara hat oluşturabilirsin.",
        image: "/assets/images/media/iptv-kullanici-yonetimi.png",
        link: "/paketler",
        colSpan: "lg:col-span-6",
        isLarge: true,
    },
    {
        title: "Büyüyen İşler İçin Bayilik Altyapısı",
        description: "Bireysel satıştan geniş bayi ağlarına kadar her seviyeye uygun altyapı. Kredili sistem ve panel araçlarıyla işini büyütmek için ekstra yatırıma ihtiyaç duymazsın. IPTV bayilik modelini profesyonel bir panel üzerinden yönet.",
        video: "/assets/images/media/animated-globe.mp4",
        link: "/iletisim",
        colSpan: "lg:col-span-6 bg-slate-800",
        isDark: true,
    },
];

export default function FeatureGrid({ showCTA = true }: { showCTA?: boolean }) {
    return (
        <section className="py-20 bg-slate-950 overflow-hidden relative" id="features">
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-[#d5900a]/30 bg-[#d5900a]/5 text-[#d5900a] text-xs font-bold uppercase tracking-widest mb-6">
                        Özellikler
                    </span>
                    <ScrollReveal textClassName="text-3xl md:text-5xl font-extrabold italic text-white mb-6 leading-tight">
                        <h2>
                            İşinizi büyütmek için <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x">
                                ihtiyacınız olan her şey
                            </span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg">
                        Sadece satışa odaklanın, teknik detayları ve altyapıyı bize bırakın.
                    </ScrollReveal>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-[2rem] border border-slate-800 transition-all duration-500 hover:border-[#d5900a]/30 hover:shadow-2xl shimmer-main ${feature.colSpan} ${feature.isLarge ? "bg-slate-900" : "bg-slate-900/50"}`}
                        >
                            <div className="flex flex-col h-full">

                                {/* Visual Part */}
                                <div className={`relative overflow-hidden ${feature.isLarge ? "order-2 mt-auto p-6" : "h-48 md:h-64 bg-slate-800/50 p-6 flex items-center justify-center"}`}>
                                    {feature.video ? (
                                        <div className="absolute inset-0 w-full h-full">
                                            <video
                                                src={feature.video}
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover opacity-60 mix-blend-screen"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                                        </div>
                                    ) : (
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className={`w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110 ${feature.isLarge ? "rounded-xl shadow-lg" : ""}`}
                                        />
                                    )}
                                </div>

                                {/* Content Part */}
                                <div className={`p-8 md:p-10 flex flex-col items-start gap-4 ${feature.isLarge ? "order-1" : "flex-grow"}`}>
                                    <ScrollReveal textClassName="text-2xl md:text-3xl font-bold text-white leading-tight italic group-hover:text-[#d5900a] transition-colors">
                                        <h3>{feature.title}</h3>
                                    </ScrollReveal>
                                    {feature.description && (
                                        <ScrollReveal textClassName="text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3">
                                            {feature.description}
                                        </ScrollReveal>
                                    )}

                                    {showCTA && (
                                        <Link
                                            href={feature.link}
                                            className="uiverse-btn mt-auto group/btn"
                                            data-text="DETAYLARI GÖR"
                                            style={{ '--animation-color': '#d5900a' } as React.CSSProperties}
                                        >
                                            <span className="actual-text">&nbsp;DETAYLARI GÖR&nbsp;</span>
                                            <span aria-hidden="true" className="hover-text">&nbsp;DETAYLARI GÖR&nbsp;</span>
                                        </Link>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
