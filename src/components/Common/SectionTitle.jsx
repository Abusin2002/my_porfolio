import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow, title, highlight, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-violet-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400" />
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500" />
      </div>
      {subtitle && (
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
