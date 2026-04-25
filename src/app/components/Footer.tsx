import Link from 'next/link';
import Image from 'next/image';
import { footerQuickLinks, footerAcademics, footerContact, socials, footerSEOKeywords } from '../data/schoolData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#7C3AED] to-[#1E1B4B] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
              <Image src="/latestimage/logo_modern_global_school_dalmiyanagar_dehri.jpg" alt="Logo" width={48} height={48} className="object-cover w-full h-full" />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight">Modern Global School</div>
              <div className="text-[11px] text-cyan-300">CBSE Curriculum</div>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Leading school following CBSE curriculum in Dalmianagar providing quality education and holistic development since 2019. Serving as best school in Dalmianagar, serving Dehri on Sone and surrounding areas with excellence in academics, sports, and co-curricular activities.
          </p>
          <div className="flex gap-3">
            {socials.map(({ i, l }) => (
              <a key={i} href={l} target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF6B35] flex items-center justify-center transition-colors text-sm">
                <i className={i} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">Quick Links</h4>
          <ul className="space-y-2">
            {footerQuickLinks.map(({ l, h }) => (
              <li key={l}>
                <Link href={h} className="text-gray-400 hover:text-[#FF6B35] text-sm transition-colors flex items-center gap-1.5">
                  <i className="fas fa-chevron-right text-[10px] text-[#FF6B35]" />{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">Academics</h4>
          <ul className="space-y-2">
            {footerAcademics.map(({ l }) => (
              <li key={l} className="text-gray-400 text-sm flex items-center gap-1.5">
                <i className="fas fa-chevron-right text-[10px] text-[#FF6B35]" />{l}
              </li>
            ))}
          </ul>
          <div className="mt-5 p-3 bg-[#FF6B35]/10 rounded-xl border border-[#FF6B35]/20">
            <p className="text-xs text-[#FDBA74] font-semibold mb-1">Admissions Open 2026–27</p>
            <p className="text-xs text-gray-400">Nursery to Class VIII • CBSE Curriculum • Best School in Dalmianagar</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-white/10">Contact Us</h4>
          <ul className="space-y-3">
            {footerContact.map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-sm text-gray-400">
                <i className={`${icon} text-[#FF6B35] mt-0.5 w-4 shrink-0`} />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919798560695" target="_blank" rel="noreferrer"
            className="mt-5 flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors w-fit">
            <i className="fab fa-whatsapp text-lg" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* SEO Keywords Section */}
      <div className="border-t border-white/10 bg-gradient-to-r from-[#6D28D9] to-[#312E81]">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2 justify-center text-xs text-gray-500">
            {footerSEOKeywords.map((keyword, index) => (
              <span key={index} className="hover:text-[#FF6B35] transition-colors">
                {keyword}
                {index < footerSEOKeywords.length - 1 && <span className="mx-1 text-gray-600">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2025 Modern Global School, Dalmianagar - Best CBSE School in Rohtas. All rights reserved.</p>
          <p>CBSE Affiliated | Top School in Dehri on Sone | Rohtas, Bihar 821305</p>
        </div>
      </div>
    </footer>
  );
}
