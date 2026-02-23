import React from 'react';
import { UserPlus, CreditCard, Network, Settings, BarChart3, ArrowRight } from 'lucide-react';

const BentoGrid = () => {
    const features = [
        {
            title: "Bayi Olmak Ücretsizdir",
            description: "Premium Panel ile ücretsiz IPTV satabilir, bayi ol sürecini herhangi bir başlangıç ücreti ödemeden tamamlayabilirsin. Sistemimiz kredili altyapı ile çalışır. Satış yapabilmek için panele minimum 1500 kredi yüklemen gerekir. Örneğin 12 aylık bir üyelik satışı yalnızca 150 kredi düşer. Böylece kredi bakiyeni kontrol ederek planlı ve sürdürülebilir bir IPTV reseller sistemi kurarsın. Ücretsiz bayi ol, kredini yükle ve satışa başla.",
            icon: <UserPlus className="w-8 h-8 text-[#d5900a]" />,
            className: "lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-slate-900 to-slate-800",
            image: "/assets/images/media/dashboard-mockup.png" // Placeholder or will be updated
        },
        {
            title: "Kredili IPTV Bayi Paneli",
            description: "IPTV bayi panelimiz ön ödemeli kredi sistemi ile çalışır. Yüklediğin kredi kadar satış yaparsın, her oluşturulan üyelik belirlenen kredi tutarını bakiyenden düşer. Bu yapı sayesinde kar marjını sen belirlersin, fiyat politikanı özgürce yönetirsin. IPTV bayilik sisteminde nakit akışını kontrol altında tutmak isteyenler için ideal bir reseller modelidir.",
            icon: <CreditCard className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-4 bg-slate-900",
        },
        {
            title: "Alt Bayilik (Subreseller) İmkanı",
            description: "Kendi IPTV reseller ağını kurmak ister misin? Premium Panel ile alt bayi oluşturabilir, kredi tanımlayabilir ve kar oranını belirleyebilirsin. Yani sadece son kullanıcıya değil, kendi alt bayilerine de satış yaparak büyük bir IPTV bayilik ağı kurarsın. Gerçek bir panel yönetim mantığı ile işini büyütmek tamamen senin elinde olur.",
            icon: <Network className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-4 bg-slate-900",
        },
        {
            title: "Anlık Yönetim & Hat Kontrolü",
            description: "IPTV bayi paneli üzerinden kullanıcı oluşturma, süre uzatma, şifre yenileme, bağlantı resetleme ve istatistik görüntüleme işlemlerini tek ekrandan yönetebilirsin. MAC tabanlı cihazlar veya m3u listesi kullanan cihazlar için farklı hat türleri oluşturabilir, test hesapları tanımlayabilirsin. Tüm süreç birkaç tıkla tamamlanır.",
            icon: <Settings className="w-6 h-6 text-[#d5900a]" />,
            className: "lg:col-span-6 bg-slate-900",
        },
        {
            title: "Her İhtiyaca Uygun IPTV Bayilik Sistemi",
            description: "İster bireysel satış yap ister geniş bir bayi ağı kur, Premium Panel sana kolayca büyüme imkanı sunar. Kredili sistem, alt bayi desteği ve panel içi yönetim araçları sayesinde işini büyütmek için ekstra yazılıma para harcamazsın. IPTV bayilik işini profesyonel bir panel üzerinden yöneterek sürekli gelir elde edebilirsin.",
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
                            Neden Premium Panel?
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        IPTV bayilik dünyasında fark yaratan özelliklerimizle tanışın.
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

                                {idx === 0 && (
                                    <div className="mt-auto pt-8 flex items-center gap-2 text-[#d5900a] font-bold text-sm cursor-pointer group/link">
                                        Detayları Keşfet <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
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
