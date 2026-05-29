import { motion } from "motion/react";
import { Heart, Globe, Shield, Users, Flame, Award } from "lucide-react";

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 lg:px-12 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-glow-gold rounded-full opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading subtitle="Our Mission" title="Spreading the Glory of God through Modern Technology" />
          <p className="text-xl text-slate-300 leading-loose mx-auto font-serif italic mb-12">
            "The Bible Glory was born out of a desire to make the Word of God accessible, engaging, and personal for every believer in the digital age. We believe that technology should be a bridge to faith, not a barrier."
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-white mb-2">High</p>
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">Engagement</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-white mb-2">Many</p>
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">Languages</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-white mb-2">Infinite</p>
              <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">Grace</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-gold-500/5 to-transparent">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-8">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">God-Centered</h3>
              <p className="text-slate-400 leading-relaxed">Everything we build is designed to draw users closer to God and deepen their relationship with the Holy Spirit.</p>
            </div>
            <div className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-indigo-500/5 to-transparent">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-8">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Universal Community</h3>
              <p className="text-slate-400 leading-relaxed">We foster a safe global community where believers can support, pray, and grow together without borders.</p>
            </div>
            <div className="glass-card p-10 rounded-[2.5rem] border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-8">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Biblical Integrity</h3>
              <p className="text-slate-400 leading-relaxed">We are committed to preserving the truth of scripture and providing biblically-sound resources for all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32 bg-white/[0.02] py-32 rounded-[4rem] mx-6 lg:mx-12 border border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2673&auto=format&fit=crop"
              alt="Founders Faith"
              className="w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#d4af3720] backdrop-blur-xl border border-[#d4af3730] rounded-[2rem] p-8 hidden lg:flex flex-col items-center justify-center text-center">
              <Award size={40} className="text-[#d4af37] mb-3" />
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">Award Winning</p>
              <p className="text-xs text-white font-serif">Faith App</p>
            </div>
          </div>
          <div>
            <SectionHeading subtitle="Our Story" title="A Vision for a Digitally Renewed Faith" centered={false} />
            <div className="space-y-6 text-slate-400 leading-loose">
              <p>The journey of The Bible Glory began in a small prayer circle, where we realized that while the world was becoming more connected, many believers felt more isolated in their spiritual walks.</p>
              <p>We saw the potential of mobile technology not just as a distraction, but as a sanctuary. A place where a single notification could lead to a life-changing encounter with God.</p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center">
                  <Flame size={24} className="text-black" />
                </div>
                <div>
                  <p className="text-white font-bold italic">"Let your light so shine before men."</p>
                  <p className="text-[10px] uppercase text-slate-500 font-bold">Matthew 5:16</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
