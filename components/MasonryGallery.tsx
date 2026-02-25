"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { X, ZoomIn } from "lucide-react";

const images = [
    { src: "/assets/images/gallery/dashboard.jpg", alt: "Dashboard Genel Bakış", className: "col-span-2 row-span-2" },
    { src: "/assets/images/gallery/user-management.jpg", alt: "Kullanıcı Yönetim Ekranı", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/streams.jpg", alt: "Yayın Yönetimi", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/packages.jpg", alt: "Paket Ayarları", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/activity-log.jpg", alt: "Aktivite Kayıtları", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/ticket.jpg", alt: "Destek Talebi Yönetimi", className: "col-span-2 row-span-1" },
    { src: "/assets/images/gallery/easy-panel.jpg", alt: "Kullanıcı Dostu Arayüz", className: "col-span-1 row-span-2" },
    { src: "/assets/images/gallery/user-credit.jpg", alt: "Kredi ve Bakiye Sistemi", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/applications.jpg", alt: "Uygulama Entegrasyonları", className: "col-span-2 row-span-1" },
    { src: "/assets/images/gallery/user-left-panel.jpg", alt: "Hızlı Erişim Menüsü", className: "col-span-1 row-span-1" },
];

export default function MasonryGallery() {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    useEffect(() => {
        if (selectedImg) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedImg]);

    return (
        <>
            <section className="py-24 bg-slate-950 relative overflow-hidden" id="gallery">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1.5 px-4 rounded-full border border-[#d5900a]/30 bg-[#d5900a]/5 text-[#d5900a] text-xs font-bold uppercase tracking-widest mb-6">
                            Galeri
                        </span>
                        <ScrollReveal textClassName="text-3xl md:text-5xl font-extrabold italic text-white mb-6 leading-tight drop-shadow-md">
                            <h2>Gelişmiş Panel Görünümleri</h2>
                        </ScrollReveal>
                        <ScrollReveal textClassName="text-slate-400 text-lg max-w-2xl mx-auto">
                            Müşterilerinizi yönetin, kredilerinizi takip edin ve tüm işlemleri kullanıcı dostu arayüz üzerinden saniyeler içinde tamamlayın.
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 sm:gap-4 md:gap-5 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
                        {images.map((img, idx) => (
                            <div
                                key={idx}
                                className={`relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer transition-all duration-300 shadow-lg hover:border-[#d5900a]/50 hover:shadow-[0_0_30px_rgba(213,144,10,0.15)] ${img.className}`}
                                onClick={() => setSelectedImg(img.src)}
                            >
                                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
                                    <div className="scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                                        <ZoomIn className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                    </div>
                                </div>

                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                                    <p className="text-white font-medium text-xs md:text-sm drop-shadow-md border-l-2 border-[#d5900a] pl-2 lg:pl-3 italic line-clamp-2">
                                        {img.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 transition-opacity duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-slate-800 text-white hover:bg-[#d5900a] hover:text-black transition-all duration-300 shadow-lg z-50 hover:scale-110"
                        onClick={() => setSelectedImg(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div
                        className="relative w-full max-w-6xl h-full flex items-center justify-center animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImg}
                            alt="Büyük Görsel"
                            className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(213,144,10,0.2)]"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
