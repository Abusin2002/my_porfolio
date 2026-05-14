import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { SiReact, SiGithub, SiLeetcode, SiWhatsapp } from 'react-icons/si';

const SOCIALS = [
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/abu-softwareengineer', color: '#0077b5' },
  { Icon: SiGithub, href: 'https://github.com/Abusin2002', color: '#ffffff' },
  { Icon: SiLeetcode, href: 'https://leetcode.com/u/abu0101/', color: '#ffa116' },
  { Icon: SiWhatsapp, href: 'https://wa.me/917540030577', color: '#25d366' },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: 'linear-gradient(90deg,transparent,#00d4ff,#8b5cf6,transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <button onClick={scrollToTop} className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-bg"
            style={{ background: 'linear-gradient(135deg,#00d4ff,#8b5cf6)' }}>A</span>
          <span className="font-bold text-white">Abu<span className="gradient-text">.</span></span>
        </button>

        {/* Center */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            Built with{' '}
            <span className="inline-flex items-center gap-1">
              <SiReact className="text-cyan-400" size={11} /> React.js
            </span>{' '}
            &amp; ❤️ by{' '}
            <span className="text-slate-300 font-semibold">Mohamed Abusin</span>
          </p>
          <p className="text-[10px] text-slate-700 mt-1">© {new Date().getFullYear()} · All rights reserved</p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ Icon, href, color }, i) => (
            <motion.a key={i} href={href} target="_blank" rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.08] hover:border-white/20 transition-colors duration-200"
              style={{ '--color': color }}>
              <Icon size={14} style={{ color }} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
