import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image }) => {
  const { language } = useLanguage();
  
  const siteName = "My Lovely Baby";
  const fullTitle = `${title} | ${siteName}`;
  const defaultDescription = language === 'tr' 
    ? "My Lovely Baby - Premium bebek bezi üreticisi ve toptan satış bayisi. İşletmeniz için en kaliteli bebek bezleri."
    : "My Lovely Baby - Premium baby diapers manufacturer and wholesale distributor. Best quality diapers for your business.";
    
  const metaDescription = description || defaultDescription;
  const metaImage = image || "https://picsum.photos/1200/630?random=1"; // Default social share image

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <html lang={language} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;