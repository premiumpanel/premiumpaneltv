import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
            <div className="bg-blue-500/10 p-6 rounded-full inline-block mb-6">
                <span className="text-6xl text-blue-500 font-bold">404</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Sayfa Bulunamadı
            </h1>
            <p className="text-slate-400 max-w-lg mb-8 text-lg">
                Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak hizmet dışı olabilir.
            </p>
            <div className="flex gap-4">
                <CTAButton href="/" variant="primary">
                    Ana Sayfaya Dön
                </CTAButton>
                <CTAButton href="/iletisim" variant="outline">
                    İletişime Geç
                </CTAButton>
            </div>
        </div>
    );
}
