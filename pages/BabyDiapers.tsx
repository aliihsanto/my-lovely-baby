import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { babyDiapersList } from '../utils/productData';
import { getLocalizedPath } from '../utils/routeHelpers';

const BabyDiapers: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <SEO
        title={t.products.categories.baby.title}
        description={t.products.categories.baby.desc}
        keywords={language === 'tr' ? "bebek bezi, toptan bebek bezi" : "baby diapers, wholesale diapers"}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to={getLocalizedPath('products', language)} className="text-gray-500 hover:text-brand-teal transition-colors font-medium">
            &larr; {t.products.title}
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">{t.products.categories.baby.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.products.categories.baby.desc}
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {babyDiapersList.map((product, index) => {
            const itemKey = product.id as keyof typeof t.products.items;
            const itemInfo = t.products.items[itemKey];

            return (
              <Link
                to={`${getLocalizedPath('babyDiapers', language)}/${product.id}`}
                key={product.id}
                className="group block transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="border border-brand-teal rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full">
                  {/* Image Area */}
                  <div className="relative p-2 flex-1 flex items-center justify-center bg-white min-h-[380px]">
                    <img
                      src={product.imageJumbo}
                      alt={itemInfo.title}
                      className="h-80 w-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="320"
                      height="320"
                    />

                    {/* Subtle Number Background */}
                    <div className="absolute top-4 right-6 text-gray-100 text-8xl font-display font-bold select-none -z-0">
                      {index + 1}
                    </div>

                    {/* Count Badge on Image */}
                    <div className="absolute bottom-4 left-6 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      {product.count} pcs
                    </div>
                  </div>

                  {/* Footer Bar */}
                  <div className="bg-brand-teal py-4 text-center border-t border-brand-teal">
                    <h3 className="text-white font-bold text-xl tracking-wide font-display">
                      {itemInfo.name} {t.products.pack_suffix}
                    </h3>
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

export default BabyDiapers;