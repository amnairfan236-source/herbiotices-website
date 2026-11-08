import React, { useState } from 'react';
import { Star, ShoppingCart, X, ShieldCheck, Truck } from 'lucide-react';

export default function LatestOffers({ onAddToCart }) {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [qty, setQty] = useState(1);

  const offers = [
    {
      id: 1,
      name: "Vitamin D3 + K2 10000 IU + Free Ostrich Fat Cream",
      price: "Rs.2,490",
      oldPrice: "Rs.4,480",
      reviews: "20",
      img: "https://herbiotics.com.pk/cdn/shop/files/combinedmockup_785x.webp?v=1792057968",
      desc: "High potency bone and immunity support bundle bundled with a complimentary soothing joint cream."
    },
    {
      id: 2,
      name: "Fair & Glow Bundle (2X Brighter Skin)",
      price: "Rs.2,990",
      oldPrice: "Rs.3,640",
      reviews: "289",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-01_1_785x.png?v=1738317111",
      desc: "Glutathione & Vitamin C synergy package designed for skin brightening, anti-aging, and radiant complexion."
    },
    {
      id: 3,
      name: "Daily Skin Care Bundle",
      price: "Rs.2,900",
      oldPrice: "Rs.4,750",
      reviews: "9",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-05_fd2b0c5a-5471-4abc-a447-a2adde441774_785x.png?v=1738316345",
      desc: "Complete collagen & biotin triple pack to nourish hair roots, strengthen nails, and repair skin elasticity."
    },
    {
      id: 4,
      name: "Biotin Hair Strengthening Duo",
      price: "Rs.1,850",
      oldPrice: "Rs.2,740",
      reviews: "123",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-05_fd2b0c5a-5471-4abc-a447-a2adde441774_785x.png?v=1738316345",
      desc: "Advanced biotin supplement combined with herbal anti-hairfall shampoo for maximum follicle nourishment."
    },
    {
      id: 5,
      name: "Metadetox - Weight Management",
      price: "Rs.4,380",
      oldPrice: "Rs.6,570",
      reviews: "323",
      img: "https://herbiotics.com.pk/cdn/shop/files/Offer-10_785x.png?v=1738329124",
      desc: "Triple bottle metabolic cleanse and fat-burning bundle formulated for sustainable weight management."
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      {/* Strict Centered Container with Side Gaps */}
      <section className="max-w-[1140px] mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-700">
            LATEST OFFERS & DISCOUNTS
          </h2>
          <div className="w-12 h-[2.5px] bg-[#1a382b] mx-auto mt-2" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {offers.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedOffer(item)}
              className="bg-white p-4 rounded-2xl border border-gray-100 hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="w-full h-44 bg-gray-50 rounded-xl flex items-center justify-center p-3 mb-4 overflow-hidden relative">
                <span className="absolute top-2 left-2 bg-[#d2758f] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Sale
                </span>
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="font-bold text-xs text-gray-800 line-clamp-2 group-hover:text-emerald-800 mb-1.5 min-h-[32px]">
                  {item.name}
                </h4>

                {/* Reviews */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500">{item.reviews} reviews</span>
                </div>

                {/* Discounted Prices */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-rose-600">{item.price}</span>
                  <span className="text-xs text-gray-400 line-through">{item.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Offer Detail Popup Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in">
            <button 
              onClick={() => setSelectedOffer(null)} 
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center border">
                <img src={selectedOffer.img} alt={selectedOffer.name} className="max-h-64 object-contain" />
              </div>

              <div className="space-y-4">
                <span className="text-[10px] bg-rose-100 text-rose-800 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Limited Time Bundle Offer
                </span>
                <h3 className="text-xl font-bold font-serif text-[#1a382b]">{selectedOffer.name}</h3>
                
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-rose-600">{selectedOffer.price}</span>
                  <span className="text-sm text-gray-400 line-through">{selectedOffer.oldPrice}</span>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {selectedOffer.desc}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 bg-gray-50 font-bold">-</button>
                    <span className="px-4 text-sm font-bold">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="px-3 py-2 bg-gray-50 font-bold">+</button>
                  </div>

                  <button 
                    onClick={() => {
                      onAddToCart({ ...selectedOffer, quantity: qty });
                      setSelectedOffer(null);
                    }}
                    className="flex-1 bg-[#1a382b] hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add Bundle
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t text-[11px] text-gray-500">
                  <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-emerald-700" /> Free Shipping</div>
                  <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-700" /> Original Bundle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}