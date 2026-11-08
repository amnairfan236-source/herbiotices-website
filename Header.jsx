import React, { useState } from 'react';
import { Search, ShoppingCart, User, LogOut, Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Header({ cartCount = 0, onCartClick, currentTab, setCurrentTab, onSearch, user, setUser }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'All Products', id: 'shop' },
    { name: 'Discount & Offers', id: 'offers' },
    { name: 'Contract Manufacturing', id: 'contract' },
    { name: 'Wellness Blog', id: 'blog' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'About Us', id: 'about' },
    { name: 'Careers', id: 'careers' },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
    setCurrentTab('shop');
  };

  return (
    <header className="w-full bg-white font-sans text-gray-800 shadow-xs border-b border-gray-100">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#d2758f] text-white text-[13px] py-1.5 overflow-hidden whitespace-nowrap font-medium relative">
        <div className="animate-marquee-infinite">
          <div className="flex items-center space-x-12 shrink-0 pr-12">
            <span>🎁 Order B Collagen & Get a Chance to Win an Electric Scooty <button onClick={() => setCurrentTab('shop')} className="underline font-bold ml-1.5 hover:text-emerald-100">Order Now</button></span>
            <span>🎁 Order B Collagen & Get a Chance to Win an Electric Scooty <button onClick={() => setCurrentTab('shop')} className="underline font-bold ml-1.5 hover:text-emerald-100">Order Now</button></span>
            <span>🎁 Order B Collagen & Get a Chance to Win an Electric Scooty <button onClick={() => setCurrentTab('shop')} className="underline font-bold ml-1.5 hover:text-emerald-100">Order Now</button></span>
          </div>
          <div className="flex items-center space-x-12 shrink-0 pr-12">
            <span>🎁 Order B Collagen & Get a Chance to Win an Electric Scooty <button onClick={() => setCurrentTab('shop')} className="underline font-bold ml-1.5 hover:text-emerald-100">Order Now</button></span>
            <span>🎁 Order B Collagen & Get a Chance to Win an Electric Scooty <button onClick={() => setCurrentTab('shop')} className="underline font-bold ml-1.5 hover:text-emerald-100">Order Now</button></span>
            <span>🎁 Order B Collagen & Get a Chance to Win an Electric Scooty <button onClick={() => setCurrentTab('shop')} className="underline font-bold ml-1.5 hover:text-emerald-100">Order Now</button></span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Logo */}
        <div 
          onClick={() => setCurrentTab('home')} 
          className="cursor-pointer flex flex-col items-start shrink-0 select-none"
        >
          <div className="flex items-center gap-1.5">
            <svg width="32" height="26" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 40C30 15 10 25 5 45C25 45 40 35 50 40Z" fill="#15803d"/>
              <path d="M50 40C70 15 90 25 95 45C75 45 60 35 50 40Z" fill="#84cc16"/>
              <path d="M50 40C35 5 50 0 50 0C50 0 65 5 50 40Z" fill="#22c55e"/>
            </svg>
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1a382b] font-serif">Herbiotics</span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium tracking-normal -mt-1">The Most Trusted Supplement Brand</span>
        </div>

        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-xl hidden md:flex items-center relative">
          <input 
            type="text"
            placeholder="Search the store"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (onSearch) onSearch(e.target.value);
            }}
            className="w-full bg-[#f4f5f7] text-sm text-gray-700 py-2.5 pl-5 pr-10 rounded-full border border-transparent focus:border-emerald-700 focus:bg-white outline-none transition-all placeholder:text-gray-400"
          />
          <button type="submit" className="absolute right-3.5 text-gray-600 hover:text-emerald-800">
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-6 shrink-0">
          
          {/* Cart */}
          <button 
            onClick={onCartClick} 
            className="flex items-center gap-2 cursor-pointer group outline-none"
          >
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-emerald-800 transition-colors stroke-[1.6]" />
              <span className="absolute -top-2 -right-2 bg-[#9cd079] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {cartCount}
              </span>
            </div>
            <span className="text-xs font-medium text-gray-600 hidden sm:inline group-hover:text-emerald-800">Cart</span>
          </button>

          {/* User Account / Dynamic State */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer text-left">
                <div className="w-8 h-8 rounded-full bg-[#1a382b] text-white flex items-center justify-center font-bold text-xs">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="flex flex-col text-xs leading-tight hidden lg:block">
                  <span className="text-emerald-800 font-bold">Welcome, {user.name || 'User'}</span>
                  <span className="text-gray-500 text-[10px]">My Account</span>
                </div>
              </div>
              <button 
                onClick={() => setUser(null)}
                title="Sign Out"
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 hover:text-rose-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="flex items-center gap-2.5 cursor-pointer group text-left outline-none"
            >
              <User className="w-6 h-6 text-gray-700 group-hover:text-emerald-800 transition-colors stroke-[1.6]" />
              <div className="flex flex-col text-xs leading-tight hidden lg:block">
                <span className="text-gray-500 text-[11px]">Sign in or Register</span>
                <span className="font-bold text-gray-900 group-hover:text-emerald-800">My Account</span>
              </div>
            </button>
          )}

          {/* Mobile Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-gray-700 hover:text-emerald-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* 3. NAVIGATION BAR */}
      <nav className="w-full border-t border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8 py-2.5 text-[14px]">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setCurrentTab(link.id)}
                className={`font-medium transition-colors duration-150 ${
                  isActive 
                    ? 'text-gray-900 font-bold border-b-2 border-[#1a382b] pb-0.5' 
                    : 'text-gray-700 hover:text-emerald-800'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        setUser={setUser}
      />

    </header>
  );
}