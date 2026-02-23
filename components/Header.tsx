"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, User } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Ana Sayfa", href: "/" },
        { name: "Paketler", href: "/paketler" },
        { name: "Özellikler", href: "/ozellikler" },
        { name: "SSS", href: "/sss" },
        { name: "Blog", href: "/blog" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-none">
            <div className="container mx-auto px-4 md:px-6 pt-4">
                <div className={`transition-all duration-300 pointer-events-auto ${scrolled
                    ? "bg-slate-950/90 backdrop-blur-2xl rounded-2xl border border-white/10 py-2 md:py-3 shadow-lg shadow-black/50 flex items-center justify-between"
                    : "bg-transparent border border-transparent rounded-2xl py-3 md:py-4 flex items-center justify-between"
                    }`}>


                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group ml-2">
                        <img
                            src="/assets/images/logo.png"
                            alt="Premium Panel Logo"
                            className={`w-auto transform group-hover:scale-105 transition-all duration-300 ${scrolled ? "h-10" : "h-14 md:h-16"}`}
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
                        <Link
                            href="https://panel.premiumpanel.com/login"
                            className="uiverse-btn"
                            data-text="GİRİŞ YAP"
                        >
                            <span className="actual-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />GİRİŞ YAP&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />GİRİŞ YAP&nbsp;</span>
                        </Link>
                        <Link
                            href="https://wa.me/491632680219"
                            target="_blank"
                            className="group/button relative overflow-hidden px-5 py-2.5 bg-[#d5900a] text-white font-bold rounded-lg hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-[#d5900a]/20 active:scale-95 border border-transparent"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <img src="/assets/images/common/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 brightness-0 invert" />
                                Ücretsiz Bayimiz Ol <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                            </span>
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                <div className="relative h-full w-10 bg-white/20 blur-[2px]" />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-slate-100 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-700 py-4 animate-in slide-in-from-top-4 shadow-2xl">
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
                                    href="#"
                                    className="uiverse-btn mx-auto w-full justify-center"
                                    data-text="GİRİŞ YAP"
                                >
                                    <span className="actual-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />GİRİŞ YAP&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;<User className="w-4 h-4 mr-1 shrink-0" />GİRİŞ YAP&nbsp;</span>
                                </Link>
                                <Link
                                    href="https://wa.me/491632680219"
                                    target="_blank"
                                    className="group/button relative overflow-hidden w-full bg-[#d5900a] text-white font-bold py-3 rounded-lg text-center border border-transparent shadow-lg shadow-[#d5900a]/20 hover:scale-[1.02] transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        <img src="/assets/images/common/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 brightness-0 invert" />
                                        Ücretsiz Bayimiz Ol
                                    </span>
                                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                        <div className="relative h-full w-10 bg-white/20 blur-[2px]" />
                                    </div>
                                </Link>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
