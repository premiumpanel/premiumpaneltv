"use client";

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Caner Y.",
        title: "IPTV Bayi Sahibi",
        text: "IPTV bayilik sistemine bu panel ile başladım. Kredi sistemi çok şeffaf ve kanal geçiş hızı gerçekten etkileyici. Müşterilerimden hiç şikayet almıyorum.",
        image: "/assets/images/media/user-1.png",
    },
    {
        name: "Yavuz K.",
        title: "Digital Marketer",
        text: "Reseller paneli arayüzü çok sezgisel. Alt bayi oluşturma ve limit tanımlama işlemleri saniyeler sürüyor. İşimi büyütmemde çok yardımcı oldular.",
        image: "/assets/images/media/user-2.png",
    },
    {
        name: "Yücel Faruk Ş.",
        title: "Teknik Destek Uzmanı",
        text: "Sunucu uptime oranları %99.9 seviyesinde. Donma ve kesilme gibi kronik sorunlar bu altyapıda yaşanmıyor. Profesyonel çalışmak isteyenlere tavsiyemdir. Teknik altyapının bu kadar stabil olması müşteri kayıplarını sıfıra indirdi ve güvenilir bir marka oluşturmama büyük katkı sağladı. Destek ekibi ise her türlü sorunda anında çözüm üretiyor, bu da işimi güvenle yürütmemi sağlıyor.",
        image: "/assets/images/media/user-3.png",
    },
    {
        name: "Metehan D.",
        title: "E-Ticaret Bayi",
        text: "Kredi transfer hızı ve otomatik aktivasyon özelliği sayesinde müşterilerime anında hizmet verebiliyorum. IPTV server kalitesi gerçekten piyasanın üzerinde.",
        image: "/assets/images/media/user-4.png",
    },
    {
        name: "Selin A.",
        title: "Yeni Girişimci",
        text: "Başlangıçta çekincelerim vardı ancak destek ekibi her adımda yanımda oldu. Şimdi kendi müşteri ağımı kurdum ve düzenli gelir elde ediyorum.",
        image: "/assets/images/media/user-5.png",
    },
    {
        name: "Thomas M.",
        title: "Reseller Partner",
        text: "Das beste IPTV Reseller Panel, das ich je benutzt habe. Die Kanalauswahl ist riesig ve der Support ist immer erreichbar. Sehr stabil!",
        image: "/assets/images/media/user-6.png",
    },
    {
        name: "Ömer F.",
        title: "Fullstack Developer",
        text: "API desteği ve Webhook entegrasyonu harika çalışıyor. Kendi otomasyon sistemime paneli kolayca bağladım. Teknik altyapı çok güçlü.",
        image: "/assets/images/media/user-7.png",
    },
    {
        name: "Rodrigo A.",
        title: "International Reseller",
        text: "Consistent streams and localized content for multiple regions. The admin dashboard gives me full control over user bouquets and subscriptions.",
        image: "/assets/images/media/user-8.png",
    },
    {
        name: "Hans S.",
        title: "Vertriebspartner",
        text: "Die Qualität der 4K-Streams ist hervorragend. Meine Kunden in Deutschland sind sehr zufrieden mit der Stabilität. Absolut empfehlenswert!",
        image: "/assets/images/media/user-9.png",
    },
    {
        name: "Burak Y.",
        title: "Sistem Admin",
        text: "DDOS koruması ve sunucu güvenliği üst düzeyde. Yoğun maç günlerinde bile panelde en ufak bir yavaşlama hissetmiyoruz. Özellikle derbi günlerinde yaşanan yoğun trafiği bu kadar pürüzsüz yönetebilen başka bir panel görmedim. Siber saldırılara karşı alınan önlemler sayesinde işimiz hiç aksamıyor ve müşterilerimize kesintisiz 4K yayın keyfi sunabiliyoruz. Teknik olarak kusursuz bir deneyim söz konusu.",
        image: "/assets/images/media/user-1.png",
    },
    {
        name: "Murat K.",
        title: "Kurumsal Bayi",
        text: "Toplu kredi alımlarında sağladıkları avantajlar ve özel DNS hizmeti ile kendi markamızı tamamen ön plana çıkarabildik. Gerçekten çözüm ortağılar.",
        image: "/assets/images/media/user-2.png",
    },
    {
        name: "Cansu D.",
        title: "Pazarlama Müdürü",
        text: "Test hesabı verme özelliği satışları kapatmakta çok etkili oluyor. Müşteri önce kaliteyi görüyor, sonra güvenle satın alıyor.",
        image: "/assets/images/media/user-3.png",
    },
    {
        name: "Selin Y.",
        title: "Evden Çalışan Girişimci",
        text: "Esnek çalışma saatleri ve hazır reklam materyalleri ile IPTV bayiliği işine girmek çok kolaylaştı. Kazancım her ay katlanarak artıyor.",
        image: "/assets/images/media/user-4.png",
    },
    {
        name: "Alper T.",
        title: "İş Geliştirme",
        text: "Global kanal listesi ve 7/24 canlı destek hattı ile rakiplerimizden bir adım öndeyiz. Teknik hiçbir sorunla uğraşmadan satışa odaklanabiliyorum.",
        image: "/assets/images/media/user-5.png",
    },
];

export default function Testimonials() {
    const anonymousFallbackImage = "/assets/images/media/user-1.png";

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="testimonials">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#d5900a]/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <ScrollReveal textClassName="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        <h1 className="pb-2">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d5900a] via-amber-200 to-[#d5900a] animate-gradient-x">Yüzlerce</span> Mutlu Bayi
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg">
                        <p>Ağımıza katılan ve kendi işini büyüten bayilerimizin başarı hikayelerine göz atın.</p>
                    </ScrollReveal>
                </div>

                <div className="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-slate-900/40 backdrop-blur-xl p-6 rounded-2xl border border-slate-800 break-inside-avoid hover:border-slate-700 transition-all duration-300 group shadow-xl shadow-black/20 shimmer-main"
                        >
                            <div className="flex items-center mb-4">
                                <div className="relative">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="relative w-12 h-12 rounded-full object-cover mr-4 border border-slate-700 bg-slate-800"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = anonymousFallbackImage;
                                        }}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-white truncate group-hover:text-white transition-colors">{t.name}</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider truncate">{t.title}</p>
                                </div>
                            </div>

                            <div className="flex text-[#d5900a] mb-3 opacity-60 scale-75 origin-left">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                "{t.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
