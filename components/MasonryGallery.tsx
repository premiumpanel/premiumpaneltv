"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { X, ZoomIn, Play } from "lucide-react";

interface GalleryItem {
    src: string;
    alt: string;
    type: "image" | "video";
    className: string;
}

const galleryItems: GalleryItem[] = [
    { src: "/assets/images/gallery/appvid.mp4", alt: "Panel ve Uygulama Tanıtımı", type: "video", className: "col-span-2 row-span-2" },
    { src: "/assets/images/gallery/dashboard.jpg", alt: "Panel Genel Görünümü", type: "image", className: "col-span-2 row-span-2" },
    { src: "/assets/images/gallery/uygulama-ekrani-1.jpg", alt: "Mobil Uygulama Arayüzü", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-2.jpg", alt: "Kategori Listesi", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-3.jpg", alt: "Canlı TV Oynatıcı", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-4.jpg", alt: "Film & Dizi Arşivi", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/ticket.jpg", alt: "Destek Yönetimi", type: "image", className: "col-span-2 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-5.jpg", alt: "Kullanıcı Profili", type: "image", className: "col-span-1 row-span-2" },
    { src: "/assets/images/gallery/uygulama-ekrani-6.jpg", alt: "EPG ve Program Rehberi", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-7.jpg", alt: "Ayarlar Menüsü", type: "image", className: "col-span-2 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-8.jpg", alt: "Çoklu Ekran Desteği", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-9.jpg", alt: "Dizi Detay Ekranı", type: "image", className: "col-span-1 row-span-1" },
    { src: "/assets/images/gallery/uygulama-ekrani-10.jpg", alt: "Smart TV Senkronizasyonu", type: "image", className: "col-span-1 row-span-1" },
];

export default function MasonryGallery() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedItem]);

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
                        {galleryItems.map((item, idx) => (
                            <div
                                key={idx}
                                className={`relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer transition-all duration-300 shadow-lg hover:border-[#d5900a]/50 hover:shadow-[0_0_30px_rgba(213,144,10,0.15)] ${item.className}`}
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
                                    <div className="scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                                        {item.type === "video" ? (
                                            <Play className="w-12 h-12 text-[#d5900a] fill-[#d5900a]/20 drop-shadow-[0_0_15px_rgba(213,144,10,0.5)]" />
                                        ) : (
                                            <ZoomIn className="w-10 h-10 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
                                        )}
                                    </div>
                                </div>

                                {item.type === "video" ? (
                                    <div className="w-full h-full relative">
                                        <video
                                            src={item.src}
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                            onMouseOver={(e) => e.currentTarget.play()}
                                            onMouseOut={(e) => {
                                                e.currentTarget.pause();
                                                e.currentTarget.currentTime = 0;
                                            }}
                                        />
                                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-[#d5900a]/30 z-20">
                                            <Play className="w-4 h-4 text-[#d5900a]" />
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}

                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                                    <p className="text-white font-medium text-xs md:text-sm drop-shadow-md border-l-2 border-[#d5900a] pl-2 lg:pl-3 italic line-clamp-2">
                                        {item.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 transition-opacity duration-300"
                    onClick={() => setSelectedItem(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-slate-800/80 text-white hover:bg-[#d5900a] hover:text-black transition-all duration-300 shadow-lg z-[110] hover:scale-110 backdrop-blur-md border border-white/10"
                        onClick={() => setSelectedItem(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div
                        className="relative w-full max-w-6xl max-h-full flex items-center justify-center animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedItem.type === "video" ? (
                            <video
                                src={selectedItem.src}
                                controls
                                autoPlay
                                className="max-w-full max-h-[85vh] rounded-xl shadow-[0_0_50px_rgba(213,144,10,0.3)] bg-black"
                            />
                        ) : (
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(213,144,10,0.2)]"
                            />
                        )}
                        <div className="absolute -bottom-12 left-0 right-0 text-center">
                            <p className="text-white/80 font-medium italic">{selectedItem.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
