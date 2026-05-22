import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Icons (inline SVG to avoid lucide-react dependency issues in plain Vite) ───
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
    Flame: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    Sparkles: ["M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", "M20 3v4", "M22 5h-4", "M4 17v2", "M5 18H3"],
    Volume2: ["M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", "M16 9a5 5 0 0 1 0 6", "M19.364 18.364a9 9 0 0 0 0-12.728"],
    VolumeX: ["M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", "M22 9 16 15", "M16 9l6 6"],
    Heart: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    Shield: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    Compass: ["M21 3 9 15", "M3.05 8.54c-.96.95-1.17 2.45-.49 3.63l3.04 5.27c.68 1.18 2.07 1.77 3.39 1.46l6.29-1.51", "M11.07 3.13c-1.3-.31-2.67.27-3.35 1.44L4.68 9.84c-.47.82-.52 1.8-.15 2.64"],
    BookOpen: ["M12 7v14", "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"],
    Award: ["M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15", "M11 12 5.12 2.2", "M13 12 18.88 2.2", "M8 7h8", "M12 12v8", "M8 19h8"],
    Plus: ["M5 12h14", "M12 5v14"],
    Search: ["M21 21l-4.34-4.34", "M11 19A8 8 0 1 0 11 3a8 8 0 0 0 0 16z"],
    CheckCircle: ["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M9 11l3 3L22 4"],
};

const LucideIcon = ({ name, size = 16, className = "" }) => {
    const d = ICONS[name];
    if (!d) return null;
    return <Icon d={d} size={size} className={className} />;
};

// ─── Types / Constants ─────────────────────────────────────────────────────────
const CATEGORY_META = {
    Healing: { icon: "Heart", scrip: "Psalm 103:2-3", quote: "Who heals all your diseases, who redeems your life from the pit.", color: "text-rose-400", bg: "bg-rose-500/10" },
    Protection: { icon: "Shield", scrip: "Psalm 91:11", quote: "For He will command His angels concerning you to guard you in all your ways.", color: "text-sky-400", bg: "bg-sky-500/10" },
    Strength: { icon: "Award", scrip: "Isaiah 40:31", quote: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles.", color: "text-amber-500", bg: "bg-amber-500/10" },
    Faith: { icon: "BookOpen", scrip: "Hebrews 11:1", quote: "Now faith is the assurance of things hoped for, the conviction of things not seen.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
    Wisdom: { icon: "Compass", scrip: "James 1:5", quote: "If any of you lacks wisdom, let him ask God, who gives generously to all.", color: "text-violet-400", bg: "bg-violet-500/10" },
    Praise: { icon: "Sparkles", scrip: "Psalm 150:6", quote: "Let everything that has breath praise the Lord. Praise the Lord!", color: "text-emerald-400", bg: "bg-emerald-500/10" },
};

const CANDLE_META = {
    gold: { name: "Anointing Gold", gradient: "from-amber-400 via-amber-500 to-yellow-600", shadow: "shadow-amber-500/50" },
    sapphire: { name: "Divine Sapphire", gradient: "from-blue-400 via-blue-700 to-blue-900", shadow: "shadow-blue-500/50" },
    pearl: { name: "Graceful Pearl", gradient: "from-slate-100 via-slate-300 to-slate-400", shadow: "shadow-white/40" },
    crimson: { name: "Crimson Altar", gradient: "from-rose-500 via-red-600 to-red-900", shadow: "shadow-rose-600/50" },
};

const INITIAL_PRAYERS = [
    { id: "prayer-1", name: "Sister Hannah", category: "Healing", content: "Please lift up my granddaughter Grace who is facing critical surgery tomorrow morning. We are keeping our faith focused entirely on God's divine and miraculous healing power.", candleColor: "crimson", amens: 142, timestamp: "12 mins ago", isLit: true },
    { id: "prayer-2", name: "Brother Samuel", category: "Protection", content: "Praying for safe passage and spiritual strength for our global missions team setting foot in high-conflict remote regions this week. Let the shield of Psalm 91 guard their footsteps.", candleColor: "sapphire", amens: 98, timestamp: "45 mins ago", isLit: true },
    { id: "prayer-3", name: "Pastor Joseph", category: "Praise", content: "A praise report! The local community food and faith shelter construction has officially begun after months of delays. Our God is faithful and will supply all needs beautifully.", candleColor: "gold", amens: 256, timestamp: "2 hours ago", isLit: true },
    { id: "prayer-4", name: "Deborah T.", category: "Wisdom", content: "Seeking divine wisdom, clarity, and God's perfect alignment for major career and vocational transformations ahead. Trusting Proverbs 3:5-6 for my forward guidance.", candleColor: "pearl", amens: 74, timestamp: "4 hours ago", isLit: true },
    { id: "prayer-5", name: "Anonymous Devotee", category: "Strength", content: "Standing in prayer for deep emotional peace, restoration of joy, and spiritual strength to navigate a heavy season of transition and heavy grief within our immediate family.", candleColor: "gold", amens: 189, timestamp: "7 hours ago", isLit: true },
    { id: "prayer-6", name: "Caleb & Ruth", category: "Faith", content: "Praying for a supernatural renewal of faith and fellowship inside our local youth ministry groups. We want to see a mighty revival and hunger for God's precious scriptures.", candleColor: "sapphire", amens: 112, timestamp: "1 day ago", isLit: true },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
const SectionHeading = ({ subtitle, title, centered = true }) => (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-[11px] block mb-3 animate-pulse"
        >
            {subtitle}
        </motion.span>
        <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight"
        >
            {title}
        </motion.h2>
    </div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
export default function PrayerWarRoom() {
    const [prayers, setPrayers] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [focusedPrayer, setFocusedPrayer] = useState(null);

    // Form state
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Faith");
    const [content, setContent] = useState("");
    const [candleColor, setCandleColor] = useState("gold");
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    // Audio refs
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioCtxRef = useRef(null);
    const oscillatorsRef = useRef([]);
    const gainNodeRef = useRef(null);

    // ── Load from localStorage ──
    useEffect(() => {
        const cached = localStorage.getItem("bible_glory_prayer_room");
        if (cached) {
            try { setPrayers(JSON.parse(cached)); }
            catch { setPrayers(INITIAL_PRAYERS); }
        } else {
            setPrayers(INITIAL_PRAYERS);
            localStorage.setItem("bible_glory_prayer_room", JSON.stringify(INITIAL_PRAYERS));
        }
    }, []);

    // Cleanup audio on unmount
    useEffect(() => {
        return () => oscillatorsRef.current.forEach(osc => { try { osc.stop(); } catch { } });
    }, []);

    const savePrayers = (updated) => {
        setPrayers(updated);
        localStorage.setItem("bible_glory_prayer_room", JSON.stringify(updated));
    };

    // ── Audio ambience ──
    const toggleAmbience = () => {
        if (isAudioPlaying) {
            if (gainNodeRef.current && audioCtxRef.current) {
                gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
                gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);
                setTimeout(() => {
                    oscillatorsRef.current.forEach(osc => { try { osc.stop(); } catch { } });
                    oscillatorsRef.current = [];
                    setIsAudioPlaying(false);
                }, 1300);
            }
        } else {
            try {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioContextClass();
                audioCtxRef.current = ctx;

                const mainGain = ctx.createGain();
                mainGain.gain.setValueAtTime(0.0001, ctx.currentTime);
                mainGain.connect(ctx.destination);
                gainNodeRef.current = mainGain;

                const baseFreqs = [132, 264, 396, 528];
                const oscs = [];

                baseFreqs.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const filter = ctx.createBiquadFilter();
                    const oscGain = ctx.createGain();

                    osc.type = idx === 0 ? "sine" : "triangle";
                    osc.frequency.setValueAtTime(freq + (Math.random() * 0.5 - 0.25), ctx.currentTime);

                    filter.type = "lowpass";
                    filter.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);
                    filter.Q.setValueAtTime(1, ctx.currentTime);

                    const vol = [0.3, 0.2, 0.15, 0.08][idx];
                    oscGain.gain.setValueAtTime(vol, ctx.currentTime);

                    osc.connect(filter);
                    filter.connect(oscGain);
                    oscGain.connect(mainGain);
                    osc.start();
                    oscs.push(osc);
                });

                mainGain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 2.5);
                oscillatorsRef.current = oscs;
                setIsAudioPlaying(true);
            } catch (err) {
                console.error("Audio init error:", err);
            }
        }
    };

    const playPrayerChime = () => {
        try {
            const ctx = audioCtxRef.current || new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.0);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            setTimeout(() => osc.stop(), 2100);
        } catch { }
    };

    // ── Submit prayer ──
    const handleIgnitePetition = (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        const newPetition = {
            id: "prayer-" + Date.now(),
            name: name.trim() || "Anonymous Intercessor",
            category,
            content: content.trim(),
            candleColor,
            amens: 1,
            timestamp: "Just lit",
            isLit: true,
        };

        savePrayers([newPetition, ...prayers]);
        playPrayerChime();
        setFormSuccess(true);

        setTimeout(() => {
            setFormSuccess(false);
            setShowSubmitModal(false);
            setName("");
            setContent("");
            setCategory("Faith");
            setCandleColor("gold");
        }, 1800);
    };

    // ── Amen ──
    const handleAgreedAmen = (id, e) => {
        e.stopPropagation();
        const updated = prayers.map(p => p.id === id ? { ...p, amens: p.amens + 1 } : p);
        savePrayers(updated);
        playPrayerChime();
        if (focusedPrayer && focusedPrayer.id === id) {
            setFocusedPrayer({ ...focusedPrayer, amens: focusedPrayer.amens + 1 });
        }
    };

    // ── Filters ──
    const filteredPrayers = prayers.filter(p => {
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        const matchesSearch =
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalLitCandles = prayers.filter(p => p.isLit).length;
    const totalAmens = prayers.reduce((acc, curr) => acc + curr.amens, 0);

    // ─────────────────────────────────────────────────────────────────────────────
    return (
        <div className="min-h-screen bg-[#070502] text-[#f7efe3] relative pb-32">
            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_rgba(212,175,55,0.08)_0%,_transparent_60%)] pointer-events-none z-0" />
            <div className="absolute top-[340px] left-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,120,30,0.03)_0%,_transparent_75%)] pointer-events-none z-0" />
            <div className="absolute bottom-[200px] right-[-300px] w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(120,90,40,0.04)_0%,_transparent_75%)] pointer-events-none z-0" />

            {/* ── HEADER ── */}
            <div className="pt-32 pb-16 px-6 md:px-12 text-center relative z-10 max-w-7xl mx-auto">

                {/* Ambience toggle */}
                <div className="flex justify-end items-center max-w-5xl mx-auto mb-10">
                    <button
                        onClick={toggleAmbience}
                        className={`flex items-center gap-3 px-5 py-2.5 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${isAudioPlaying
                            ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/40 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                            : "bg-white/[0.02] text-slate-400 border-white/5 hover:bg-white/5"
                            }`}
                    >
                        <LucideIcon name={isAudioPlaying ? "Volume2" : "VolumeX"} size={14} className={isAudioPlaying ? "animate-pulse" : ""} />
                        <span>Anointing Atmosphere: {isAudioPlaying ? "ON" : "OFF"}</span>
                    </button>
                </div>

                {/* Title */}
                <div className="max-w-3xl mx-auto mb-16">
                    <div className="w-16 h-16 bg-gradient-to-tr from-[#3a2810] to-amber-950/40 rounded-full flex items-center justify-center border border-yellow-500/30 shadow-[0_0_30px_rgba(212,175,55,0.15)] mx-auto mb-6">
                        <LucideIcon name="Flame" size={28} className="text-yellow-400 animate-pulse" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                        The Prayer{" "}
                        <span className="italic text-yellow-400 font-normal underline decoration-yellow-500/20 decoration-wavy">
                            War Room
                        </span>
                    </h1>
                    <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-serif text-sm md:text-[15px]">
                        "For where two or three are gathered in my name, there am I among them." Enter this virtual space, light a candle of hope, and share your prayer request.
                    </p>
                </div>

                {/* Stats + CTA */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
                    <div className="bg-[#120d06] border border-yellow-500/10 p-6 rounded-2xl flex flex-col justify-center items-center">
                        <span className="text-3xl font-serif font-bold text-yellow-400">{totalLitCandles}</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Active Lit Candles</span>
                    </div>
                    <div className="bg-[#120d06] border border-yellow-500/10 p-6 rounded-2xl flex flex-col justify-center items-center">
                        <span className="text-3xl font-serif font-bold text-yellow-400">{totalAmens.toLocaleString()}</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-2">Prayers Offered</span>
                    </div>
                    <div className="col-span-2 md:col-span-1 bg-gradient-to-r from-[#201407] to-[#120d06] border border-yellow-500/25 p-6 rounded-2xl flex flex-col justify-center items-center">
                        <button
                            onClick={() => setShowSubmitModal(true)}
                            className="w-full text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-[1.03] active:scale-95 transition-all py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/10"
                        >
                            <LucideIcon name="Plus" size={16} /> New Prayer Request
                        </button>
                    </div>
                </div>

                {/* ── PRAYER FEED ── */}
                <div className="max-w-6xl mx-auto text-left relative z-10">
                    <SectionHeading subtitle="Prayer Wall" title="Prayer Requests" centered={false} />

                    {/* Search + Category filters */}
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
                        <div className="relative flex-grow max-w-md">
                            <LucideIcon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500/60" />
                            <input
                                type="text"
                                placeholder="Search names, scriptures, intentions..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full bg-[#120d06] border border-yellow-500/10 rounded-xl py-3 pl-12 pr-4 text-sm text-[#f7efe3] placeholder-slate-600 focus:outline-none focus:border-yellow-500/40 transition-all font-serif"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0">
                            {["All", "Healing", "Protection", "Strength", "Faith", "Wisdom", "Praise"].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${activeCategory === cat
                                        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30 shadow-[0_0_10px_rgba(212,175,55,0.05)]"
                                        : "bg-[#120d06] text-slate-400 border-white/5 hover:border-white/10 hover:text-[#f7efe3]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Prayer cards grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredPrayers.map(p => {
                                const meta = CATEGORY_META[p.category];
                                const candleMeta = CANDLE_META[p.candleColor] || CANDLE_META.gold;

                                return (
                                    <motion.div
                                        layout
                                        key={p.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.35 }}
                                        onClick={() => setFocusedPrayer(p)}
                                        className="bg-[#120d06]/70 hover:bg-[#120d06] border border-yellow-500/10 hover:border-yellow-500/30 rounded-3xl p-6 relative z-10 cursor-pointer transition-all hover:scale-[1.01] flex flex-col justify-between min-h-[290px] shadow-lg group"
                                    >
                                        <div>
                                            <div className="flex justify-between items-start mb-5">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-9 h-9 rounded-xl ${meta.bg} ${meta.color} flex items-center justify-center`}>
                                                        <LucideIcon name={meta.icon} size={16} />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-white tracking-tight">{p.name}</p>
                                                        <span className="text-[9px] uppercase font-bold tracking-widest text-yellow-400/85 block mt-0.5">{p.category}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-t ${candleMeta.gradient} animate-pulse shadow-[0_0_6px_#d4af37]`} />
                                                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Lit Vow</span>
                                                </div>
                                            </div>

                                            <p className="text-slate-300 text-sm italic font-serif leading-relaxed mb-6 line-clamp-4">
                                                "{p.content}"
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-yellow-500/10 flex justify-between items-center mt-4">
                                            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">{p.timestamp}</span>
                                            <button
                                                onClick={e => handleAgreedAmen(p.id, e)}
                                                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/5 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/15 transition-all text-xs font-bold uppercase tracking-wider active:scale-95"
                                            >
                                                <LucideIcon name="Flame" size={12} className="animate-bounce" />
                                                <span>Amen ({p.amens})</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Empty state */}
                    {filteredPrayers.length === 0 && (
                        <div className="text-center py-20 bg-[#120d06]/30 border border-white/5 rounded-3xl">
                            <LucideIcon name="BookOpen" size={40} className="mx-auto text-slate-600 mb-4 animate-bounce" />
                            <p className="text-lg font-serif italic text-slate-400 mb-2">No prayer requests found</p>
                            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                                Try refining your active filter tags or share a brand new prayer request on the wall today.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* ── FOCUSED PRAYER MODAL ── */}
            <AnimatePresence>
                {focusedPrayer && (
                    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#0f0b05] border border-yellow-500/30 max-w-xl w-full rounded-[2rem] p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />

                            <button
                                onClick={() => setFocusedPrayer(null)}
                                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors text-sm font-bold z-10 cursor-pointer"
                            >
                                ✕
                            </button>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-2xl ${CATEGORY_META[focusedPrayer.category].bg} ${CATEGORY_META[focusedPrayer.category].color} flex items-center justify-center`}>
                                        <LucideIcon name={CATEGORY_META[focusedPrayer.category].icon} size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-white leading-none">{focusedPrayer.name}</h4>
                                        <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 block mt-1.5">{focusedPrayer.category} Category</span>
                                    </div>
                                </div>

                                <div className="bg-[#17120a] border-l-2 border-yellow-500/70 p-4 rounded-r-xl rounded-l-sm mb-6">
                                    <span className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold block mb-1">
                                        Divine Promise • {CATEGORY_META[focusedPrayer.category].scrip}
                                    </span>
                                    <p className="text-slate-300 italic font-serif text-sm leading-relaxed">
                                        "{CATEGORY_META[focusedPrayer.category].quote}"
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Prayer Request</p>
                                    <p className="text-slate-200 font-serif leading-relaxed text-base italic bg-black/40 border border-white/5 p-5 rounded-2xl">
                                        "{focusedPrayer.content}"
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-yellow-500/10">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Status Timeline</span>
                                        <span className="text-xs text-white font-medium italic font-serif">{focusedPrayer.timestamp}</span>
                                    </div>
                                    <button
                                        onClick={e => handleAgreedAmen(focusedPrayer.id, e)}
                                        className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:scale-105 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-yellow-500/10"
                                    >
                                        <LucideIcon name="CheckCircle" size={14} /> Agree Amen ({focusedPrayer.amens})
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* ── SUBMIT PRAYER MODAL ── */}
            <AnimatePresence>
                {showSubmitModal && (
                    <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#0f0b05] border border-yellow-500/30 max-w-xl w-full rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden text-left"
                        >
                            <button
                                onClick={() => setShowSubmitModal(false)}
                                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-colors text-sm font-bold z-10 cursor-pointer"
                            >
                                ✕
                            </button>

                            <div className="relative z-10">
                                {formSuccess ? (
                                    <div className="text-center py-10">
                                        <div className="w-16 h-16 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-yellow-400">
                                            <LucideIcon name="CheckCircle" size={32} className="animate-bounce" />
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Prayer Request Shared</h3>
                                        <p className="text-slate-400 text-sm italic font-serif max-w-xs mx-auto">
                                            "Your prayer request is now on the prayer wall. The community stands in agreement with you."
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <span className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold block mb-1">Share Your Request</span>
                                            <h3 className="text-3xl font-serif font-bold text-white">New Prayer Request</h3>
                                            <p className="text-slate-400 text-xs mt-1.5 font-serif">Compose your prayer openly or leave it anonymously. Customize your candle selection.</p>
                                        </div>

                                        <form onSubmit={handleIgnitePetition} className="space-y-5">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Your Name / Initials</label>
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Sister Grace (or blank for Anonymous)"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    className="w-full bg-black/40 border border-yellow-500/20 rounded-xl py-3.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-yellow-500/60 font-serif"
                                                />
                                            </div>

                                            {/* Category */}
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Covenant Category</label>
                                                <div className="grid grid-cols-3 gap-2">
                                                    {Object.keys(CATEGORY_META).map(catName => (
                                                        <button
                                                            key={catName}
                                                            type="button"
                                                            onClick={() => setCategory(catName)}
                                                            className={`py-2 px-3 border rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${category === catName
                                                                ? "bg-yellow-500/15 border-yellow-400 text-white"
                                                                : "bg-black/20 border-white/5 text-slate-400 hover:border-white/10 text-[10px]"
                                                                }`}
                                                        >
                                                            {catName}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Candle color */}
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Vigil Candle Color Aura</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {Object.entries(CANDLE_META).map(([key, item]) => (
                                                        <button
                                                            key={key}
                                                            type="button"
                                                            onClick={() => setCandleColor(key)}
                                                            className={`p-3 border rounded-xl transition-all flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider ${candleColor === key
                                                                ? "bg-yellow-500/15 border-yellow-400 text-white"
                                                                : "bg-black/20 border-white/5 text-slate-400 hover:border-white/10"
                                                                }`}
                                                        >
                                                            <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-t ${item.gradient} border border-white/10 shadow-[0_0_8px_rgba(215,175,55,0.15)]`} />
                                                            <span className="text-[10px]">{item.name}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Prayer content */}
                                            <div className="space-y-1.5">
                                                <label className="text-[10px] uppercase tracking-widest text-yellow-400 font-bold">Your Prayer Request</label>
                                                <textarea
                                                    rows={4}
                                                    required
                                                    value={content}
                                                    onChange={e => setContent(e.target.value)}
                                                    placeholder="Type your prayer request, scripture alignment, or praise report here..."
                                                    className="w-full bg-black/40 border border-yellow-500/20 rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-yellow-500/60 font-serif leading-relaxed"
                                                />
                                            </div>

                                            {/* Actions */}
                                            <div className="grid grid-cols-3 gap-3 pt-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setShowSubmitModal(false)}
                                                    className="py-3 px-6 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs rounded-xl transition-all flex items-center justify-center cursor-pointer"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="col-span-2 py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1 cursor-pointer"
                                                >
                                                    <LucideIcon name="Flame" size={14} /> Share Request
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}