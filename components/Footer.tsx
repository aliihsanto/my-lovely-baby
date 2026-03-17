import React from 'react';
import { Instagram, Facebook, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { translations } from '../utils/translations';

import { getLocalizedPath } from '../utils/routeHelpers';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-brand-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-brand-teal mb-4 font-display">MyLovelyBaby</h3>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mylovelybaby34" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/mylovelybaby34" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://t.me/+905336714055" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-tealLight hover:text-brand-teal transition-colors">
                <Send size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.nav}</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to={getLocalizedPath('home', language)} className="hover:text-brand-teal transition-colors">{t.nav.home}</Link></li>
              <li><Link to={getLocalizedPath('babyDiapers', language)} className="hover:text-brand-teal transition-colors">{t.nav.products}</Link></li>
              <li><Link to={getLocalizedPath('blog', language)} className="hover:text-brand-teal transition-colors">{t.nav.blog}</Link></li>
              <li><Link to={getLocalizedPath('contact', language)} className="hover:text-brand-teal transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.contacts}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{translations.common.email}</li>
              <li>{translations.common.phone_display}</li>
              <li>{t.footer.headquarters}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} My Lovely Baby. {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;