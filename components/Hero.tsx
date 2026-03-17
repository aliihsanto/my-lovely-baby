import React from 'react';
import { ArrowRight, Leaf, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { getLocalizedPath } from '../utils/routeHelpers';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&q=80&w=2070"
          alt="Happy Baby Background"
          className="w-full h-full object-cover"
        />
        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold text-sm font-bold mb-4 tracking-wider uppercase backdrop-blur-sm bg-white/60">
              {t.hero.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-display">
              {t.hero.title} <br />
              <span className="text-brand-teal">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to={getLocalizedPath('contact', language)} className="px-8 py-4 bg-brand-teal text-white rounded-full font-bold hover:bg-teal-600 transition-all shadow-lg hover:shadow-brand-teal/30 flex items-center justify-center gap-2">
                {t.hero.cta_contact} <ArrowRight size={20} />
              </Link>
              <Link to={getLocalizedPath('babyDiapers', language)} className="px-8 py-4 bg-white/80 backdrop-blur-md text-brand-teal border-2 border-brand-teal/20 rounded-full font-bold hover:bg-brand-tealLight transition-colors flex items-center justify-center">
                {t.hero.cta_catalog}
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center md:justify-start space-x-8 text-gray-600">
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/50">
                <div className="p-1 bg-green-100 rounded-full text-green-600">
                  <ShieldCheck size={16} />
                </div>
                <span className="font-medium text-sm">{t.hero.tag_hypo}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-2 rounded-full backdrop-blur-sm shadow-sm border border-white/50">
                <div className="p-1 bg-green-100 rounded-full text-green-600">
                  <Leaf size={16} />
                </div>
                <span className="font-medium text-sm">{t.hero.tag_eco}</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2">

            {/* Product Mockup Representation */}
            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative mx-auto w-80 md:w-[420px] flex items-center justify-center">
                {/* Soft shadow effect */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"></div>

                {/* Product Image */}
                {/* Product Image */}
                <img
                  src="/assets/baby-diapers/newborn-jumbo.webp"
                  alt="My Lovely Baby Premium Diapers"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                  width="420"
                  height="420"
                  fetchPriority="high"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-10 -left-4 md:-left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce border border-gray-50 z-20">
              <div className="bg-brand-gold/20 p-2 rounded-full text-brand-gold">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 leading-tight">{t.hero.float_badge_title}</p>
                <p className="text-xs text-gray-500">{t.hero.float_badge_desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;