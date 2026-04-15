import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { facilitiesData } from '../data/schoolData';

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#0891B2] text-white py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-20">
          <Image src="/latestimage/school_beautiful_front_modern_global_school_dalmiyanagar_dehri.jpeg"
            alt="School" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">World-Class Infrastructure</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
            Our Facilities
          </h1>
          <p className="text-cyan-100 text-base max-w-xl mx-auto">
            State-of-the-art facilities designed to provide a safe, stimulating and enriching environment for every student.
          </p>
        </div>
      </div>

      {/* All Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#0891B2] font-bold text-sm uppercase tracking-widest">Infrastructure</span>
            <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 section-line center" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
              Everything Your Child Needs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {facilitiesData.map(({ icon, name, desc, img }) => (
              <div key={name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                {img ? (
                  <div className="h-52 overflow-hidden">
                    <Image src={img} alt={name} width={500} height={280} className="w-full h-full object-cover gallery-img" />
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] flex items-center justify-center">
                    <i className={`${icon} text-6xl text-[#1D4ED8]/25`} />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#1D4ED8] shrink-0">
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

      {/* Highlight sections */}
      <section className="py-20 bg-[#EFF6FF]">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {/* Transport */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#F97316] font-bold text-sm uppercase tracking-widest">Safe Travel</span>
              <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 mb-5 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                School Transport
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                We provide safe, GPS-tracked school buses covering all major routes in and around Dalmianagar and Rohtas. Our buses are maintained regularly and are driven by trained, verified drivers with attendants on board.
              </p>
              {[
                "GPS tracking on all vehicles",
                "Trained & verified drivers",
                "Attendants on every bus",
                "Routes covering Dalmianagar & Rohtas",
                "Regular maintenance checks"
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <i className="fas fa-check-circle text-[#16A34A]" />{f}
                </div>
              ))}
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl h-64">
              <Image src="/latestimage/vehicle_transport_van_image_modern_global_school_dalmiyanagar_dehri.jpeg"
                alt="School Bus" width={700} height={400} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Playground */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-48">
                <Image src="/latestimage/kids_musical_chair_with_teachers_activity_modern_global_school_dalmiyanagar_dehri.jpeg"
                  alt="Play Area" width={350} height={250} className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-48">
                <Image src="/latestimage/kids_playing_in_the_ground_modern_global_school_dalmiyanagar_dehri.jpeg"
                  alt="Playing" width={350} height={250} className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-md h-40">
                <Image src="/latestimage/kids_playing_in_the_playground_modern_global_school_dalmiyanagar_dehri.jpeg"
                  alt="Playground" width={700} height={220} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#16A34A] font-bold text-sm uppercase tracking-widest">Active Living</span>
              <h2 className="text-3xl font-black text-[#1E3A8A] mt-2 mb-5 section-line" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Playground & Sports Area
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our spacious playground and dedicated sports ground give students ample space for physical activity, outdoor sports, and recreational play. A safe, supervised play area is specially designed for younger children.
              </p>
              {["Cricket & Football ground", "Dedicated kids play area", "Athletics track", "Outdoor fun zones", "Supervised playtime daily"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <i className="fas fa-check-circle text-[#16A34A]" />{f}
                </div>
              ))}
            </div>
          </div>

          {/* Premises */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-[#1E3A8A]" style={{ fontFamily: 'var(--font-playfair-display), serif' }}>
                Our Premises
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { img: "/latestimage/corridor_premises_modern_global_school_dalmiyanagar_dehri.jpeg", label: "Spacious Corridors" },
                { img: "/latestimage/steps_premises_modern_global_school_dalmiyanagar_dehri.png", label: "Beautiful Premises" },
                { img: "/latestimage/toilet_modern_global_school_dalmiyanagar.jpeg", label: "Hygienic Washrooms" }
              ].map(({ img, label }) => (
                <div key={label} className="rounded-2xl overflow-hidden shadow-md">
                  <div className="h-52">
                    <Image src={img} alt={label} width={450} height={280} className="w-full h-full object-cover gallery-img" />
                  </div>
                  <div className="bg-white p-4 text-center">
                    <span className="font-bold text-gray-700 text-sm">{label}</span>
                  </div>
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
