import React, { useState } from 'react';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';

export default function OffersPage({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    "All Products", "Women's Health", "Beauty Health", "Weight Management", 
    "Kids Health", "Bones & Joints", "Diabetic Support", "Men's Health", 
    "Heart Health", "Immune Health", "Fertility Support", "Vitamins & Mineral", "Brain & Vision"
  ];

  const saleProducts = [
    {
      id: 1,
      name: "Vitamin D3 + K2 10000 IU + Free Ostrich Oil",
      price: "Rs.2,490",
      oldPrice: "Rs.4,480",
      reviews: "20 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/combinedmockup_785x.webp?v=1792057968",
      category: "Bones & Joints"
    },
    {
      id: 2,
      name: "Fair & Glow Bundle (2X Brighter Skin-...)",
      price: "Rs.2,990",
      oldPrice: "Rs.3,640",
      reviews: "289 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-01_1_785x.png?v=1738317111",
      category: "Beauty Health"
    },
    {
      id: 3,
      name: "Daily Skin Care Bundle",
      price: "Rs.2,900",
      oldPrice: "Rs.4,750",
      reviews: "9 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-05_fd2b0c5a-5471-4abc-a447-a2adde441774_785x.png?v=1738316345",
      category: "Beauty Health"
    },
    {
      id: 4,
      name: "Biotin Hair Strengthening Duo (Get Free...",
      price: "Rs.1,850",
      oldPrice: "Rs.2,740",
      reviews: "123 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/biotin_bundle_aae8d8ac-83f6-4e2e-baa4-140aedc6dcde_785x.png?v=1761720765",
      category: "Beauty Health"
    },
    {
      id: 5,
      name: "Metadetox - Weight Management Bundle",
      price: "Rs.4,380",
      oldPrice: "Rs.6,570",
      reviews: "323 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-10_785x.png?v=1738329124",
      category: "Weight Management"
    },
    {
      id: 6,
      name: "Buy 2 Collagix & Get 1 Collagix Free",
      price: "Rs.2,900",
      oldPrice: "Rs.4,350",
      reviews: "12 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/Collagix_Webiste_Mockup_jpg_1880x.jpg?v=1780744784",
      category: "Women's Health"
    },
    {
      id: 7,
      name: "Wedding Glow Bundle",
      price: "Rs.4,190",
      oldPrice: "Rs.5,590",
      reviews: "42 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/bundle_940x.png?v=1789130901",
      category: "Beauty Health"
    },
    {
      id: 8,
      name: "Buy 2 Shampoo Get 1 Free",
      price: "Rs.1,980",
      oldPrice: "Rs.2,970",
      reviews: "15 reviews",
      img: "https://herbiotics.com.pk/cdn/shop/files/ShampooOfferWebCreative1_jpg_1880x.jpg?v=1794059793",
      category: "Beauty Health"
    }
  ];

  const filteredProducts = selectedCategory === 'All' || selectedCategory === 'All Products'
    ? saleProducts 
    : saleProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-white pb-16">
      
      {/* 1. Top Purple Banner Image */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-[#e8e2eb] aspect-[21/9] sm:aspect-[3.2/1] flex items-center relative">
          <img 
            src="https://herbiotics.com.pk/cdn/shop/collections/Discount_Offers_1920x.jpg?v=1738125735" 
            alt="Discounts & Offers Sale Banner" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Page Title */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 pt-6 pb-2">
        <h1 className="text-xl font-bold uppercase tracking-[0.15em] text-gray-900">
          SALE
        </h1>
      </div>

      {/* 3. Main Layout with Sidebar & Products Grid */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-6 flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Categories Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-6 bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" /> Categories
            </h3>
            <ul className="space-y-2 text-xs text-gray-600 font-medium">
              {categories.map((cat, idx) => {
                const isActive = selectedCategory === cat;
                return (
                  <li key={idx}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left py-1.5 px-2 rounded-lg transition-colors ${
                        isActive ? 'bg-[#1a382b] text-white font-bold' : 'hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Products Section */}
        <div className="flex-1 w-full">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-gray-200 gap-4 mb-6">
            <span className="text-xs text-gray-500">Showing {filteredProducts.length} discounted bundle offers</span>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-gray-500">Sort by:</span>
              <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 outline-none font-bold text-gray-800">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden relative">
                    <span className="absolute top-2 left-2 bg-rose-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Sale
                    </span>
                    <img 
                      src={prod.img} 
                      alt={prod.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h4 className="font-bold text-xs text-gray-800 line-clamp-2 group-hover:text-emerald-800 mb-2 min-h-[32px]">
                    {prod.name}
                  </h4>

                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500">{prod.reviews}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-bold text-sm text-rose-600">{prod.price}</span>
                    {prod.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">{prod.oldPrice}</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons: View Product & Cart */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t">
                  <button 
                    onClick={() => setSelectedProduct(prod)}
                    className="bg-white border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-[11px] font-bold uppercase py-2.5 rounded-xl transition-all text-center"
                  >
                    View Product
                  </button>
                  <button 
                    onClick={() => onAddToCart(prod)}
                    className="bg-[#1a382b] hover:bg-emerald-900 text-white text-[11px] font-bold uppercase py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" /> Buy
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={onAddToCart}
      />

    </div>
  );
}