import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata_kullanim' });
    
    const { getAlternates } = await import('@/lib/seo');
    return {
        title: t("title"),
        description: t("description"),
        alternates: getAlternates(locale, '/kullanim'),
    };
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-32 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8 text-white">Kullanım Koşulları</h1>
                <div className="prose prose-invert prose-slate">
                    <p>Lütfen sitemizi kullanmadan önce bu koşulları dikkatlice okuyunuz.</p>
                    <h3>1. Hizmet Tanımı</h3>
                    <p>Premium Panel, bayilik sistemi üzerinden yazılım ve panel yönetim hizmetleri sunmaktadır. Sitemiz üzerinden satılan hizmetler yasal çerçeveler dahilinde kullanılmalıdır.</p>
                    <h3>2. Yasal Sorumluluk</h3>
                    <p>Kullanıcılar, satın aldıkları hizmetleri bulundukları ülkenin yasalarına uygun şekilde kullanmakla yükümlüdür. Telif hakkı ihlali veya yasadışı yayın dağıtımı kesinlikle yasaktır ve tespiti halinde hizmet sonlandırılır.</p>
                    <h3>3. İade Politikası</h3>
                    <p>Dijital hizmetlerde ve kredi bakiyelerinde iade yapılmamaktadır. Ancak teknik bir sorun durumunda destek ekibimiz çözüm üretecektir.</p>
                    <h3>4. Değişiklik Hakkı</h3>
                    <p>Premium Panel, hizmet koşullarını, fiyatları ve paket içeriklerini önceden bildirmeksizin değiştirme hakkını saklı tutar.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
