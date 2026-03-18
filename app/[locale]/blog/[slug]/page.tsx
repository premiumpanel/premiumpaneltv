
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getPost, blogPosts } from "@/lib/blog"; // Ensure blogPosts is exported
import { notFound } from "next/navigation";
import { ArrowLeft, User, Calendar, Tag } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    return {
        title: `${post.title} | Premium Panel`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: `https://premiumpanel.com${post.image}`,
        author: {
            "@type": "Person",
            name: "Admin",
        },
        publisher: {
            "@type": "Organization",
            name: "Premium Panel",
            logo: {
                "@type": "ImageObject",
                url: "https://premiumpanel.com/assets/images/logo.png",
            },
        },
        datePublished: post.date,
        description: post.excerpt,
    };

    return (
        <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
            <Header />
            <JsonLd data={jsonLd} />

            <article className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Blog'a Dön
                </Link>

                <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
                    <div className="h-64 md:h-96 w-full relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 md:left-12 max-w-2xl">
                            <span className="bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-white shadow-black/80 drop-shadow-md leading-tight">
                                {post.title}
                            </h1>
                        </div>
                    </div>

                    <div className="p-6 md:p-12">
                        <div className="flex items-center text-slate-400 text-sm mb-8 pb-8 border-b border-slate-800 space-x-6">
                            <span className="flex items-center"><User className="w-4 h-4 mr-2 text-slate-500" /> Admin</span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-slate-500" /> {post.date}</span>
                            <span className="flex items-center"><Tag className="w-4 h-4 mr-2 text-slate-500" /> {post.category}</span>
                        </div>

                        <div
                            className="prose prose-invert prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 prose-li:text-slate-300 prose-p:text-slate-300 prose-strong:text-white"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
