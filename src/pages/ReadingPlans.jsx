import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

// ─── Inline SVG Icon System ────────────────────────────────────────────────────
const Icon = ({ d, size = 16, className = "", strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {Array.isArray(d) ? d.map((path, i) => <path key={i} d={path} />) : <path d={d} />}
  </svg>
);

const ICONS = {
  ArrowRight:    "M5 12h14M12 5l7 7-7 7",
  BookOpen:      ["M12 7v14", "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"],
  Clock:         ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
  Heart:         "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  Users:         ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"],
  CheckCircle2:  ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M9 12l2 2 4-4"],
  ShieldCheck:   ["M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", "M9 12l2 2 4-4"],
  Zap:           "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  Globe:         ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", "M2 12h20"],
  Coins:         ["M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2z", "M15.09 8.26A2.5 2.5 0 0 0 11 10.5V11", "M11 14h.01"],
  AlertTriangle: ["M21.73 18l-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z", "M12 9v4", "M12 17h.01"],
};

const LucideIcon = ({ name, size = 16, className = "" }) => {
  const d = ICONS[name];
  if (!d) return null;
  return <Icon d={d} size={size} className={className} />;
};

// ─── Sub-components ────────────────────────────────────────────────────────────
const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
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

// Props:
//   onStartPlan   — called when "Start Plan" link is clicked, receives plan object
//   onDownload    — called for all download/CTA buttons
//   onArticle     — called when an article card is clicked, receives article id string
//   onCategory    — called when a category pill is clicked, receives category id string
const ReadingPlanCard = ({ title, description, tags, onStartPlan }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card p-8 rounded-3xl group h-full flex flex-col"
  >
    <div className="flex gap-2 mb-6 flex-wrap">
      {tags.map(tag => (
        <span
          key={tag}
          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:border-[#d4af37]/30 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
    <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{description}</p>
    <button
      onClick={onStartPlan}
      className="flex items-center gap-2 text-[#d4af37] font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs"
    >
      Start Plan <LucideIcon name="ArrowRight" size={16} />
    </button>
  </motion.div>
);

// ─── Article card data ─────────────────────────────────────────────────────────
const ARTICLE_CARDS = [
  {
    id: "bible-and-debt",
    title: "What Does the Bible Say About Debt? A Christian Guide to Financial Freedom in 2026",
    category: "Faith & Finance",
    desc: "Discover how scriptures can liberate you from financial burden and lead you into stewardship, freedom, and blessing.",
    icon: "Coins",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    borderColor: "group-hover:border-amber-500/30",
  },
  {
    id: "christian-marriage",
    title: "Christian Marriage and Relationships: God's Design for Love, Dating, and Lasting Commitment",
    category: "Relationships",
    desc: "Uncover a timeless biblically-rooted pathway for finding Godly commitment, sacrificial love, and covenant harmony.",
    icon: "Heart",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    borderColor: "group-hover:border-rose-500/30",
  },
  {
    id: "christian-mental-health",
    title: "Christian Mental Health: Finding God's Peace in Anxiety, Depression, and Emotional Pain",
    category: "Mental Health",
    desc: "Connect scriptural promises and faith-based practices to find solace, relief, and divine rest from mental strain.",
    icon: "ShieldCheck",
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    borderColor: "group-hover:border-sky-500/30",
  },
  {
    id: "end-times",
    title: "Are We Living in the End Times? What the Bible Really Says About the Last Days",
    category: "Prophecy",
    desc: "Unpack what scripture says about the last days to live a spiritually watchful life with strength, hope, and purpose.",
    icon: "AlertTriangle",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-500/10",
    borderColor: "group-hover:border-rose-500/30",
  },
];

const READING_PLANS = [
  {
    title: "7 Days of Peace & Anxiety Relief",
    description: "Find calm through powerful scriptures and guided reflections focused on overcoming fear, stress, and anxiety.",
    tags: ["Peace", "Anxiety", "7 Days"],
  },
  {
    title: "21 Days Closer to God",
    description: "Develop a stronger prayer life and deeper spiritual discipline with daily scripture and devotionals.",
    tags: ["Prayer", "Discipline", "21 Days"],
  },
  {
    title: "Walking with Jesus",
    description: "A complete journey through the life, teachings, miracles, and love of Jesus Christ.",
    tags: ["Jesus", "Life of Christ", "30 Days"],
  },
  {
    title: "Healing & Restoration",
    description: "Encouraging Bible verses and reflections for emotional healing, forgiveness, and restoration.",
    tags: ["Healing", "Restoration", "14 Days"],
  },
  {
    title: "Bible for Beginners",
    description: "Simple and easy-to-understand reading plans for new believers starting their faith journey.",
    tags: ["New Believers", "Foundations", "10 Days"],
  },
];

const SMART_FEATURES = [
  { icon: "Zap",          label: "Daily Reminders"     },
  { icon: "Heart",        label: "Mood Based"          },
  { icon: "Clock",        label: "Streak Tracking"     },
  { icon: "Users",        label: "Community Support"   },
  { icon: "CheckCircle2", label: "Progress Analytics"  },
  { icon: "Globe",        label: "Multi-language"      },
];

const COMMUNITY_FEATURES = [
  "Discuss daily lessons with others",
  "Share reflections and insights",
  "Get dedicated prayer support",
  "Take part in group reading challenges",
];

const CATEGORIES = [
  { name: "Faith & Growth",          id: "faith-growth"          },
  { name: "Relationships",           id: "relationships"         },
  { name: "Healing",                 id: "healing"               },
  { name: "Purpose",                 id: "purpose"               },
  { name: "Anxiety & Peace",         id: "anxiety-peace"         },
  { name: "Leadership",              id: "leadership"            },
  { name: "Youth & Students",        id: "youth-students"        },
  { name: "Prayer Life",             id: "prayer-life"           },
  { name: "Spiritual Discipline",    id: "spiritual-discipline"  },
  { name: "End Times & Prophecy",    id: "end-times-prophecy"    },
];

// ─── Main Component ────────────────────────────────────────────────────────────
// Props (all optional):
//   onDownload(plan?)   — CTA / download button handler; receives plan object when from a card
//   onArticle(id)       — article card click handler; receives article id string
//   onCategory(id)      — category pill click handler; receives category id string
export default function ReadingPlans({ onDownload, onArticle, onCategory }) {
  const navigate = useNavigate();
  const handleDownload = (plan) => { if (onDownload) onDownload(plan); else navigate("/download"); };
  const handleArticle  = (id)   => { if (onArticle) onArticle(id); else navigate(`/reading-plans/${id}`); };
  const handleCategory = (id)   => { if (onCategory) onCategory(id); };

  return (
    <div className="pt-32 pb-24">

      {/* ── HERO ── */}
      <section className="relative px-12 mb-32 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,_rgba(212,175,55,0.35)_0%,_transparent_70%)] opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading
            subtitle="Build a Daily Habit of Faith"
            title="Spiritual Reading Plans for Every Season"
          />
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Transform your spiritual journey with guided Bible reading plans designed for every season of life — whether you want peace, wisdom, healing, discipline, or a deeper connection with God.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              onClick={() => handleDownload()}
              className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20 flex items-center justify-center"
            >
              Start a Reading Plan
            </button>
            <button
              onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full md:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Explore Categories
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY NEEDED ── */}
      <section className="px-12 mb-32 relative" id="why-needed-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Spiritual Foundation" title="Why Needed" centered={true} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARTICLE_CARDS.map(card => (
              <button
                key={card.id}
                onClick={() => handleArticle(card.id)}
                className="text-left block group w-full"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`glass-card p-6 rounded-3xl h-full border border-white/5 group-hover:bg-gradient-to-br group-hover:from-white/[0.03] group-hover:to-transparent ${card.borderColor} shadow-lg transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#d4af37]/70 bg-[#d4af37]/5 px-2.5 py-1 rounded-full border border-[#d4af37]/10">
                        {card.category}
                      </span>
                      <div className={`p-2 rounded-xl ${card.iconBg} ${card.iconColor}`}>
                        <LucideIcon name={card.icon} size={16} />
                      </div>
                    </div>
                    <h4 className="text-base font-serif font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors line-clamp-3 leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-4">
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mt-6 group-hover:gap-3 transition-all">
                    <span>Begin Guided Read</span>
                    <LucideIcon name="ArrowRight" size={12} />
                  </div>
                </motion.div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PLANS ── */}
      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Featured Plans" title="Most Loved by Our Community" centered={false} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {READING_PLANS.map((plan, i) => (
              <ReadingPlanCard
                key={i}
                {...plan}
                onStartPlan={() => handleDownload(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SMART EXPERIENCE ── */}
      <section className="px-12 mb-32 relative">
        <div className="absolute inset-0 bg-[#d4af37]/5 -z-10 rounded-[4rem]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center py-24">
          <div>
            <SectionHeading
              subtitle="Smart Reading Experience"
              title="Personalized Recommendations"
              centered={false}
            />
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Our system suggests reading plans based on your mood, spiritual goals, prayer interests, and daily habits. Experience a journey tailored just for you.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SMART_FEATURES.map((item, i) => (
                <div key={i} className="flex items-center gap-3 glass-pill p-4 rounded-2xl">
                  <LucideIcon name={item.icon} size={20} className="text-[#d4af37]" />
                  <span className="text-sm font-medium text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-10 rounded-[3rem] border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/5 to-transparent">
              <img
                src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2670&auto=format&fit=crop"
                alt="Bible Study"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl mb-8"
                referrerPolicy="no-referrer"
              />
              <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <LucideIcon name="ShieldCheck" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Daily Streak</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Growing Daily</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#d4af37] font-bold">85%</p>
                  <p className="text-[10px] text-slate-500">Plan Complete</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(circle,_rgba(212,175,55,0.4)_0%,_transparent_70%)] opacity-20 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section id="categories" className="px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Diversity in Scripture" title="Find a Plan for Every Need" />
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className="px-8 py-4 glass-pill rounded-2xl text-slate-300 font-bold hover:text-white hover:border-[#d4af37]/50 transition-all"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="px-12 mb-32">
        <div className="max-w-7xl mx-auto glass-card p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/5 to-transparent pointer-events-none" />
          <div className="relative z-10 grid lg:grid-cols-2 lg:items-center gap-16">
            <div>
              <SectionHeading
                subtitle="Community Integration"
                title="Join Others in Faith"
                centered={false}
              />
              <p className="text-lg text-slate-400 mb-8">
                Don't walk alone. Join many others reading the same plan. Share reflections, find support, and grow together.
              </p>
              <ul className="space-y-4">
                {COMMUNITY_FEATURES.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <LucideIcon name="Users" size={14} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 h-64 rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Global Prayer Circles"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                  <p className="text-white text-sm font-bold uppercase tracking-widest">Global Prayer Circles</p>
                </div>
              </div>
              <div className="flex-1 h-64 rounded-2xl overflow-hidden shadow-2xl relative pt-8">
                <img
                  src="https://images.unsplash.com/photo-1529070538774-1843cbad2ad6?q=80&w=2670&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  alt="Discussion Forums"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
                  <p className="text-white text-sm font-bold uppercase tracking-widest">Discussion Forums</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="px-12">
        <div className="max-w-7xl mx-auto glass-card p-16 rounded-[4rem] text-center border-[#d4af37]/30 bg-gradient-to-r from-[#d4af37]/5 via-[#d4af37]/10 to-[#d4af37]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(100,150,255,0.3)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
          <div className="max-w-2xl mx-auto relative z-10">
            <SectionHeading
              subtitle="Start Your Spiritual Consistency Today"
              title="Transform Your Heart and Mind"
            />
            <p className="text-lg text-slate-400 mb-12">
              Even 10 minutes a day in God's Word can change your life. Begin your journey with a guided reading plan tailored for you.
            </p>
            <button
              onClick={() => handleDownload()}
              className="group px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto"
            >
              Start Reading Now
              <LucideIcon
                name="ArrowRight"
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}