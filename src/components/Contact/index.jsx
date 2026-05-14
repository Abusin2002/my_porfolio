import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/Common/SectionTitle';
import { FiMail, FiSend, FiMessageCircle } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiLeetcode, SiWhatsapp } from 'react-icons/si';

const SOCIALS = [
  { Icon: FaLinkedin, label: 'LinkedIn', href: '#', color: '#0077b5' },
  { Icon: SiGithub, label: 'GitHub', href: '#', color: '#ffffff' },
  { Icon: SiLeetcode, label: 'LeetCode', href: '#', color: '#ffa116' },
  { Icon: SiWhatsapp, label: 'WhatsApp', href: 'https://wa.me/917540030577', color: '#25d366' },
];

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">{label}</label>
      {props.as === 'textarea' ? (
        <textarea
          {...props}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
            text-white text-sm placeholder-slate-600 outline-none transition-all duration-300 resize-none
            focus:border-cyan-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]"
        />
      ) : (
        <input
          {...props}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]
            text-white text-sm placeholder-slate-600 outline-none transition-all duration-300
            focus:border-cyan-400/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.08)]"
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-surface/40">
      <div className="section-wrapper max-w-5xl">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact"
          highlight="Me"
          subtitle="Available for freelance projects and full-time roles. Let's build something great."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-7 border border-white/[0.07]">
              <h3 className="font-bold text-white text-base mb-6">Direct Contact</h3>
              {[
                { Icon: FiMail, label: 'Email', val: 'abu@gmail.com', href: 'mailto:abu@gmail.com', color: '#00d4ff' },
                { Icon: FiMessageCircle, label: 'WhatsApp', val: '+91 7540030577', href: 'https://wa.me/917540030577', color: '#25d366' },
              ].map(({ Icon, label, val, href, color }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/[0.04] transition-colors duration-200 group border-b border-white/[0.05] last:border-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</div>
                    <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{val}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass rounded-2xl p-7 border border-white/[0.07]">
              <h3 className="font-bold text-white text-base mb-5">Find Me Online</h3>
              <div className="flex flex-wrap gap-3">
                {SOCIALS.map(({ Icon, label, href, color }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300
                      border border-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-250 group"
                    style={{ '--social-color': color }}>
                    <Icon size={15} style={{ color }} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-2xl p-5 border border-emerald-500/20 flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <div>
                <div className="text-sm font-semibold text-white">Open to Opportunities</div>
                <div className="text-xs text-slate-400 mt-0.5">Freelance · Full-Time · Contract</div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/[0.07] h-full">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <div className="text-5xl mb-5">🎉</div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm">I'll get back to you within 24 hours.</p>
                    <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                      className="mt-6 text-xs text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-2">
                      Send another message
                    </button>
                  </motion.div>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  <h3 className="font-bold text-white text-base mb-1">Send a Message</h3>
                  <Input label="Your Name" type="text" placeholder="John Doe"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  <Input label="Email Address" type="email" placeholder="john@company.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  <Input label="Message" as="textarea" placeholder="Tell me about your project..."
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                  {error && <p className="text-red-400 text-xs">{error}</p>}
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary text-white flex items-center justify-center gap-2 mt-1"
                  >
                    <FiSend size={15} /> Send Message
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
