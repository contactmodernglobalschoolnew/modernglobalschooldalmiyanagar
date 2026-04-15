import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { dresscodeData, timingData } from '../data/schoolData';

const cocurricular = [
  { img: "/latestimage/cocurricular_activity_yoga_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Yoga & Mindfulness", desc: "Daily yoga sessions for physical and mental wellness of every child." },
  { img: "/latestimage/cocurricular_activity_horse_riding_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Horse Riding", desc: "Structured equestrian program building confidence & discipline." },
  { img: "/latestimage/kids_musical_chair_with_teachers_activity_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Fun Learning Activities", desc: "Interactive games and group activities with teachers." },
  { img: "/latestimage/kids_playing_in_the_ground_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Outdoor Sports", desc: "Cricket, football, athletics & more on the playground." },
  { img: "/landingpageschoolimage/modern global school students performance best cbse school in dalmiyanagar.jpg", label: "Cultural Performances", desc: "Annual functions, drama, dance and music events." },
  { img: "/landingpageschoolimage/modern global school annual day function best cbse school in dalmiyanagar.jpg", label: "Annual Day Functions", desc: "Grand celebrations recognizing student achievements." }
];

const classrooms = [
  { img: "/latestimage/empty_junior_classroom_modern_global_school_dalmiyanagar.jpeg", label: "Junior Classroom" },
  { img: "/latestimage/empty_kids_classroom_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Kids Classroom" },
  { img: "/latestimage/empty_kids_classroom2_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Activity Room" },
  { img: "/latestimage/empty_kids_classroom_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Senior Classroom" },
  { img: "/landingpageschoolimage/modern global school indoor classroom image best cbse school in dalmiyanagar.webp", label: "Smart Classroom" },
  { img: "/latestimage/library.webp", label: "Library" },
  { img: "/latestimage/computerlab.jpg", label: "Computer Lab" }
];

const levels = [
  { level: "Nursery", color: "#F97316", desc: "Play-based early learning that nurtures curiosity, motor skills and social development." },
  { level: "LKG & UKG", color: "#F59E0B", desc: "Structured pre-primary program introducing letters, numbers, colours and creative activities." },
  { level: "Primary (I–V)", color: "#1D4ED8", desc: "Foundation of literacy, numeracy, science and values through activity-based learning." },
  { level: "Middle School (VI–VIII)", color: "#16A34A", desc: "Deepening subject knowledge with projects, labs and co-curricular integration." }
];

export default function AcademicsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/landingpageschoolimage/modern global school indoor classroom image best cbse school in dalmiyanagar.webp"
            alt="bg" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest">CBSE CURRICULUM</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Our Academics
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            A comprehensive CBSE curriculum from Nursery to Class VIII, designed to nurture critical thinking, creativity, and a lifelong love for learning.
          </p>
        </div>
      </div>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">Curriculum</span>
              <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 mb-5 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                CBSE Curriculum — Nursery to Class VIII
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We follow the CBSE (Central Board of Secondary Education) curriculum — recognized nationally and internationally for its robust academic standards. Our teaching methodology goes beyond textbooks — we focus on conceptual understanding, practical skills, and real-world application.
              </p>
              <div className="space-y-4">
                {levels.map(({ level, color, desc }) => (
                  <div key={level} className="flex gap-4 items-start p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
                    <div>
                      <span className="font-bold text-gray-800 text-sm">{level}</span>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {classrooms.map(({ img, label }, i) => (
                <div key={label} className={`rounded-2xl overflow-hidden shadow-sm ${i === 0 ? 'col-span-2 h-52' : 'h-36'}`}>
                  <Image src={img} alt={label} width={600} height={300} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classrooms in Action */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#7C3AED] font-bold text-sm uppercase tracking-widest">Learning in Action</span>
            <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Our Classrooms with Students
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-2xl mx-auto">
              See our dedicated teachers engaging with students across different age groups in modern, well-equipped classrooms designed for interactive learning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_kids_modern_global_school_dalmiyanagar_dehri.jpeg", 
                label: "Kids Classroom", 
                desc: "Early learning with engaging activities for our youngest students",
                level: "Nursery - UKG",
                color: "#F97316"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_junior_2_students_modern_global_school_dalmiyanagar_dehri.jpeg", 
                label: "Junior Classes", 
                desc: "Building foundational skills in primary education",
                level: "Class I - V",
                color: "#1D4ED8"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_students_modern_global_school_dalmiyanagar_dehri.jpeg", 
                label: "Interactive Learning", 
                desc: "Modern teaching methods with student participation",
                level: "All Classes",
                color: "#16A34A"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_senior_students_modern_global_school_dalmiyanagar_dehri.jpeg", 
                label: "Senior Classes", 
                desc: "Advanced learning for middle school students",
                level: "Class VI - VIII",
                color: "#7C3AED"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_senior_students2_modern_global_school_dalmiyanagar_dehri.jpeg", 
                label: "Advanced Sessions", 
                desc: "Focused learning with experienced faculty",
                level: "Higher Classes",
                color: "#0891B2"
              },
              { 
                img: "/latestimage/teacher_teaching_in_the_classroom_to_senior_students_2_modern_global_school_dalmiyanagar_dehri.jpeg", 
                label: "Specialized Teaching", 
                desc: "Subject-specific instruction and guidance",
                level: "Senior Students",
                color: "#DC2626"
              }
            ].map(({ img, label, desc, level, color }) => (
              <div key={label} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover" data-aos="fade-up">
                <div className="h-48 overflow-hidden">
                  <Image src={img} alt={label} width={400} height={250} className="w-full h-full object-cover gallery-img" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-800 text-sm">{label}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ 
                      backgroundColor: color + '15', 
                      color: color 
                    }}>
                      {level}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Subjects */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1D4ED8] font-bold text-sm uppercase tracking-widest">What We Teach</span>
            <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Key Subjects & Focus Areas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "fas fa-calculator", name: "Mathematics", desc: "Building strong numerical and logical reasoning from an early age.", color: "#1D4ED8", bg: "#EFF6FF" },
              { icon: "fas fa-flask", name: "Science", desc: "Hands-on experiments and observations to spark curiosity and discovery.", color: "#16A34A", bg: "#F0FDF4" },
              { icon: "fas fa-language", name: "English & Hindi", desc: "Strong language foundation — reading, writing, speaking and comprehension.", color: "#F97316", bg: "#FFF7ED" },
              { icon: "fas fa-globe", name: "Social Studies", desc: "History, geography and civics to build an understanding of the world.", color: "#7C3AED", bg: "#F5F3FF" },
              { icon: "fas fa-desktop", name: "Computer Science", desc: "Digital literacy and basic programming skills from middle school onward.", color: "#0891B2", bg: "#ECFEFF" },
              { icon: "fas fa-paint-brush", name: "Arts & Craft", desc: "Creative expression through drawing, painting, craft and art activities.", color: "#DC2626", bg: "#FEF2F2" },
              { icon: "fas fa-music", name: "Music", desc: "Vocal and instrumental music training for rhythmic and creative development.", color: "#F59E0B", bg: "#FFFBEB" },
              { icon: "fas fa-running", name: "Physical Education", desc: "Structured PT, yoga and games for fitness, discipline and teamwork.", color: "#16A34A", bg: "#F0FDF4" }
            ].map(({ icon, name, desc, color, bg }) => (
              <div key={name} className="rounded-2xl p-5 shadow-sm border card-hover" style={{ background: bg, borderColor: color + '20' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: color + '15' }}>
                  <i className={`${icon} text-lg`} style={{ color }} />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">Beyond Textbooks</span>
            <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Co-Curricular Activities
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-lg mx-auto">
              We believe in all-round development. Our students participate in a rich variety of activities that build character, confidence, and life skills.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocurricular.map(({ img, label, desc }) => (
              <div key={label} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                <div className="h-48 overflow-hidden">
                  <Image src={img} alt={label} width={400} height={250} className="w-full h-full object-cover gallery-img" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{label}</h3>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timing + Dress Code */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1E3A8A]" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              School Timings & Dress Code
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#1E3A8A] text-lg mb-5 flex items-center gap-2">
                <i className="fas fa-clock text-[#0891B2]" /> School Timings
              </h3>
              {timingData.map(({ label, time }) => (
                <div key={label} className="flex justify-between py-2.5 border-b border-gray-50 last:border-0">
                  <span className="text-sm font-medium text-gray-700">{label}</span>
                  <span className="text-sm font-bold text-[#1D4ED8] bg-[#EFF6FF] px-3 py-0.5 rounded-full">{time}</span>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#1E3A8A] text-lg mb-5 flex items-center gap-2">
                <i className="fas fa-tshirt text-[#F97316]" /> Dress Code
              </h3>
              {dresscodeData.map(({ label, text }) => (
                <div key={label} className="flex gap-3 items-start mb-4 last:mb-0">
                  <span className="shrink-0 bg-[#FFF7ED] text-[#F97316] text-xs font-bold px-3 py-1 rounded-full border border-orange-100">{label}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
