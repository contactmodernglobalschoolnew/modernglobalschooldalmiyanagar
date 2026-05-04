'use client';
import { useState, useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open, onClose }: Props) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', purpose: '', message: '' });

  // Reset when re-opened
  useEffect(() => {
    if (open) { setSent(false); setForm({ name: '', phone: '', purpose: '', message: '' }); }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("phone", form.phone);
      formData.append("purpose", form.purpose);
      formData.append("message", form.message);
  
      const res = await fetch("https://script.google.com/macros/s/AKfycbz0GxESn5cwf5K1LDLnYaENkRlENKDKJrQNRdjU62yy_w9xYrE6XTjEw45HofBD48WrPA/exec", {
        method: "POST",
        body: formData,
      });
  
      setSent(true);
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}>

      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0F1F4A]/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}>

        {/* Top colour bar */}
        <div className="h-2 bg-gradient-to-r from-[#1D4ED8] via-[#F97316] to-[#16A34A]" />

        {/* Header */}
        <div className="px-7 pt-6 pb-4 flex items-start justify-between">
          <div>
            <span className="text-[#F97316] font-bold text-xs uppercase tracking-widest">Session 2026–27</span>
            <h2 className="text-2xl font-black text-[#1E3A8A] mt-0.5" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Admission Enquiry
            </h2>
            <p className="text-gray-500 text-xs mt-1">We&apos;ll get back to you within 24 hours.</p>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors shrink-0 ml-4 mt-0.5">
            <i className="fas fa-times text-sm" />
          </button>
        </div>

        {/* Body */}
        <div className="px-7 pb-7">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#F0FDF4] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-3xl text-[#16A34A]" />
              </div>
              <h3 className="font-black text-[#1E3A8A] text-xl mb-1" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Enquiry Received!
              </h3>
              <p className="text-gray-500 text-sm mb-6">Thank you! Our team will contact you shortly.</p>
              <a href={`https://wa.me/919798560695?text=Hi, I am ${encodeURIComponent(form.name)}. I want to enquire about ${encodeURIComponent(form.purpose || 'admission')} at Modern Global School.`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DB954] text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
                <i className="fab fa-whatsapp text-lg" /> Chat on WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">

              {/* Name */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1D4ED8]">
                  <i className="fas fa-user text-sm" />
                </span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Full Name"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:border-[#1D4ED8] focus:bg-white transition-all outline-none" />
              </div>

              {/* Phone */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1D4ED8]">
                  <i className="fas fa-phone text-sm" />
                </span>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone / WhatsApp Number"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:border-[#1D4ED8] focus:bg-white transition-all outline-none" />
              </div>

              {/* Purpose */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1D4ED8] pointer-events-none">
                  <i className="fas fa-tag text-sm" />
                </span>
                <select required value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:border-[#1D4ED8] focus:bg-white transition-all outline-none appearance-none text-gray-600">
                  <option value="">Select Purpose</option>
                  <option>New Admission – Nursery</option>
                  <option>New Admission – LKG / UKG</option>
                  <option>New Admission – Class I to V</option>
                  <option>New Admission – Class VI to VIII</option>
                  <option>Fee Structure Enquiry</option>
                  <option>Transport / Bus Route</option>
                  <option>General Enquiry</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <i className="fas fa-chevron-down text-xs" />
                </span>
              </div>

              {/* Message */}
              <div className="relative">
                <span className="absolute left-4 top-4 text-[#1D4ED8]">
                  <i className="fas fa-comment text-sm" />
                </span>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message (optional)" rows={3}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:border-[#1D4ED8] focus:bg-white transition-all outline-none resize-none" />
              </div>

              {/* Submit */}
              <button type="submit"
                className="w-full bg-gradient-to-r from-[#1D4ED8] to-[#1E3A8A] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <i className="fas fa-paper-plane" /> Submit Enquiry
              </button>

              <p className="text-center text-xs text-gray-400">
                Or call us directly at{' '}
                <a href="tel:+919798560695" className="text-[#1D4ED8] font-semibold hover:underline">+91-09798560695</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
