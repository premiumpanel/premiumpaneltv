"use client";

import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User, Globe, ChevronDown } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const t = useTranslations("navbar");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const languages = [
        { code: "tr", label: "Türkçe" },
        { code: "en", label: "English" },
        { code: "de", label: "Deutsch" },
        { code: "fr", label: "Français" },
        { code: "nl", label: "Nederlands" }
    ];

    const changeLanguage = (nextLocale: string) => {
        router.replace(pathname, { locale: nextLocale });
        setLangOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("packages"), href: "/paketler" },
        { name: t("features"), href: "/ozellikler" },
        { name: t("faq"), href: "/sss" },
        { name: t("blog"), href: "/blog" },
        { name: t("contact"), href: "/iletisim" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none">
            <div className="container mx-auto px-4 md:px-6 pt-4">
                <div className={`transition-all duration-300 pointer-events-auto ${scrolled
                    ? "bg-slate-950/90 backdrop-blur-2xl rounded-2xl border border-white/10 py-2 md:py-3 shadow-lg shadow-black/50 flex items-center justify-between"
                    : "bg-transparent border border-transparent rounded-2xl py-3 md:py-4 flex items-center justify-between"
                    }`}>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group ml-2 relative">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Premium Panel Logo"
                            width={scrolled ? 120 : 160}
                            height={scrolled ? 40 : 54}
                            className={`transform group-hover:scale-105 transition-all duration-300 w-auto ${scrolled ? "h-10" : "h-14 md:h-16"}`}
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white transition-colors font-medium text-sm relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#d5900a] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4 mr-2">
                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium text-sm py-2 px-3 rounded-lg border border-slate-700/50 hover:border-slate-600 bg-slate-800/50"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="uppercase">{locale}</span>
                                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {langOpen && (
                                <div className="absolute top-full right-0 mt-2 w-36 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-2 text-sm transition-colors ${locale === lang.code ? 'bg-[#d5900a]/10 text-[#d5900a] font-medium' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="https://panel.premiumpanel.com/login"
                            className="uiverse-btn"
                            data-text={t("goToPanel")}
                        >
                            <span className="actual-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />{t("goToPanel")}&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />{t("goToPanel")}&nbsp;</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <button
                            className="text-slate-100 p-2 border border-slate-700/50 rounded-lg bg-slate-800/50 flex items-center gap-1 uppercase text-xs font-bold"
                            onClick={() => setLangOpen(!langOpen)}
                        >
                            <Globe className="w-4 h-4" /> {locale}
                        </button>
                        <button
                            className="text-slate-100 p-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Lang Dropdown */}
                {langOpen && (
                    <div className="lg:hidden absolute top-full right-4 mt-2 w-40 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-[60] pointer-events-auto">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    changeLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-slate-800/50 ${locale === lang.code ? 'bg-[#d5900a]/10 text-[#d5900a] font-medium' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-700 py-4 animate-in slide-in-from-top-4 shadow-2xl mt-4 pointer-events-auto">
                        <nav className="flex flex-col gap-2 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-300 hover:text-[#d5900a] font-medium py-3 border-b border-slate-800/50 flex items-center justify-between"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <ArrowRight className="w-4 h-4 opacity-50" />
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-6">
                                <Link
                                    href="https://panel.premiumpanel.com/login"
                                    className="uiverse-btn mx-auto w-full justify-center"
                                    data-text={t("goToPanel")}
                                >
                                    <span className="actual-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />{t("goToPanel")}&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />{t("goToPanel")}&nbsp;</span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
