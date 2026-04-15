import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { disclosureData } from '../data/schoolData';

const cbseDocuments = [
  { icon: "fas fa-file-certificate", title: "Affiliation Certificate", desc: "CBSE Affiliation certificate issued by the board", link: "#" },
  { icon: "fas fa-id-card", title: "School Recognition Certificate", desc: "State government recognition certificate", link: "#" },
  { icon: "fas fa-map-marked", title: "Land Certificate / NOC", desc: "Land ownership and NOC documents", link: "#" },
  { icon: "fas fa-fire-extinguisher", title: "Fire Safety Certificate", desc: "Valid fire safety compliance certificate", link: "#" },
  { icon: "fas fa-building", title: "Building Safety Certificate", desc: "Structural safety certificate from civil engineer", link: "#" },
  { icon: "fas fa-hands-wash", title: "Health & Sanitation Certificate", desc: "Health and hygiene compliance certificate", link: "#" },
  { icon: "fas fa-users", title: "SMC Committee Details", desc: "School Management Committee composition and records", link: "#" },
  { icon: "fas fa-chalkboard-teacher", title: "Staff Details", desc: "Teaching and non-teaching staff qualification details", link: "#" },
  { icon: "fas fa-rupee-sign", title: "Fee Structure", desc: "Complete fee structure for all classes", link: "#" },
  { icon: "fas fa-calendar-alt", title: "Academic Calendar", desc: "Annual academic calendar and exam schedule", link: "#" }
];

export default function MandatoryDisclosurePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-hero text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">School Disclosure</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Mandatory Disclosure
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            Modern Global School provides complete transparency through mandatory disclosure of school information as required by the CBSE curriculum guidelines.
          </p>
        </div>
      </div>

      {/* School Info Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1D4ED8] font-bold text-sm uppercase tracking-widest">School Information</span>
            <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              General Information
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {disclosureData.map(({ label, value }, i) => (
              <div key={label} className={`grid grid-cols-2 gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'} border-b border-gray-50 last:border-0`}>
                <span className="text-sm font-bold text-gray-700">{label}</span>
                <span className="text-sm text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CBSE Documents */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1D4ED8] font-bold text-sm uppercase tracking-widest">Compliance Documents</span>
            <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              CBSE Required Documents
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
              All documents as mandated by CBSE guidelines are maintained and available for inspection upon request.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cbseDocuments.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm border border-blue-50 card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8] mb-4">
                  <i className={icon} />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#1D4ED8] font-semibold border border-[#1D4ED8]/30 px-3 py-1.5 rounded-full">
                  <i className="fas fa-file-pdf" /> Available on Request
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Rules Image */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">Admissions</span>
              <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 mb-5 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Admission Rules & Policies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Admissions at Modern Global School are conducted transparently, following all CBSE guidelines. The admission process ensures equal opportunity for all students.
              </p>
              {[
                "Age-appropriate admission criteria as per CBSE norms",
                "No capitation fee or donation charged",
                "Reservation for EWS/DG categories as applicable",
                "Fair and transparent merit-based admission",
                "All documents verified by the office",
                "Grievance redressal mechanism available"
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-2 text-sm text-gray-600 mb-2.5">
                  <i className="fas fa-check-circle text-[#16A34A] mt-0.5 shrink-0" />{rule}
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image src="/latestimage/admission_rules_modern_global_school_dalmiyanagar_dehri.jpeg"
                alt="Admission Rules" width={600} height={450} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Disclosure */}
      <div className="bg-[#1E3A8A] text-white py-12 text-center px-4">
        <h3 className="text-xl font-bold mb-2">Need Specific Documents?</h3>
        <p className="text-blue-300 text-sm mb-5">Contact our office for any mandatory disclosure documents or additional information</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:info@modernglobalschool.in"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm flex items-center gap-2">
            <i className="fas fa-envelope" /> Email Us
          </a>
          <a href="tel:+919798560695"
            className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm flex items-center gap-2">
            <i className="fas fa-phone" /> Call Us
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}
