import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../utils/blogData';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <SEO
        title={t.blog.title}
        description={t.blog.subtitle}
        keywords={language === 'tr' ? "bebek bakımı blog, sektör haberleri, bebek bezi teknolojisi" : "baby care blog, diaper industry news, hygiene technology"}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">{t.blog.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const translatedPost = post.translations[language];

            return (
              <article key={post.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full group">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={post.image} alt={translatedPost.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-teal transition-colors">
                    <Link to={`/blog/${translatedPost.slug}`}>
                      {translatedPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {translatedPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${translatedPost.slug}`}
                    className="text-brand-teal font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
                  >
                    {t.blog.read_more} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;