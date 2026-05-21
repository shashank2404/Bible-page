import { motion } from "motion/react";
import { ArrowRight, BookOpen, Clock, Heart, Users, CheckCircle2, ShieldCheck, Zap, Globe, Download } from "lucide-react";
import { Link } from "react-router-dom";

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">{title}</motion.h2>
  </div>
);

const ReadingPlanCard = ({ title, description, tags }) => (
  <motion.div whileHover={{ y: -10 }} className="glass-card p-8 rounded-3xl group h-full flex flex-col">
    <div className="flex gap-2 mb-6 flex-wrap">
      {tags.map(tag => <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tag}</span>)}
    </div>
    <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{description}</p>
    <Link to="/download" className="flex items-center gap-2 text-[#d4af37] font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
      Start Plan <ArrowRight size={16} />
    </Link>
  </motion.div>
);

export default function ReadingPlans() {
  const plans = [
    { title: "7 Days of Peace & Anxiety Relief", description: "Find calm through powerful scriptures and guided reflections focused on overcoming fear, stress, and anxiety.", tags: ["Peace", "Anxiety", "7 Days"] },
    { title: "21 Days Closer to God", description: "Develop a stronger prayer life and deeper spiritual discipline with daily scripture and devotionals.", tags: ["Prayer", "Discipline", "21 Days"] },
    { title: "Walking with Jesus", description: "A complete journey through the life, teachings, miracles, and love of Jesus Christ.", tags: ["Jesus", "Life of Christ", "30 Days"] },
    { title: "Healing & Restoration", description: "Encouraging Bible verses and reflections for emotional healing, forgiveness, and restoration.", tags: ["Healing", "Restoration", "14 Days"] },
    { title: "Bible for Beginners", description: "Simple and easy-to-understand reading plans for new believers starting their faith journey.", tags: ["New Believers", "Foundations", "10 Days"] }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="relative px-12 mb-32 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-gold opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading subtitle="Build a Daily Habit of Faith" title="Spiritual Reading Plans for Every Season" />
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">Transform your spiritual journey with guided Bible reading plans designed for every season of life — whether you want peace, wisdom, healing, discipline, or a deeper connection with God.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/download" className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center">Start a Reading Plan</Link>
            <button onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })} className="w-full md:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md">Explore Categories</button>
          </div>
        </div>
      </section>

      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Featured Plans" title="Most Loved by Our Community" centered={false} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => <ReadingPlanCard key={i} {...plan} />)}
          </div>
        </div>
      </section>

      <section className="px-12 mb-32 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center py-24">
          <div>
            <SectionHeading subtitle="Smart Reading Experience" title="Personalized Recommendations" centered={false} />
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">Our system suggests reading plans based on your mood, spiritual goals, prayer interests, and daily habits.</p>
            <div className="grid grid-cols-2 gap-4">
              {[{icon:Zap,label:"Daily Reminders"},{icon:Heart,label:"Mood Based"},{icon:Clock,label:"Streak Tracking"},{icon:Users,label:"Community Support"},{icon:CheckCircle2,label:"Progress Analytics"},{icon:Globe,label:"Multi-language"}].map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass-pill p-4 rounded-2xl">
                  <item.icon size={20} className="text-[#d4af37]" />
                  <span className="text-sm font-medium text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-10 rounded-[3rem] border-[#d4af3720] bg-gradient-to-br from-[#d4af3705] to-transparent">
              <img src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2670&auto=format&fit=crop" alt="Bible Study" className="w-full h-80 object-cover rounded-3xl shadow-2xl mb-8" referrerPolicy="no-referrer" />
              <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400"><ShieldCheck size={24} /></div>
                  <div><p className="text-white font-bold">Daily Streak</p><p className="text-xs text-slate-500 uppercase tracking-widest">Growing Daily</p></div>
                </div>
                <div className="text-right"><p className="text-[#d4af37] font-bold">85%</p><p className="text-[10px] text-slate-500">Plan Complete</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Diversity in Scripture" title="Find a Plan for Every Need" />
          <div className="flex flex-wrap justify-center gap-4">
            {[{name:"Faith & Growth",id:"faith-growth"},{name:"Relationships",id:"relationships"},{name:"Healing",id:"healing"},{name:"Purpose",id:"purpose"},{name:"Anxiety & Peace",id:"anxiety-peace"},{name:"Leadership",id:"leadership"},{name:"Youth & Students",id:"youth-students"},{name:"Prayer Life",id:"prayer-life"},{name:"Spiritual Discipline",id:"spiritual-discipline"},{name:"End Times & Prophecy",id:"end-times-prophecy"}].map(cat => (
              <Link key={cat.id} to={`/reading-plans/${cat.id}`} className="px-8 py-4 glass-pill rounded-2xl text-slate-300 font-bold hover:text-white hover:border-[#d4af3750] transition-all">{cat.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-12">
        <div className="max-w-7xl mx-auto glass-card p-16 rounded-[4rem] text-center border-[#d4af3730] bg-gradient-to-r from-[#d4af3705] via-[#d4af3710] to-[#d4af3705] relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <SectionHeading subtitle="Start Your Spiritual Consistency Today" title="Transform Your Heart and Mind" />
            <p className="text-lg text-slate-400 mb-12">Even 10 minutes a day in God's Word can change your life. Begin your journey with a guided reading plan tailored for you.</p>
            <Link to="/download" className="group px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto">
              Start Reading Now <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
