import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Calendar, User, ArrowRight, Phone, MessageCircle, Clock } from 'lucide-react';
import { blogPosts } from '../utils/blogData';
import { translations } from '../utils/translations';

const BlogPostPage: React.FC = () => {
    const { t, language } = useLanguage();
    const { slug } = useParams();

    // Find the specific blog post by slug
    // 1. Try to find in current language
    let post = blogPosts.find(p => p.translations[language]?.slug === slug);

    // 2. If not found, search in all languages (e.g. if user switched lang but kept URL, or shared link)
    if (!post) {
        post = blogPosts.find(p => Object.values(p.translations).some(t => t.slug === slug));
    }

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Get other posts for the sidebar (exclude current one)
    const otherPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

    const translatedPost = post.translations[language];

    // Helper text for Sidebar based on language
    const sidebarText = {
        recent: language === 'tr' ? 'Diğer Yazılar' : language === 'ru' ? 'Другие статьи' : 'Other Articles',
        contactTitle: language === 'tr' ? 'Bayimiz Olun' : language === 'ru' ? 'Стать дилером' : 'Become a Dealer',
        contactDesc: language === 'tr'
            ? 'Toptan fiyatlar ve iş ortaklığı fırsatları için hemen bizimle iletişime geçin.'
            : language === 'ru'
                ? 'Свяжитесь с нами прямо сейчас для получения оптовых цен и условий сотрудничества.'
                : 'Contact us now for wholesale prices and partnership opportunities.',
        contactBtn: language === 'tr' ? 'Teklif Alın' : language === 'ru' ? 'Запросить прайс' : 'Get a Quote',
    };

    return (
        <div className="pt-28 pb-20 min-h-screen bg-gray-50">
            <SEO
                title={translatedPost.seoTitle}
                description={translatedPost.seoDescription}
                image={post.image}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Link */}
                <div className="mb-8">
                    <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-brand-teal transition-colors font-medium">
                        <ArrowLeft size={16} className="mr-2" /> {t.blog.back}
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-12 items-start">

                    {/* MAIN CONTENT COLUMN (Left) */}
                    <main className="lg:col-span-2">
                        <article className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                            {/* Hero Image */}
                            <div className="h-64 sm:h-96 w-full overflow-hidden relative">
                                <img src={post.image} alt={translatedPost.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 sm:left-10 text-white">
                                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider mb-2">
                                        <span className="bg-brand-teal px-3 py-1 rounded-full">Blog</span>
                                        <span className="flex items-center gap-1 opacity-90">
                                            <Calendar size={14} /> {post.date}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 sm:p-12">
                                <header className="mb-10 border-b border-gray-100 pb-8">
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">
                                        {translatedPost.title}
                                    </h1>
                                    <p className="text-xl text-gray-500 italic leading-relaxed">
                                        {translatedPost.excerpt}
                                    </p>
                                </header>

                                <div className="prose prose-lg prose-headings:font-display prose-headings:text-brand-text prose-a:text-brand-teal prose-img:rounded-2xl max-w-none text-gray-700">
                                    <div dangerouslySetInnerHTML={{ __html: translatedPost.content }} />
                                </div>
                            </div>
                        </article>

                        {/* Bottom CTA (In-article) */}
                        <div className="mt-12 bg-gradient-to-r from-brand-teal to-teal-700 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 font-display">
                                    {language === 'tr' ? 'İlginizi çekti mi?' : language === 'ru' ? 'Заинтересовались?' : 'Interested?'}
                                </h3>
                                <p className="text-white/90 mb-8 max-w-xl mx-auto">
                                    {language === 'tr'
                                        ? 'Ürünlerimiz hakkında daha fazla bilgi edinin ve kataloğumuzu inceleyin.'
                                        : language === 'ru'
                                            ? 'Узнайте больше о нашей продукции и ознакомьтесь с каталогом.'
                                            : 'Learn more about our products and browse our catalog.'}
                                </p>
                                <Link
                                    to={translatedPost.ctaLink}
                                    className="inline-flex items-center gap-2 bg-white text-brand-teal px-8 py-4 rounded-full font-bold hover:bg-brand-tealLight transition-all transform hover:scale-105 shadow-md"
                                >
                                    {translatedPost.ctaText} <ArrowRight size={20} />
                                </Link>
                            </div>
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/20 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
                        </div>
                    </main>


                    {/* SIDEBAR COLUMN (Right) */}
                    <aside className="space-y-8 lg:sticky lg:top-28">

                        {/* 1. Contact / Lead Widget */}
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-brand-teal/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-brand-gold/10 w-32 h-32 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-display relative z-10">{sidebarText.contactTitle}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                                {sidebarText.contactDesc}
                            </p>

                            <div className="space-y-3 relative z-10">
                                <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-brand-teal text-white py-3 rounded-xl font-bold hover:bg-teal-700 transition-colors shadow-md">
                                    <Phone size={18} /> {sidebarText.contactBtn}
                                </Link>
                                <a
                                    href={`https://wa.me/${translations.common.phone_link}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-md"
                                >
                                    <MessageCircle size={18} /> WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* 2. Other Articles Widget */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 font-display border-b border-gray-100 pb-2">
                                {sidebarText.recent}
                            </h3>
                            <div className="space-y-6">
                                {otherPosts.map(other => {
                                    const otherTrans = other.translations[language];
                                    return (
                                        <Link to={`/blog/${other.id}`} key={other.id} className="flex gap-4 group">
                                            <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden relative">
                                                <img src={other.image} alt={otherTrans.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <span className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                                                    <Clock size={10} /> {other.date}
                                                </span>
                                                <h4 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-brand-teal transition-colors line-clamp-2">
                                                    {otherTrans.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        {/* 3. Small Info Widget */}
                        <div className="bg-brand-tealLight/30 p-6 rounded-3xl text-center border border-brand-teal/5">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal mx-auto mb-3 shadow-sm">
                                <User size={20} />
                            </div>
                            <p className="text-sm text-gray-600 font-medium">
                                {language === 'tr' ? 'Uzman ekibimiz sorularınızı yanıtlamaya hazır.' : 'Our expert team is ready to answer your questions.'}
                            </p>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
};

export default BlogPostPage;