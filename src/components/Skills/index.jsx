import { motion } from 'framer-motion';
import SectionTitle from '@/components/Common/SectionTitle';
import { SKILLS } from '@/data';

function SkillCard({ name, Icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-2 glass rounded-xl p-4 border border-white/[0.06]
        hover:border-white/20 transition-all duration-300 cursor-default group"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}33` }}>
        <Icon size={20} color={color} />
      </div>
      <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors duration-200 text-center">
        {name}
      </span>
    </motion.div>
  );
}

const TECH_MARQUEE = [
  'React.js', 'Spring Boot', 'Laravel', 'Node.js', 'MySQL', 'MongoDB',
  'Redis', 'Docker', 'OpenAI', 'Tailwind CSS', 'TypeScript', 'REST APIs',
  'JWT Auth', 'Stripe', 'Razorpay', 'Git', 'Postman', 'Linux',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-surface/40">
      <div className="section-wrapper">
        <SectionTitle
          eyebrow="My Arsenal"
          title="Skills &"
          highlight="Technologies"
          subtitle="Technologies I use to build scalable, modern web applications."
        />

        <div className="space-y-10">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: gi * 0.1, duration: 0.55, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1.5 h-5 rounded-full" style={{ background: group.color }} />
                <h3 className="text-sm font-bold tracking-widest uppercase" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.items.map(item => (
                  <SkillCard key={item.name} {...item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech marquee */}
      <div className="mt-16 overflow-hidden border-y border-white/[0.05] py-4 bg-white/[0.02]">
        <div className="flex gap-12 animate-marquee w-max">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((t, i) => (
            <span key={i} className="text-xs font-mono font-semibold text-slate-600 tracking-[0.2em] uppercase whitespace-nowrap">
              ◆ {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
