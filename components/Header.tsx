import React, { useState } from 'react';
import { Menu, X, Globe, Phone, ChevronDown, Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../utils/translations';
import { getLocalizedPath, getTargetLanguagePath } from '../utils/routeHelpers';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q');
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query.toString())}`);
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  const handleLanguageChange = (code: Language) => {
    if (code === language) return;
    const newPath = getTargetLanguagePath(location.pathname, code);
    setLanguage(code);
    navigate(newPath);
    setIsMenuOpen(false);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  const productSubLinks = [
    { key: 'babyDiapers' as const, label: t.products.categories.baby.title },
    { key: 'babyTwin' as const, label: t.products.categories.babyTwin.title },
    { key: 'adultDiapers' as const, label: t.products.categories.adult.title },
    { key: 'adultPants' as const, label: t.products.categories.adultPants.title },
    { key: 'wetWipes' as const, label: t.products.categories.wipes.title },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-brand-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to={getLocalizedPath('home', language)} className="flex-shrink-0 flex items-center gap-2" onClick={handleLinkClick}>
            <img
              src="/assets/logos/logo.webp"
              alt="My Lovely Baby"
              className="h-16 w-auto object-contain"
              width="200"
              height="64"
            />
          </Link>

          <div className="hidden md:flex space-x-6 items-center">

            {!isSearchOpen ? (
              <>
                <Link
                  to={getLocalizedPath('home', language)}
                  className={`text-sm font-medium transition-colors ${location.pathname === getLocalizedPath('home', language) ? 'text-brand-teal' : 'text-gray-600 hover:text-brand-teal'}`}
                >
                  {t.nav.home}
                </Link>

                {/* Products Dropdown */}
                <div className="relative group">
                  <Link
                    to={getLocalizedPath('babyDiapers', language)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${location.pathname.includes('/products') || location.pathname.includes('/urunler') ? 'text-brand-teal' : 'text-gray-600 hover:text-brand-teal'}`}
                  >
                    {t.nav.products}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 w-64">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                      {productSubLinks.map(({ key, label }) => (
                        <Link
                          key={key}
                          to={getLocalizedPath(key, language)}
                          className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-brand-teal transition-colors"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to={getLocalizedPath('documents', language)}
                  className={`text-sm font-medium transition-colors ${location.pathname.includes(getLocalizedPath('documents', language)) ? 'text-brand-teal' : 'text-gray-600 hover:text-brand-teal'}`}
                >
                  {t.nav.documents}
                </Link>
                <Link
                  to={getLocalizedPath('blog', language)}
                  className={`text-sm font-medium transition-colors ${location.pathname.includes(getLocalizedPath('blog', language)) ? 'text-brand-teal' : 'text-gray-600 hover:text-brand-teal'}`}
                >
                  {t.nav.blog}
                </Link>
              </>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center w-full max-w-md animate-fade-in">
                <input
                  type="text"
                  name="q"
                  autoFocus
                  placeholder={language === 'tr' ? "Ara..." : "Search..."}
                  className="w-full px-4 py-2 rounded-l-full border border-gray-200 focus:outline-none focus:border-brand-teal"
                />
                <button type="submit" className="bg-brand-teal text-white px-4 py-2 rounded-r-full border border-brand-teal hover:bg-teal-600">
                  <SearchIcon size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </form>
            )}

            {!isSearchOpen && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-brand-teal transition-colors"
              >
                <SearchIcon size={20} />
              </button>
            )}

            {/* Language Selector Dropdown (Hover) */}
            <div className="relative group">
              <button
                className="flex items-center gap-1.5 text-gray-700 hover:text-brand-teal px-3 py-2 rounded-full transition-colors border border-transparent hover:bg-gray-50"
              >
                <Globe size={16} />
                <span className="uppercase font-bold text-xs">{currentLang.code}</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[140px] flex flex-col gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${language === lang.code ? 'bg-brand-teal/10 text-brand-teal font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link to={getLocalizedPath('contact', language)} className="bg-brand-teal text-white px-5 py-2.5 rounded-full hover:bg-teal-600 transition-colors flex items-center gap-2 shadow-md hover:shadow-lg text-sm font-bold">
              <Phone size={16} />
              {t.nav.contact}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-600 hover:text-brand-teal"
            >
              <SearchIcon size={24} />
            </button>
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              name="q"
              autoFocus
              placeholder={language === 'tr' ? "Ara..." : "Search..."}
              className="w-full px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:border-brand-teal"
            />
            <button type="submit" className="bg-brand-teal text-white px-4 rounded-r-lg">
              <SearchIcon size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-teal/10 absolute w-full shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col">
            <Link to={getLocalizedPath('home', language)} onClick={handleLinkClick} className="block px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">{t.nav.home}</Link>

            <div className="space-y-1">
              <Link to={getLocalizedPath('babyDiapers', language)} onClick={handleLinkClick} className="block px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
                {t.nav.products}
              </Link>
              <div className="pl-4 border-l-2 border-gray-100 ml-3 space-y-1">
                {productSubLinks.map(({ key, label }) => (
                  <Link key={key} to={getLocalizedPath(key, language)} onClick={handleLinkClick} className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm">
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to={getLocalizedPath('documents', language)} onClick={handleLinkClick} className="block px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">{t.nav.documents}</Link>
            <Link to={getLocalizedPath('blog', language)} onClick={handleLinkClick} className="block px-3 py-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">{t.nav.blog}</Link>

            <div className="border-t border-gray-100 my-4 pt-4">
              <p className="px-3 text-xs font-bold text-gray-400 uppercase mb-2">Select Language</p>
              <div className="grid grid-cols-3 gap-2 px-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl border transition-all ${language === lang.code ? 'bg-brand-teal text-white border-brand-teal' : 'bg-gray-50 border-gray-200 text-gray-600'}`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-xs font-bold uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <Link to={getLocalizedPath('contact', language)} onClick={handleLinkClick} className="mt-4 w-full bg-brand-teal text-white px-6 py-4 rounded-xl hover:bg-teal-600 transition-colors font-bold shadow-md text-center flex items-center justify-center gap-2">
              <Phone size={18} />
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
