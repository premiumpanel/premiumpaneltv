import { Link } from "@/i18n/routing";
import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";
import CityLinks from "@/components/CityLinks";
import { useTranslations } from "next-intl";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const t = useTranslations("footer");
    const nav = useTranslations("navbar");

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
                            {t("description")}
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 border-l-4 border-[#d5900a] pl-3">{t("quick_links")}</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-[#d5900a] transition-colors block py-0.5">{nav("home")}</Link></li>
                            <li><Link href="/paketler" className="hover:text-[#d5900a] transition-colors block py-0.5">{nav("packages")}</Link></li>
                            <li><Link href="/ozellikler" className="hover:text-[#d5900a] transition-colors block py-0.5">{nav("features")}</Link></li>
                            <li><Link href="/blog" className="hover:text-[#d5900a] transition-colors block py-0.5">{nav("blog")}</Link></li>
                            <li><Link href="/sss" className="hover:text-[#d5900a] transition-colors block py-0.5">{nav("faq")}</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 border-l-4 border-[#d5900a] pl-3">{t("legal")}</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/kullanim" className="hover:text-[#d5900a] transition-colors block py-0.5">{useTranslations("footer_extra")("terms")}</Link></li>
                            <li><Link href="/gizlilik" className="hover:text-[#d5900a] transition-colors block py-0.5">{useTranslations("footer_extra")("privacy")}</Link></li>
                            <li><Link href="/iletisim" className="hover:text-[#d5900a] transition-colors block py-0.5">{nav("contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 border-l-4 border-green-500 pl-3">{t("support")}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <img src="/assets/images/common/whatsapp.svg" alt="WhatsApp" className="w-5 h-5 mt-1 shrink-0 invert sepia saturate-[2000%] hue-rotate-[10deg] brightness-[100%]" style={{ filter: 'invert(52%) sepia(82%) saturate(1219%) hue-rotate(8deg) brightness(101%) contrast(92%)' }} />
                                <span>
                                    <strong className="block text-white mb-1">{useTranslations("footer_extra")("whatsapp_line")}</strong>
                                    <a href="https://wa.me/491632680219" target="_blank" className="hover:text-[#d5900a] transition-colors font-bold">+49 163 2680219</a>
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                                <span>
                                    <strong className="block text-white mb-1">{useTranslations("footer_extra")("email_line")}</strong>
                                    <a href="mailto:info@premiumpanel.com" className="hover:text-blue-400 transition-colors">info@premiumpanel.com</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SEO Text Block */}
                <div className="mt-12 pt-8 border-t border-slate-800/50">
                    <h4 className="text-white font-semibold mb-2 text-sm">{useTranslations("footer_extra")("seo_title")}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        {useTranslations("footer_extra")("seo_text")}
                    </p>
                </div>

                <CityLinks />

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {currentYear} Premium Panel. {t("rights")}</p>
                </div>
            </div>
        </footer>
    );
}
