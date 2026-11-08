import React, { useState } from 'react';
import { X, Star, ShoppingCart, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-center border border-gray-100">
            <img src={product.img} alt={product.name} className="max-h-72 object-contain" />
          </div>

          {/* Product Info & Details */}
          <div className="space-y-4">
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              In Stock & Original
            </span>
            <h2 className="text-2xl font-bold font-serif text-[#1a382b]">{product.name}</h2>
            
            {/* Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">{product.reviews} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">{product.price}</span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
              )}
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              Designed to support active health, immunity, and daily wellness. Enriched with premium clinically-tested ingredients to ensure maximum absorption and results.
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold"
                >-</button>
                <span className="px-4 text-sm font-bold">{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold"
                >+</button>
              </div>

              <button 
                onClick={() => {
                  onAddToCart({ ...product, quantity: qty });
                  onClose();
                }}
                className="flex-1 bg-[#1a382b] hover:bg-emerald-900 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t text-[11px] text-gray-500">
              <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-emerald-700" /> Free Nationwide Delivery</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-700" /> 100% Original Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}