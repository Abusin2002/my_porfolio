import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  const { title, desc, tech, color, icon, features, live, github } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-2xl border border-white/[0.07] overflow-hidden
        transition-all duration-500 hover:border-white/20 cursor-pointer"
      style={{ '--project-color': color }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}10 0%, transparent 70%)` }} />

      {/* Banner */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${color}12 0%, rgba(0,0,0,0.3) 100%)` }}>
        <div className="text-6xl">{icon}</div>
        {/* Top-right accent dot */}
        <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full animate-pulse-glow"
          style={{ background: color, boxShadow: `0 0 10px ${color}` }} />
        {/* Bottom edge gradient */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#04060f] to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {features.map(f => (
            <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: `${color}12`, border: `1px solid ${color}30`, color }}>
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map(t => (
            <span key={t} className="tech-badge text-[10px]">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <a href={live} target="_blank" rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300"
            style={{ background: `linear-gradient(135deg,${color},${color}99)` }}
            onClick={e => e.stopPropagation()}>
            <FiExternalLink size={13} /> Live Demo
          </a>
          <a href={github} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300
              border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
            onClick={e => e.stopPropagation()}>
            <FiGithub size={13} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
