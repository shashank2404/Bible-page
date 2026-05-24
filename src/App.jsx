import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { BookOpen, MessageSquare, Heart, Globe, Bookmark, Calendar, Menu, X, ArrowRight, Star, Download, Smartphone, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import ReadingPlans from "./pages/ReadingPlans";
import Devotionals from "./pages/Devotionals";
import Community from "./pages/Community";
import Bible from "./pages/Bible";
import About from "./pages/About";
import Support from "./pages/Support";
import DownloadPage from "./pages/Download";
import PlanDetail from "./pages/PlanDetail";
import DevotionalDetail from "./pages/DevotionalDetail";
import SignIn from "./pages/SignIn";
import PrayerWarRoom from "./pages/Prayerwarroom";
import ArticleDetail from "./pages/Articledetail";

const LogoIcon = () => (
  <div className="w-10 h-10 bg-gradient-to-tr from-[#d4af37] to-[#f5d17a] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] relative">
    <div className="absolute w-1 h-6 bg-black rounded-full"></div>
    <div className="absolute w-4 h-1 bg-black rounded-full -translate-y-1.5"></div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? "bg-black/40 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <LogoIcon />
          <span className="text-xl font-semibold tracking-tight text-white">The Bible <span className="text-[#d4af37]">Glory</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link to="/reading-plans" className="hover:text-[#d4af37] transition-colors">Reading Plans</Link>
          <Link to="/devotionals" className="hover:text-[#d4af37] transition-colors">Devotionals</Link>
          <Link to="/community" className="hover:text-[#d4af37] transition-colors">Community</Link>
          <Link to="/prayer-war-room" className="hover:text-[#d4af37] transition-colors">Prayer War Room</Link>
          <Link to="/signin" className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-white rounded-full border border-white/10 transition-all text-center">Sign In</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-8">
            <div className="flex flex-col gap-6 text-lg text-white">
              <Link to="/reading-plans" onClick={() => setIsMobileMenuOpen(false)}>Reading Plans</Link>
              <Link to="/devotionals" onClick={() => setIsMobileMenuOpen(false)}>Devotionals</Link>
              <Link to="/community" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
              <Link to="/bible" onClick={() => setIsMobileMenuOpen(false)}>Bible</Link>
              <Link to="/prayer-war-room" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d4af37] transition-colors">Prayer War Room</Link>
              <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#d4af37] transition-colors">Sign In</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    { name: "Sarah M.", text: "This app helped me stay connected with scripture daily like never before." },
    { name: "Daniel K.", text: "This platform provides deep clarity on complex biblical passages." },
    { name: "Rebekah T.", text: "The devotionals are my morning anchor. Deeply spiritual content." },
    { name: "Michael R.", text: "The community prayer wall is a beautiful place for fellowship." },
    { name: "Emma L.", text: "I love the multi-language support. Reading in Hindi feels so personal." }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow relative overflow-hidden min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 1.05, y: -10 }} transition={{ duration: 0.4 }} className="w-full">
            <Quote size={40} className="text-gold-500/20 mb-6" />
            <p className="text-xl md:text-2xl text-slate-200 italic leading-relaxed mb-8 font-serif">"{testimonials[currentIndex].text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-transparent opacity-50"></div>
              <div>
                <p className="text-[#d4af37] font-bold tracking-widest text-sm uppercase">{testimonials[currentIndex].name}</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-tighter">Verified Believer</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-[#d4af37]" : "w-4 bg-white/10"}`} />
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => (
  <>
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-glow-gold rounded-full"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black z-10"></div>
        <img src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2547&auto=format&fit=crop" alt="Divine Background" className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px]" referrerPolicy="no-referrer" />
      </div>
      <div className="max-w-7xl mx-auto px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 glass-pill w-fit rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-[#d4af37] animate-pulse"></span>
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">Faith Redesigned for You</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-serif font-bold text-white leading-[1.1]">Grow Closer to <br /><span className="italic text-[#d4af37]">God</span> Every Day</h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">Read the Bible, explore powerful devotionals, and find biblically-rooted guidance anytime, anywhere.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/download" className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform flex items-center">Start Reading</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative hidden lg:flex items-center justify-center p-12">
            <div className="w-72 h-[520px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden animate-float">
              <div className="p-6 pt-12 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4 text-[9px] font-bold">
                  <span className="text-white opacity-40 uppercase tracking-widest">Psalm 23:1</span>
                  <span className="text-[#d4af37]">Daily Verse</span>
                </div>
                <p className="text-lg font-serif italic text-white/90 leading-relaxed mb-4">"The Lord is my shepherd; I shall not want."</p>
                <div className="w-full h-[1px] bg-white/10 mb-4"></div>
                <div className="space-y-3 opacity-60 flex-grow">
                  <div className="h-3 w-full bg-slate-800 rounded"></div>
                  <div className="h-3 w-4/5 bg-slate-800 rounded"></div>
                </div>
                <div className="mt-auto">
                  <div className="h-12 w-full bg-[#d4af37] rounded-xl flex items-center justify-center text-black font-bold text-sm">Read Full Chapter</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-24 relative z-10 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[{ label: "Daily Verse Engagement", val: "High" }, { label: "Bible Versions", val: "Many" }, { label: "Questions Answered", val: "Insights" }, { label: "Prayer Circles", val: "Community" }].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <p className="text-4xl font-serif font-bold text-white tracking-tight">{stat.val}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Premium Features</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Spiritual Tools for Your Journey</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {[{ icon: BookOpen, title: "Daily Bible Reading", desc: "Access scripture anytime with a clean reading experience.", to: "/bible" }, { icon: Heart, title: "Daily Devotionals", desc: "Stay spiritually motivated with curated devotionals.", to: "/devotionals" }, { icon: Globe, title: "Multi-language Support", desc: "Read scripture in multiple languages including Hindi.", to: "/bible" }, { icon: Bookmark, title: "Verse Bookmarking", desc: "Save your favorite scriptures and revisit them anytime.", to: "/bible" }, { icon: Calendar, title: "Reading Plans", desc: "Build a consistent relationship with God through guided plans.", to: "/reading-plans" }].map((f, i) => (
            <Link key={i} to={f.to} className="block">
              <motion.div whileHover={{ y: -10 }} className="glass-card p-8 rounded-3xl group">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-300"><f.icon size={28} /></div>
                <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">One Body</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Join a Growing Christian Community</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8 text-left">
            <div className="glass-card p-10 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-center">
              <img src="https://images.unsplash.com/photo-1544427928-c49cdfebf49c?q=80&w=2670&auto=format&fit=crop" alt="Community" className="w-48 h-48 object-cover rounded-3xl shadow-xl shrink-0" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 italic">Spiritual Connections Worldwide</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">Connect with believers worldwide through shared devotionals, prayer circles, and meaningful discussions.</p>
                <Link to="/community" className="flex items-center gap-2 text-[#d4af37] font-bold">Join Discussion Groups <ArrowRight size={20} /></Link>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 rounded-[2.5rem] flex flex-col text-left">
            <h4 className="text-xl font-serif font-bold text-white mb-8">Recent Testimonials</h4>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>

    <section className="py-32 relative overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2670&auto=format&fit=crop" alt="Sky" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      </div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Start Today</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Your Faith Journey Begins with a Single Step</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link to="/download" className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl flex items-center justify-center">Read the Bible For Free</Link>
          <Link to="/community" className="w-full md:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center">Join Our Community</Link>
        </div>
      </div>
    </section>
  </>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8"><LogoIcon /><span className="font-semibold text-xl text-white">The Bible Glory</span></div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">Dedicated to helping believers worldwide experience the Word of God through modern technology and community.</p>
          <div className="flex gap-4">
            {[Globe, Star, MessageSquare].map((Icon, i) => (
              <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#d4af37] cursor-pointer transition-colors"><Icon size={18} /></div>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Resources</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/bible" className="hover:text-[#d4af37] transition-colors">Daily Reading</Link></li>
            <li><Link to="/devotionals" className="hover:text-[#d4af37] transition-colors">Daily Devotionals</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Company</h5>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">About</Link></li>
            <li><Link to="/community" className="hover:text-[#d4af37] transition-colors">Community</Link></li>
            <li><Link to="/support" className="hover:text-[#d4af37] transition-colors">Support</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Newsletter</h5>
          <p className="text-sm text-slate-500 mb-6 italic">The Word of God in your inbox daily.</p>
          <div className="relative">
            <input type="email" placeholder="name@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-[#d4af37] transition-colors text-white" />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-[#d4af37] text-black rounded-lg font-bold text-[10px] uppercase">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} The Bible Glory. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reading-plans" element={<ReadingPlans />} />
          <Route path="/reading-plans/:id" element={<ArticleDetail />} />
          <Route path="/devotionals" element={<Devotionals />} />
          <Route path="/devotionals/:id" element={<DevotionalDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/bible" element={<Bible />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/prayer-war-room" element={<PrayerWarRoom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
