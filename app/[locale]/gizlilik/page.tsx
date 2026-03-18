import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Gizlilik Politikası | Premium Panel",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />
            <div className="container mx-auto px-4 py-32 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8 text-white">Gizlilik Politikası</h1>
                <div className="prose prose-invert prose-slate">
                    <p>Son Güncelleme: 01.01.2024</p>
                    <p>Premium Panel olarak kişisel verilerinizin güvenliğine önem veriyoruz.</p>
                    <h3>1. Toplanan Veriler</h3>
                    <p>Siteyi ziyaret ettiğinizde IP adresi, tarayıcı bilgisi gibi standart log kayıtları tutulmaktadır. İletişim formu aracılığıyla gönderdiğiniz Ad, E-posta gibi bilgiler sadece size dönüş yapmak amacıyla saklanır.</p>
                    <h3>2. Çerezler (Cookies)</h3>
                    <p>Sitemizin düzgün çalışması ve kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır.</p>
                    <h3>3. Veri Paylaşımı</h3>
                    <p>Kişisel bilgileriniz yasal zorunluluklar haricinde asla üçüncü şahıslarla paylaşılmaz.</p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
