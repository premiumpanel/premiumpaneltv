import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 relative text-slate-400 font-sans">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="inline-block group">
                            <img
                                src="/assets/images/logo.png"
                                alt="Premium Panel Logo"
                                className="h-10 w-auto mb-2 opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                            Yüksek performanslı, güvenilir ve %99 uptime garantili bayi paneli hizmetleri. İşinizi büyütmek için profesyonel çözümler.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 border-l-4 border-[#d5900a] pl-3">Hızlı Erişim</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-[#d5900a] transition-colors block py-0.5">Ana Sayfa</Link></li>
                            <li><Link href="/paketler" className="hover:text-[#d5900a] transition-colors block py-0.5">Fiyatlandırma</Link></li>
                            <li><Link href="/ozellikler" className="hover:text-[#d5900a] transition-colors block py-0.5">Özellikler</Link></li>
                            <li><Link href="/blog" className="hover:text-[#d5900a] transition-colors block py-0.5">Blog</Link></li>
                            <li><Link href="/sss" className="hover:text-[#d5900a] transition-colors block py-0.5">Sık Sorulanlar</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 border-l-4 border-highlight pl-3">Yasal Bilgiler</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/kullanim" className="hover:text-highlight transition-colors block py-0.5">Kullanım Koşulları</Link></li>
                            <li><Link href="/gizlilik" className="hover:text-highlight transition-colors block py-0.5">Gizlilik Politikası</Link></li>
                            <li><Link href="/iletisim" className="hover:text-highlight transition-colors block py-0.5">İletişim Formu</Link></li>
                            <li><Link href="#" className="hover:text-highlight transition-colors block py-0.5">Çerez Politikası</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 border-l-4 border-green-500 pl-3">Bize Ulaşın</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <img src="/assets/images/common/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mt-1 shrink-0 invert sepia saturate-[2000%] hue-rotate-[10deg] brightness-[100%]" style={{ filter: 'invert(52%) sepia(82%) saturate(1219%) hue-rotate(8deg) brightness(101%) contrast(92%)' }} />
                                <span>
                                    <strong className="block text-white mb-1">WhatsApp Hattı</strong>
                                    <a href="https://wa.me/491632680219" target="_blank" className="hover:text-[#d5900a] transition-colors font-bold">+49 163 2680219</a>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                                <span>
                                    <strong className="block text-white mb-1">E-Posta</strong>
                                    <a href="mailto:info@premiumpanel.com" className="hover:text-blue-400 transition-colors">info@premiumpanel.com</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SEO Text Block */}
                <div className="mt-12 pt-8 border-t border-slate-800/50">
                    <h4 className="text-white font-semibold mb-2 text-sm">Sunucu Lokasyonları ve Yüksek Hızlı Altyapı</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Premium Panel, IPTV bayilik işinizin kesintisiz yürümesi için dünya standartlarında bir sunucu altyapısına sahiptir. Türkiye (İstanbul, Ankara, İzmir) başta olmak üzere, Avrupa (Almanya, Hollanda) ve Amerika lokasyonlarındaki güçlü veri merkezleri sayesinde düşük gecikme süreleri ve istikrarlı, donmasız panel erişimi sağlar. Tüm bu teknik işlerle biz uğraşırken, siz tamamen kendi satışlarınıza ve kârınıza odaklanabilirsiniz.
                    </p>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {currentYear} Premium Panel. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
