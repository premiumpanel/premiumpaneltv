"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "IPTV Bayilik (Reseller) nedir?",
        answer: "IPTV bayilik, toptan fiyatla kredi satın alıp bu kredileri müşteri hesaplarına çevirerek, kendi belirlediğiniz fiyat üzerinden kazanç sağladığınız risksiz bir ticaret modelidir.",
    },
    {
        question: "Kredili IPTV sistemi nasıl çalışır?",
        answer: "Ön kiralama maliyeti yoktur. Hesabınıza kredi yüklersiniz, panelden oluşturduğunuz her müşteri aktivasyonunda hesabınızdan o pakete denk gelen kredi miktarı düşer.",
    },
    {
        question: "Satın aldığım kredilerin kullanım süresi var mı?",
        answer: "Hayır, satın aldığınız kredilerin zaman aşımı veya silinme durumu yoktur. Kredileriniz sistemde hesabınızda güvendedir ve siz ne zaman satış yaparsanız o zaman eksilir.",
    },
    {
        question: "Alt bayi (Subreseller) ekleyebilir miyim?",
        answer: "Evet, Pro ve üzeri kredi yüklemelerinizde tamamen kendinize ait alt bayiler oluşturabilir, kendi kredilerinizi onlara transfer ederek kendi satış ağınızı kurabilirsiniz.",
    },
    {
        question: "Hangi cihazlar için yayın verebilirim?",
        answer: "Smart TV, Android TV, Apple TV, bilgisayar, tablet, telefon (iOS/Android), Mag Cihazlar ve Enigma cihazları da dâhil olmak üzere tüm IPTV uyumlu cihazlara yayın sağlayabilirsiniz.",
    },
    {
        question: "Panel kurulumu ücretli mi?",
        answer: "Hayır, bayi olmak tamamen ücretsizdir. Ancak satış yapmaya başlamak için hesabınıza satacağınız ürünlerin sermayesi olan ilk minimum krediyi yüklemeniz gerekir.",
    },
    {
        question: "Aylık taahhüt veya kiralama bedeli ödüyor muyum?",
        answer: "IPTV bayi panelimizde aylık sabit ücret, aidat veya taahhüt bulunmamaktadır. Yalnızca harcadığınız (sattığınız) kredi kadar ödeme yapmış olursunuz.",
    },
    {
        question: "Kendi markamı ve alan adımı kullanabilir miyim?",
        answer: "Belirli paketlerimizde White Label (Beyaz Etiket) özelliği mevcuttur. Müşterilerinize kendi markanız ve logolarınız altında kurulum dosyası ve DNS ulaştırabilirsiniz.",
    },
    {
        question: "Panel üzerinde anlık müşteri kontrolü yapabilir miyim?",
        answer: "Tabii ki! Gelişmiş IPTV yönetim paneli üzerinden müşterilerinizin süresini uzatabilir, anlık bağlantılarını sıfırlayabilir, kanalları düzenleyebilir ve MAC adresi tanımlayabilirsiniz.",
    },
    {
        question: "Bir müşteriye ücretsiz test hesabı verebiliyor muyum?",
        answer: "Evet bayilerimize özel günlük belirli sayıda ücretsiz IPTV test hesabı tanımlama hakkınız bulunur. Böylece müşterinize önce testi denetip ardından güvenle satış yapabilirsiniz.",
    },
    {
        question: "Kredi bittikten sonra tekrar alım yapabiliyor muyuz?",
        answer: "Elbette. Krediniz tükendikçe veya tükenmeye yaklaştıkça WhatsApp destek hattımızdan 7/24 dilediğiniz zaman sisteme dilediğiniz pakette ek kredi yükletebilirsiniz.",
    },
    {
        question: "Diyelim ki satış yapamadım, zarar eder miyim?",
        answer: "Kredileriniz silinmediği için hiçbir zaman ana paranız çöp olmaz. Dilerseniz 1 ayda, dilerseniz 3 yılda satış yapın. Krediniz her zaman sistemde geçerliliğini korur.",
    },
    {
        question: "Kâr marjımı ben mi belirliyorum?",
        answer: "Kesinlikle! Bizden toplu olarak satın aldığınız 1 yıllık pakedin (kredinin) birim maliyeti bellidir. Müşterinize bu hizmeti yüzde kaç kârla ve hangi fiyattan verceğiniz tamamen size aittir.",
    },
    {
        question: "7/24 Teknik destek alabiliyor muyum?",
        answer: "Bayilerimiz için oluşturulan özel hat üzerinden her türlü panel kullanımı, bağlantı sorunu ve sunucu kapasite durumları hakkında bize 7/24 kesintisiz ulaşabilirsiniz.",
    },
    {
        question: "Yayınlarınızda donma, kesilme yaşanır mı?",
        answer: "Özel optimizasyonlu yüksek kapasiteli Avrupa lokasyonlu veri merkezlerinde barınan sunucularımız, tüm önemli maç veya yayın günlerinde bile geniş internet hatları sayesinde donmasız çalışır.",
    },
    {
        question: "Ödeme altyapısını sistem veriyor mu?",
        answer: "Siz bir IPTV bayisisiniz; müşterilerinizin ödemesini direkt olarak siz kendi banka veya kripto hesaplarınıza alırsınız. Panelden aktivasyonu gerçekleştirdiğinizde bizim kredimiz eksilir.",
    },
    {
        question: "Hesabım ne kadar sürede onaylanıp aktifleşir?",
        answer: "Kredi ödemesini tamamladığınız anda canlı destek vasıtasıyla bayi paneliniz ortalama 15 dakika içerisinde açılır ve giriş bilgileriniz tarafınıza şifreli iletilir.",
    },
    {
        question: "İzin verilen maksimum eşzamanlı kanal izleme kapasitesi nedir?",
        answer: "Satışını yaptığınız her 1 üyelik = 1 cihaz politikasıyla işler. Müşteriniz aynı anda 2 cihazdan aktif izlemek isterse ona ikinci bir test veya kredi paketi tanımlamanız gerekir.",
    },
    {
        question: "Müşterinin şifresi çalınırsa ne olur?",
        answer: "Panel üzerinden anında ilgili müşterinin şifresini tek tuşla değiştirebilir, eski bağlantıları 'Kick' (dışarı at) özelliği ile sıfırlayarak hesabın güvenliğini elinizde tutabilirsiniz.",
    },
    {
        question: "DDoS saldırı korumanız var mı?",
        answer: "Evet, IPTV sunucularımızda hem global hem de yerel ağ saldırılarına karşı en üst düzey donanımsal ve yazılımsal DDoS filtrasyonu kullanılarak yayın stabilizasyonu güvencesi sağlanmaktadır.",
    }
];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-slate-950" id="faq">
            {/* FAQ Schema */}
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

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="inline-block py-1.5 px-4 rounded-full border border-[#d5900a]/20 bg-[#d5900a]/5 text-[#d5900a] text-xs font-bold uppercase tracking-widest mb-6">
                        Aklınızda Soru Kalmasın
                    </span>
                    <ScrollReveal textClassName="text-3xl md:text-5xl font-extrabold mb-6 text-white italic drop-shadow-sm">
                        <h2 className="pb-2">Sıkça Sorulan Sorular</h2>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-slate-400 text-lg max-w-2xl mx-auto">
                        IPTV bayiliği, kredi sistemi ve teknik süreçlerle ilgili merak ettiğiniz her şeyin en şeffaf yanıtları.
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
