import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import { Monitor, Smartphone, Tablet, Terminal, Globe, Shield, Wifi } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
    title: "Gelişmiş IPTV Özellikleri | Premium Panel",
    description: "Yüksek performanslı panel, %99 uptime, 7/24 destek ve global altyapı özelliklerimizi keşfedin.",
    alternates: {
        canonical: "https://premiumpanel.com/ozellikler",
    },
};

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            <section className="pt-32 pb-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <ScrollReveal textClassName="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 pb-2">
                        <h1>Rakipsiz Özellikler</h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-xl text-slate-400 max-w-2xl mx-auto">
                        Sadece bir panel değil, işinizi yönetmeniz için eksiksiz bir ekosistem sunuyoruz.
                    </ScrollReveal>
                </div>
            </section>

            <FeatureGrid showCTA={false} />

            {/* Device Support Section */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block py-1.5 px-4 rounded-full border border-[#d5900a]/20 bg-[#d5900a]/5 text-[#d5900a] text-xs font-bold uppercase tracking-widest mb-6">
                            Geniş Cihaz Desteği
                        </span>
                        <ScrollReveal textClassName="text-3xl md:text-5xl font-extrabold italic text-white mb-6">
                            <h2>Her Cihazda Kesintisiz Deneyim</h2>
                        </ScrollReveal>
                        <ScrollReveal textClassName="text-slate-400 text-lg">
                            IPTV servisimiz, kullandığınız tüm teknolojik cihazlarla tam uyumlu çalışacak şekilde optimize edilmiştir.
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Smart", sub: "TV", desc: "Samsung, LG, Android TV", icon: "/assets/images/common/smart-tv.svg" },
                            { name: "Mobil", sub: "CEP", desc: "iOS & Android Uygulamalar", icon: "/assets/images/common/tablet-telefon.svg" },
                            { name: "TV", sub: "BOX", desc: "Xiaomi, MAG, Formuler", icon: "/assets/images/common/tv-box.svg" },
                            { name: "PC", sub: "WEB", desc: "Tarayıcı & Player", icon: "/assets/images/common/bilgisayar.svg" }
                        ].map((device, i) => (
                            <div key={i} className="group relative h-40 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 border border-white/5 hover:border-[#d5900a]/30 transition-all duration-500 shadow-2xl hover:shadow-[#d5900a]/10 overflow-hidden shimmer-main">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#d5900a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative h-full flex flex-col justify-center">
                                    <p className="text-4xl font-black text-white tracking-tighter flex items-baseline">
                                        {device.name}
                                        <span className="text-xs ml-1.5 text-[#d5900a] font-bold uppercase tracking-widest bg-[#d5900a]/10 px-1.5 py-0.5 rounded-md border border-[#d5900a]/20">
                                            {device.sub}
                                        </span>
                                    </p>
                                    <p className="text-sm font-medium text-slate-400 mt-2 tracking-wide group-hover:text-slate-200 transition-colors">
                                        {device.desc}
                                    </p>
                                </div>

                                <div className="absolute top-4 right-4">
                                    <img
                                        src={device.icon}
                                        className="w-12 h-12 opacity-10 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 invert brightness-200 group-hover:brightness-100"
                                        alt={device.name}
                                    />
                                </div>

                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#d5900a]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infrastructure Details */}
            <section className="py-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 -skew-x-12 transform translate-x-1/4" />

                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <ScrollReveal textClassName="text-3xl font-bold mb-6 text-white text-left">
                            <h2>Güçlü Altyapı, Kesintisiz Hizmet</h2>
                        </ScrollReveal>
                        <ul className="space-y-4">
                            <li className="flex items-center text-slate-300">
                                <Shield className="w-6 h-6 text-green-400 mr-3" />
                                <span>Gelişmiş DDoS ve Firewall Koruması</span>
                            </li>
                            <li className="flex items-center text-slate-300">
                                <Wifi className="w-6 h-6 text-blue-400 mr-3" />
                                <span>10 Gbps Port Hızı ve Yük Dengeleme</span>
                            </li>
                            <li className="flex items-center text-slate-300">
                                <Globe className="w-6 h-6 text-amber-400 mr-3" />
                                <span>Avrupa ve Amerika Lokasyonlu Sunucular</span>
                            </li>
                        </ul>
                    </div>

                    <div className="md:w-1/2">
                        {/* Abstract Visual Representation of Server/Network */}
                        <div className="relative h-64 w-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-900/20 animate-pulse"></div>
                            <div className="text-center z-10">
                                <div className="text-6xl font-bold text-slate-700 select-none">DATA CENTER</div>
                                <div className="text-sm text-green-400 mt-2 flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                    SYSTEM ONLINE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
