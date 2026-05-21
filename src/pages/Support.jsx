import { motion } from "motion/react";
import { Mail, MessageSquare, Phone, HelpCircle, Search, Globe, Shield } from "lucide-react";

export default function Support() {
  const faqs = [
    { q: "How do I change Bible versions?", a: "You can change versions by clicking the version button (e.g., KJV, NIV) in the top right corner of the Bible reader." },
    { q: "Is the app truly free?", a: "Yes, our core features including reading, bookmarking, and community are free. We are supported by donations from our believers." },
    { q: "Can I use it offline?", a: "Currently, an internet connection is required to sync progress, but we are working on an offline reading mode." },
    { q: "How do I join a prayer circle?", a: "Navigate to the Community page and look for 'Prayer Rooms'. You can join any active session or start your own." }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Help Center</p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">How Can We Support You Today?</h1>
          </div>
          <div className="max-w-2xl mx-auto relative mb-16">
            <input type="text" placeholder="Search for help topics, guides, or FAQs..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 pl-16 text-white focus:outline-none focus:border-[#d4af37] transition-all shadow-2xl" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[{icon:MessageSquare,title:"Live Chat",desc:"Speak with our community support team.",color:"text-blue-400"},{icon:Mail,title:"Email Support",desc:"Send us a message and we'll reply in 24h.",color:"text-[#d4af37]"},{icon:Globe,title:"Community Forum",desc:"Find answers from other believers.",color:"text-indigo-400"}].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] hover:bg-white/5 transition-all cursor-pointer group">
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} mb-8 group-hover:scale-110 transition-transform`}><item.icon size={28} /></div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Common Questions</p>
            <h2 className="text-4xl font-serif font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border-white/5 hover:border-[#d4af3720] transition-all">
                <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                  <HelpCircle size={18} className="text-[#d4af37]" />{faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-32">
        <div className="max-w-7xl mx-auto glass-card p-12 lg:p-20 rounded-[4rem] border-[#d4af3730] bg-gradient-to-br from-[#d4af3705] to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-glow-gold rounded-full opacity-10"></div>
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-12">
                <p className="text-[#d4af37] font-bold uppercase tracking-[0.2em] text-sm block mb-4">Contact Us</p>
                <h2 className="text-4xl font-serif font-bold text-white">Send a Prayer Request or Feedback</h2>
              </div>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">We are here to listen, whether you have a technical question, a suggestion for the app, or a prayer request you'd like to share.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300"><Phone size={20} className="text-[#d4af37]" /><span>+1 (800) GROW-FAITH</span></div>
                <div className="flex items-center gap-4 text-slate-300"><Mail size={20} className="text-[#d4af37]" /><span>support@thebibleglory.com</span></div>
                <div className="flex items-center gap-4 text-slate-300"><Shield size={20} className="text-green-500" /><span>Your privacy is our priority</span></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d4af37]" />
                <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d4af37]" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d4af37]" />
              <textarea placeholder="Your message or prayer request..." rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d4af37] resize-none"></textarea>
              <button className="w-full py-5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-xl uppercase tracking-widest text-sm">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
