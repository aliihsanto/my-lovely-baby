import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getLocalizedPath } from '../utils/routeHelpers';
import { blogPosts } from '../utils/blogData';
import { translations } from '../utils/translations';
import SEO from '../components/SEO';
import { Search as SearchIcon, ArrowRight, FileText, Package } from 'lucide-react';

// Flat product list construction for searching
const getProductList = (t: typeof translations.en | typeof translations.tr) => [
    {
        id: 'baby-diapers',
        title: t.products.categories.baby.title,
        desc: t.products.categories.baby.desc,
        type: 'product',
        pathKey: 'babyDiapers',
        image: '/assets/baby-diapers/newborn-jumbo.webp'
    },
    {
        id: 'adult-diapers',
        title: t.products.categories.adult.title,
        desc: t.products.categories.adult.desc,
        type: 'product',
        pathKey: 'adultDiapers',
        image: '/assets/adult/adult-m.webp'
    },
    {
        id: 'wet-wipes',
        title: t.products.categories.wipes.title,
        desc: t.products.categories.wipes.desc,
        type: 'product',
        pathKey: 'wetWipes',
        image: '/assets/wipes/wipes-sensitive.webp'
    }
];

const Search: React.FC = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { t, language } = useLanguage();
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        if (!query) return;

        const lowerQuery = query.toLowerCase();

        // Search Products
        const products = getProductList(t as any).filter(p =>
            p.title.toLowerCase().includes(lowerQuery) ||
            p.desc.toLowerCase().includes(lowerQuery)
        );

        // Search Blog Posts (search current language content)
        const blogs = blogPosts.filter(post => {
            const postContent = post.translations[language as keyof typeof post.translations];
            if (!postContent) return false;
            return (
                postContent.title.toLowerCase().includes(lowerQuery) ||
                postContent.excerpt.toLowerCase().includes(lowerQuery)
            );
        }).map(post => {
            const content = post.translations[language as keyof typeof post.translations];
            return {
                id: post.id,
                title: content.title,
                desc: content.excerpt,
                type: 'blog',
                slug: content.slug,
                image: post.image
            };
        });

        setResults([...products, ...blogs]);
    }, [query, language, t]);

    return (
        <div className="pt-28 pb-20 min-h-screen bg-gray-50">
            <SEO
                title={`Search Results: ${query}`}
                description={`Search results for ${query}`}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                        {language === 'tr' ? 'Arama Sonuçları' : language === 'ru' ? 'Результаты поиска' : 'Search Results'}
                    </h1>
                    <p className="text-xl text-gray-600">
                        "{query}" {language === 'tr' ? 'için' : 'for'} {results.length} {language === 'tr' ? 'sonuç bulundu' : language === 'ru' ? 'результатов найдено' : 'results found'}
                    </p>
                </div>

                {results.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {results.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl shrink-0 ${item.type === 'product' ? 'bg-brand-tealLight/50 text-brand-teal' : 'bg-brand-gold/20 text-brand-gold'}`}>
                                        {item.type === 'product' ? <Package size={24} /> : <FileText size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-brand-teal transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {item.desc}
                                        </p>
                                        <Link
                                            to={item.type === 'product'
                                                ? getLocalizedPath(item.pathKey, language)
                                                : `${getLocalizedPath('blog', language)}/${item.slug}`
                                            }
                                            className="text-sm font-bold text-brand-teal flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            {language === 'tr' ? 'İncele' : 'View'} <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
                            <SearchIcon size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {language === 'tr' ? 'Sonuç bulunamadı' : 'No results found'}
                        </h3>
                        <p className="text-gray-500">
                            {language === 'tr' ? 'Lütfen farklı anahtar kelimelerle tekrar deneyin.' : 'Please try again with different keywords.'}
                        </p>
                        <Link to={getLocalizedPath('home', language)} className="inline-block mt-6 px-6 py-3 bg-brand-teal text-white rounded-full font-bold hover:bg-teal-600 transition-colors">
                            {t.nav.home}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
