import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAV_LINKS } from '@/data';
import { useScrollSpy } from '@/hooks/useScrollSpy';

function scrollToSection(id) {
  const el = document.getElementById(id.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-bg"
              style={{ background: 'linear-gradient(135deg,#00d4ff,#8b5cf6)' }}>A</span>
            <span className="font-bold text-base text-white">Abu<span className="gradient-text">.</span></span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`nav-link ${activeSection === link ? 'active' : ''}`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block btn-primary text-white text-sm py-2.5 px-5"
            >
              Hire Me
            </button>
            <button onClick={() => setMobileOpen(v => !v)} className="md:hidden text-slate-300 hover:text-white transition-colors">
              {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass-strong border-b border-white/[0.07] md:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link}
                  onClick={() => { scrollToSection(link); setMobileOpen(false); }}
                  className={`text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200
                    ${activeSection === link
                      ? 'bg-cyan-400/10 text-cyan-400'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => { scrollToSection('contact'); setMobileOpen(false); }}
                className="btn-primary mt-3 text-white text-center"
              >
                Hire Me
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
