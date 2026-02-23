import Link from "next/link";
import { Star } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="py-20 bg-slate-950 overflow-hidden relative" id="cta">
            {/* Concentric Circles Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                <div className="w-[500px] h-[500px] border border-dashed border-slate-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '60s' }} />
                <div className="w-[800px] h-[800px] border border-dashed border-slate-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-reverse-slow" style={{ animationDuration: '80s' }} />
                <div className="w-[1100px] h-[1100px] border border-dashed border-slate-700 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow" style={{ animationDuration: '100s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full border-[#d5900a]/30 bg-[#d5900a]/10 text-[#d5900a] text-xs font-bold uppercase tracking-wider mb-6">
                        Hemen Başlayın
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        İşinizi büyütmeye <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x">
                            hazır mısınız?
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Binlerce bayi arasına katılın ve kazanmaya başlayın. Teknik detayları biz halledelim.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="https://wa.me/491632680219"
                            target="_blank"
                            className="group/button inline-flex items-center justify-center relative overflow-hidden bg-[#d5900a] text-white font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-[#d5900a]/20 hover:scale-105 transition-all active:scale-95 border border-transparent"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <img src="/assets/images/common/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 brightness-0 invert" />
                                Ücretsiz Deneme Başlat
                            </span>
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                <div className="relative h-full w-10 bg-white/20 blur-[2px]" />
                            </div>
                        </Link>
                    </div>

                    {/* Review Snippet */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-white">Mükemmel</span>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                                        <Star fill="currentColor" className="w-3 h-3 text-white" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <span className="text-slate-500">%98.7 Olumlu Geri Dönüş</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
