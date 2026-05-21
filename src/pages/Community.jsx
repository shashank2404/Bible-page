import { motion } from "motion/react";
import { Users, Heart, MessageSquare, ShieldCheck, Flame, Globe, Video, Calendar, ArrowRight, Mic, Star, Zap, Layout } from "lucide-react";

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{title}</motion.h2>
  </div>
);

const FeatureCard = ({ title, items, icon: Icon }) => (
  <motion.div whileHover={{ y: -5 }} className="glass-card p-8 rounded-3xl h-full border-white/5 hover:border-[#d4af3730] transition-all">
    <div className="w-12 h-12 rounded-2xl bg-[#d4af3715] flex items-center justify-center text-[#d4af37] mb-6"><Icon size={24} /></div>
    <h3 className="text-xl font-serif font-bold text-white mb-6 tracking-tight">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
          <div className="w-1 h-1 rounded-full bg-[#d4af37]"></div><span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Community() {
  return (
    <div className="pt-32 pb-24">
      <section className="relative px-12 mb-32 overflow-hidden">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-glow-blue opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading subtitle="Faith Grows Better Together" title="A Global Fellowship of Believers" />
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">Connect with believers around the world, share testimonies, pray together, and grow spiritually through a supportive Christian community.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl">Join the Community</button>
            <button className="w-full md:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md">Explore Discussions</button>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Engagement" title="Ways to Connect & Grow" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Prayer Rooms" icon={Heart} items={["Healing & Restoration","Family & Home","Exams & Students","Anxiety & Inner Peace","Spiritual Growth"]} />
            <FeatureCard title="Faith Discussions" icon={MessageSquare} items={["Verse Analysis","Christian Lifestyle","Theology Conversations","Daily Reflections","End-times Biblical Views"]} />
            <FeatureCard title="Testimony Sharing" icon={Flame} items={["Life-changing Stories","Miracles in Action","Answered Prayers","Faith Journeys","Overcoming Trials"]} />
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <SectionHeading subtitle="Social Connectivity" title="Community Feed" centered={false} />
              <p className="text-lg text-slate-400 mb-10">A modern feed with devotionals, verse sharing, prayer updates, and inspirational content.</p>
              <div className="space-y-4">
                {[{icon:Zap,label:"Christian Reels & Shorts"},{icon:Heart,label:"Private Faith Groups"}].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 glass-pill p-4 rounded-2xl">
                    <item.icon size={20} className="text-[#d4af37]" />
                    <span className="text-sm font-medium text-slate-200">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="glass-card rounded-[3rem] p-8 border-[#d4af3720]">
                <div className="space-y-6">
                  {[{user:"Sarah Grace",avatar:"1",content:"God is so good! The 7-day peace plan helped my daily walk.",amens:"Many"},{user:"Pastor John",avatar:"2",content:"Great virtual Bible study tonight on Romans 8:28.",amens:"Join us"}].map((post, i) => (
                    <div key={i} className="pb-6 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800 overflow-hidden"><img src={`https://i.pravatar.cc/150?u=${post.avatar}`} alt="Avatar" /></div>
                        <p className="text-sm font-bold text-white">{post.user}</p>
                      </div>
                      <p className="text-slate-300 text-sm italic mb-4">"{post.content}"</p>
                      <button className="px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full text-[10px] font-bold text-[#d4af37] flex items-center gap-2">
                        <Flame size={12} /> AMEN ({post.amens})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto glass-card p-16 rounded-[4rem] border-[#d4af3730] bg-[#d4af3705] grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionHeading subtitle="Community Safety" title="A Safe Space for Growth" centered={false} />
            <ul className="space-y-4">
              {["Active moderation for healthy discussions","Scripture-based community guidelines","Supportive prayer groups","Uplifting community responses"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <div className="flex items-center gap-3 mb-4"><ShieldCheck className="text-blue-400" /><span className="text-sm font-bold text-white">Community Wellness</span></div>
            <p className="text-sm text-slate-400 italic">"Our community is built on grace. Let's lift each other up in every conversation."</p>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Active Faith" title="Weekly Challenges" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-[3rem]">
              <h4 className="text-xl font-serif font-bold text-white mb-6">Activities</h4>
              <div className="space-y-4 text-sm text-slate-400">
                <p>• Bible reading streaks</p><p>• Prayer challenges</p><p>• Scripture memorization contests</p><p>• Group devotional challenges</p>
              </div>
            </div>
            <div className="glass-card p-10 rounded-[3rem] bg-gold-500/5">
              <h4 className="text-xl font-serif font-bold text-white mb-6">Rewards</h4>
              <div className="flex flex-wrap gap-4">
                {["Badges","Community Ranks","Faith Streak Levels"].map(r => (
                  <span key={r} className="px-4 py-2 glass-pill rounded-xl text-xs text-[#d4af37] font-bold">{r}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[{icon:Video,label:"Live Worship"},{icon:Layout,label:"Virtual Bible Study"},{icon:Calendar,label:"Events Calendar"},{icon:Mic,label:"Live Prayer Streams"}].map((item, i) => (
            <div key={i} className="p-8 glass-card rounded-3xl flex flex-col items-center gap-4 text-center">
              <item.icon className="text-[#d4af37]" /><span className="text-sm font-bold text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-12">
        <div className="max-w-5xl mx-auto glass-card p-16 rounded-[4rem] text-center border-[#d4af3730] bg-black">
          <SectionHeading subtitle="Never Walk Alone" title="Join Our Fellowship" />
          <p className="text-lg text-slate-400 mb-12">Become part of a Christ-centered community where faith and growth happen together.</p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold rounded-full text-xl flex items-center gap-3 mx-auto">
            Join Community Today <ArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
}
