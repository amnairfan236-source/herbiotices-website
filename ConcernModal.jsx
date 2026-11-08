import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function ConcernModal({ isOpen, onClose, selectedConcern }) {
  if (!isOpen) return null;

  // Recommendations based on selected health concern
  const solutions = {
    "Skin | Hair | Nails": { title: "B Collagen & Biotin Range", desc: "For radiant glowing skin, thick hair growth, and strong nails.", product: "B Collagen Powder", price: "Rs.4,950" },
    "Weight Loss": { title: "Oxicut & Metabolism Boosters", desc: "Smart weight management solutions backed by clinical science.", product: "Oxicut Tablets", price: "Rs.2,490" },
    "Joint pain": { title: "Bone & Joint Support Range", desc: "Advanced formula for cartilage health and joint mobility.", product: "Magnesium Glycinate", price: "Rs.2,490" },
    "Insomnia": { title: "Relaxation & Sleep Support", desc: "Calm your mind and improve deep sleep quality naturally.", product: "Magnesium L-Threonate", price: "Rs.2,490" },
    "Weak Immunity": { title: "Immune Booster Supplements", desc: "High-potency vitamins to strengthen body defense mechanisms.", product: "Vitamin D3 + K2", price: "Rs.2,490" },
  };

  const currentSol = solutions[selectedConcern] || { 
    title: "General Wellness & Daily Vitality", 
    desc: "Balanced nutrition formulas designed for your overall health goals.", 
    product: "Multilife Multivitamins", 
    price: "Rs.1,800" 
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Targeted Health Goal: {selectedConcern || "General"}
          </span>
          <h2 className="text-2xl font-bold font-serif text-[#1a382b] mt-3">{currentSol.title}</h2>
          <p className="text-xs text-gray-500 mt-1">{currentSol.desc}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center justify-between mb-6">
          <div>
            <h4 className="font-bold text-sm text-gray-900">{currentSol.product}</h4>
            <span className="text-xs text-emerald-700 font-bold">{currentSol.price}</span>
          </div>
          <button 
            onClick={() => {
              alert(`Added ${currentSol.product} to cart!`);
              onClose();
            }}
            className="bg-[#1a382b] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-emerald-900 transition-all flex items-center gap-1.5"
          >
            Order Now <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="space-y-2 text-xs text-gray-600 border-t pt-4">
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> 100% Halal & Clinically Tested Ingredients</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-700" /> Recommended by leading healthcare professionals</div>
        </div>
      </div>
    </div>
  );
}