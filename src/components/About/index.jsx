import { motion } from 'framer-motion';
import SectionTitle from '@/components/Common/SectionTitle';
import { ABOUT_POINTS } from '@/data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-wrapper">
        <SectionTitle
          eyebrow="Who I Am"
          title="About"
          highlight="Me"
          subtitle="Passionate engineer who loves building real-world products that scale — from system design to pixel-perfect UIs."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="glass rounded-2xl p-8 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.15),rgba(139,92,246,0.15))', border: '1px solid rgba(0,212,255,0.2)' }}>
                  👨‍💻
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Mohamed Abusin</div>
                  <div className="text-xs text-cyan-400 font-mono">Full Stack Engineer · 2+ yrs</div>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-5">
                I'm a Full Stack Software Engineer with <span className="text-cyan-400 font-semibold">2+ years of experience</span> designing and building production-ready web applications from the ground up.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                My core strength lies in <span className="text-violet-400 font-semibold">backend systems</span> — crafting scalable REST APIs, secure auth flows, and database architectures — while maintaining a strong frontend sensibility with React.js and Tailwind CSS.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-7">
                I've integrated <span className="text-emerald-400 font-semibold">AI/LLM APIs</span>, built payment flows with Stripe and Razorpay, and deployed services with Docker on Linux environments. I'm drawn to product engineering roles where clean architecture and real user impact meet.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Product Thinker', 'Clean Code Advocate', 'Fast Learner'].map(tag => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ABOUT_POINTS.map((pt, i) => (
              <motion.div
                key={pt.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -5, borderColor: 'rgba(0,212,255,0.3)' }}
                className="glass rounded-2xl p-6 border border-white/[0.06] transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-4">{pt.icon}</div>
                <h3 className="font-bold text-white text-sm mb-2">{pt.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
