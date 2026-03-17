import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { babyTwinList } from '../utils/productData';
import { getLocalizedPath } from '../utils/routeHelpers';

const BabyDiapersTwin: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <SEO
        title={t.products.categories.babyTwin.title}
        description={t.products.categories.babyTwin.desc}
        keywords={language === 'tr' ? "bebek bezi ikiz paket, esnek kulak bebek bezi, toptan" : "baby diapers twin pack, flexible ear diapers, wholesale"}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <Link to={getLocalizedPath('products', language)} className="text-gray-500 hover:text-brand-teal transition-colors font-medium">
            &larr; {t.products.title}
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">{t.products.twin_items.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.products.twin_items.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {babyTwinList.map((product, index) => {
            const itemKey = product.id as keyof typeof t.products.twin_items;
            const itemInfo = t.products.twin_items[itemKey] as any;

            return (
              <Link
                to={`${getLocalizedPath('babyTwin', language)}/${product.id}`}
                key={product.id}
                className="group block transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="border border-brand-teal rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white flex flex-col h-full">
                  <div className="relative p-2 flex-1 flex items-center justify-center bg-white min-h-[380px]">
                    <img
                      src={product.image}
                      alt={itemInfo.title}
                      className="h-80 w-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="320"
                      height="320"
                    />
                    <div className="absolute top-4 right-6 text-gray-100 text-8xl font-display font-bold select-none -z-0">
                      {index + 1}
                    </div>
                    <div className="absolute bottom-4 left-6 bg-brand-gold text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      {product.count} pcs
                    </div>
                  </div>
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

export default BabyDiapersTwin;
