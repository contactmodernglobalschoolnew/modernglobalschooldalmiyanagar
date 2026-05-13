'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


import {
  statsData, uspData, facilitiesData, noticesData,
  admissionSteps, docs, contactInfo, timingData, boardMembers, testimonialsData,
  teachingCommunityData
} from '../data/schoolData';

const dressCodeItems = [
  {
    label: "Mon – Thu",
    text: "Boys & Girls: Blue check half-sleeve shirt, Blue pant/tunic, Tie & belt, Black shoes, Blue socks"
  },
  {
    label: "Fri – Sat",
    text: "Boys & Girls: Black trousers, House dress T-shirt, White shoes, White socks"
  },
  {
    label: "Winter",
    text: "Blue sweater (full-sleeve V-shaped neck) & Blazer over regular uniform"
  }
];

const filters = ["All", "Exam", "Event", "Admission", "Holiday", "Result"];

const extendedNotices = [
  ...noticesData,
  { date: "15 Feb 2026", badge: "Event", title: "Republic Day Celebration", text: "Republic Day was celebrated on 26th January 2026. All students participated in patriotic programs and flag hoisting.", color: "#2563EB", badgeBg: "#EFF6FF", badgeColor: "#2563EB" },
  { date: "10 Feb 2026", badge: "Exam", title: "Unit Test Schedule — March 2026", text: "Unit tests for all classes will be held in the first week of March 2026. Detailed schedule will be shared with class teachers.", color: "#DC2626", badgeBg: "#FEF2F2", badgeColor: "#DC2626" },
  { date: "05 Feb 2026", badge: "Holiday", title: "Saraswati Puja Holiday", text: "School will remain closed on Saraswati Puja (Vasant Panchami). Date as per the Hindu calendar. Blessings for all students.", color: "#F59E0B", badgeBg: "#FFFBEB", badgeColor: "#B45309" },
  { date: "01 Feb 2026", badge: "Result", title: "First Term Result Declaration", text: "First term results will be declared on 5th February 2026. Parents are requested to collect the report card from school.", color: "#DC2626", badgeBg: "#FEF2F2", badgeColor: "#DC2626" },
  { date: "25 Jan 2026", badge: "Admission", title: "Registration for Session 2026–27 Begins", text: "Registration for the new academic session 2026–27 is now open for Nursery to Class VIII. Limited seats available. Visit the school office for details.", color: "#16A34A", badgeBg: "#F0FDF4", badgeColor: "#16A34A" }
];

export default function NoticeBoardPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? extendedNotices
    : extendedNotices.filter((n) => n.badge === active);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#DC2626] to-[#991B1B] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">Latest Updates</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Notice Board
          </h1>
          <p className="text-red-200 text-base max-w-xl mx-auto">
            Stay informed with the latest circulars, exam schedules, event announcements and important notices from Modern Global School.
          </p>
        </div>
      </div>

      {/* Notices */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className={`tab-btn border ${active === f ? 'active border-[#1D4ED8]' : 'bg-white border-gray-200 text-gray-600 hover:border-[#1D4ED8] hover:text-[#1D4ED8]'}`}>
                {f}
              </button>
            ))}
          </div>

          {/* Notices List */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <i className="fas fa-bell-slash text-4xl mb-3" />
              <p>No notices in this category.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map(({ date, badge, title, text, badgeBg, badgeColor }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#1D4ED8] hover:border-[#F97316] hover:bg-[#FFF7ED] transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="badge text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: badgeBg, color: badgeColor }}>
                        {badge}
                      </span>
                      <h3 className="font-bold text-gray-800 text-sm leading-snug">{title}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 shrink-0">
                      <i className="fas fa-calendar-alt" />
                      <span>{date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                  <div className="mt-4 flex gap-3">
                    <button className="text-xs text-[#1D4ED8] font-semibold hover:underline flex items-center gap-1">
                      <i className="fas fa-download" /> Download Notice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      
      {/* ── SCHOOL TIMING + DRESSCODE ───────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#A855F7] font-bold text-sm uppercase tracking-widest">School Schedule</span>
            <h2 className="text-3xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Timings & Dress Code
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Timing */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100" data-aos="fade-right">
              <h3 className="font-bold text-[#7C3AED] text-lg mb-5 flex items-center gap-2">
                <i className="fas fa-clock text-[#06B6D4]" /> School Timings
              </h3>
              <div className="space-y-3">
                {timingData.map(({ label, time }) => (
                  <div key={label} className="flex justify-between items-center py-2.5 border-b border-gray-50 last:border-0">
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                    <span className="text-sm font-bold text-[#8B5CF6] bg-[#F3E8FF] px-3 py-1 rounded-full">{time}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Dress Code */}
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100" data-aos="fade-left">
              <h3 className="font-bold text-[#7C3AED] text-lg mb-5 flex items-center gap-2">
                <i className="fas fa-tshirt text-[#FF6B35]" /> Dress Code
              </h3>
              
              <div className="space-y-4">
                {dressCodeItems.map(({ label, text }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <span className="shrink-0 bg-[#FFF4ED] text-[#FF6B35] font-bold text-xs px-3 py-1.5 rounded-full border border-orange-200">{label}</span>
                    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <div className="bg-[#1E3A8A] py-12 px-4 text-center text-white">
        <h3 className="text-xl font-bold mb-2">Never Miss an Update</h3>
        <p className="text-blue-300 text-sm mb-5">Join our WhatsApp group or follow us on social media for instant notifications</p>
        <a href="https://wa.me/919798560695" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DB954] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm">
          <i className="fab fa-whatsapp text-lg" /> Join WhatsApp Group
        </a>
      </div>

      <Footer />
    </>
  );
}
