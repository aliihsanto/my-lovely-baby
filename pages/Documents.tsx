import React from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Award, CheckCircle } from 'lucide-react';

const Documents: React.FC = () => {
  const { t, language } = useLanguage();

  const certs = [
    { id: 'iso9001', icon: <Award size={32} /> },
    { id: 'iso10002', icon: <CheckCircle size={32} /> },
    { id: 'iso14001', icon: <Award size={32} /> },
    { id: 'iso22716', icon: <Award size={32} /> },
    { id: 'ohsas', icon: <Award size={32} /> },
    { id: 'sgr', icon: <FileText size={32} /> },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
      <SEO 
        title={t.documents.title} 
        description={t.documents.subtitle}
        keywords="ISO 9001, ISO 14001, GMP certificates, SGR, baby diaper safety, quality certificates"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">{t.documents.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.documents.subtitle}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => {
            const certData = t.documents.items[cert.id as keyof typeof t.documents.items];
            
            return (
              <div key={cert.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="bg-brand-tealLight/50 p-4 rounded-2xl text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{certData.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {certData.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-blue-50 border border-blue-100 p-8 rounded-3xl text-center max-w-3xl mx-auto">
          <p className="text-blue-800 font-medium">
             {language === 'tr' 
               ? "Tüm belgelerimiz uluslararası akredite kuruluşlar tarafından onaylanmıştır ve yıllık denetimlerden geçmektedir."
               : language === 'ru'
               ? "Все наши сертификаты одобрены международными аккредитованными организациями и проходят ежегодный аудит."
               : "All our certificates are approved by internationally accredited organizations and undergo annual audits."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;