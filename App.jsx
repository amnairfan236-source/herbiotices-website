import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import Certificates from './components/Certificates';
import CategoriesGrid from './components/CategoriesGrid';
import FeaturedProducts from './components/FeaturedProducts';
import HealthGoals from './components/HealthGoals';
import LatestOffers from './components/LatestOffers';
import WellnessBlog from './components/WellnessBlog';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ShopPage from './components/ShopPage';
import OffersPage from './components/OffersPage';
import ContractManufacturing from './components/ContractManufacturing';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === product.name);
      if (existing) {
        return prev.map((p) => p.name === product.name ? { ...p, quantity: (p.quantity || 1) + (product.quantity || 1) } : p);
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    setIsCartOpen(true);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col justify-between">
      <div>
        <Header 
          cartCount={totalCartCount}
          onCartClick={() => setIsCartOpen(true)}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          user={user}
          setUser={setUser}
        />

        {currentTab === 'home' && (
          <main>
            <HeroSlider />
            <Certificates />
            <CategoriesGrid onSelectCategory={(cat) => setCurrentTab('shop')} />
            <FeaturedProducts onAddToCart={handleAddToCart} />
            <HealthGoals />
            <LatestOffers onAddToCart={handleAddToCart} />
            <WellnessBlog />
          </main>
        )}

        {currentTab === 'shop' && (
          <ShopPage onAddToCart={handleAddToCart} />
        )}

        {currentTab === 'offers' && (
          <OffersPage onAddToCart={handleAddToCart} />
        )}

        {currentTab === 'contract' && (
          <ContractManufacturing />
        )}

        {currentTab === 'blog' && (
          <BlogPage />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}

        {currentTab === 'about' && (
          <AboutPage />
        )}

        {currentTab === 'careers' && (
          <CareersPage />
        )}
      </div>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        setCart={setCart} 
      />

      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}