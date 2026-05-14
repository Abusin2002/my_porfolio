import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCounter } from '@/hooks/useCounter';
import { STATS } from '@/data';

function StatCard({ value, suffix, label, icon, index, start }) {
  const count = useCounter(value, 1800, start);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-8 border border-white/[0.07] text-center
        hover:border-cyan-400/25 transition-all duration-400 group cursor-default"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text-cyan tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="stats" className="relative py-24" ref={ref}>
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-violet-400 mb-3">By the Numbers</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Impact &amp; <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
