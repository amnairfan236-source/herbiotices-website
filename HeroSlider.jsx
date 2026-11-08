import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  // 9 Authentic Herbiotics Banner Images where text is embedded inside the pictures
  const slides = [
    "https://herbiotics.com.pk/cdn/shop/files/bcollagen_win_big_banner_02_1_5x_jpg.jpg?v=1793447439&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/Maxone_8074e6c5-b4d6-4bb9-8e97-3f631c1f4f55.png?v=1793595212&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/Glutavim_Web.png?v=1790772499&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/Magnesium_shots_Web_main.png?v=1790770803&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/Glutathione_25__Web.png?v=1792406325&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/WEB_Banner_2_-_Copy.png?v=1789131777&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/Multilife_Offer_Banner_v02_Desktop_jpg.jpg?v=1783170779&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/Creatine_powder_web_desktop_1.5x.jpg_2.jpg?v=1788242405&width=2000",
    "https://herbiotics.com.pk/cdn/shop/files/banner_oxicut_jpg.jpg?v=1786009654&width=2000"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-4 group">
      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-[21/9] sm:aspect-[2.5/1]">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((imgUrl, index) => (
            <div key={index} className="w-full h-full shrink-0 flex items-center justify-center bg-[#f8f5f0]">
              <img 
                src={imgUrl} 
                alt={`Herbiotics Banner ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left / Right Arrow Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Dot Pagination */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/20 px-3 py-1 rounded-full backdrop-blur-xs">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}