import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { plansData } from "../data/plans";

export default function PlanDetail() {
  const { id } = useParams();
  const plan = id ? plansData[id] : null;

  if (!plan) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-white text-2xl font-bold mb-8">Plan not found</h1>
        <Link to="/reading-plans" className="text-[#d4af37] font-bold">Return to Reading Plans</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/reading-plans" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-12 font-bold uppercase tracking-widest text-[10px]">
          <ArrowLeft size={14} /> Back to Plans
        </Link>

        <div className="text-center mb-12">
          <p className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">{plan.subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{plan.title}</h1>
        </div>

        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-card p-12 rounded-[3rem] border-[#d4af3730] bg-[#d4af3705] relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#d4af37] to-transparent opacity-50"></div>
            <BookOpen className="text-[#d4af37] mx-auto mb-8" size={32} />
            <blockquote className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-relaxed">"{plan.verse}"</blockquote>
            <p className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm">{plan.verseRef}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-10 rounded-[2.5rem] border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6"><Heart size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-4 italic">Short Message</h3>
              <p className="text-slate-400 leading-relaxed font-serif">{plan.shortMessage}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glass-card p-10 rounded-[2.5rem] border-white/5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6"><ShieldCheck size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-4 italic">Verse Meaning</h3>
              <p className="text-slate-400 leading-relaxed font-serif">{plan.verseMeaning}</p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-12 rounded-[3rem] text-center border-[#d4af3720] bg-gradient-to-b from-white/5 to-transparent">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Deeper Study Awaits</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">This is just the beginning. Download our app for the full multi-day study plan, audio narration, and prayer journaling.</p>
            <Link to="/download" className="group px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto w-fit">
              Continue Plan in App <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
