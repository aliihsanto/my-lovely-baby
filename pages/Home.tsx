import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '../utils/routeHelpers';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title={language === 'tr' ? "Ana Sayfa - Bebek Bezi Üreticisi" : "Home - Diaper Manufacturer"}
        description={t.hero.description}
        keywords="baby diapers, wholesale diapers, diaper manufacturer, bebek bezi üreticisi, toptan bebek bezi"
      />
      <Hero />
      <Features />

      {/* Product Preview Section */}
      <section className="py-20 bg-brand-tealLight/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">{t.products.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            {t.products.desc}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { image: '/assets/baby-diapers/newborn-jumbo.webp', size: 'Newborn', desc: '2-5 kg' },
              { image: '/assets/baby-diapers/mini-jumbo.webp', size: 'Mini', desc: '3-6 kg' },
              { image: '/assets/baby-diapers/midi-jumbo.webp', size: 'Midi', desc: '5-9 kg' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group">
                <div className="h-56 bg-gradient-to-b from-brand-tealLight/30 to-white rounded-xl mb-6 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={`My Lovely Baby ${item.size}`}
                    className="h-48 object-contain drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    width="192"
                    height="192"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">My Lovely Baby - {item.size}</h3>
                <p className="text-gray-500 mb-4 text-sm">{item.desc} • Premium kalite bebek bezi</p>
                <Link to={getLocalizedPath('babyDiapers', language)} className="text-brand-teal font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
                  {t.products.view_details} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <Link to={getLocalizedPath('babyDiapers', language)} className="inline-block bg-brand-gold text-white px-10 py-3 rounded-full font-bold hover:bg-[#b08d55] transition-colors shadow-lg">
            {t.hero.cta_catalog}
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-teal text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">{t.contact.title}</h2>
          <p className="text-xl opacity-90 mb-10">
            {t.contact.subtitle}
          </p>
          <Link to={getLocalizedPath('contact', language)} className="inline-block bg-white text-brand-teal px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-tealLight transition-colors shadow-xl">
            {t.hero.cta_contact}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;