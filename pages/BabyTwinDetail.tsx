import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, Star, ShieldCheck, Droplets } from 'lucide-react';
import { babyTwinList } from '../utils/productData';
import { getLocalizedPath } from '../utils/routeHelpers';

const BabyTwinDetail: React.FC = () => {
    const { t, language } = useLanguage();
    const { id } = useParams();

    const productData = babyTwinList.find(p => p.id === id);

    if (!productData) {
        return <Navigate to={getLocalizedPath('babyTwin', language)} replace />;
    }

    const itemKey = productData.id as keyof typeof t.products.twin_items;
    const itemContent = t.products.twin_items[itemKey] as any;

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title={`${itemContent.title} - ${itemContent.tagline}`}
                description={itemContent.description}
                keywords={`${itemContent.title}, twin pack, baby diaper, bebek bezi ikiz paket`}
            />
            <div className="pt-32 pb-16 bg-gradient-to-b from-brand-tealLight/30 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to={getLocalizedPath('babyTwin', language)} className="inline-flex items-center text-gray-500 hover:text-brand-teal mb-8 transition-colors font-medium">
                        <ArrowLeft size={20} className="mr-2" /> {t.product_detail.back}
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-square bg-white rounded-3xl shadow-xl overflow-hidden relative flex items-center justify-center p-8">
                                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-teal/5 rounded-full blur-3xl"></div>
                                <img
                                    src={productData.image}
                                    alt={itemContent.title}
                                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-8 right-8 bg-brand-gold text-white p-4 rounded-full shadow-lg animate-bounce">
                                    <Star size={24} fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-bold mb-4 tracking-wider uppercase">
                                {itemContent.weight_val}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
                                {itemContent.tagline}
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {itemContent.description}
                            </p>

                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="bg-brand-tealLight p-3 rounded-xl text-brand-teal">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{itemContent.benefit}</h4>
                                        <p className="text-sm text-gray-500">{t.products.view_details}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="bg-blue-50 p-3 rounded-xl text-blue-500">
                                        <Droplets size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{itemContent.feature1}</h4>
                                        <p className="text-sm text-gray-500">Premium Quality</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Link to={`${getLocalizedPath('contact', language)}?product=Baby Twin ${itemContent.title}`} className="flex-1 bg-brand-teal text-white text-center py-4 rounded-full font-bold hover:bg-teal-600 transition-colors shadow-lg shadow-brand-teal/30">
                                    {t.product_detail.request_quote}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-display">{t.product_detail.specs_title}</h2>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                            <div className="p-8 md:p-12 space-y-6">
                                <div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{t.products.table.size}</div>
                                    <div className="text-3xl font-bold text-brand-teal">{itemContent.title}</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{t.products.table.weight}</div>
                                    <div className="text-3xl font-bold text-gray-900">{itemContent.weight_val}</div>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 space-y-6">
                                <div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{t.products.table.count}</div>
                                    <div className="text-3xl font-bold text-gray-900">{itemContent.count_val}</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">{t.products.table.bale}</div>
                                    <div className="text-3xl font-bold text-gray-900">{productData.bagsPerBale} <span className="text-lg text-gray-400 font-normal">packs/bale</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BabyTwinDetail;
