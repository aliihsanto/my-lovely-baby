import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { Sparkles, CheckCircle, ArrowRight, Feather } from 'lucide-react';
import { wetWipesList } from '../utils/productData';
import { getLocalizedPath } from '../utils/routeHelpers';

const WetWipes: React.FC = () => {
    const { t, language } = useLanguage();

    return (
        <div className="pt-28 pb-20 min-h-screen bg-gray-50">
            <SEO
                title={t.products.categories.wipes.title}
                description={t.products.categories.wipes.desc}
                keywords={language === 'tr' ? "ıslak mendil, bebek mendili, toptan" : "wet wipes, baby wipes, wholesale"}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link to={getLocalizedPath('products', language)} className="text-gray-500 hover:text-brand-teal transition-colors font-medium">
                        &larr; {t.products.title}
                    </Link>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-green-100 mb-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full font-bold text-sm mb-6">
                            <Sparkles size={16} /> {t.products.wipes_items.subtitle}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">{t.products.wipes_items.title}</h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {t.products.wipes_items.desc}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {Object.values(t.products.wipes_items.types).map((feat, idx) => (
                                <div key={idx} className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg text-gray-700 font-medium">
                                    <CheckCircle size={16} className="text-green-500" />
                                    {feat}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="aspect-[3/4] bg-green-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                            <img
                                src="/assets/wet-wipes/120.png"
                                alt="Wet Wipes"
                                className="w-full h-full object-contain p-4"
                            />
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-8 font-display">{t.products.view_details}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {wetWipesList.map((product) => {
                        const itemKey = product.id as keyof typeof t.products.wipes_specific;
                        const itemInfo = (t.products.wipes_specific as any)[itemKey];
                        return (
                            <Link
                                to={`${getLocalizedPath('wetWipes', language)}/${product.id}`}
                                key={product.id}
                                className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-[4/5] bg-gray-50 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.type}
                                        className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-green-600">
                                        {product.count} pcs
                                    </div>
                                </div>

                                <div className="px-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">{itemInfo?.title || product.type}</h3>

                                    <div className="flex items-center gap-2 text-brand-teal font-medium text-sm mb-4">
                                        <Feather size={14} />
                                        <span>pH 5.5 Balanced</span>
                                    </div>

                                    <div className="mt-auto border-t border-gray-100 pt-4 flex justify-between items-center text-sm text-gray-600">
                                        <span className="font-medium bg-gray-50 px-2 py-1 rounded">{product.boxCount} packs/box</span>
                                        <div className="flex items-center gap-2 font-bold text-green-600 group-hover:translate-x-1 transition-transform">
                                            {t.products.view_details} <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default WetWipes;
