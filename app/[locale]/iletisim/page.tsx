"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAButton from "@/components/CTAButton";
import { Mail, MapPin, Send, MessageCircle, AlertCircle, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Mock submission - In production, replace with real API call
        setTimeout(() => {
            if (formData.name && formData.email) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            <section className="pt-32 pb-20 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <ScrollReveal textClassName="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400 pb-2">
                        <h1>İletişime Geçin</h1>
                    </ScrollReveal>
                    <ScrollReveal textClassName="text-xl text-slate-400 max-w-2xl mx-auto">
                        Bayilik başvurusu, teknik destek veya diğer sorularınız için bize ulaşın.
                    </ScrollReveal>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col lg:flex-row gap-12">
                {/* Contact Info */}
                <div className="lg:w-1/3 bg-slate-900 p-8 rounded-2xl border border-slate-800 h-fit">
                    <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">İletişim Bilgileri</h3>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 hover:bg-slate-800/50 rounded-lg transition-colors group">
                            <div className="bg-green-500/10 p-3 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <MessageCircle className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">WhatsApp Hattı</h4>
                                <p className="text-slate-400 text-sm mb-2">7/24 Anlık Destek</p>
                                <a href="https://wa.me/491632680219" target="_blank" className="text-green-400 hover:text-green-300 font-semibold transition-colors">+49 163 2680219</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 hover:bg-slate-800/50 rounded-lg transition-colors group">
                            <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                <Mail className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">E-Posta</h4>
                                <p className="text-slate-400 text-sm mb-2">Genel Sorular & İş Ortaklığı</p>
                                <a href="mailto:info@premiumpanel.com" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">info@premiumpanel.com</a>
                            </div>
                        </div>


                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800">
                        <CTAButton href="https://wa.me/491632680219" variant="whatsapp" className="w-full justify-center">
                            WhatsApp ile Bağlan
                        </CTAButton>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-2/3 bg-slate-900/50 p-8 md:p-12 rounded-2xl border border-slate-800 backdrop-blur-sm relative">
                    <h3 className="text-2xl font-bold text-white mb-8">Bize Yazın</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-slate-400 text-sm font-semibold mb-2" htmlFor="name">Adınız Soyadınız</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                                    placeholder="Adınız Soyadınız"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 text-sm font-semibold mb-2" htmlFor="email">E-Posta Adresiniz</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                                    placeholder="ornek@email.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-slate-400 text-sm font-semibold mb-2" htmlFor="message">Mesajınız</label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                                placeholder="Size nasıl yardımcı olabiliriz?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>

                        <div className="flex items-center justify-between pt-4">
                            {status === "success" && (
                                <div className="flex items-center text-green-400 bg-green-500/10 px-4 py-2 rounded-lg text-sm">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Mesajınız başarıyla gönderildi!
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center text-red-400 bg-red-500/10 px-4 py-2 rounded-lg text-sm">
                                    <AlertCircle className="w-4 h-4 mr-2" />
                                    Bir hata oluştu. Lütfen tekrar deneyin.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className={`ml-auto flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 disabled:opacity-50 disabled:scale-100 ${status === "submitting" ? "cursor-wait" : ""}`}
                            >
                                {status === "submitting" ? (
                                    <>
                                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></span>
                                        Gönderiliyor...
                                    </>
                                ) : (
                                    <>
                                        Gönder
                                        <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}
