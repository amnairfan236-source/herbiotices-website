import React, { useState } from 'react';
import ConcernModal from './ConcernModal';

export default function HealthGoals() {
  const [selectedConcern, setSelectedConcern] = useState('Skin | Hair | Nails');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const concerns = [
    "Acidity", "Skin | Hair | Nails", "Insomnia", "Anxiety", "Joint pain",
    "Brain Function", "Energy Boost", "Hair growth", "Weak Immunity",
    "Weight Loss", "Workout", "Heart health", "Liver detox", "PCOS"
  ];

  const handleConcernClick = (concern) => {
    setSelectedConcern(concern);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-gray-50/50 py-12">
      {/* Strict Centered Box Container with Side Gaps */}
      <section className="max-w-[1140px] mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Collage Photos Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" 
                  alt="Woman smiling" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" 
                  alt="Man smiling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-emerald-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" 
                  alt="Happy person thumbs up" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" 
                  alt="Woman portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content & Interactive Concern Pills */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#1a382b] tracking-tight">
                Find the right supplements for your health goals
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
                Select your concern to explore the best solutions for your body's needs. We're here to support your journey to better health.
              </p>
            </div>

            {/* Concern Tags / Pills */}
            <div className="flex flex-wrap gap-2">
              {concerns.map((item, idx) => {
                const isSelected = selectedConcern === item;
                return (
                  <button
                    key={idx}
                    onClick={() => handleConcernClick(item)}
                    className={`text-xs font-semibold px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-[#1a382b] text-white shadow-sm' 
                        : 'bg-[#f0f2f5] text-gray-700 hover:bg-emerald-100 hover:text-emerald-900'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Know Your Concern Action Button */}
            <div className="pt-2">
              <button
                onClick={() => handleConcernClick(selectedConcern)}
                className="bg-[#212529] hover:bg-black text-white text-xs font-bold uppercase tracking-[0.15em] px-8 py-3.5 rounded-xl shadow-md transition-all"
              >
                Know Your Concern
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Concern Result Modal */}
      <ConcernModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedConcern={selectedConcern} 
      />
    </div>
  );
}