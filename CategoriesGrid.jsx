import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CategoriesGrid({ onSelectCategory }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedCat, setSelectedCat] = useState("Fertility Support");

  // Exact 3D High-Res Visual Assets matching original Shopify storefront
  const categories = [
    { 
      name: "Women's Health", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-01.jpg?v=1786964452" 
    },
    { 
      name: "Beauty Health", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-02.jpg?v=1786964452" 
    },
    { 
      name: "Weight Management", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-03.jpg?v=1786964452" 
    },
    { 
      name: "Kids Health", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-04.jpg?v=1786964452" 
    },
    { 
      name: "Bones & Joints", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-05.jpg?v=1786964452" 
    },
    { 
      name: "Diabetic Support", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/OxiproCreamFeatureImage_785x.png?v=1765169665" 
    },
    { 
      name: "Men's Health", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-07.jpg?v=1786964452" 
    },
    { 
      name: "Heart Health", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-08.jpg?v=1786964452" 
    },
    { 
      name: "Immune Health", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-09.jpg?v=1786964452" 
    },
    { 
      name: "Fertility Support", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-10.jpg?v=1786964452" 
    },
    { 
      name: "Vitamins & Minerals", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-11.jpg?v=1786964452" 
    },
    { 
      name: "Brain & Vision", 
      icon: "https://herbiotics.com.pk/cdn/shop/files/category_icons-12.jpg?v=1786964452" 
    }
  ];

  // Pehle 6 dikhenge, 'VIEW MORE' press karne par baaki 6 b expand ho jayenge
  const displayedCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="w-full bg-white py-12">
      {/* Strict Centered Box Container with Side Spacing Gaps */}
      <section className="max-w-[1140px] mx-auto px-6 sm:px-8">
        
        {/* Section Heading & Underline */}
        <div className="text-center mb-10">
          <h2 className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-700">
            OUR SUPPLEMENT CATEGORIES
          </h2>
          <div className="w-12 h-[2.5px] bg-[#1a382b] mx-auto mt-2" />
        </div>

        {/* 6-Column Grid Layout with Original Card Spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {displayedCategories.map((cat, index) => {
            const isSelected = selectedCat === cat.name;
            return (
              <div 
                key={index}
                onClick={() => {
                  setSelectedCat(cat.name);
                  if (onSelectCategory) onSelectCategory(cat.name);
                }}
                className={`bg-white p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col items-center justify-between min-h-[140px] group select-none ${
                  isSelected 
                    ? 'border-[#1a382b] ring-1 ring-[#1a382b] shadow-sm' 
                    : 'border-gray-100 hover:border-emerald-600 hover:shadow-xs'
                }`}
              >
                {/* 3D Rendered Icon Graphics */}
                <div className="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110">
                  <img 
                    src={cat.icon} 
                    alt={cat.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Category Title Text */}
                <h4 className="font-bold text-[12px] text-gray-800 text-center leading-snug group-hover:text-[#1a382b]">
                  {cat.name}
                </h4>
              </div>
            );
          })}
        </div>

        {/* View More / View Less Trigger Button */}
        <div className="text-center mt-10">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="bg-[#212529] hover:bg-black text-white text-[11px] font-bold uppercase tracking-[0.18em] px-8 py-3.5 rounded-lg shadow-sm transition-all inline-flex items-center gap-2"
          >
            {showAll ? 'VIEW LESS' : 'VIEW MORE'}
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

      </section>
    </div>
  );
}