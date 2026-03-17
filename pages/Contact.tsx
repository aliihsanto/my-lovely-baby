import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, MessageCircle, HelpCircle, CheckCircle } from 'lucide-react';
import { translations } from '../utils/translations';
import { useLocation } from 'react-router-dom';
import { trackFormSubmit, trackWhatsAppClick } from '../utils/analytics';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const phoneNumber = translations.common.phone_display;
  const whatsappLink = translations.common.phone_link;
  const location = useLocation();
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  // Pre-fill message if coming from a product detail page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get('product');
    if (product) {
      const prefix = language === 'tr'
        ? `Merhaba, şu ürün hakkında fiyat teklifi almak istiyorum: ${product}.`
        : language === 'ru'
          ? `Здравствуйте, я хотел бы запросить цену на следующий продукт: ${product}.`
          : `Hello, I would like to request a quote for the following product: ${product}.`;
      setMessage(prefix);
    }
  }, [location, language]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // ----------------------------------------
      // TRACKING EVENT: Form Submit
      // ----------------------------------------
      trackFormSubmit();

      // Reset after a few seconds or keep it as success state
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1000);
  };

  const faqItems = [
    { q: t.contact.faq.q1, a: t.contact.faq.a1 },
    { q: t.contact.faq.q2, a: t.contact.faq.a2 },
    { q: t.contact.faq.q3, a: t.contact.faq.a3 },
    { q: t.contact.faq.q4, a: t.contact.faq.a4 },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <SEO
        title={t.contact.title}
        description={t.contact.subtitle}
        keywords={language === 'tr' ? "iletişim, bayilik başvurusu, toptan alım" : "contact us, dealership application, wholesale inquiry"}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 font-display">{t.contact.title}</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-tealLight/50 p-3 rounded-full text-brand-teal">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-lg font-medium">{phoneNumber}</p>
                  <p className="text-sm text-gray-500">Turkey / Global Support</p>

                  <a
                    href={`https://wa.me/${whatsappLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackWhatsAppClick}
                    className="inline-flex items-center gap-2 mt-2 text-brand-teal font-bold hover:underline"
                  >
                    <MessageCircle size={16} /> {t.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-tealLight/50 p-3 rounded-full text-brand-teal">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(translations.common.email);
                      const toast = document.createElement('div');
                      toast.className = 'fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade-in-up';
                      toast.innerText = (t as any).email_copied || 'Email copied';
                      document.body.appendChild(toast);
                      setTimeout(() => toast.remove(), 2000);
                    }}
                    className="text-gray-600 hover:text-brand-teal transition-colors text-left font-medium group flex items-center gap-2"
                  >
                    {translations.common.email}
                    <span className="opacity-0 group-hover:opacity-100 text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 transition-opacity">
                      Copy
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-tealLight/50 p-3 rounded-full text-brand-teal">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t.contact.headquarters_label}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{t.contact.headquarters_address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">{t.contact.form.title}</h2>

            {formStatus === 'success' ? (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.contact.form.success}</h3>
              </div>
            ) : null}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.name}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all placeholder-gray-400"
                  placeholder={t.contact.form.placeholders.name}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all placeholder-gray-400"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all placeholder-gray-400"
                    placeholder={t.contact.form.placeholders.phone}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.form.message}</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all placeholder-gray-400"
                  placeholder={t.contact.form.placeholders.message}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-teal text-white py-4 rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-lg flex items-center justify-center gap-2">
                <Send size={18} />
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-tealLight/50 text-brand-teal mb-4">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-display">{t.contact.faq.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-brand-teal/20 transition-colors">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;