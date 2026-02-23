import { Check, X, Minus } from "lucide-react";

export default function CompareTable() {
    const features = [
        { name: "Kredi Limiti", starter: "10 Kredi", pro: "50 Kredi", elite: "Sınırsız*" },
        { name: "Panel Erişimi", starter: true, pro: true, elite: true },
        { name: "7/24 Teknik Destek", starter: "E-Posta", pro: "WhatsApp & Ticket", elite: "Özel Temsilci" },
        { name: "White Label (Markasız)", starter: false, pro: true, elite: true },
        { name: "Otomatik Aktivasyon", starter: true, pro: true, elite: true },
        { name: "API Erişimi", starter: false, pro: true, elite: true },
        { name: "Webhook Desteği", starter: false, pro: false, elite: true },
        { name: "Özel DNS", starter: false, pro: true, elite: true },
        { name: "Bayi Alt Bayilik", starter: false, pro: false, elite: true },
        { name: "Pazarlama Materyalleri", starter: false, pro: true, elite: true },
    ];

    return (
        <section className="py-20 bg-slate-900 border-t border-slate-800" id="compare">
            <div className="container mx-auto px-4 overflow-x-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
                    Paket Karşılaştırması
                </h2>

                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-700 bg-slate-800/50 text-slate-300 font-semibold w-1/4">Özellikler</th>
                            <th className="p-4 border-b border-slate-700 bg-slate-800/30 text-white font-bold text-center w-1/4">Başlangıç</th>
                            <th className="p-4 border-b border-slate-700 bg-blue-900/20 text-blue-400 font-bold text-center w-1/4 border-x border-blue-500/10">Pro Bayi</th>
                            <th className="p-4 border-b border-slate-700 bg-amber-900/20 text-amber-400 font-bold text-center w-1/4">Elite Partner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, idx) => (
                            <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-4 border-b border-slate-800 text-slate-300 font-medium bg-slate-900/50">{feature.name}</td>

                                {/* Starter */}
                                <td className="p-4 border-b border-slate-800 text-center">
                                    {feature.starter === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                                        feature.starter === false ? <X className="w-5 h-5 text-slate-600 mx-auto" /> :
                                            <span className="text-slate-400 text-sm">{feature.starter}</span>}
                                </td>

                                {/* Pro */}
                                <td className="p-4 border-b border-slate-800 text-center bg-blue-900/5 border-x border-blue-500/5">
                                    {feature.pro === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                                        feature.pro === false ? <X className="w-5 h-5 text-slate-600 mx-auto" /> :
                                            <span className="text-white text-sm font-semibold">{feature.pro}</span>}
                                </td>

                                {/* Elite */}
                                <td className="p-4 border-b border-slate-800 text-center bg-amber-900/5">
                                    {feature.elite === true ? <Check className="w-5 h-5 text-amber-500 mx-auto" /> :
                                        feature.elite === false ? <X className="w-5 h-5 text-slate-600 mx-auto" /> :
                                            <span className="text-amber-400 text-sm font-bold">{feature.elite}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
