
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ROUTE_PATHS } from '../utils/routes';
import { blogPosts } from '../utils/blogData';
import { babyDiapersList, adultDiapersList, wetWipesList } from '../utils/productData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BASE_URL = 'https://mylovelybaby.com';

const languages = ['en', 'tr', 'ru'] as const;

function generateSitemap() {
    let urls: string[] = [];

    // 1. Static Routes (Home, Contact, Documents, Category Pages)
    // We iterate through ROUTE_PATHS.
    // Note: 'products' redirects to 'babyDiapers', so we might exclude generic 'products' if it's a redirect, 
    // but ROUTE_PATHS has explicit paths.

    (Object.keys(ROUTE_PATHS) as Array<keyof typeof ROUTE_PATHS>).forEach(key => {
        // Skip 'products' generic route if it's just a redirect, but keeping it is fine if it renders something.
        // In App.tsx, 'products' redirects. So technically we shouldn't index it to avoid soft 404 or redirect loops in crawl, 
        // but users might land there. Best practice: if it redirects, don't put in sitemap.
        if (key === 'products') return;

        const paths = ROUTE_PATHS[key];
        languages.forEach(lang => {
            urls.push(`${BASE_URL}${paths[lang]}`);
        });
    });

    // 2. Product Detail Pages
    // Baby Diapers
    babyDiapersList.forEach(product => {
        languages.forEach(lang => {
            const basePath = ROUTE_PATHS.babyDiapers[lang];
            urls.push(`${BASE_URL}${basePath}/${product.id}`);
        });
    });

    // Adult Diapers
    adultDiapersList.forEach(product => {
        languages.forEach(lang => {
            const basePath = ROUTE_PATHS.adultDiapers[lang];
            urls.push(`${BASE_URL}${basePath}/${product.id}`);
        });
    });

    // Wet Wipes
    wetWipesList.forEach(product => {
        languages.forEach(lang => {
            const basePath = ROUTE_PATHS.wetWipes[lang];
            urls.push(`${BASE_URL}${basePath}/${product.id}`);
        });
    });

    // 3. Blog Posts
    blogPosts.forEach(post => {
        languages.forEach(lang => {
            const basePath = ROUTE_PATHS.blog[lang];
            const slug = post.translations[lang].slug;
            urls.push(`${BASE_URL}${basePath}/${slug}`);
        });
    });

    // Unique URLs only
    urls = [...new Set(urls)];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    const publicDir = path.resolve(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
    console.log(`✅ Sitemap generated at ${path.join(publicDir, 'sitemap.xml')} with ${urls.length} URLs`);
}

generateSitemap();
