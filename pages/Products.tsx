import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Heart, Sparkles, Smile } from 'lucide-react';

const Products: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <SEO 
        title={t.products.title} 
        description={t.products.desc}
        keywords={language === 'tr' ? "bebek bezi, hasta bezi, ıslak mendil, toptan" : "baby diapers, adult diapers, wet wipes, wholesale"}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">{t.products.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.products.desc}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Baby Diapers Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-brand-tealLight rounded-full flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                    <Smile size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{t.products.categories.baby.title}</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {t.products.categories.baby.desc}
                </p>
                <Link to="/products/baby-diapers" className="w-full bg-brand-teal text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2">
                    {t.products.categories.baby.btn} <ArrowRight size={18} />
                </Link>
            </div>

            {/* Adult Diapers Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                    <Heart size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{t.products.categories.adult.title}</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {t.products.categories.adult.desc}
                </p>
                <Link to="/products/adult-diapers" className="w-full bg-white text-blue-600 border-2 border-blue-100 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                    {t.products.categories.adult.btn} <ArrowRight size={18} />
                </Link>
            </div>

            {/* Wet Wipes Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">{t.products.categories.wipes.title}</h3>
                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {t.products.categories.wipes.desc}
                </p>
                <Link to="/products/wet-wipes" className="w-full bg-white text-green-600 border-2 border-green-100 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
                    {t.products.categories.wipes.btn} <ArrowRight size={18} />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;