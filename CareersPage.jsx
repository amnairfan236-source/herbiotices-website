import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, X, CheckCircle2 } from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [applicantData, setApplicantData] = useState({ name: '', email: '', phone: '', cv: '' });

  const jobs = [
    {
      id: 1,
      title: "Video Editor",
      experience: "3 Year Minimum Experience",
      type: "Full Time",
      location: "Faisalabad",
      desc: "We are looking for a creative Video Editor to produce engaging short & long-form video content for social media and advertising campaigns."
    },
    {
      id: 2,
      title: "Tiktok Ads Expert",
      experience: "2-3 Years",
      type: "Full Time",
      location: "Faisalabad",
      desc: "We are looking for a TikTok Ads Expert who knows how to plan, execute and optimize TikTok ad campaigns with strong ROI results."
    },
    {
      id: 3,
      title: "Export Manager",
      experience: "2-3 Years",
      type: "Full Time",
      location: "Faisalabad",
      desc: "Herbiotics Health Care requires an Export Manager to manage international sales, export documentation, logistics, and compliance in the nutraceutical sector."
    }
  ];

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setSelectedJob(null);
      setApplicantData({ name: '', email: '', phone: '', cv: '' });
      alert('Your job application has been submitted successfully!');
    }, 2000);
  };

  return (
    <div className="w-full bg-white pb-16 font-sans">
      
      {/* 1. Top Banner Image */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-[#fcf8f2] aspect-[21/9] sm:aspect-[3.2/1] flex items-center relative">
          <img 
            src="https://herbiotics.com.pk/cdn/shop/files/Career_Opportunity_Top_Banner.jpg?v=1737786901&width=1880" 
            alt="Careers Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent flex flex-col justify-center px-8 sm:px-16 space-y-3 max-w-2xl">
            <h1 className="text-xl sm:text-3xl font-bold font-serif text-[#b45309] tracking-tight">
            </h1>
            <p className="text-xs sm:text-sm font-bold text-gray-800 uppercase tracking-wide leading-relaxed">
            </p>
          </div>
        </div>
      </div>

      {/* 2. Career Opportunities Intro & Openings */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-10 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-gray-900 tracking-tight">
            CAREER OPPORTUNITIES
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Join Herbiotics, a top healthcare brand in Pakistan, and embark on an exciting career journey. We embrace innovative thinkers with a proactive mindset, driven by a desire to make an impact. If you seek challenging roles with endless opportunities, we invite you to explore with us.
          </p>
        </div>

        <div className="text-center pt-4">
          <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-[#b45309]">
            WE ARE HIRING
          </h3>
          <div className="w-12 h-0.5 bg-[#b45309] mx-auto mt-2" />
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="bg-[#fcfaf7] p-6 rounded-3xl border border-[#f3ead8] hover:border-[#b45309] shadow-xs flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <h4 className="font-bold text-base text-[#b45309] font-serif group-hover:underline">
                  {job.title}
                </h4>

                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#b45309] shrink-0" />
                    <span>{job.location}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed pt-2">
                  {job.desc}
                </p>
              </div>

              <button 
                onClick={() => setSelectedJob(job)}
                className="w-full bg-[#b45309] hover:bg-[#92400e] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* 3. Bottom Hiring Process Banner */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 pt-12">
        <div className="bg-[#fcf8f2] border border-[#f3ead8] rounded-3xl p-8 text-center space-y-8 shadow-xs">
          <h3 className="text-xl font-bold font-serif text-[#b45309] tracking-tight">
            HIRING PROCESS!
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#b45309] text-white font-bold text-xs flex items-center justify-center">01</span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">CV REVIEW</h4>
              <p className="text-[11px] text-gray-500">Initial screening of candidate profiles and resumes.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#b45309] text-white font-bold text-xs flex items-center justify-center">02</span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">CALL</h4>
              <p className="text-[11px] text-gray-500">Introductory telephonic interview to discuss experience.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#b45309] text-white font-bold text-xs flex items-center justify-center">03</span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">INTERVIEW</h4>
              <p className="text-[11px] text-gray-500">In-person or online technical discussion with department heads.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#b45309] text-white font-bold text-xs flex items-center justify-center">04</span>
              <h4 className="font-bold text-xs uppercase tracking-wider text-gray-900">INFORM</h4>
              <p className="text-[11px] text-gray-500">Final job offer announcement and onboarding.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Job Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in">
            <button 
              onClick={() => setSelectedJob(null)} 
              className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded uppercase">Job Application</span>
              <h3 className="text-xl font-bold font-serif text-[#b45309] mt-1">{selectedJob.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">Faisalabad / Full Time</p>
            </div>

            {applied ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-bold text-lg text-gray-900">Application Submitted!</h4>
                <p className="text-xs text-gray-500">We will review your CV and get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Amna Irfan"
                    value={applicantData.name}
                    onChange={(e) => setApplicantData({...applicantData, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#b45309]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@example.com"
                    value={applicantData.email}
                    onChange={(e) => setApplicantData({...applicantData, email: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#b45309]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="03001234567"
                    value={applicantData.phone}
                    onChange={(e) => setApplicantData({...applicantData, phone: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#b45309]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Upload Resume / CV Link</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Paste Google Drive / LinkedIn CV link"
                    value={applicantData.cv}
                    onChange={(e) => setApplicantData({...applicantData, cv: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-[#b45309]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#b45309] hover:bg-[#92400e] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all mt-2 cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}