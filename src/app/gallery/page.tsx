'use client';
import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { galleryItems, galleryCategories } from '../data/schoolData';

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<{ img: string; label: string } | null>(null);

  const filtered = active === 'All'
    ? galleryItems
    : galleryItems.filter((g) => g.cat === active);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0F1F4A] text-white py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-15">
          <Image src="/landingpageschoolimage/modern global school annual day function best cbse school in dalmiyanagar.jpg"
            alt="Gallery" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">Photo Gallery</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Life at Modern Global
          </h1>
          <p className="text-blue-300 text-base max-w-xl mx-auto">
            Glimpses of our vibrant school life — from classrooms to playgrounds, cultural events to prize ceremonies.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {galleryCategories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`tab-btn border ${active === cat ? 'active border-[#1D4ED8]' : 'bg-white border-gray-200 text-gray-600 hover:border-[#1D4ED8] hover:text-[#1D4ED8]'}`}>
                {cat}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat === 'All' ? galleryItems.length : galleryItems.filter(g => g.cat === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map(({ img, label, cat }) => (
              <div key={img} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer"
                onClick={() => setLightbox({ img, label })}>
                <div className="relative overflow-hidden">
                  <Image src={img} alt={label} width={400} height={300} className="w-full h-auto object-cover gallery-img" />
                  <div className="absolute inset-0 bg-[#0F1F4A]/0 hover:bg-[#0F1F4A]/40 transition-all flex items-end">
                    <div className="opacity-0 hover:opacity-100 transition-opacity p-3 w-full">
                      <span className="text-white text-xs font-bold bg-[#0F1F4A]/60 px-2 py-1 rounded-full">{cat}</span>
                      <p className="text-white text-xs mt-1 font-medium">{label}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-3 py-2">
                  <p className="text-xs font-medium text-gray-600 truncate">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <i className="fas fa-images text-4xl mb-3" />
              <p>No photos in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-[#F97316] transition-colors z-10">
              <i className="fas fa-times" />
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image src={lightbox.img} alt={lightbox.label} width={900} height={600} className="w-full h-auto object-contain max-h-[80vh]" />
            </div>
            <p className="text-center text-white/80 text-sm mt-3">{lightbox.label}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-[#1E3A8A] py-12 px-4 text-center text-white">
        <h3 className="text-xl font-bold mb-2">Want to See More?</h3>
        <p className="text-blue-300 text-sm mb-5">Follow us on social media for daily updates and event photos</p>
        <div className="flex justify-center gap-4">
          {[
            { i: "fab fa-facebook-f", l: "https://facebook.com", label: "Facebook", color: "#1877F2" },
            { i: "fab fa-instagram", l: "https://instagram.com", label: "Instagram", color: "#E1306C" },
            { i: "fab fa-youtube", l: "https://youtube.com", label: "YouTube", color: "#FF0000" }
          ].map(({ i, l, label, color }) => (
            <a key={label} href={l} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 transition-colors"
              style={{ background: color + '30' }}>
              <i className={i} /> {label}
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
