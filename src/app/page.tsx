'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import {
  statsData, uspData, facilitiesData, noticesData,
  admissionSteps, docs, contactInfo, galleryItems,
  dresscodeData, timingData, boardMembers, testimonialsData,
  teachingCommunityData
} from './data/schoolData';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <Image src="/latestimage/school_beautiful_front_modern_global_school_dalmiyanagar_dehri.jpeg"
          alt="Modern Global School" fill className="object-cover object-center" priority />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 w-full">
          <div className="max-w-2xl" data-aos="fade-right">
            <span className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
              CBSE Curriculum • Est. 2019
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Modern Global<br /><span className="text-[#FBBF24]">School</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-3 font-medium" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>Dalmianagar, Rohtas, Bihar 821305</p>
            <p className="text-base text-gray-100 mb-8 leading-relaxed max-w-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              Nurturing young minds with quality education, strong values, and holistic development. Where every child discovers their potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setEnquiryOpen(true)}
                className="bg-[#FF6B35] hover:bg-[#FF8E53] text-white font-bold px-7 py-3.5 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 flex items-center gap-2">
                <i className="fas fa-user-plus" /> Enroll Now
              </button>
              <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="bg-white/15 hover:bg-white/25 text-white font-bold px-7 py-3.5 rounded-full border border-white/30 transition-all backdrop-blur-sm flex items-center gap-2">
                <i className="fas fa-info-circle" /> Learn More
              </a>
            </div>
          </div>
        </div>
        {/* Scroll cue */}
        <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/60 hover:text-white transition-colors">
          <span className="text-xs mb-1">Scroll Down</span>
          <i className="fas fa-chevron-down animate-bounce" />
        </a>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map(({ num, label, icon, color, bg }) => (
            <div key={label} className="flex items-center gap-4 p-5 rounded-2xl card-hover" style={{ background: bg }} data-aos="fade-up">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: color + '20' }}>
                <i className={icon} style={{ color }} />
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color }}>{num}</div>
                <div className="text-xs text-gray-600 font-medium leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT US ─────────────────────────────────────────── */}
      <section id="about" className="py-20 bg-gradient-to-br from-[#F3E8FF] to-[#EDE9FE]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div data-aos="fade-right">
              <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 mb-5 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Building Future Leaders Since 2019
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Modern Global School, Dalmianagar is one of Rohtas&apos;s most trusted institutions following CBSE curriculum. For over a decade, we have been committed to providing world-class education that combines academic excellence with character development, sports, and co-curricular activities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                Our mission is to empower every child with knowledge, skills, and values to succeed in a rapidly changing world. With experienced faculty, smart classrooms, and a nurturing environment, we ensure each student reaches their full potential.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "fas fa-bullseye", label: "Our Mission", text: "Holistic education empowering every child" },
                  { icon: "fas fa-eye", label: "Our Vision", text: "A school where excellence meets opportunity" },
                  { icon: "fas fa-star", label: "Core Values", text: "Integrity, Discipline & Excellence" },
                  { icon: "fas fa-certificate", label: "Curriculum", text: "CBSE Curriculum, Playgroup to Class VIII" }
                ].map(({ icon, label, text }) => (
                  <div key={label} className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                    <i className={`${icon} text-[#8B5CF6] text-lg mb-2`} />
                    <div className="font-bold text-gray-800 text-sm">{label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4" data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-xl h-72">
                <Image src="/latestimage/kids_playing_in_the_playground_modern_global_school_dalmiyanagar_dehri.jpeg"
                  alt="Students Playing in Playground" width={700} height={450} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-40">
                  <Image src="/latestimage/school_beautiful_front2_modern_global_school_dalmiyanagar_dehri.jpeg"
                    alt="Beautiful School Front" width={350} height={200} className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-40">
                  <Image src="/latestimage/school_entrance_modern_global_school_dalmiyanagar_dehri.jpeg"
                    alt="School Entrance" width={350} height={200} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Meet Our Leadership
            </h2>
          </div>
          
          {/* Director & Principal */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {[
              {
                name: "Dr. Kr. Anshuman", role: "Director", img: "/latestimage/director_Kr_Anshuman_image_in_office_modern_global_school_dalmiyanagar_dehri.jpeg",
                quote: "In today's rapidly evolving digital era, we're preparing students for careers that don't exist yet. Through AI-integrated learning, smart classrooms, and future-ready skills, we're building tomorrow's innovators and digital leaders."
              },
              {
                name: "Mrs. Kumkum Agarwal", role: "Principal", img: "/latestimage/Principal_Kumkum_Agarwal_modern_global_school_dalmiyanagar_dehri.jpeg",
                quote: "Our classrooms are designed to nurture every child's unique talent. We believe in making learning joyful, meaningful and impactful."
              }
            ].map(({ name, role, img, quote }, i) => (
              <div key={name} className="bg-gradient-to-b from-[#F3E8FF] to-white rounded-3xl p-6 shadow-md border border-purple-100 card-hover text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-[#8B5CF6]/20 shadow-lg">
                  <Image src={img} alt={name} width={112} height={112} className="w-full h-full object-cover object-top" />
                </div>
                <div className="font-black text-[#7C3AED] text-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{name}</div>
                <div className="text-[#FF6B35] font-bold text-sm mb-4">{role}</div>
                <p className="text-gray-500 text-sm leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Board Members */}
          <div className="text-center mb-8" data-aos="fade-up">
            <h3 className="text-2xl font-black text-[#7C3AED]" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Board Members
            </h3>
            <p className="text-gray-600 text-sm mt-2">Guiding our vision with wisdom and dedication</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {boardMembers.map(({ name, designation, image, quote }, i) => (
              <div key={name} className="bg-gradient-to-b from-[#FAF5FF] to-white rounded-2xl p-4 shadow-sm border border-purple-100 card-hover text-center" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-2 ring-[#8B5CF6]/10 shadow-md">
                  {image.startsWith('emoji://') ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center text-3xl">
                      {image.replace('emoji://', '')}
                    </div>
                  ) : (
                    <Image src={image} alt={name} width={80} height={80} className="w-full h-full object-cover object-top" />
                  )}
                </div>
                <div className="font-bold text-[#7C3AED] text-sm" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>{name}</div>
                <div className="text-[#FF6B35] font-semibold text-xs mb-2">{designation}</div>
                <p className="text-gray-500 text-xs leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMICS PREVIEW ────────────────────────────────── */}
      <section id="academics" className="py-20 bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="text-[#10B981] font-bold text-sm uppercase tracking-widest">Academics</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 mb-5 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Excellence in Education
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Following the CBSE curriculum from Playgroup to Class VIII, our academics are designed to build strong foundational skills while fostering creativity, critical thinking, and a love for learning.
              </p>
              <div className="grid grid-cols-1 gap-3 mb-7">
                {[
                  { icon: "fas fa-graduation-cap", title: "CBSE Curriculum", text: "Playgroup to Class VIII — strong foundation & skills", color: "#8B5CF6" },
                  { icon: "fas fa-flask", title: "Science & Technology", text: "Modern computer lab & digital learning for tech-savvy students", color: "#10B981" },
                  { icon: "fas fa-palette", title: "Co-Curricular Activities", text: "Yoga, horse riding, music, art, sports & cultural events", color: "#FF6B35" }
                ].map(({ icon, title, text, color }) => (
                  <div key={title} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm border border-green-50">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: color + '15' }}>
                      <i className={`${icon} text-sm`} style={{ color }} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">{title}</div>
                      <div className="text-xs text-gray-500">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/academics" className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold px-6 py-3 rounded-full transition-colors shadow-md">
                Explore Full Academics <i className="fas fa-arrow-right" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
              {[
                { src: "/latestimage/teacher_teaching_in_the_classroom_to_students_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Smart Teaching", span: "col-span-2 h-48" },
                { src: "/latestimage/empty_junior_classroom_modern_global_school_dalmiyanagar.jpeg", label: "Junior Classroom", span: "h-36" },
                { src: "/latestimage/empty_senior_classroom_modern_global_school_dalmiyanagar.jpeg", label: "Senior Classroom", span: "h-36" },
                { src: "/latestimage/teacher_teaching_in_the_classroom_to_senior_students_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Senior Learning", span: "h-36" }
              ].map(({ src, label, span }, i) => (
                <div key={label} className={`rounded-2xl overflow-hidden shadow-md ${span}`}>
                  <Image src={src} alt={label} width={400} height={250} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLASSROOMS SHOWCASE ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#A855F7] font-bold text-sm uppercase tracking-widest">Our Inside Modern Classroom</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Modern Learning Environments
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              State-of-the-art classrooms equipped with modern teaching tools and interactive learning environments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_kids_modern_global_school_dalmiyanagar_dehri.jpeg", 
                title: "Interactive Learning with Kids", 
                desc: "Teachers engaging with young students in modern classrooms",
                level: "Primary Classes"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_students_modern_global_school_dalmiyanagar_dehri.jpeg", 
                title: "Modern Teaching Methods", 
                desc: "Contemporary teaching approaches in well-equipped classrooms",
                level: "All Classes"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_senior_students_modern_global_school_dalmiyanagar_dehri.jpeg", 
                title: "Advanced Learning Sessions", 
                desc: "Senior students in focused learning environments",
                level: "Higher Classes"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_junior_2_students_modern_global_school_dalmiyanagar_dehri.jpeg", 
                title: "Junior Class Teaching", 
                desc: "Dedicated instruction for junior students",
                level: "Junior Classes"
              }
            ].map(({ img, title, desc, level }, i) => (
              <div key={title} className="bg-gradient-to-b from-[#FAF5FF] to-white rounded-3xl overflow-hidden shadow-lg border border-purple-100 card-hover" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="h-48 overflow-hidden">
                  <Image src={img} alt={title} width={400} height={250} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-[#7C3AED] text-lg" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      {title}
                    </h3>
                    <span className="bg-[#A855F7]/10 text-[#A855F7] text-xs font-semibold px-3 py-1 rounded-full">
                      {level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#FBBF24] font-bold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              What Makes Us Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uspData.map(({ icon, title, desc }, i) => (
              <div key={title} className="bg-white/10 hover:bg-white/15 rounded-2xl p-6 border border-white/10 transition-all card-hover" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center mb-4 text-white text-lg">
                  <i className={icon} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#FFF4ED] to-[#FED7AA]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              What Our Community Says
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from our parents and students about their experiences at Modern Global School
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonialsData.map(({ id, title, videoSrc, description }, i) => (
              <div key={id} className="bg-white rounded-3xl p-4 shadow-lg border border-orange-200 card-hover" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="aspect-[9/16] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h3 className="font-bold text-[#7C3AED] text-base mb-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                  {title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">{description}</p>
                <div className="flex items-center gap-2 text-[#FF6B35]">
                  <i className="fas fa-play-circle text-sm" />
                  <span className="text-xs font-semibold">Watch Now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHING COMMUNITY ──────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#ECFDF5] to-[#A7F3D0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#10B981] font-bold text-sm uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Our Energetic Teaching Community
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl" data-aos="fade-right">
              <Image 
                src={teachingCommunityData.groupImage} 
                alt="Teaching Staff Group Photo" 
                width={600} 
                height={400} 
                className="w-full h-full object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-green-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#10B981] flex items-center justify-center text-white">
                    <i className="fas fa-users" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#7C3AED] text-xl" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                      United in Excellence
                    </h3>
                    <p className="text-[#10B981] font-semibold text-sm">Passionate • Experienced • Caring</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {teachingCommunityData.message}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#ECFDF5] rounded-xl border border-green-200">
                    <div className="text-2xl font-black text-[#10B981]">20+</div>
                    <div className="text-xs text-gray-600 font-medium">Expert Teachers</div>
                  </div>
                  <div className="text-center p-4 bg-[#ECFDF5] rounded-xl border border-green-200">
                    <div className="text-2xl font-black text-[#10B981]">7+</div>
                    <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-[#ECFDF5] rounded-xl border border-green-200">
                    <div className="text-2xl font-black text-[#10B981]">100%</div>
                    <div className="text-xs text-gray-600 font-medium">Dedicated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMISSION ────────────────────────────────────────── */}
      <section id="admission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">Admissions 2026–27</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Simple Admission Process
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {/* Steps */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {admissionSteps.map(({ step, title, desc, icon }) => (
                  <div key={step} className="flex gap-4 bg-[#F3E8FF] rounded-2xl p-5 border border-purple-100 card-hover" data-aos="fade-up">
                    <div className="step-circle bg-[#8B5CF6] text-white shrink-0">{step}</div>
                    <div>
                      <i className={`${icon} text-[#FF6B35] mb-1 text-sm`} />
                      <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Admission image */}
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-lg max-w-xs w-full">
                  <Image src="/latestimage/admission_rules_modern_global_school_dalmiyanagar_dehri.jpeg"
                    alt="Admission Rules" width={400} height={600} className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Docs + CTA */}
            <div data-aos="fade-left">
              <div className="bg-gradient-to-b from-[#FFF4ED] to-white rounded-3xl p-6 border border-orange-200 shadow-sm mb-5">
                <h3 className="font-bold text-[#7C3AED] text-base mb-4 flex items-center gap-2">
                  <i className="fas fa-folder-open text-[#FF6B35]" /> Documents Required
                </h3>
                <ul className="space-y-2">
                  {docs.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-check-circle text-[#10B981] text-xs" />{d}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => setEnquiryOpen(true)}
                className="flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#FF8E53] text-white font-bold py-4 px-6 rounded-2xl transition-colors shadow-lg text-sm w-full">
                <i className="fas fa-paper-plane" /> Submit Admission Enquiry
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">Playgroup to Class VIII • CBSE Curriculum • Rohtas, Bihar</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES PREVIEW ──────────────────────────────── */}
      <section id="facilities" className="py-20 bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4" data-aos="fade-up">
            <div>
              <span className="text-[#06B6D4] font-bold text-sm uppercase tracking-widest">Our Facilities</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                World-Class Infrastructure
              </h2>
            </div>
            <Link href="/facilities" className="shrink-0 inline-flex items-center gap-2 text-[#06B6D4] font-bold border-2 border-[#06B6D4] px-5 py-2.5 rounded-full hover:bg-[#06B6D4] hover:text-white transition-all text-sm">
              View All Facilities <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.slice(0, 6).map(({ icon, name, desc, img }) => (
              <div key={name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover" data-aos="fade-up">
                {img ? (
                  <div className="h-44 overflow-hidden">
                    <Image src={img} alt={name} width={400} height={220} className="w-full h-full object-cover gallery-img" />
                  </div>
                ) : (
                  <div className="h-44 bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2] flex items-center justify-center">
                    <i className={`${icon} text-5xl text-[#06B6D4]/50`} />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#E0F7FA] flex items-center justify-center text-[#06B6D4] shrink-0">
                      <i className={icon} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">{name}</div>
                      <div className="text-xs text-gray-500">{desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTICE BOARD PREVIEW ────────────────────────────── */}
      <section id="notice" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4" data-aos="fade-up">
            <div>
              <span className="text-[#EF4444] font-bold text-sm uppercase tracking-widest">Latest Updates</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Notice Board
              </h2>
            </div>
            <Link href="/notice-board" className="shrink-0 inline-flex items-center gap-2 text-[#EF4444] font-bold border-2 border-[#EF4444] px-5 py-2.5 rounded-full hover:bg-[#EF4444] hover:text-white transition-all text-sm">
              View All Notices <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {noticesData.slice(0, 3).map(({ date, badge, title, text, badgeBg, badgeColor }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-[#8B5CF6] hover:border-[#FF6B35] hover:bg-[#FFF4ED] transition-all card-hover" data-aos="fade-up">
                <div className="flex justify-between items-start mb-3">
                  <span className="badge text-xs font-bold px-3 py-1 rounded-full" style={{ background: badgeBg, color: badgeColor }}>{badge}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><i className="fas fa-calendar-alt" />{date}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ─────────────────────────────────── */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-[#1E1B4B] to-[#312E81]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4" data-aos="fade-up">
            <div>
              <span className="text-[#FBBF24] font-bold text-sm uppercase tracking-widest">Photo Gallery</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Life at Modern Global
              </h2>
            </div>
            <Link href="/gallery" className="shrink-0 inline-flex items-center gap-2 text-[#FBBF24] font-bold border-2 border-[#FBBF24] px-5 py-2.5 rounded-full hover:bg-[#FBBF24] hover:text-[#1E1B4B] transition-all text-sm">
              View Full Gallery <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryItems.slice(0, 9).map(({ img, label }) => (
              <div key={label} className="rounded-2xl overflow-hidden aspect-square shadow-md" data-aos="fade-up">
                <Image src={img} alt={label} width={350} height={350} className="w-full h-full object-cover gallery-img" />
              </div>
            ))}
          </div>
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
                {dresscodeData.map(({ label, text }) => (
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

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[#FF6B35] font-bold text-sm uppercase tracking-widest">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#7C3AED] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Contact Us
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-[#F3E8FF] rounded-3xl p-7 shadow-sm" data-aos="fade-right">
              <h3 className="font-bold text-[#7C3AED] text-lg mb-6">Send Us a Message</h3>
              {formSent ? (
                <div className="text-center py-10">
                  <i className="fas fa-check-circle text-5xl text-[#10B981] mb-4" />
                  <p className="font-bold text-gray-700 text-lg">Message Sent!</p>
                  <p className="text-gray-500 text-sm mt-1">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Your Name" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-[#8B5CF6]/20" />
                    <input required placeholder="Phone Number" type="tel" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm w-full" />
                  </div>
                  <input placeholder="Email Address" type="email" className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm w-full" />
                  <select className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm w-full text-gray-600">
                    <option>Select Inquiry Type</option>
                    <option>Admission Inquiry</option>
                    <option>General Inquiry</option>
                    <option>Feedback</option>
                  </select>
                  <textarea required placeholder="Your Message" rows={4} className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm w-full resize-none" />
                  <button type="submit" className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-3.5 rounded-xl transition-colors shadow-md">
                    <i className="fas fa-paper-plane mr-2" />Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-5" data-aos="fade-left">
              {contactInfo.map(({ icon, label, value, color, link }) => (
                <div key={label} className="flex gap-4 items-start bg-gray-50 rounded-2xl p-5 border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: color + '15' }}>
                    <i className={`${icon} text-lg`} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm mb-0.5">{label}</div>
                    {link
                      ? <a href={link} className="text-sm text-gray-600 hover:text-[#1D4ED8] transition-colors">{value}</a>
                      : <p className="text-sm text-gray-600">{value}</p>
                    }
                  </div>
                </div>
              ))}
              {/* Map embed placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-40 bg-[#F3E8FF] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <i className="fas fa-map-marked-alt text-3xl mb-2 text-[#8B5CF6]/40" />
                  <p className="text-xs">Dalmianagar, Rohtas, Bihar 821305</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Give Your Child the Best Start in Life
          </h2>
          <p className="text-orange-100 mb-6 text-sm">Admissions Open for 2026–27 | Playgroup to Class VIII | CBSE Curriculum</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setEnquiryOpen(true)}
              className="bg-white text-[#FF6B35] font-bold px-7 py-3 rounded-full hover:shadow-lg transition-all flex items-center gap-2">
              <i className="fas fa-user-plus" /> Enquire Now
            </button>
            <a href="tel:+919798560695" className="bg-white/20 hover:bg-white/30 text-white font-bold px-7 py-3 rounded-full border border-white/40 transition-all flex items-center gap-2">
              <i className="fas fa-phone" /> Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-top bg-[#8B5CF6] text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-sm ${showScrollTop ? 'show' : ''}`}>
        <i className="fas fa-chevron-up" />
      </button>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/919798560695" target="_blank" rel="noreferrer"
        className="whatsapp-btn bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-[#20BD5A] transition-colors">
        <i className="fab fa-whatsapp" />
      </a>

      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
