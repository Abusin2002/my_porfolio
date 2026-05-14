import { motion } from 'framer-motion';
import SectionTitle from '@/components/Common/SectionTitle';
import { EXPERIENCE } from '@/data';
import { HiBriefcase } from 'react-icons/hi';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="section-wrapper max-w-3xl">
        <SectionTitle
          eyebrow="Career"
          title="Work"
          highlight="Experience"
          subtitle="My professional journey building real-world software products."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="relative ml-16 mb-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[52px] top-5 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(139,92,246,0.15))', border: '1px solid rgba(0,212,255,0.3)', boxShadow: '0 0 20px rgba(0,212,255,0.2)' }}>
                <HiBriefcase className="text-cyan-400" size={20} />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-7 border border-white/[0.07]">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-1">{exp.type}</div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full font-semibold"
                    style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', color: '#a78bfa' }}>
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.07, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
