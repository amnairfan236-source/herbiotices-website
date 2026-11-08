import React from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Certificates() {
  // Professional badge representation with icons and clean styling to avoid broken image links
  const certBadges = [
    { title: "ISO 9001:2015", subtitle: "Registered Quality", badgeColor: "border-blue-500 text-blue-700 bg-blue-50" },
    { title: "HACCP Certified", subtitle: "Food & Safety", badgeColor: "border-gray-800 text-gray-900 bg-gray-50" },
    { title: "Halal Authority", subtitle: "Certified & Approved", badgeColor: "border-emerald-600 text-emerald-800 bg-emerald-50" },
    { title: "Dubai Municipality", subtitle: "Compliant Standard", badgeColor: "border-indigo-600 text-indigo-800 bg-indigo-50" },
    { title: "GMP Certified", subtitle: "Good Manufacturing", badgeColor: "border-purple-600 text-purple-800 bg-purple-50" },
    { title: "Brand of the Year", subtitle: "2022 - 2025 Award", badgeColor: "border-amber-500 text-amber-800 bg-amber-50" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Centered container with proper side gaps/margins */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Left Dark Green Card */}
        <div className="bg-[#0e382b] text-white p-7 rounded-2xl w-full lg:w-80 shrink-0 shadow-md relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-emerald-700/30 rounded-full blur-xl pointer-events-none" />
          <h3 className="text-2xl font-bold font-serif tracking-wide text-white">Our Certificates</h3>
          <p className="text-xs text-emerald-300 font-medium mt-1">From Regulatory Authorities</p>
        </div>

        {/* Right Smooth Scrolling Badges Container */}
        <div className="flex-1 overflow-hidden relative w-full">
          <div className="flex items-center space-x-6 animate-marquee-infinite">
            {certBadges.concat(certBadges).map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center shrink-0 group cursor-pointer">
                <div className={`w-28 h-28 rounded-full flex flex-col items-center justify-center p-3 text-center border-2 ${cert.badgeColor} shadow-xs transition-transform duration-300 group-hover:scale-105`}>
                  <ShieldCheck className="w-5 h-5 mb-1 opacity-80" />
                  <span className="text-[11px] font-extrabold leading-tight">{cert.title}</span>
                  <span className="text-[9px] font-medium opacity-75 mt-0.5">{cert.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}