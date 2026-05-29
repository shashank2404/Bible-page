import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Heart, ShieldCheck, ArrowRight, HelpCircle, MessageCircle, Zap } from "lucide-react";
import { devotionalsData } from "../data/devotionals";

export default function DevotionalDetail() {
  const { id } = useParams();
  const dev = id ? devotionalsData[id] : null;

  if (!dev) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-white text-2xl font-bold mb-8">Devotional not found</h1>
        <Link to="/devotionals" className="text-[#d4af37] font-bold">Return to Devotionals</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Link to="/devotionals" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} /> Back to Devotionals
        </Link>
        <div className="text-center mb-12">
          <p className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Daily Inspiration</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{dev.title}</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-12 rounded-[3.5rem] border-[#d4af3730] bg-[#d4af3705]">
              <BookOpen className="text-[#d4af37] mb-8" size={32} />
              <blockquote className="text-3xl font-serif font-bold text-white mb-6 leading-relaxed italic">"{dev.verse}"</blockquote>
              <p className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-8">{dev.verseRef}</p>
              <div className="pt-8 border-t border-white/5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Zap size={18} className="text-[#d4af37]" />Verse Meaning</h4>
                <p className="text-slate-400 leading-relaxed font-serif">{dev.verseMeaning}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-12 rounded-[3.5rem] border-white/5">
              <Heart size={32} className="text-pink-500 mb-8" />
              <h3 className="text-2xl font-serif font-bold text-white mb-6 italic">Short Message</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-serif">{dev.shortMessage}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-12 rounded-[3.5rem] border-white/5">
              <HelpCircle size={32} className="text-indigo-400 mb-8" />
              <h3 className="text-2xl font-serif font-bold text-white mb-8 italic">Reflection Questions</h3>
              <div className="space-y-6">
                {dev.questions.map((q, i) => (
                  <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/5">
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">{i + 1}</span>
                    <p className="text-slate-300 font-medium">{q}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass-card p-10 rounded-[3rem] border-[#d4af3720] bg-gradient-to-br from-[#d4af3710] to-transparent">
              <MessageCircle size={32} className="text-[#d4af37] mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-4 italic">Guided Prayer</h3>
              <div className="p-6 bg-black/40 rounded-2xl border border-[#d4af3710] italic text-slate-300 leading-loose">"{dev.prayer}"</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glass-card p-10 rounded-[3rem] border-white/5">
              <ShieldCheck size={32} className="text-green-500 mb-6" />
              <h3 className="text-xl font-serif font-bold text-white mb-6 italic">Daily Action Step</h3>
              <ul className="space-y-4">
                {dev.actionSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 items-center text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />{step}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card p-10 rounded-[3rem] border-[#d4af3730] bg-[#d4af3705] text-center">
              <h4 className="text-white font-bold mb-4">Keep Growing</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">Unlock 365+ days of curated devotionals with audio narration.</p>
              <Link to="/download" className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold rounded-xl text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Continue in App <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
