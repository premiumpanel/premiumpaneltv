import React from 'react';
import { UserPlus, CreditCard, Network, Settings, BarChart3, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const BentoGrid = () => {
    const t = useTranslations("bento_grid");

    const features = [
        {
            title: t("f1_title"),
            description: t("f1_desc"),
            icon: <UserPlus className="w-8 h-8 text-[#d5900a]" />,
            className: "lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800",
            image: "/assets/images/media/dashboard-mockup.png", // Placeholder or will be updated
            cta: t("f1_cta")
        },
        {
            title: t("f2_title"),
            description: t("f2_desc"),
            icon: <CreditCard className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-4 bg-slate-900",
        },
        {
            title: t("f3_title"),
            description: t("f3_desc"),
            icon: <Network className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-4 bg-slate-900",
        },
        {
            title: t("f4_title"),
            description: t("f4_desc"),
            icon: <Settings className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-6 bg-slate-900",
        },
        {
            title: t("f5_title"),
            description: t("f5_desc"),
            icon: <BarChart3 className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-6 bg-slate-900",
        }
    ];

    return (
        <section className="py-24 bg-slate-950" id="features">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold italic mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x">
                            {t("badge")}
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-1 lg:grid-rows-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`group relative overflow-hidden rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:border-[#d5900a]/50 hover:shadow-2xl hover:shadow-[#d5900a]/10 ${feature.className}`}
                        >
                            {/* Glassmorphism background */}
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 p-3 rounded-2xl bg-slate-800 w-fit group-hover:bg-[#d5900a]/20 transition-colors duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d5900a] transition-colors duration-500 italic">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm lg:text-base group-hover:text-slate-300 transition-colors duration-500">
                                    {feature.description}
                                </p>

                                {idx === 0 && feature.cta && (
                                    <div className="mt-auto pt-8 flex items-center gap-2 text-[#d5900a] font-bold text-sm cursor-pointer group/link">
                                        {feature.cta} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </div>
                                )}
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#d5900a]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
