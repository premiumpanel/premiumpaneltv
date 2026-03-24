"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import { useTranslations } from "next-intl";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    renderSchema?: boolean;
}

export default function FAQAccordion({ renderSchema = true }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations("faq_accordion");

    const faqs: FAQItem[] = [0, 1, 2, 3, 4, 5, 6, 7].map((i) => ({
        question: t(`faqs.${i}.question`),
        answer: t(`faqs.${i}.answer`),
    }));

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-slate-950" id="faq">
            {/* FAQ Schema */}
            {renderSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            )}

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-[#d5900a]/20 bg-[#d5900a]/5 text-[#d5900a] text-xs font-bold uppercase tracking-widest mb-6">
                        {useTranslations("faq_page")("badge")}
                    </span>
                    <ScrollReveal textClassName="text-3xl md:text-5xl font-extrabold mb-6 text-white italic drop-shadow-sm">
                        <h2 className="pb-2">{useTranslations("faq_page")("title1")} {useTranslations("faq_page")("title2")}</h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg max-w-2xl mx-auto">
                        {useTranslations("faq_page")("subtitle")}
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl transition-all duration-300 border border-white/5 h-fit shimmer-main ${openIndex === index
                                ? "bg-slate-800/90 shadow-2xl shadow-black/50 border-[#d5900a]/30"
                                : "bg-slate-900/50 hover:bg-slate-800/70"
                                }`}
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-bold text-base md:text-lg pr-4 transition-colors duration-300 ${openIndex === index ? "text-[#d5900a]" : "text-slate-200 group-hover:text-white"}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-1 rounded-full shrink-0 transition-all duration-300 ${openIndex === index ? "bg-[#d5900a]/20 text-[#d5900a] rotate-180" : "bg-slate-800 text-slate-400 group-hover:bg-slate-700"}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="p-6 pt-0 text-slate-400 leading-relaxed text-sm md:text-base border-t border-white/5 mt-2">
                                    <div className="pt-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
