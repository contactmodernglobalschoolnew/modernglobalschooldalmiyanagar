'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import EnquiryModal from './EnquiryModal';

const links = [
  { l: "Home", h: "/#home" },
  { l: "Academics", h: "/academics" },
  { l: "Admission", h: "/#admission" },
  { l: "Facilities", h: "/facilities" },
  { l: "Mandatory Disclosure", h: "/mandatory-disclosure" },
  { l: "Notice-Board", h: "/notice-board" },
  { l: "Gallery", h: "/gallery" },
  { l: "Contact Us", h: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [enquiry, setEnquiry] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(href.slice(1));
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Ticker */}
      <div className="bg-[#FF6B35] text-white text-xs py-1.5 overflow-hidden">
        <div className="ticker whitespace-nowrap flex gap-16">
          <span>🎉 Admissions Open 2026–27 — Enroll Now!</span>
          <span>📢 Annual Sports Day 2026 — Stay Tuned!</span>
          <span>🏆 100% Result in Board Exams — Proud Moment!</span>
          <span>📚 New Digital Smart Classes Now Available</span>
          <span>📞 Call +91-09798560695 for Admission Enquiry</span>
          <span>🎉 Admissions Open 2026–27 — Enroll Now!</span>
          <span>📢 Annual Sports Day 2026 — Stay Tuned!</span>
          <span>🏆 100% Result in Board Exams — Proud Moment!</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-lg' : 'border-b border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/#home" onClick={(e) => handleClick(e, '/#home')} className="flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#8B5CF6]/20">
                <Image src="/latestimage/logo_modern_global_school_dalmiyanagar_dehri.jpg" alt="Modern Global School" width={44} height={44} className="object-cover w-full h-full" />
              </div>
              <div className="leading-tight">
                <div className="navbar-logo-text text-[#7C3AED] text-base sm:text-lg lg:text-xl leading-none">Modern Global School</div>
                <div className="navbar-address-text text-xs sm:text-xs lg:text-sm text-gray-500">Dalmianagar, Rohtas, Bihar</div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden xl:flex items-center gap-1">
              {links.map(({ l, h }) => (
                <Link key={l} href={h} onClick={(e) => handleClick(e, h)}
                  className="nav-link text-gray-700 hover:text-[#8B5CF6] px-2 py-1 font-medium whitespace-nowrap transition-colors">
                  {l}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2">
              <button onClick={() => setEnquiry(true)}
                className="hidden md:inline-flex items-center gap-1 bg-[#FF6B35] hover:bg-[#FF8E53] text-white nav-cta-btn font-bold px-2.5 py-1.5 rounded-full transition-colors whitespace-nowrap">
                <i className="fas fa-user-plus text-[9px]" /> Admit 2026–27
              </button>
              <button onClick={() => setOpen(!open)} className="xl:hidden hamburger p-2 rounded-lg hover:bg-gray-100" aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="xl:hidden border-t border-gray-100 py-3 space-y-0.5">
              {links.map(({ l, h }) => (
                <Link key={l} href={h} onClick={(e) => handleClick(e, h)}
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#F3E8FF] hover:text-[#8B5CF6] rounded-lg transition-colors">
                  {l}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <button onClick={() => { setOpen(false); setEnquiry(true); }}
                  className="w-full text-center bg-[#FF6B35] text-white text-xs font-bold px-3 py-2 rounded-full">
                  Admit 2026–27
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <EnquiryModal open={enquiry} onClose={() => setEnquiry(false)} />
    </>
  );
}
