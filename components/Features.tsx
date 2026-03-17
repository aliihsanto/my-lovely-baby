import React from 'react';
import { Droplets, Cloud, ShieldCheck, Heart, Wind, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const featuresList = [
    {
      title: t.features.list.absorb.title,
      description: t.features.list.absorb.desc,
      icon: <Droplets className="w-8 h-8 text-brand-teal" />
    },
    {
      title: t.features.list.breath.title,
      description: t.features.list.breath.desc,
      icon: <Wind className="w-8 h-8 text-sky-400" />
    },
    {
      title: t.features.list.hypo.title,
      description: t.features.list.hypo.desc,
      icon: <ShieldCheck className="w-8 h-8 text-green-500" />
    },
    {
      title: t.features.list.soft.title,
      description: t.features.list.soft.desc,
      icon: <Cloud className="w-8 h-8 text-blue-300" />
    },
    {
      title: t.features.list.elastic.title,
      description: t.features.list.elastic.desc,
      icon: <Heart className="w-8 h-8 text-brand-gold" />
    },
    {
      title: t.features.list.indicator.title,
      description: t.features.list.indicator.desc,
      icon: <Clock className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">{t.features.title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-brand-tealLight/20 p-8 rounded-2xl border border-brand-teal/5 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;