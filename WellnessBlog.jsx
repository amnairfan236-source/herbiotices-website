import React, { useState } from 'react';
import { X, Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function WellnessBlog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "WHAT IS GLUTATHIONE AND HOW DOES IT WORK?",
      excerpt: "Glutathione is a natural antioxidant your body makes to help protect its cells from damage. It is found in nearly all the body's cells and plays an important role in normal cell function....",
      fullContent: "Glutathione is often called the master antioxidant because it is found in every cell of the human body. It consists of three amino acids: glutamine, glycine, and cysteine. Its primary functions include neutralizing free radicals, supporting immune function, and assisting with liver detoxification. Supplementing with quality glutathione helps maintain radiant skin health, cellular energy, and overall vitality.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      date: "October 24, 2026"
    },
    {
      id: 2,
      title: "GLP-1 / OZEMPIC ALTERNATIVES: CAN NATURAL SUPPLEMENTS HELP?",
      excerpt: "No dietary supplement has been shown to be effective as an alternative to prescription GLP-1 medications like semaglutide. GLP-1 receptor agonists are pharmacological treatments that target specific metabolic pathways. Clinical trials demonstrate meaningful...",
      fullContent: "While prescription medications target metabolic pathways directly, natural dietary supplements and herbal extracts can support healthy blood sugar levels, appetite regulation, and natural metabolic function. Combining fiber-rich ingredients, berberine, and balanced proteins helps promote natural satiety as part of a healthy wellness routine.",
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600",
      date: "October 18, 2026"
    },
    {
      id: 3,
      title: "BEST PRENATAL VITAMINS: TRIMESTER-BY-TRIMESTER GUIDE",
      excerpt: "Preferably before pregnancy. Pregnancy doesn't start nutritionally with the first positive test. Early fetal development proceeds rapidly. ACOG advises taking a prenatal vitamin with at least 400 mcg of folic acid daily starting...",
      fullContent: "Nutrition before and during pregnancy is crucial for both mother and child. A quality prenatal vitamin should include adequate folic acid, iron, calcium, and vitamin D3. This trimester-by-trimester guide outlines how proper supplementation supports neural tube development, bone strength, and maternal energy throughout all stages of pregnancy.",
      img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
      date: "October 10, 2026"
    }
  ];

  return (
    <div className="w-full bg-white py-12">
      {/* Strict Centered Container with Side Gaps */}
      <section className="max-w-[1140px] mx-auto px-6 sm:px-8">
        
        {/* Section Heading & See More */}
        <div className="text-center mb-10">
          <h2 className="text-[13px] uppercase tracking-[0.2em] font-bold text-gray-700">
            WELLNESS BLOG
          </h2>
          <div className="w-12 h-[2.5px] bg-[#1a382b] mx-auto mt-2 mb-2" />
          <button className="text-xs font-bold text-emerald-800 hover:underline">
            See More
          </button>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Blog Image */}
                <div className="w-full h-52 bg-gray-100 overflow-hidden">
                  <img 
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="font-bold text-sm text-gray-900 leading-snug group-hover:text-emerald-800 font-serif">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Blog Article Detail Popup Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedBlog(null)} 
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="w-full h-60 rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <img src={selectedBlog.img} alt={selectedBlog.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-800 font-bold">
                <BookOpen className="w-4 h-4" /> Herbiotics Wellness Research
              </div>

              <h2 className="text-2xl font-bold font-serif text-[#1a382b]">{selectedBlog.title}</h2>
              <span className="text-xs text-gray-400 block">{selectedBlog.date}</span>

              <p className="text-sm text-gray-700 leading-relaxed pt-2">
                {selectedBlog.fullContent}
              </p>

              <div className="pt-4 border-t flex justify-end">
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="bg-[#1a382b] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl hover:bg-emerald-900 transition-all"
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