import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';
import { HERO_ROLES } from '@/data';
import {
  SiReact, SiSpringboot, SiLaravel, SiNodedotjs,
  SiDocker, SiMysql, SiMongodb, SiOpenai
} from 'react-icons/si';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const FLOAT_ICONS = [
  { Icon: SiReact, color: '#61dafb', pos: 'top-[18%] left-[8%]', delay: 0 },
  { Icon: SiSpringboot, color: '#6db33f', pos: 'top-[12%] right-[12%]', delay: 0.5 },
  { Icon: SiLaravel, color: '#ff2d20', pos: 'top-[55%] left-[5%]', delay: 1 },
  { Icon: SiNodedotjs, color: '#3c873a', pos: 'top-[60%] right-[6%]', delay: 1.5 },
  { Icon: SiDocker, color: '#2496ed', pos: 'top-[80%] left-[15%]', delay: 0.8 },
  { Icon: SiOpenai, color: '#10b981', pos: 'top-[30%] right-[4%]', delay: 0.3 },
  { Icon: SiMysql, color: '#4479a1', pos: 'top-[82%] right-[14%]', delay: 1.2 },
  { Icon: SiMongodb, color: '#47a248', pos: 'top-[38%] left-[4%]', delay: 0.7 },
];

function scrollToSection(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export default function Hero() {
  const typed = useTypewriter(HERO_ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating tech icons */}
      {FLOAT_ICONS.map(({ Icon, color, pos, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          className={`absolute ${pos} hidden lg:flex items-center justify-center
            w-12 h-12 rounded-xl glass border border-white/10 animate-float`}
          style={{ animationDelay: `${delay * 0.8}s`, animationDuration: `${5 + delay}s` }}
        >
          <Icon size={22} color={color} />
        </motion.div>
      ))}

      <div className="section-wrapper flex flex-col items-center text-center z-10">
        {/* Availability badge */}
        <motion.div {...fadeUp(0.2)}
          className="inline-flex items-center gap-2.5 glass border border-cyan-400/25 rounded-full px-5 py-2.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-300 tracking-wide">
            Available for Freelance & Full-Time Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.35)} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-4">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Mohamed</span>
          <br />
          <span className="text-white/90">Abusin </span>
          <span className="text-slate-500 font-light">(Abu)</span>
        </motion.h1>

        {/* Role */}
        <motion.p {...fadeUp(0.45)} className="text-xl md:text-2xl font-semibold text-slate-300 mb-3 tracking-wide">
          Full Stack Software Engineer
        </motion.p>

        {/* Typewriter */}
        <motion.div {...fadeUp(0.55)} className="h-10 flex items-center justify-center mb-10">
          <span className="text-lg md:text-xl font-mono text-cyan-400">{typed}</span>
          <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary text-white flex items-center gap-2"
          >
            View Projects <FiArrowRight />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-outline flex items-center gap-2"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex flex-wrap gap-10 justify-center mt-16 pt-12 border-t border-white/[0.06] w-full max-w-2xl"
        >
          {[
            { val: '2+', label: 'Years Exp.' },
            { val: '10+', label: 'Projects' },
            { val: '20+', label: 'APIs Built' },
            { val: '5+', label: 'AI Integrations' },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold gradient-text-cyan">{val}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.25em] text-slate-600 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
