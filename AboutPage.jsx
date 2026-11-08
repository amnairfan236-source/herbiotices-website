import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-white pb-20 font-sans">
      
      {/* 1. Header & Intro Section */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-12 text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#1a382b] tracking-tight">
          ABOUT HERBIOTICS
        </h1>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          Discover The Pakistan's Number 1 Vitamin Brand
        </p>
        <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed pt-2">
          Staying ahead of your nutrition is so important, and that's why Herbiotics has got an extensive portfolio of vitamins, minerals, and dietary supplements to help cover all your nutritional needs today, tomorrow, and way past. Every age. Every lifestyle we help people be at their best by delivering easy and effective nutritional support[cite: 23].
        </p>
      </div>

      {/* 2. Certified By Many Organizations Section */}
      <div className="bg-gray-50/50 py-12 border-y border-gray-100 mb-16">
        <div className="max-w-[1140px] mx-auto px-6 sm:px-8 text-center space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
              CERTIFIED BY MANY ORGANIZATIONS
            </h2>
            <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
              FOR THE QUALITY OF OUR PRODUCTS, SERVICES & MANAGEMENT SYSTEM
            </p>
          </div>

          {/* Certification Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-center pt-4">
            {[
              { name: "Dietary Supplement", badge: "🌿 Dietary Supplement" },
              { name: "Halal Certified", badge: "☪ Halal Certified" },
              { name: "ISO 9001:2015", badge: "🛡 ISO 9001:2015" },
              { name: "Gluten Free", badge: "🌾 Gluten Free" },
              { name: "FDA Registered", badge: "🇺🇸 FDA Facility" },
              { name: "Brand of the Year", badge: "🏆 Brand of the Year" },
              { name: "HACCP", badge: "✔ HACCP Certified" },
              { name: "DRAP Registered", badge: "💊 DRAP Approved" }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col items-center justify-center text-center aspect-square group hover:border-emerald-600 transition-all">
                <span className="text-xs font-bold text-gray-800 group-hover:text-emerald-800">{cert.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Safety & Plant Facility Section */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 space-y-12">
        <p className="text-xs sm:text-sm text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
          The safety and health of our customers are truly important to us, which is why we get all important certifications to ensure quality control & regulatory compliance testing for our dietary supplements. Our Halal-certified products are made using ingredients that are permissible under Muslim dietary law and processed in a hygienic manner[cite: 24].
        </p>

        {/* Building & Promise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-md bg-gray-100 aspect-[16/10]">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Herbiotics Manufacturing Facility" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-[#1a382b]">HERBIOTICS PROMISE TO YOU</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Herbiotics is passionate about our commitment to your good health and promise to provide the highest quality dietary supplements and natural products at the best possible price[cite: 24].
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold font-serif text-[#1a382b]">WHY HERBIOTICS SUPPLEMENTS</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our customer’s trust is built on our efforts to create, formulate and manufacture these products to the high quality standards. Our people in quality assurance, manufacturing, packaging, distribution and facility management are all required to meet the standards for current Good Manufacturing Practices (cGMPs)[cite: 24].
              </p>
            </div>
          </div>
        </div>

        {/* 4. Three Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4">
            <div className="w-full h-44 rounded-2xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" alt="Quality Oriented Manufacturing" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-sm text-[#1a382b] uppercase">QUALITY ORIENTED MANUFACTURING</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              As part of our commitment to quality. We only use ingredients from suppliers that meet our stringent Quality Assurance Standards, as well as GMP supplement quality standards[cite: 25].
            </p>
          </div>

          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4">
            <div className="w-full h-44 rounded-2xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600" alt="Create and Curate" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-sm text-[#1a382b] uppercase">WE CREATE & CURATE ONLY THE BEST</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              We believe that health is the key to accessing a better version of ourselves. That's why we start with quality ingredients & continuously update our formulas to reflect the latest science[cite: 25].
            </p>
          </div>

          <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 space-y-4">
            <div className="w-full h-44 rounded-2xl overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" alt="Empowering Healthy Living" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-sm text-[#1a382b] uppercase">EMPOWERING HEALTHY LIVING THROUGH INNOVATION</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              At Herbiotics, we create thoughtfully designed products to fit your lifestyle needs at Every Stage & Every Age We help everyone be at their best with easy yet effective nutritional support[cite: 25, 26].
            </p>
          </div>
        </div>

        {/* 5. Quality Assurance & Control Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-gray-100">
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-serif text-[#1a382b]">OUR QUALITY ASSURANCE & QUALITY CONTROL</h3>
            
            <div className="space-y-4 text-xs text-gray-700">
              <div className="space-y-1">
                <h5 className="font-bold text-gray-900">01. EMPOWERING HEALTHY LIVING THROUGH INNOVATION</h5>
                <p className="text-gray-600 leading-relaxed">At Herbiotics, we create thoughtfully designed products to fit your lifestyle needs at Every Stage & Every Age We help everyone be at their best with easy yet effective nutritional support[cite: 26].</p>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-gray-900">02. QUALITY ORIENTED MANUFACTURING</h5>
                <p className="text-gray-600 leading-relaxed">As part of our commitment to quality. We only use ingredients from suppliers that meet our stringent Quality Assurance Standards, as well as GMP supplement quality standards[cite: 26].</p>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-gray-900">03. WE CREATE & CURATE ONLY THE BEST</h5>
                <p className="text-gray-600 leading-relaxed">We believe that health is the key to accessing a better version of ourselves. That's why we start with quality ingredients & continuously update our formulas to reflect the latest science[cite: 26].</p>
              </div>
            </div>

            <div className="pt-2 font-bold text-xs text-emerald-800">
              WE MANUFACTURE TABLETS, CAPSULES, SYRUPS, CHEWABLES, POWDERS, CREAM, OINTMENTS, OIL & DROPS[cite: 26].
            </div>
          </div>

          {/* Laboratory Collage Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden shadow-xs h-40">
              <img src="https://cdn.shopify.com/s/files/1/0574/2513/3764/files/Grid-Image.png?v=1709107303" alt="Lab 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xs h-40">
              <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500" alt="Lab 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xs h-40">
              <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=500" alt="Lab 3" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xs h-40">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=500" alt="Lab 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}