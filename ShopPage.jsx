import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

export default function ShopPage({ onAddToCart }) {
  // All products items list for catalog view
  const catalogProducts = [
    { id: 1, name: "B Collagen Powder", price: "Rs.4,950", reviews: "687", img: "https://herbiotics.com.pk/cdn/shop/files/WhatsApp_Image_2026-11-05_at_3.50.25_PM_1570x.jpg?v=1793876152" },
    { id: 2, name: "Magnesium Glycinate (500mg)", price: "Rs.2,490", reviews: "909", img: "https://herbiotics.com.pk/cdn/shop/files/Magnesium_glycinate_1_785x.png?v=1744882674" },
    { id: 3, name: "Vitamin D3 K2", price: "Rs.2,490", reviews: "396", img: "https://herbiotics.com.pk/cdn/shop/files/vitamind3k2_785x.png?v=1756536400" },
    { id: 4, name: "Oxicut - Weight Management", price: "Rs.2,090", reviews: "19", img: "https://herbiotics.com.pk/cdn/shop/files/Biotin_5000_818d227a-f97d-48b2-bbee-867d3302f78a_785x.png?v=1738326312" },
    { id: 5, name: "Multilife Women Multivitamin", price: "Rs.1,350", oldPrice: "Rs.1,800", reviews: "221", img: "https://herbiotics.com.pk/cdn/shop/files/Somnirol_76a143b8-4375-4fac-9e49-33de3977ebe9_785x.png?v=1738423058" },
    { id: 6, name: "Biotin Hair Strengthening Shampoo", price: "Rs.1,850", oldPrice: "Rs.2,740", reviews: "123", img: "https://herbiotics.com.pk/cdn/shop/files/Somnirol_76a143b8-4375-4fac-9e49-33de3977ebe9_785x.png?v=1738423058" },
    { id: 7, name: "Magnesium L-Threonate", price: "Rs.2,490", reviews: "80", img: "https://herbiotics.com.pk/cdn/shop/files/magnesium_l_threonate_1_785x.png?v=1772085256" },
    { id: 8, name: "Creatine Monohydrate Powder", price: "Rs.5,950", reviews: "23", img: "https://herbiotics.com.pk/cdn/shop/files/Arsio_62aa0a2d-46de-4874-b500-832e4a8aadc9_785x.png?v=1738404361" }
  ];

  return (
    <div className="w-full bg-white pb-16">
      
      {/* 1. Top Banner Section matching screenshot */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-[#f2f0ed] aspect-[21/9] sm:aspect-[2.8/1] flex items-center relative">
          <img 
            src="https://herbiotics.com.pk/cdn/shop/collections/All_Products_Banner_Desktop_1920x.png?v=1739254390" 
            alt="Pakistan's No.1 Vitamin Brand" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Catalog Title & Description */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-8">
        <div className="space-y-3">
          <h1 className="text-xl font-bold uppercase tracking-[0.15em] text-gray-900">
            ALL PRODUCTS
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-4xl">
            At Herbiotics, we’re thrilled to bring you High-Quality Health Care Products with the goodness of nature and the power of scientific excellence where your health and satisfaction are our center stage. All premium products for a healthy life are designed to support your healthier and more balanced life. Step into the world of Premium Multivitamins where we redefine your path for healthier and stronger you.
          </p>
        </div>

        <div className="w-full h-px bg-gray-200 my-8" />

        {/* 3. Grid of Catalog Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {catalogProducts.map((prod) => (
            <div 
              key={prod.id}
              className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden">
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

                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">{prod.reviews} reviews</span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-gray-900">{prod.price}</span>
                    {prod.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">{prod.oldPrice}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => onAddToCart(prod)}
                    className="bg-[#1a382b] hover:bg-emerald-900 text-white p-2 rounded-xl transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}