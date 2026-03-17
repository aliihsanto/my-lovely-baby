export type RouteKey =
    | 'home'
    | 'products'
    | 'babyDiapers'
    | 'babyTwin'
    | 'adultDiapers'
    | 'adultPants'
    | 'wetWipes'
    | 'documents'
    | 'blog'
    | 'contact';

export const ROUTE_PATHS: Record<RouteKey, { en: string; tr: string; ru: string }> = {
    home: {
        en: '/',
        tr: '/',
        ru: '/'
    },
    products: {
        en: '/products',
        tr: '/urunler',
        ru: '/products'
    },
    babyDiapers: {
        en: '/products/baby-diapers',
        tr: '/urunler/bebek-bezi',
        ru: '/products/baby-diapers'
    },
    babyTwin: {
        en: '/products/baby-diapers-twin',
        tr: '/urunler/bebek-bezi-ikiz-paket',
        ru: '/products/baby-diapers-twin'
    },
    adultDiapers: {
        en: '/products/adult-diapers',
        tr: '/urunler/hasta-bezi',
        ru: '/products/adult-diapers'
    },
    adultPants: {
        en: '/products/adult-pants',
        tr: '/urunler/kulot-bez',
        ru: '/products/adult-pants'
    },
    wetWipes: {
        en: '/products/wet-wipes',
        tr: '/urunler/islak-mendil',
        ru: '/products/wet-wipes'
    },
    documents: {
        en: '/documents',
        tr: '/belgeler',
        ru: '/documents'
    },
    blog: {
        en: '/blog',
        tr: '/blog',
        ru: '/blog'
    },
    contact: {
        en: '/contact',
        tr: '/iletisim',
        ru: '/contact'
    }
};
