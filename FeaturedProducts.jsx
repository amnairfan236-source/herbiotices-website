import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';

export default function FeaturedProducts({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('best');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bestSelling = [
    { id: 1, name: "B Collagen Powder", price: "Rs.4,950", reviews: "687", img: "https://herbiotics.com.pk/cdn/shop/files/WhatsApp_Image_2026-11-05_at_3.50.25_PM_1570x.jpg?v=1793876152" },
    { id: 2, name: "Magnesium Glycinate (500mg)", price: "Rs.2,490", reviews: "909", img: "https://herbiotics.com.pk/cdn/shop/files/Magnesium_glycinate_1_785x.png?v=1744882674" },
    { id: 3, name: "Vitamin D3 K2", price: "Rs.2,490", reviews: "396", img: "https://herbiotics.com.pk/cdn/shop/files/vitamind3k2_785x.png?v=1756536400" },
    { id: 4, name: "Oxipro Diabetic Foot Cream", price: "Rs.1,850", reviews: "104", img: "https://herbiotics.com.pk/cdn/shop/files/OxiproCreamFeatureImage_785x.png?v=1765169665" },
    { id: 5, name: "Vitamin B12 (2000MCG)", price: "Rs.1,790", reviews: "3", img: "https://herbiotics.com.pk/cdn/shop/files/vitmain_b12_785x.png?v=1782891467" }
  ];

  const newArrivals = [
    { id: 6, name: "Buy 2 Shampoo Get 1 Free", price: "Rs.1,980", oldPrice: "Rs.2,970", reviews: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQe8ljfrBJb7yOqyX6warjWJ1Fwh3xCff5-sLvuHRNA&s=10" },
    { id: 7, name: "Magnesium Glycinate 1000mg Shots", price: "Rs.2,990", reviews: "5", img: "https://herbiotics.com.pk/cdn/shop/files/1._1880x.jpg?v=1790674096" },
    { id: 8, name: "Glutavim - Glutathione Tablets", price: "Rs.3,990", reviews: "5", img: "https://herbiotics.com.pk/cdn/shop/files/glutavim_785x.png?v=1790319429" },
    { id: 9, name: "MaxOne", price: "Rs.1,990", reviews: "12", img: "https://herbiotics.com.pk/cdn/shop/files/maxone_785x.png?v=1790319283" },
    { id: 10, name: "Wedding Glow Bundle", price: "Rs.4,190", oldPrice: "Rs.5,590", reviews: "42", img: "https://herbiotics.com.pk/cdn/shop/files/bundle_940x.png?v=1789130901" }
  ];

  const currentProducts = activeTab === 'best' ? bestSelling : newArrivals;

  return (
    <div className="w-full bg-white py-12">
      {/* Strict Centered Box Container with Side Gaps */}
      <section className="max-w-[1140px] mx-auto px-6 sm:px-8">
        
        {/* Header & Tabs */}
        <div className="text-center mb-8">
          <h2 className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-700 mb-4">
            FEATURED PRODUCTS
          </h2>
          <div className="flex items-center justify-center gap-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab('best')}
              className={`pb-1 transition-all ${
                activeTab === 'best' 
                  ? 'text-gray-900 border-b-2 border-[#1a382b]' 
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              BEST SELLING
            </button>
            <span className="text-gray-300">/</span>
            <button
              onClick={() => setActiveTab('new')}
              className={`pb-1 transition-all ${
                activeTab === 'new' 
                  ? 'text-gray-900 border-b-2 border-[#1a382b]' 
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              NEW ARRIVALS
            </button>
          </div>
        </div>

        {/* Product Cards Grid with proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {currentProducts.map((prod) => (
            <div 
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="w-full h-44 bg-gray-50 rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden">
                <img 
                  src={prod.img} 
                  alt={prod.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="font-bold text-xs text-gray-800 line-clamp-1 group-hover:text-emerald-800 mb-1.5">
                  {prod.name}
                </h4>

                {/* Stars & Reviews */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">{prod.reviews} reviews</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-gray-900">{prod.price}</span>
                  {prod.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">{prod.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={onAddToCart}
      />
    </div>
  );
}