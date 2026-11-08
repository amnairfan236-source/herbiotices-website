import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer({ setCurrentTab }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Thank you for subscribing to Herbiotics Newsletter with ${email}!`);
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#212121] text-white pt-14 pb-8 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8">
        
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="lg:col-span-1 space-y-4">
            {/* Logo */}
            <div className="flex flex-col items-start cursor-pointer" onClick={() => setCurrentTab('home')}>
              <div className="flex items-center gap-1.5">
                <svg width="28" height="24" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 40C30 15 10 25 5 45C25 45 40 35 50 40Z" fill="#22c55e"/>
                  <path d="M50 40C70 15 90 25 95 45C75 45 60 35 50 40Z" fill="#84cc16"/>
                  <path d="M50 40C35 5 50 0 50 0C50 0 65 5 50 40Z" fill="#15803d"/>
                </svg>
                <span className="text-2xl font-bold font-serif text-white tracking-tight">Herbiotics</span>
              </div>
              <span className="text-[9px] text-gray-400 font-medium -mt-1">The Most Trusted Supplement Brand</span>
            </div>

            <p className="text-xs text-gray-300 font-medium">Pakistan's No.1 Vitamin Brand.</p>

            {/* Phone & Email */}
            <div className="space-y-2 text-xs text-gray-300 pt-1">
              <a href="tel:03177700691" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span className="underline">03177700691</span>
              </a>
              <a href="mailto:info@herbiotics.com.pk" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-gray-400" />
                <span className="underline">info@herbiotics.com.pk</span>
              </a>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-4 pt-2 text-gray-300">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525 0h3.08c.54 2.8 2.37 5.15 5.09 5.86V9.01c-2.31-.05-4.43-.88-6.09-2.3v9.88c0 4.14-3.36 7.5-7.5 7.5S0 20.73 0 16.59c0-4.14 3.36-7.5 7.5-7.5.54 0 1.07.06 1.58.17V12.5c-.5-.15-1.03-.22-1.58-.22-2.35 0-4.26 1.91-4.26 4.26s1.91 4.26 4.26 4.26 4.26-1.91 4.26-4.26V0z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">INFORMATION</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors">Home Page</button></li>
              <li><button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors">Wellness Blogs</button></li>
              <li><button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setCurrentTab('home')} className="hover:text-white transition-colors">International</button></li>
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">SHOP</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><button onClick={() => setCurrentTab('shop')} className="hover:text-white transition-colors">Search</button></li>
              <li><button onClick={() => setCurrentTab('shop')} className="hover:text-white transition-colors">All Products</button></li>
              <li><button onClick={() => setCurrentTab('shop')} className="hover:text-white transition-colors">Shop By Concerns</button></li>
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">USEFUL LINKS</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#terms" className="hover:text-white transition-colors">Terms Of Service</a></li>
              <li><a href="#refund" className="hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Quality & Safety</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#shipping" className="hover:text-white transition-colors">Shipping & Return Policy</a></li>
              <li><a href="#disclaimer" className="hover:text-white transition-colors">Disclaimers</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter Sign Up */}
          <div className="space-y-3 lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">NEWSLETTER SIGN UP</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Receive our latest updates about our products and promotions.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2 pt-1">
              <input 
                type="email" 
                required
                placeholder="enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-800 text-xs px-3 py-2.5 rounded-xs outline-none flex-1 placeholder:text-gray-400"
              />
              <button 
                type="submit"
                className="bg-[#9cd079] hover:bg-[#8bc367] text-white text-xs font-bold uppercase px-4 py-2.5 rounded-xs transition-colors shrink-0"
              >
                SUBMIT
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-6 text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2020 – 2026 All Rights Reserved – Herbiotics Health Care</p>
        </div>

      </div>
    </footer>
  );
}