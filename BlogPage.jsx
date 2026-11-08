import React, { useState } from 'react';
import { Calendar, X, BookOpen, ChevronRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const allArticles = [
    {
      id: 1,
      title: "What Is Glutathione And How Does It Work?",
      date: "01 October 2026",
      excerpt: "Glutathione is a natural antioxidant your body makes to help protect its cells from damage. It is found in nearly all the body's cells and plays an important role in normal cell function....",
      fullContent: "Glutathione is often called the master antioxidant because it is found in every cell of the human body. It consists of three amino acids: glutamine, glycine, and cysteine. Its primary functions include neutralizing free radicals, supporting immune function, and assisting with liver detoxification. Supplementing with quality glutathione helps maintain radiant skin health, cellular energy, and overall vitality.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_f9c557d1-4906-44cb-9d01-dbc7f5e37e54_870x.png?v=1790417308",
      featured: true
    },
    {
      id: 2,
      title: "GLP-1 / Ozempic Alternatives: Can Natural Supplements Help?",
      date: "21 September 2026",
      excerpt: "No dietary supplement has been shown to be effective as an alternative to prescription GLP-1 medications like semaglutide. GLP-1 receptor agonists are pharmacological treatments that target specific metabolic pathways. Clinical trials demonstrate meaningful...",
      fullContent: "While prescription medications target metabolic pathways directly, natural dietary supplements and herbal extracts can support healthy blood sugar levels, appetite regulation, and natural metabolic function. Combining fiber-rich ingredients, berberine, and balanced proteins helps promote natural satiety as part of a healthy wellness routine.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_7148b854-459a-4825-8a9b-0d05aaf08ab0_870x.png?v=1790678522"
    },
    {
      id: 3,
      title: "Best Prenatal Vitamins: Trimester-By-Trimester Guide",
      date: "17 September 2026",
      excerpt: "Preferably before pregnancy. Pregnancy doesn't start nutritionally with the first positive test. Early fetal development proceeds rapidly. ACOG advises taking a prenatal vitamin with at least 400 mcg of folic acid daily starting...",
      fullContent: "Nutrition before and during pregnancy is crucial for both mother and child. A quality prenatal vitamin should include adequate folic acid, iron, calcium, and vitamin D3. This trimester-by-trimester guide outlines how proper supplementation supports neural tube development, bone strength, and maternal energy throughout all stages of pregnancy.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_810cc141-d3c6-4162-a787-8a33b5f64a6c_870x.png?v=1790421945"
    },
    {
      id: 4,
      title: "Prediabetes: Early Signs & What To Do",
      date: "17 September 2026",
      excerpt: "Prediabetes means your blood glucose levels are higher than normal but not high enough to be diagnosed as diabetes. What you need to know is that prediabetes often has no...",
      fullContent: "Prediabetes is an important warning sign that requires lifestyle adjustments. Incorporating regular physical activity, reducing sugary foods, and introducing targeted blood sugar support supplements can significantly help restore healthy glucose levels.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_e57111a9-087b-4352-94e9-18d2e35d35db_870x.png?v=1790053356"
    },
    {
      id: 5,
      title: "Sleep Stack: Magnesium + Ashwagandha",
      date: "17 September 2026",
      excerpt: "Magnesium supports normal nerve and muscle function and ashwagandha may support stress and some aspects of sleep. They may be a nice addition to a healthy nighttime routine, but there...",
      fullContent: "Quality sleep is fundamental to physical and mental recovery. Combining magnesium glycinate or L-threonate with organic ashwagandha extract helps calm the nervous system, lower cortisol levels, and promote deep, uninterrupted sleep cycles.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_e57111a9-087b-4352-94e9-18d2e35d35db_870x.png?v=1790053356"
    },
    {
      id: 6,
      title: "PCOS: Diet, Symptoms & Supplements That Actually Help",
      date: "16 September 2026",
      excerpt: "PCOS impacts hormones, menstrual periods, ovulation and metabolic health, however symptoms might fluctuate widely from woman to woman. Some women may have irregular...",
      fullContent: "Polycystic Ovary Syndrome (PCOS) management requires a holistic approach focusing on balanced nutrition, insulin regulation, and targeted herbal/vitamin supplementation such as Inositol, Omega-3s, and Vitamin D.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_964896b8-74ad-4196-8531-b16fb2e84d36_870x.png?v=1789629821"
    },
    {
      id: 7,
      title: "What Is Creatine Monohydrate? Benefits & How It Works",
      date: "16 September 2026",
      excerpt: "Creatine monohydrate is a natural substance that helps muscles replenish ATP during high-intensity exercise. It's especially useful for strength training, sprinting and other activities that need repeated high-intensity efforts. The...",
      fullContent: "Creatine monohydrate is one of the most thoroughly researched sports nutrition supplements in the world. It effectively enhances cellular energy production, increases muscle strength, and supports cognitive health during rigorous physical performance.",
      img: "https://herbiotics.com.pk/cdn/shop/articles/Outer_13c94ff9-b19d-4a90-af74-3082ca3752e8_870x.png?v=1790051978"
    }
  ];

  const categoriesList = [
    "All Products", "Beauty Support", "Best Selling Products", "Blood Sugar Support",
    "Bone & Joint Health", "Bones Care", "Exclusive Deals", "Eye & Brain Health",
    "Father's Day Wellness", "FERTILITY SUPPORT", "Heart Health", "Immune Health",
    "Kids Health", "Men's Health", "Most Selling Products", "New Products",
    "Other Products", "Sale", "Shop By Concerns", "Strength Series"
  ];

  return (
    <div className="w-full bg-white pb-16 font-sans">
      
      {/* 1. Top Banner Image Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-[#9b7fb2] aspect-[21/9] sm:aspect-[3.2/1] flex items-center relative">
          <img 
            src="https://herbiotics.com.pk/cdn/shop/articles/Outer_cd30295f-8a08-4769-b91b-77a80a2649c1_870x.png?v=1791629662" 
            alt="Wellness Blog & News Banner" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a382b]/80 to-transparent flex flex-col justify-center px-8 sm:px-16 text-white space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight">WELLNESS BLOG & NEWS</h1>
            <p className="text-xs sm:text-sm font-medium text-emerald-100 uppercase tracking-widest">
              STAY INFORMED WITH EXPERT HEALTH INSIGHTS
            </p>
          </div>
        </div>
      </div>

      {/* 2. Top Header & Breadcrumb */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-6 border-b border-gray-100">
        <h2 className="text-2xl font-bold font-serif text-gray-900 tracking-tight">NEWS</h2>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <span>Home</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 font-bold">News</span>
        </div>
      </div>

      {/* 3. Main Layout: Left Feed & Right Sidebar */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-10 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Articles List Feed */}
        <div className="flex-1 w-full space-y-10">
          {allArticles.map((article) => (
            <div 
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer pb-10 border-b border-gray-100 space-y-3"
            >
              {/* Featured Top Header Tag & Title Preview */}
              {article.featured && (
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-4 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-[#d4a373]/20 text-[#a98467] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="text-xs font-bold text-gray-800">{article.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">{article.excerpt}</p>
                  <span className="text-[10px] text-gray-400 block pt-1">On {article.date} / 0 Comments</span>
                </div>
              )}

              {/* Main Article Title & Meta */}
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold font-serif text-gray-900 group-hover:text-emerald-800 transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>On {article.date}</span>
                  <span>/</span>
                  <span>0 Comments</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                  {article.excerpt}
                </p>
              </div>

              {/* Compact Thumbnail Image */}
              <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-gray-100 mt-4">
                <img 
                  src={article.img} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex items-center gap-2 pt-4 text-xs font-bold text-gray-700">
            <span className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center">1</span>
            <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center">2</button>
            <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center">3</button>
            <span>...</span>
            <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center">47</button>
            <button className="px-3 py-1 hover:text-emerald-800 uppercase tracking-wider cursor-pointer">NEXT</button>
          </div>
        </div>

        {/* Right Sidebar (Recent Articles & Categories) */}
        <div className="w-full lg:w-80 shrink-0 space-y-8 sticky top-6">
          
          {/* Recent Articles Box */}
          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4 shadow-xs">
            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900 pb-2 border-b">
              RECENT ARTICLES
            </h3>
            <ul className="space-y-4">
              {allArticles.slice(0, 5).map((art) => (
                <li key={art.id} onClick={() => setSelectedArticle(art)} className="cursor-pointer group">
                  <h4 className="text-xs font-bold text-gray-800 group-hover:text-emerald-800 line-clamp-2">
                    {art.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 mt-0.5 block">{art.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Box */}
          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4 shadow-xs">
            <h3 className="font-bold text-xs uppercase tracking-widest text-gray-900 pb-2 border-b">
              CATEGORIES
            </h3>
            <ul className="space-y-2 text-xs text-gray-600 font-medium max-h-72 overflow-y-auto pr-1">
              {categoriesList.map((cat, idx) => (
                <li key={idx}>
                  <button className="hover:text-emerald-800 hover:underline py-1 text-left w-full cursor-pointer">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedArticle(null)} 
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="w-full h-60 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img src={selectedArticle.img} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                <BookOpen className="w-4 h-4" /> Herbiotics Wellness Research
              </div>

              <h2 className="text-2xl font-bold font-serif text-[#1a382b]">{selectedArticle.title}</h2>
              <span className="text-xs text-gray-400 block">Published on {selectedArticle.date}</span>

              <p className="text-sm text-gray-700 leading-relaxed pt-2">
                {selectedArticle.fullContent}
              </p>

              <div className="pt-4 border-t flex justify-end">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#1a382b] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-emerald-900 transition-all cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}