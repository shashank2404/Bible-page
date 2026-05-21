import { motion } from "motion/react";
import { Book, Bookmark, Globe, Search, ChevronDown, Filter, List, ArrowRight } from "lucide-react";

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{title}</motion.h2>
  </div>
);

export default function Bible() {
  const versions = ["King James Version (KJV)", "New International Version (NIV)", "English Standard Version (ESV)", "Hindi Bible (BSI)", "Spanish (Reina Valera)"];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Daily Bible Reading" title="Experience the Living Word" />
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="hidden lg:block space-y-4">
              <div className="glass-card p-6 rounded-2xl h-fit">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2"><List size={18} className="text-[#d4af37]" />Books of the Bible</h3>
                <div className="space-y-1 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                  {["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings"].map(book => (
                    <button key={book} className="w-full text-left px-4 py-2 rounded-lg text-slate-400 hover:bg-white/5 hover:text-white transition-all text-sm">{book}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div className="glass-card rounded-3xl overflow-hidden border-white/5 shadow-2xl">
                <div className="bg-white/5 p-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-all">John <ChevronDown size={16} /></button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/10 transition-all">Chapter 1 <ChevronDown size={16} /></button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-3 bg-[#d4af3710] text-[#d4af37] rounded-xl hover:bg-[#d4af3720] transition-all" title="Bookmark"><Bookmark size={20} /></button>
                    <button className="p-3 bg-white/5 text-slate-400 rounded-xl hover:bg-white/10 transition-all" title="Search"><Search size={20} /></button>
                    <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold rounded-xl hover:scale-105 transition-all text-sm shadow-xl">ESV <ChevronDown size={16} /></button>
                  </div>
                </div>
                <div className="p-10 lg:p-16 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="max-w-2xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                      <h1 className="text-4xl font-serif font-bold text-white mb-2">John 1</h1>
                      <p className="text-[#d4af37] font-medium tracking-widest text-xs uppercase">The Word Became Flesh</p>
                    </div>
                    <div className="space-y-6 text-xl leading-loose text-slate-200 font-serif">
                      <p><span className="text-[#d4af37] font-bold mr-3 text-sm align-top mt-1">1</span>In the beginning was the Word, and the Word was with God, and the Word was God.</p>
                      <p><span className="text-[#d4af37] font-bold mr-3 text-sm align-top mt-1">2</span>He was in the beginning with God.</p>
                      <p><span className="text-[#d4af37] font-bold mr-3 text-sm align-top mt-1">3</span>All things were made through him, and without him was not any thing made that was made.</p>
                      <p><span className="text-[#d4af37] font-bold mr-3 text-sm align-top mt-1">4</span>In him was life, and the life was the light of men.</p>
                      <p><span className="text-[#d4af37] font-bold mr-3 text-sm align-top mt-1">5</span>The light shines in the darkness, and the darkness has not overcome it.</p>
                    </div>
                    <div className="pt-16 flex items-center justify-between border-t border-white/5">
                      <button className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">Previous Chapter</button>
                      <button className="text-[#d4af37] hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">Next Chapter <ArrowRight size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><Filter className="text-[#d4af37]" />Bible Versions</h3>
                  <div className="space-y-2">
                    {versions.map(v => (
                      <button key={v} className="w-full text-left px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-[#d4af3750] transition-all text-sm">{v}</button>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><Globe className="text-indigo-400" />Multi-language Support</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">Read the Bible in your native tongue. We support over 150 languages with high-quality translations.</p>
                  <div className="flex flex-wrap gap-2">
                    {["Hindi","Spanish","French","German","Chinese","Arabic","Portuguese"].map(lang => (
                      <span key={lang} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-slate-500 hover:text-white hover:border-indigo-500 transition-colors cursor-pointer">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32 bg-white/[0.02] py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-glow-gold opacity-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="Verse Bookmarking" title="Save the Verses that Speak to Your Soul" centered={false} />
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">Never lose track of a verse that touched your heart. With our advanced bookmarking system, you can categorize, tag, and add personal reflections to any scripture.</p>
            <ul className="space-y-4">
              {["Organize favorites by categories like Peace, Healing, or Faith.","Add personal notes and reflections to each bookmarked verse.","Access your saved wisdom across all your devices.","Share elegant verse cards directly from your bookmarks."].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glass-card p-8 rounded-[3rem] border-[#d4af3730] rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3"><Bookmark className="text-[#d4af37] fill-current" /><span className="text-white font-bold">My Bookmarks</span></div>
                <span className="text-xs text-slate-500">12 Sections</span>
              </div>
              <div className="space-y-4">
                {[{ref:"Isaiah 41:10",msg:"Fear not, for I am with you...",cat:"Peace"},{ref:"Romans 8:28",msg:"And we know that for those...",cat:"Faith"},{ref:"Psalm 23:1",msg:"The Lord is my shepherd...",cat:"Comfort"}].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs font-bold text-white">{item.ref}</p>
                      <span className="text-[10px] px-2 py-0.5 bg-[#d4af3710] text-[#d4af37] rounded-full">{item.cat}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 italic">"{item.msg}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
