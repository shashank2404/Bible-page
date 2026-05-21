import { motion } from "motion/react";
import { ArrowRight, Sun, Moon, Heart, Shield, Flame, MessageSquare, Volume2, Share2, Play, Bell, Star, Quote, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{title}</motion.h2>
  </div>
);

const CategoryCard = ({ title, description, icon: Icon, id, color }) => (
  <motion.div whileHover={{ y: -10 }} className="glass-card p-8 rounded-3xl group flex flex-col items-start h-full">
    <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${color} mb-6 group-hover:scale-110 transition-all`}><Icon size={24} /></div>
    <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{description}</p>
    <Link to={`/devotionals/${id}`} className="flex items-center gap-2 text-[#d4af37] font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
      Read Devotionals <ArrowRight size={16} />
    </Link>
  </motion.div>
);

export default function Devotionals() {
  const categories = [
    { id: "morning", title: "Morning Devotionals", description: "Start your day with encouragement, purpose, and spiritual focus.", icon: Sun, color: "text-amber-400" },
    { id: "night", title: "Night Devotionals", description: "End your day with peace, gratitude, and reflection.", icon: Moon, color: "text-indigo-400" },
    { id: "students", title: "Devotionals for Students", description: "Faith-based encouragement for studies, discipline, and life challenges.", icon: Star, color: "text-gold-500" },
    { id: "family", title: "Relationship & Family", description: "Biblical guidance for love, friendship, marriage, and family life.", icon: Heart, color: "text-pink-500" },
    { id: "warfare", title: "Spiritual Warfare", description: "Learn how to stay spiritually strong during difficult seasons.", icon: Shield, color: "text-amber-500" },
    { id: "motivation", title: "Motivation & Purpose", description: "Discover God's purpose for your life and stay spiritually motivated.", icon: Flame, color: "text-orange-500" }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="relative px-12 mb-32 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-gold opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading subtitle="Daily Encouragement for Your Soul" title="Strengthen Your Faith Every Day" />
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">Receive inspiring devotionals crafted to strengthen your faith, renew your mind, and guide your everyday life through biblical wisdom.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">Read Today's Devotional</button>
            <button className="w-full md:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md">Explore Topics</button>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="glass-card rounded-[3rem] p-10 border-[#d4af3730] bg-gradient-to-br from-[#d4af3705] to-transparent">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs">Today's Reflection</span>
                  <div className="flex gap-4 text-slate-500"><Share2 size={18} className="cursor-pointer hover:text-white" /><Volume2 size={18} className="cursor-pointer hover:text-white" /></div>
                </div>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4"><Quote size={24} className="text-[#d4af37]" /><h3 className="text-2xl font-serif font-bold text-white">Walking on Water</h3></div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"But when he saw the wind, he was afraid and, beginning to sink, cried out, 'Lord, save me!'" — Matthew 14:30</p>
                  <p className="text-slate-400 leading-relaxed">Focus on Jesus, not the storm. When Peter took his eyes off the Lord, the waves overwhelmed him. Today, keep your gaze fixed on the Prince of Peace...</p>
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"><Play size={18} className="text-white fill-current" /></div>
                    <div><p className="text-xs font-bold text-white">Listen to Audio</p><p className="text-[10px] text-slate-500">3:45 Duration</p></div>
                  </div>
                  <button className="px-6 py-2 glass-pill rounded-xl text-xs font-bold text-[#d4af37]">Share Card</button>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading subtitle="The Experience" title="Deeper Study, Modern Tools" centered={false} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[{label:"Scripture of the Day",icon:Star},{label:"Reflection message",icon:Heart},{label:"Real-life application",icon:Zap},{label:"Prayer section",icon:Flame},{label:"Study discussion prompts",icon:MessageSquare},{label:"Shareable verse cards",icon:Share2}].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 glass-pill p-4 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37]"><item.icon size={20} /></div>
                    <span className="text-sm font-medium text-slate-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Featured Categories" title="Inspiration For Every Life Chapter" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} id={cat.id} title={cat.title} description={cat.description} icon={cat.icon} color={cat.color} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto glass-card p-16 rounded-[4rem] border-[#d4af3730] bg-[#d4af3705] relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <SectionHeading subtitle="Guided Reflection" title="A Companion for Your Spiritual Journey" centered={false} />
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">Experience features designed to help you process scripture and apply it to your life.</p>
              <div className="space-y-4">
                {[{icon:MessageSquare,label:"Curated reflection questions"},{icon:Star,label:"Personalized devotional suggestions"},{icon:Heart,label:"Thematic devotional recommendations"},{icon:Volume2,label:"Voice narration support"},{icon:Bell,label:"Daily reminder notifications"}].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#d4af3720] flex items-center justify-center"><Heart size={18} className="text-[#d4af37]" /></div>
                <span className="text-sm font-bold text-white">Daily Reflection Guide</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none"><p className="text-xs text-slate-400 mb-1 font-bold">Suggested Reflection:</p><p className="text-sm text-slate-200 italic">"How can you apply Peter's step of faith to your current struggle at work this week?"</p></div>
                <div className="bg-[#d4af3710] p-4 rounded-2xl rounded-tr-none border border-[#d4af3710]"><p className="text-sm text-white leading-relaxed">God doesn't call us to handle the storm, He calls us to handle our focus.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading subtitle="Engagement" title="A Community of Faith in Action" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[{icon:Share2,label:"Share Testimonies"},{icon:Flame,label:"React to Stories"},{icon:MessageSquare,label:"Post Prayers"},{icon:Heart,label:"Save Favorites"},{icon:Users,label:"Discussion Groups"}].map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-8 glass-card rounded-3xl flex flex-col items-center gap-4 hover:border-[#d4af3750] transition-all">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#d4af37]"><item.icon size={24} /></div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-12">
        <div className="max-w-5xl mx-auto glass-card p-16 rounded-[4rem] text-center border-[#d4af3730] bg-gradient-to-r from-black to-slate-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-glow-gold opacity-10 blur-[150px]"></div>
          <div className="relative z-10">
            <SectionHeading subtitle="Feed Your Spirit Every Day" title="Peace and Encouragement is One Tap Away" />
            <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">Find peace, encouragement, and strength through daily devotionals rooted in God's Word.</p>
            <button className="px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold rounded-full text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-3 mx-auto">
              Read Today's Devotional <ArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
