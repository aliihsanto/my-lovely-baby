import { ROUTE_PATHS, RouteKey } from './routes';
import { Language } from './translations';

/**
 * Returns the localized path for a given route key and language.
 */
export const getLocalizedPath = (key: RouteKey, language: Language): string => {
    return ROUTE_PATHS[key][language];
};

/**
 * Identifies which RouteKey corresponds to the current path.
 * Used when switching languages to find where to redirect.
 * Returns undefined if path not found in configuration.
 */
export const getRouteKeyFromPath = (path: string): RouteKey | undefined => {
    // Normalize path by removing trailing slash if not root
    const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');

    for (const [key, paths] of Object.entries(ROUTE_PATHS)) {
        if (Object.values(paths).includes(normalizedPath)) {
            return key as RouteKey;
        }
    }

    // Handle nested routes like /blog/:slug or /products/:id logic naturally 
    // needs more complex matching if we want to preserve parameters during switch.
    // For now, we fallback to finding the "parent" route if exact match fails?
    // Or simple return undefined and default to home.

    return undefined;
};

/**
 * Helper to get the equivalent path in a target language for the current path.
 */
export const getTargetLanguagePath = (currentPath: string, targetLanguage: Language): string => {
    const routeKey = getRouteKeyFromPath(currentPath);

    if (routeKey) {
        return ROUTE_PATHS[routeKey][targetLanguage];
    }

    // If exact match fails, check for dynamic routes (Basic implementation)

    // Check Blog Post
    if (currentPath.includes('/blog/')) {
        // Current path is a blog post. 
        // The language switcher in Header/Context needs to handle the slug lookup separately 
        // or we can't easily do it here without access to the blogData. 
        // Fow now return the main blog page as fallback.
        return ROUTE_PATHS.blog[targetLanguage];
    }

    // Check Products
    // If we are on a product detail page e.g. /products/baby-diapers/:id
    // We want to redirect to /urunler/bebek-bezi/:id
    // This requires knowing which category we are in.

    // Let's try to match the prefix
    for (const [key, paths] of Object.entries(ROUTE_PATHS)) {
        for (const path of Object.values(paths)) {
            if (currentPath.startsWith(path + '/') && path !== '/') {
                // It's a sub-route of this key (e.g. product detail)
                // We can try to keep the suffix (ID)
                const suffix = currentPath.substring(path.length);
                return ROUTE_PATHS[key as RouteKey][targetLanguage] + suffix;
            }
        }
    }

    return '/'; // Fallback to home
};
