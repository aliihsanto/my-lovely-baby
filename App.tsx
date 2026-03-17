import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ROUTE_PATHS } from './utils/routes';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import BabyDiapers from './pages/BabyDiapers';
import BabyDiapersTwin from './pages/BabyDiapersTwin';
import BabyTwinDetail from './pages/BabyTwinDetail';
import AdultDiapers from './pages/AdultDiapers';
import AdultPants from './pages/AdultPants';
import AdultPantsDetail from './pages/AdultPantsDetail';
import WetWipes from './pages/WetWipes';
import ProductDetail from './pages/ProductDetail';
import AdultProductDetail from './pages/AdultProductDetail';
import WipesProductDetail from './pages/WipesProductDetail';
import Documents from './pages/Documents';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Search from './pages/Search';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans flex flex-col">
        <Header />
        <main className="flex-grow flex flex-col">
          <Routes>
            {/* Localized Static Routes */}
            {Object.values(ROUTE_PATHS.home).map(path => <Route key={`home-${path}`} path={path} element={<Home />} />)}

            {/* Redirect generic /products to baby diapers localized path */}
            {Object.entries(ROUTE_PATHS.products).map(([lang, path]) => (
              <Route key={`products-${path}`} path={path} element={<Navigate to={ROUTE_PATHS.babyDiapers[lang as keyof typeof ROUTE_PATHS.babyDiapers]} replace />} />
            ))}

            {/* Baby Diapers */}
            {Object.values(ROUTE_PATHS.babyDiapers).map(path => (
              <React.Fragment key={`baby-${path}`}>
                <Route path={path} element={<BabyDiapers />} />
                <Route path={`${path}/:id`} element={<ProductDetail />} />
              </React.Fragment>
            ))}

            {/* Baby Diapers Twin Pack */}
            {Object.values(ROUTE_PATHS.babyTwin).map(path => (
              <React.Fragment key={`twin-${path}`}>
                <Route path={path} element={<BabyDiapersTwin />} />
                <Route path={`${path}/:id`} element={<BabyTwinDetail />} />
              </React.Fragment>
            ))}

            {/* Adult Diapers */}
            {Object.values(ROUTE_PATHS.adultDiapers).map(path => (
              <React.Fragment key={`adult-${path}`}>
                <Route path={path} element={<AdultDiapers />} />
                <Route path={`${path}/:id`} element={<AdultProductDetail />} />
              </React.Fragment>
            ))}

            {/* Adult Pull-Up Pants */}
            {Object.values(ROUTE_PATHS.adultPants).map(path => (
              <React.Fragment key={`pants-${path}`}>
                <Route path={path} element={<AdultPants />} />
                <Route path={`${path}/:id`} element={<AdultPantsDetail />} />
              </React.Fragment>
            ))}

            {/* Wet Wipes */}
            {Object.values(ROUTE_PATHS.wetWipes).map(path => (
              <React.Fragment key={`wipes-${path}`}>
                <Route path={path} element={<WetWipes />} />
                <Route path={`${path}/:id`} element={<WipesProductDetail />} />
              </React.Fragment>
            ))}

            {Object.values(ROUTE_PATHS.documents).map(path => <Route key={`docs-${path}`} path={path} element={<Documents />} />)}
            {Object.values(ROUTE_PATHS.blog).map(path => (
              <React.Fragment key={`blog-${path}`}>
                <Route path={path} element={<Blog />} />
                <Route path={`${path}/:slug`} element={<BlogPost />} />
              </React.Fragment>
            ))}
            {Object.values(ROUTE_PATHS.contact).map(path => <Route key={`contact-${path}`} path={path} element={<Contact />} />)}
            <Route path="/search" element={<Search />} />

            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
