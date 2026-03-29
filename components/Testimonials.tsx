"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
    const t = useTranslations("testimonials");
    const anonymousFallbackImage = "/assets/images/media/user-1.png";

    const reviews = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
        name: t(`reviews.${i}.name`),
        title: t(`reviews.${i}.role`),
        text: t(`reviews.${i}.text`),
        image: `/assets/images/media/user-${(i % 5) + 1}.png`,
    }));

    // Split title for coloring
    const fullTitle = t("title");
    const spaceIndex = fullTitle.indexOf(' ');
    const firstWord = spaceIndex !== -1 ? fullTitle.substring(0, spaceIndex) : fullTitle;
    const restOfTitle = spaceIndex !== -1 ? fullTitle.substring(spaceIndex + 1) : "";

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="testimonials">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#d5900a]/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal textClassName="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <h2 className="pb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x">{firstWord}</span> {restOfTitle}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg">
                        <p>{t("subtitle")}</p>
                    </ScrollReveal>
                </div>

                <div className="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {reviews.map((tItem, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 break-inside-avoid hover:border-slate-700 transition-all duration-300 group shadow-xl shadow-black/20 shimmer-main"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative">
                                    <img
                                        src={tItem.image}
                                        alt={tItem.name}
                                        className="relative w-12 h-12 rounded-full object-cover mr-4 border border-slate-700 bg-slate-800"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = anonymousFallbackImage;
                                        }}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-white truncate group-hover:text-white transition-colors">{tItem.name}</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider truncate">{tItem.title}</p>
                                </div>
                            </div>

                            <div className="flex text-[#d5900a] mb-3 opacity-60 scale-75 origin-left">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                {tItem.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
