import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: '', comment: '' });
      alert('Your message has been successfully sent to Herbiotics Support!');
    }, 2000);
  };

  return (
    <div className="w-full bg-white pb-16 font-sans">
      
      {/* 1. Top Blue Banner */}
      <div className="w-full max-w-7xl mx-auto px-4 py-4">
        <div className="w-full rounded-2xl overflow-hidden shadow-sm bg-[#3b82f6] aspect-[21/9] sm:aspect-[3.2/1] flex items-center relative">
          <img 
            src="https://herbiotics.com.pk/cdn/shop/files/Contact_Us.jpg?v=1737620079&width=2000" 
            alt="Contact Us Banner" 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb]/95 to-transparent flex flex-col justify-center px-8 sm:px-16 text-white space-y-2">
            <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight"></h1>
            <p className="text-xs sm:text-sm font-medium text-blue-100 uppercase tracking-widest">
            </p>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid (Form & Contact Info) */}
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Form (2 Columns span) */}
          <div className="lg:col-span-2 space-y-6 bg-gray-50/50 p-8 sm:p-10 rounded-3xl border border-gray-100">
            <div>
              <h2 className="text-xl font-bold font-serif text-gray-900 mb-1">CONTACT US</h2>
              <p className="text-xs text-gray-600">Have a question or comment?</p>
              <p className="text-xs text-gray-600">Use the form below to send us a message</p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="text-xl font-bold text-gray-900">Message Sent Successfully!</h3>
                <p className="text-xs text-gray-500">Thank you for reaching out. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 shadow-2xs"
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
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Email <span className="text-rose-500">*</span></label>
                  <input 
                    type="email" 
                    required 
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Cities <span className="text-rose-500">*</span></label>
                  <select 
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 shadow-2xs text-gray-700 font-medium"
                  >
                    <option value="">Select The City</option>
                    <option value="Jaranwala">Jaranwala</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Comment <span className="text-rose-500">*</span></label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Write your message here..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600 shadow-2xs"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-[#212121] hover:bg-black text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Right Column (Get In Touch Info) */}
          <div className="space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div>
              <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wider pb-2 border-b">
                Get In Touch!
              </h3>
            </div>

            {/* Customer Care */}
            <div className="space-y-1.5 text-xs">
              <h4 className="font-bold text-gray-900">Customer Care:</h4>
              <p className="text-gray-600">Call: <a href="tel:0415470993" className="text-blue-600 underline">041-5470993</a></p>
              <p className="text-gray-600">Mobile: <a href="tel:03177700691" className="text-blue-600 underline">0317-7700691</a></p>
              <p className="text-gray-600">Whatsapp: <a href="https://wa.me/923200707692" className="text-blue-600 underline">0320-0707692</a></p>
              <p className="text-gray-600">Email: <a href="mailto:cs@herbiotics.com.pk" className="text-blue-600 underline">cs@herbiotics.com.pk</a></p>
            </div>

            {/* Corporate Office */}
            <div className="space-y-1.5 text-xs">
              <h4 className="font-bold text-gray-900">Corporate Office:</h4>
              <p className="text-gray-600">Call: <a href="tel:0415470992" className="text-blue-600 underline">041-5470992</a></p>
              <p className="text-gray-600">Mobile: <a href="tel:03177700691" className="text-blue-600 underline">0317-7700691</a></p>
              <p className="text-gray-600">Whatsapp: <a href="https://wa.me/923200707692" className="text-blue-600 underline">0320-0707692</a></p>
              <p className="text-gray-600">Email: <a href="mailto:info@herbiotics.com.pk" className="text-blue-600 underline">info@herbiotics.com.pk</a></p>
            </div>

            {/* Business Quires */}
            <div className="space-y-1.5 text-xs">
              <h4 className="font-bold text-gray-900">Business Quires</h4>
              <p className="text-gray-500 text-[11px]">For Toll Manufacturing, Export & Distribution</p>
              <p className="text-gray-600">Mobile: <a href="tel:03054440467" className="text-blue-600 underline">0305-4440467</a></p>
              <p className="text-gray-600">Whatsapp: <a href="https://wa.me/923054440467" className="text-blue-600 underline">0305-4440467</a></p>
              <p className="text-gray-600">Email: <a href="mailto:business@herbiotics.com.pk" className="text-blue-600 underline">business@herbiotics.com.pk</a></p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}