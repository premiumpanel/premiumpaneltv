import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Blog - IPTV Bayilik ve Sektör Haberleri | Premium Panel",
    description: "En son IPTV haberleri, bayilik ipuçları, teknik rehberler ve sektör analizleri. Başarılı bir bayi olmak için gereken her şey.",
    alternates: {
        canonical: "https://premiumpanel.com/blog",
    },
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />

            <section className="pt-32 pb-12 bg-slate-900 border-b border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Blog & Haberler
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Bayilik ipuçları, sektör haberleri ve teknik rehberler.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/30 transition-all group flex flex-col h-full">
                            <div className="h-56 bg-slate-800 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4 bg-[#d5900a] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center text-slate-500 text-xs mb-3 space-x-4">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> Admin</span>
                                </div>

                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors mt-auto">
                                    Devamını Oku <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
}
