import { motion } from "motion/react";
import { Download, Play, ArrowRight, ShieldCheck, Zap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-glow-gold rounded-full opacity-20"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-glow-blue rounded-full opacity-10"></div>

      <div className="max-w-7xl mx-auto px-12 relative z-10 w-full text-center">
        <div className="text-center mb-12">
          <p className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Continue Your Journey</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Download the App to Keep Reading</h1>
        </div>

        <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Experience the full power of The Bible Glory. Join millions of believers who use our mobile app for a deeper, more personal faith journey.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto mb-24">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#d4af3730] rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop"
                alt="App Illustration"
                className="w-[300px] h-[600px] object-cover rounded-[3rem] border-[12px] border-black shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-left space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-white italic">Why use the app?</h3>
              <ul className="space-y-6">
                {[{icon:Zap,text:"Instant access to all Bible versions even offline."},{icon:Heart,text:"Personalized daily devotionals based on your heart's needs."},{icon:ShieldCheck,text:"Securely sync your bookmarks and notes across all devices."}].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-[#d4af3710] flex items-center justify-center text-[#d4af37] shrink-0"><item.icon size={20} /></div>
                    <p className="text-slate-300 leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="flex-1 px-8 py-5 bg-black text-white rounded-2xl font-bold flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl border border-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-[#d4af37] transition-colors"><Download size={28} /></div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase opacity-50 tracking-widest mb-1">Download on the</p>
                  <p className="text-xl">App Store</p>
                </div>
              </button>
              <button className="flex-1 px-8 py-5 bg-black text-white rounded-2xl font-bold flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl border border-white/10 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:text-[#d4af37] transition-colors"><Play size={28} /></div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase opacity-50 tracking-widest mb-1">Get it on</p>
                  <p className="text-xl">Google Play</p>
                </div>
              </button>
            </div>

            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px]">
              Return to Website <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
