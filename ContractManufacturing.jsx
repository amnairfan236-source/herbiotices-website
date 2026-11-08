import React, { useState } from 'react';
import { CheckCircle2, Phone, Mail, ArrowRight, X } from 'lucide-react';

export default function ContractManufacturing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Thank you! Our business development team will contact you shortly.');
    }, 2000);
  };

  return (
    <div className="w-full bg-white pb-16">
      
      {/* 1. Top Purple Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-[#9b7fb2] aspect-[21/9] sm:aspect-[3.2/1] flex items-center relative">
          <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600" 
            alt="Contract Manufacturing Banner" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#816599]/90 to-transparent flex flex-col justify-center px-8 sm:px-16 text-white space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight">CONTRACT MANUFACTURING</h1>
            <p className="text-xs sm:text-sm font-medium text-purple-100 uppercase tracking-widest">
              ONE-STEP SOLUTION FOR NUTRACEUTICAL MANUFACTURING
            </p>
          </div>
        </div>
      </div>

      {/* 2. Overview & Solutions Provided */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-gray-900">CONTRACT MANUFACTURING</h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Herbiotics is a state-of-the-art Nutraceutical plant that ascertains consistency of cGMP and stringent quality standards. We are the First & Largest Nutraceutical Trading platform in Pakistan. We feel proud to Manufacture the products for the country's renowned firms from last 5 years. We excel in our ability to manufacture specialized Nutraceutical products[cite: 19].
          </p>
        </div>

        {/* Two Column Layout: Process & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-gray-50/50 p-8 sm:p-10 rounded-3xl border border-gray-100">
          
          {/* Left Graphic / Process Overview */}
          <div className="space-y-6">
            <h3 className="font-bold text-base text-[#1a382b] font-serif">Manufacturing Flow & Quality Assurance</h3>
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-700 font-medium">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">1</span>
                <span><strong>Research & Formulation:</strong> In-house scientific research and material evaluation.</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-700 font-medium">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">2</span>
                <span><strong>Testing & Laboratory:</strong> Fully functional in-house quality testing labs.</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-700 font-medium">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0">3</span>
                <span><strong>Production & Packing:</strong> Automated cGMP compliant filling and sealing lines.</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our customers experience seamless service, from product design, regulatory requirements, sourcing of materials to development, full functional in-house laboratory, manufacture, and distribution of finished dosage forms[cite: 20].
            </p>
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#9cd079] hover:bg-[#8bc367] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                Let's Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Solutions Bullet List */}
          <div className="space-y-4">
            <h3 className="font-bold text-base text-[#1a382b] font-serif">ONE-STEP NUTRACEUTICAL MANUFACTURING SOLUTIONS PROVIDED</h3>
            <p className="text-xs text-gray-500">It has state-of-the-art cGMP compliant manufacturing facilities with large capacities for manufacturing[cite: 19]:</p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
              {[
                "Nutraceutical Tablet Section",
                "Nutraceutical Oral Liquid section",
                "Nutraceutical Cream/Ointment/Lotion/Gel Section",
                "Nutraceutical Capsule",
                "Nutraceutical Oral Powder/Sachet",
                "Nutraceutical Lozenges",
                "Nutraceutical Sachet",
                "Nutraceutical Nutritional Supplement Powder",
                "Herbal Tablet",
                "Herbal Oral Liquid",
                "Herbal Powder",
                "Herbal Oil",
                "Herbal ARQ"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. We Are Offering Section (With Pictures) */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-gray-900">WE ARE OFFERING</h2>
            <div className="w-12 h-0.5 bg-[#1a382b] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="w-full h-48 bg-purple-50 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" 
                  alt="Customized Formulations" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-bold text-sm text-[#1a382b] uppercase">Customized Formulations</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We create tailored formulations to meet specific product needs, combining the right ingredients for safety and effectiveness. With expertise in local and international trends, we ensure your product stands out in the market[cite: 21].
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="w-full h-48 bg-purple-50 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600" 
                  alt="Customized Flavoring" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-bold text-sm text-[#1a382b] uppercase">Customized Flavoring</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Elevate your product with custom flavor profiles that captivate your audience. From natural to bold tastes, we develop flavors tailored to your brand[cite: 21].
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="w-full h-48 bg-purple-50 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" 
                  alt="Customized Packaging" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-bold text-sm text-[#1a382b] uppercase">Customized Packaging</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Our personalized packaging solutions blend creativity with functionality, ensuring your product stands out. From design concepts to material choices, we align packaging with your brand identity[cite: 21].
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Development Workflow Section (With Pictures) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="w-full h-48 bg-gray-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600" 
                alt="Concept Development" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="font-bold text-sm text-[#1a382b] uppercase">Concept Development</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We can help develop your product concept, identify target segments, review international product examples, and select suitable marketing channels[cite: 22].
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="w-full h-48 bg-gray-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600" 
                alt="Formulation Development" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="font-bold text-sm text-[#1a382b] uppercase">Formulation Development</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                After identifying a segment, we assist in selecting the right ingredients for a safe and effective formulation, referencing internationally recognized materials[cite: 22].
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="w-full h-48 bg-gray-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600" 
                alt="Ingredient Selection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 space-y-3">
              <h4 className="font-bold text-sm text-[#1a382b] uppercase">Ingredient Selection</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                A stable product needs carefully selected ingredients. Herbiotics Health Care leverages its knowledge of local and international suppliers[cite: 22].
              </p>
            </div>
          </div>

        </div>

        {/* 5. Our Quality Promise Banner */}
        <div className="mt-16 bg-[#1a382b] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <h3 className="text-2xl font-bold font-serif">OUR QUALITY PROMISE</h3>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Our dedication to quality, consistency, and scientific research has resulted in vitamins and nutritional supplements of unrivaled excellence. Our promise to you is to take every possible step to ensure the safety and efficacy of every product we produce[cite: 22].
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="mailto:business@herbiotics.com.pk" className="bg-white text-gray-900 text-xs font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-700" /> business@herbiotics.com.pk
            </a>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#9cd079] hover:bg-[#8bc367] text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer">
              Get Connected Now
            </button>
            <a href="tel:+923054440467" className="bg-white text-gray-900 text-xs font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" /> +92 305-4440467
            </a>
          </div>
        </div>

      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold font-serif text-[#1a382b]">Contract Manufacturing Inquiry</h3>
              <p className="text-xs text-gray-500 mt-1">Fill out your details and our team will get in touch with you.</p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-bold text-lg text-gray-900">Inquiry Submitted!</h4>
                <p className="text-xs text-gray-500">We have received your request.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Full Name / Company</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Amna Irfan"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="business@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="03001234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Project Details / Requirements</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Specify supplement type, formulation or volume..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-emerald-700"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1a382b] hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all mt-2 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}