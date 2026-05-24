import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  BookOpen,
  Heart,
  ShieldCheck,
  Coins,
  AlertTriangle,
  Flame,
  ChevronDown,
  ChevronUp,
  Compass,
  Users,
  Plus,
  Sparkles,
  HelpCircle,
  Clock,
  Briefcase,
} from "lucide-react";

export const ARTICLES_DATA = {
  "bible-and-debt": {
    id: "bible-and-debt",
    title:
      "What Does the Bible Say About Debt? A Christian Guide to Financial Freedom in 2026",
    subtitle: "Reclaiming Your Freedom for Divine Stewardship",
    category: "Faith & Finance",
    icon: Coins,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    bannerImg:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2670&auto=format&fit=crop",
    scripture: "The borrower is servant to the lender.",
    scriptureRef: "Proverbs 22:7",
    introduction:
      "Debt is one of the greatest silent burdens people carry today. Behind smiles, social media posts, and busy schedules, millions of families are fighting financial stress, anxiety, and uncertainty.\n\nCredit cards are increasing. Loans are becoming normal. Financial pressure is destroying peace in homes.\n\nBut the question many Christians ask is:\nWhat does the Bible say about debt? Does God care about financial struggles? Can a Christian become financially free? Is borrowing a sin? What are biblical principles for managing money?\n\nThe answer is yes — Scripture gives profound wisdom about debt, stewardship, wealth, generosity, and financial peace.",
    sections: [
      {
        title: "What Does the Bible Say About Debt?",
        content:
          "The Bible does not say all debt is automatically sinful. However, Scripture consistently warns that debt can create bondage and stress.\n\nOne of the clearest verses is Proverbs 22:7 which reveals a central spiritual principle: Debt limits freedom. When payments control your decisions, peace disappears. Many people today are not only financially exhausted — they are emotionally and spiritually drained.\n\nGod desires His people to live with wisdom, stewardship, and peace.",
      },
      {
        title: "Why Financial Stress Is Increasing Worldwide",
        content:
          "In recent years, inflation has increased globally, making basic bills a heavy struggle for many. Young adults especially are finding themselves trapped in revolving credit card debt as anxiety related to personal finances rises rapidly.\n\nDaily queries like \"how to get out of debt,\" \"Bible verses about money,\" and \"Christian financial advice\" are surging. This is why Christian personal finance has become one of the fastest-growing faith topics online.",
      },
      {
        title: "1. God Owns Everything",
        content:
          "The first principle of biblical finance is understanding ownership. \"The earth is the Lord's, and everything in it.\" — Psalm 24:1. Your money is not truly yours — it is entrusted to you by God.\n\nThis changes everything: Spending becomes stewardship, saving becomes wisdom, and giving becomes worship.",
      },
      {
        title: "2. Avoid Unnecessary Debt",
        content:
          "Modern culture thrives on buy now and pay later, instant gratification, and continuous lifestyle comparison. But biblical wisdom teaches caution.\n\nNot every desire needs immediate fulfillment. Before borrowing, ask yourself: Is this necessary? Will this create peace or pressure? Am I trusting God or impulsive emotions?",
      },
      {
        title: "3. Create a Biblical Budget",
        content:
          "Many Christians pray for financial breakthrough while ignoring daily stewardship. A budget is not restriction — it is direction.\n\nSimple biblical budgeting principles include giving first, saving second, spending wisely, avoiding waste, and preparing for emergencies. Jesus Himself taught counting the cost before building: 'Suppose one of you wants to build a tower. Won't you first sit down and estimate the cost?' — Luke 14:28.",
      },
      {
        title: "Christian Budgeting for Families",
        content:
          "Family financial stress heavily affects marriages, parenting, mental health, and spiritual peace. Healthy Christian families practice financial transparency, pray before major decisions, plan wisely, and learn contentment.\n\nImportant habits include avoiding comparison lifestyles, limiting impulse purchases, building emergency savings, and teaching children biblical stewardship from an early age.",
      },
      {
        title: "How Christians Should Invest",
        content:
          "Many believers ask: \"Can Christians invest?\" Yes — when done ethically and wisely. The Bible supports wisdom, multiplication, and long-term stewardship.\n\nThe Parable of the Talents teaches responsible management of resources. Good Christian investing principles include: avoiding greed and vanity schemes, thinking long-term, staying ethical, diversifying wisely, and avoiding emotional investing.",
      },
      {
        title: "How to Trust God During Financial Hardship",
        content:
          "Financial hardship can feel overwhelming. But throughout Scripture, God provided for His people: manna in the wilderness, oil for the widow, and bread multiplied by Jesus. God may not always provide instantly, but He remains faithful.\n\nPractical faith includes prayer, wisdom, discipline, patience, and action. Faith is not ignoring responsibility. Faith is trusting God while walking wisely.",
      },
    ],
    prayer: {
      title: "Prayer for Financial Breakthrough",
      body: "Heavenly Father, Give us wisdom to manage money faithfully. Teach us contentment in every season. Break the chains of fear, anxiety, and financial bondage. Help us become good stewards of every blessing You provide. Lead families into peace, stability, generosity, and freedom. In Jesus' name, Amen.",
    },
    finalThoughts:
      "Biblical financial freedom is not about becoming rich. It is about becoming faithful. God's goal is not merely increasing income — it is transforming the heart.\n\nWhen Christians apply biblical wisdom to money, peace increases, anxiety decreases, families become stronger, generosity grows, and faith deepens. If you are struggling financially today, remember: God sees your situation. Your story is not finished.",
    faqs: [
      {
        q: "Is debt a sin in Christianity?",
        a: "Debt itself is not always sinful, but the Bible warns against becoming trapped by it.",
      },
      {
        q: "What does Jesus say about money?",
        a: "Jesus frequently taught about stewardship, generosity, and trusting God rather than wealth.",
      },
      {
        q: "Can Christians invest money?",
        a: "Yes, when investing is done ethically and wisely.",
      },
      {
        q: "What is the best Bible verse about debt?",
        a: "Proverbs 22:7 is one of the most quoted verses regarding debt and financial wisdom.",
      },
      {
        q: "How can I become debt free biblically?",
        a: "Practice stewardship, budgeting, disciplined spending, prayer, and wise financial planning.",
      },
    ],
  },
  "christian-marriage": {
    id: "christian-marriage",
    title:
      "Christian Marriage and Relationships: God's Design for Love, Dating, and Lasting Commitment",
    subtitle: "Building Covenant Connection in a World of Compromise",
    category: "Relationships",
    icon: Heart,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    bannerImg:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2670&auto=format&fit=crop",
    scripture:
      "Therefore a man shall leave his father and mother and be joined to his wife, and they shall become one flesh.",
    scriptureRef: "Genesis 2:24",
    introduction:
      "Relationships shape the direction of our lives. The person you choose to love, trust, and build a future with can influence your faith, emotional health, purpose, and even your relationship with God.\n\nToday, many people are searching for answers in a landscape filled with relationship confusion, heartbreak, emotional wounds, and temporary love. But Christianity offers something deeper than modern culture: not casual affection, but covenant love.\n\nGod created marriage not merely for transient romance, but for partnership, purpose, spiritual growth, and lifelong commitment.",
    sections: [
      {
        title: "What Is God's Purpose for Marriage?",
        content:
          "Marriage was created by God from the very beginning. Biblical marriage is spiritual, emotional, physical, and covenant-based. It is not simply a legal contract — it is a sacred union established by God.\n\nThe world often teaches temporary commitment, self-centered love, and emotional convenience. But biblical love is different. Real love involves: sacrifice, patience, forgiveness, faithfulness, and service.",
      },
      {
        title: "1. Date Someone Who Shares Your Faith",
        content:
          "One of the most important biblical principles is spiritual unity. \"Do not be unequally yoked with unbelievers.\" — 2 Corinthians 6:14.\n\nA relationship without shared faith often creates spiritual conflict, different priorities, and emotional division. A godly relationship grows stronger when both people pursue Christ together.",
      },
      {
        title: "2. Don't Ignore Red Flags",
        content:
          "Many people pray for signs from God while ignoring obvious warnings in front of them. Common unhealthy relationship signs include manipulation, dishonesty, lack of respect, anger issues, emotional control, and a constant compromise of core values.\n\nLove should not destroy your peace, your identity, or your relationship with God.",
      },
      {
        title: "3. Purity Still Matters",
        content:
          "The Bible teaches that intimacy is powerful, beautiful, and sacred. \"Flee from sexual immorality.\" — 1 Corinthians 6:18.\n\nPurity is not about cold legalism. It is about protecting hearts, minds, and futures. Healthy Christian relationships build a strong emotional and spiritual connection first.",
      },
      {
        title: "Signs God Wants You to Leave a Relationship",
        content:
          "While every situation is unique, certain patterns reveal unhealthy and harmful paths. You may need to step away if: the relationship pulls you away from God, abuse of any kind is present, there is repeated dishonesty, your peace constantly disappears, sin is continually normalized, or there is no repentance and growth.\n\nGod is not the author of confusion, manipulation, or destruction. Sometimes leaving is not a lack of faith — it is divine wisdom.",
      },
      {
        title: "Christian Marriage Restoration",
        content:
          "Many marriages today are suffering silently under financial stress, communication breakdowns, emotional distance, and heavy unforgiveness.\n\nBut restoration is possible. God specializes in restoring broken things. Bring God back to the center by praying, worshipping, and reading Scripture together. Remember, a marriage without prayer is highly vulnerable.",
      },
      {
        title: "The Pillars of Reconciliation",
        content:
          "Restore connection by practicing radical forgiveness: \"Be kind and compassionate to one another, forgiving each other.\" — Ephesians 4:32. Healing begins when grace enters the relationship again.\n\nImprove communication by listening patiently, speaking gently, avoiding pride, and resolving conflict respectfully. When needed, seek wise counseling from mentors, pastors, and licensed Christian counselors.",
      },
    ],
    prayer: {
      title: "Prayer for Marriage and Relationships",
      body: "Heavenly Father, strengthen relationships with wisdom, peace, courage, and integrity. Bless couples with the grace to love one another with deep patience, kindness, and selflessness. Protect our homes from division and misunderstanding, and help our love reflect Your faithfulness. In Jesus' name, Amen.",
    },
    finalThoughts:
      "A healthy Christian relationship is not about perfection. It is about two imperfect people choosing grace over pride, faith over fear, commitment over convenience, and God over selfishness.\n\nMarriage is one of God's greatest gifts when built on His foundation. If your relationship is struggling today, remember: God restores hearts, heals deep wounds, and rebuilds broken foundations.",
    faqs: [
      {
        q: "What does the Bible say about dating?",
        a: "The Bible teaches purity, wisdom, faith alignment, and godly character in relationships.",
      },
      {
        q: "How do I know if God wants me to leave a relationship?",
        a: "If the relationship consistently produces harm, sin, abuse, or separation from God, wisdom and prayerful discernment are necessary.",
      },
      {
        q: "Can God restore a broken marriage?",
        a: "Yes. Many marriages are restored through forgiveness, counseling, prayer, and renewed commitment.",
      },
      {
        q: "What is the most powerful Bible verse for marriage?",
        a: "Ephesians 5:25 and 1 Corinthians 13 are among the strongest biblical teachings on marriage and love.",
      },
      {
        q: "How should Christians prepare for marriage?",
        a: "Through spiritual growth, communication, emotional maturity, financial wisdom, and prayer.",
      },
    ],
  },
  "christian-mental-health": {
    id: "christian-mental-health",
    title:
      "Christian Mental Health: Finding God's Peace in Anxiety, Depression, and Emotional Pain",
    subtitle: "Overcoming the Silent Storm to Build a Resilient Soul",
    category: "Mental Health",
    icon: ShieldCheck,
    iconColor: "text-sky-400",
    iconBg: "bg-sky-500/10",
    bannerImg:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2670&auto=format&fit=crop",
    scripture: "Cast all your anxiety on Him because He cares for you.",
    scriptureRef: "1 Peter 5:7",
    introduction:
      "Mental health has become one of the biggest struggles of this generation. Behind busy schedules, social media smiles, and daily responsibilities, millions of people silently battle anxiety, depression, fear, loneliness, emotional exhaustion, trauma, and overthinking.\n\nBut a crucial truth remains: faith does not make someone immune to emotional struggles. Even great biblical figures experienced deep emotional pain: David battled despair, Elijah experienced exhaustion, Job suffered emotionally, and Jesus Himself experienced sorrow.\n\nMental health struggles do not mean God has abandoned you.",
    sections: [
      {
        title: "What Does the Bible Say About Mental Health?",
        content:
          "The Bible may not use modern psychological terms, but it speaks deeply about fear, worry, grief, hopelessness, emotional suffering, peace, and healing. God cares profoundly about the human mind and heart.\n\n\"Cast all your anxiety on Him because He cares for you.\" — 1 Peter 5:7. This verse invites us to bring our emotional burdens openly to Him. True faith doesn't mean pretending pain does not exist; it is learning to walk through pain with God.",
      },
      {
        title: "Why Anxiety Is Increasing Worldwide",
        content:
          "In recent years, anxiety-related challenges have expanded globally. Modern life creates intense emotional pressure through financial stress, comparison culture, continuous digital overload, and isolation.\n\nPeople are searching daily for spiritual peace. Many feel emotionally exhausted even while appearing successful externally.",
      },
      {
        title: "Can Christians Experience Depression?",
        content:
          "Yes. Depression is not always caused by a lack of faith. Many faithful believers throughout history experienced emotional darkness. Elijah once prayed: \"I have had enough, Lord.\" — 1 Kings 19:4. David wrote many psalms filled with sorrow.\n\nGod responded not with condemnation, but with rest, care, presence, and strength. Mental health struggles should never produce shame in the church.",
      },
      {
        title: "Christian Healing From Trauma",
        content:
          "Trauma leaves deep emotional wounds from childhood experiences, rejection, abuse, loss, or betrayal. Healing takes time, and God restores both spiritually and emotionally.\n\n1. Be Honest With God: Healing begins when honesty replaces pretending. Express your pain openly just like the Psalmists.\n2. Renew Your Mind Daily: \"Be transformed by the renewing of your mind.\" — Romans 12:2. Replace fear with truth and lies with Scripture.",
      },
      {
        title: "Don't Isolate Yourself & Prioritize Rest",
        content:
          "3. Don't Isolate: Isolation increases emotional darkness. Healthy support from trusted friends, church community, counselors, and pastors is vital.\n\n4. Rest Matters: Exhaustion affects emotions deeply. Even Jesus rested. Sometimes spiritual healing includes simple, practical elements like sleep, healthy routines, reduced stress, and setting proper boundaries.",
      },
      {
        title: "How to Hear God During Anxiety",
        content:
          "During anxiety, God's voice is often drowned out by fear. God usually speaks through Scripture, peace, wisdom, prayer, conviction, and godly counsel.\n\nNot every loud thought is God's voice. God's guidance produces clarity, peace, truth, and direction, whereas fear produces confusion and panic.",
      },
    ],
    prayer: {
      title: "Prayer for Anxiety and Emotional Healing",
      body: "Heavenly Father, You know every burden hidden inside our hearts. Bring peace where fear exists. Bring healing where wounds remain open. Calm anxious thoughts and restore emotional strength. Teach us to trust You even in difficult seasons. In Jesus' name, Amen.",
    },
    finalThoughts:
      "Mental struggles do not disqualify someone from God's love. You can love God, pray sincerely, read Scripture, and still need healing emotionally. God is patient with hurting people.\n\nIf your mind feels heavy today, remember: you are not alone, your pain matters to God, healing is possible, and your story is not over.",
    faqs: [
      {
        q: "What does the Bible say about anxiety?",
        a: "The Bible encourages believers to bring worries to God through prayer and trust.",
      },
      {
        q: "Can Christians have depression?",
        a: "Yes. Many faithful believers throughout Scripture experienced deep emotional struggles.",
      },
      {
        q: "How do I hear God during anxiety?",
        a: "Through Scripture, prayer, peace, wisdom, and godly guidance.",
      },
      {
        q: "What Bible verse helps with anxiety?",
        a: "Philippians 4:6–7 is one of the most powerful passages about peace and anxiety.",
      },
      {
        q: "Does God care about mental health?",
        a: "Yes. Scripture repeatedly shows God caring for emotional pain and broken hearts.",
      },
    ],
  },
  "end-times": {
    id: "end-times",
    title:
      "Are We Living in the End Times? What the Bible Really Says About the Last Days",
    subtitle: "Replacing Sensational Fear with Spiritual Preparation",
    category: "Prophecy",
    icon: AlertTriangle,
    iconColor: "text-rose-550",
    iconBg: "bg-rose-550/10",
    bannerImg:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=2670&auto=format&fit=crop",
    scripture:
      "You also must be ready, because the Son of Man will come at an hour when you do not expect Him.",
    scriptureRef: "Matthew 24:44",
    introduction:
      "Wars. Artificial Intelligence. Earthquakes. Economic uncertainty. Global fear. Moral confusion.\n\nAcross the world, millions of people are asking: \"Are we living in the end times?\" Searches related to Bible prophecy have exploded in recent years. People sense that the world is changing rapidly.\n\nBut what does the Bible actually say about the last days? Are current global events connected to prophecy? What did Jesus teach? Should Christians live in fear?",
    sections: [
      {
        title: "What Are the End Times?",
        content:
          "The phrase \"end times\" refers to the period leading to the return of Jesus Christ and the fulfillment of biblical prophecy.\n\nThe Bible speaks about global instability, spiritual deception, moral decline, wars, disasters, persecution, and Christ's eventual return. Jesus warned believers to stay spiritually awake: Matthew 24:44. The true purpose of prophecy is never fear — it is preparation.",
      },
      {
        title: "Signs of the Last Days according to Scripture",
        content:
          "1. Wars and Conflict: Jesus said, \"You will hear of wars and rumors of wars...\" — Matthew 24:6.\n2. Increase in Deception: \"Many false prophets will appear and deceive many people.\" — Matthew 24:11. Deception spreads rapidly through social media, requiring robust biblical discernment.\n3. Moral Decline: 2 Timothy 3:1-5 describes a generation that would become lovers of self, money, and pride.\n4. Global Distress: \"People will faint from terror...\" — Luke 21:26.",
      },
      {
        title: "The Euphrates River Prophecy Explained",
        content:
          "In Revelation, the Euphrates River appears symbolically in end-time events. Because sections of the river have significantly dried in recent years, many people connect this to prophecy discussions online.\n\nHowever, Christians should approach prophecy carefully: avoid fear-based sensationalism, avoid false predictions, and focus on biblical truth rather than internet speculations. The Bible encourages wisdom.",
      },
      {
        title: "What Is the Mark of the Beast?",
        content:
          "The \"Mark of the Beast\" in Revelation describes a future system connected to economic control, allegiance, and global authority.\n\nWhile many complex theories exist involving technology, digital identifiers, or AI systems, Christians should avoid panic. The central issue in Revelation is ultimately worship and loyalty: allegiance to God or to systems opposed to Him.",
      },
      {
        title: "Is Artificial Intelligence Connected to Bible Prophecy?",
        content:
          "AI has become a massive topic connected to end-time speculation. While the Bible does not explicitly mention AI, it warns about deception, control systems, and the misuse of power.\n\nTechnology itself is not evil; the danger lies in how humanity uses it. Christians should approach modern technology with wisdom, discernment, and spiritual maturity.",
      },
      {
        title: "Should Christians Fear the End Times?",
        content:
          "Absolutely not. The Bible repeatedly tells believers: \"Do not be afraid.\" For Christians, prophecy is meant to strengthen faith and encourage readiness, not panic.\n\nEven during uncertain times, God remains sovereign, Christ remains King, and hope remains available. Fear should never control a believer.",
      },
      {
        title: "How Christians Should Prepare Spiritually",
        content:
          "• Stay Rooted: Truth protects against deception. Read scripture consistently (Matthew 24, Daniel, Revelation).\n• Strengthen Prayer: Prayer keeps the heart aligned with God during shake-ups.\n• Filter Content: Many online prophecy videos are designed purely for anxiety and clicks. Always test teachings through Scripture.\n• Live Faithfully: The goal is not obsession with dates, but daily holiness, love, and readiness.",
      },
    ],
    prayer: {
      title: "Prayer for Spiritual Preparedness",
      body: "Heavenly Father, keep our lamps trimmed and burning brightly. Fill us with discernment and courage to share Your hope in uncertain times. Remove all fear from our minds, and teach us to live faithfully with eternity in view. In Jesus' name, Amen.",
    },
    finalThoughts:
      "The question is not only \"Are we living in the end times?\" but rather \"Are we spiritually prepared?\"\n\nNo one knows the exact day or hour of His return. But believers are called to remain watchful, faithful, discerning, and hopeful. No matter how dark the world becomes, Jesus remains the hope of humanity.",
    faqs: [
      {
        q: "Are we currently living in the end times?",
        a: "Many Christians believe current global conditions reflect biblical signs of the last days, though no one knows the exact timeline.",
      },
      {
        q: "What are the major signs of the end times?",
        a: "Wars, deception, moral decline, global fear, and spiritual confusion are commonly connected to biblical prophecy.",
      },
      {
        q: "What is the Mark of the Beast?",
        a: "According to Revelation, it represents allegiance to a future worldly system opposed to God.",
      },
      {
        q: "Does the Bible mention AI?",
        a: "The Bible does not specifically mention artificial intelligence, but it warns about deception and misuse of power.",
      },
      {
        q: "Should Christians fear the end times?",
        a: "No. Scripture encourages believers to trust God, remain faithful, and avoid fear.",
      },
    ],
  },
};

export default function ArticleDetail() {
  const { id } = useParams();
  const article = id ? ARTICLES_DATA[id] : null;
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!article) {
    return (
      <div className="pt-48 pb-24 text-center min-h-screen bg-[#070502]">
        <h1 className="text-white text-3xl font-bold font-serif mb-6">
          Article Not Found
        </h1>
        <p className="text-slate-400 mb-12">
          The spiritual guide you are searching for is unavailable.
        </p>
        <Link
          to="/reading-plans"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-xs rounded-xl"
        >
          <ArrowLeft size={14} /> Return to Reading Plans
        </Link>
      </div>
    );
  }

  const PageIcon = article.icon;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070502] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-glow-gold opacity-15 pointer-events-none rounded-full blur-[140px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Link
          to="/reading-plans"
          className="inline-flex items-center gap-2 text-[#d4af37]/60 hover:text-[#d4af37] transition-all mb-12 font-bold uppercase tracking-[0.2em] text-[10px]"
        >
          <ArrowLeft size={14} /> Back to Reading Plans
        </Link>

        {/* Header Metadata */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#d4af37]/10 rounded-full mb-6 border border-[#d4af37]/20">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
            <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">
              {article.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-[#f7efe3]/70 font-sans text-lg md:text-xl font-medium tracking-wide">
            {article.subtitle}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative h-64 md:h-96 rounded-[3rem] overflow-hidden mb-12 border border-white/5 shadow-2xl animate-fade-in">
          <img
            src={article.bannerImg}
            alt={article.title}
            className="w-full h-full object-cover grayscale-[15%] brightness-90 hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070502] via-[#070502]/30 to-transparent"></div>
        </div>

        {/* SCRIPTURE ANCHOR CALLOUT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-10 md:p-12 rounded-[2.5rem] border-[#d4af37]/20 bg-[#120d06] mb-12 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-amber-500 to-transparent"></div>
          <BookOpen
            className="text-[#d4af37] mx-auto mb-6 animate-pulse"
            size={28}
          />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white mb-6 leading-relaxed">
            "{article.scripture}"
          </blockquote>
          <p className="text-[#d4af37] font-bold tracking-[0.25em] uppercase text-xs">
            {article.scriptureRef}
          </p>
        </motion.div>

        {/* ARTICLE BODY */}
        <div className="space-y-12 text-left">
          {/* Introduction paragraph */}
          <div className="border-l-2 border-[#d4af37]/40 pl-6 md:pl-8 italic mb-8">
            <p className="text-slate-300 font-serif leading-relaxed text-base md:text-lg whitespace-pre-line">
              {article.introduction}
            </p>
          </div>

          {/* Sub Sections */}
          <div className="space-y-10">
            {article.sections.map((sec, idx) => (
              <div
                key={idx}
                className="space-y-4 border-b border-white/5 pb-8 last:border-0 last:pb-0"
              >
                {sec.title && (
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#f7efe3] tracking-wide flex items-center gap-2">
                    <span className="text-[#d4af37] font-mono text-sm">
                      / 0{idx + 1}
                    </span>
                    {sec.title}
                  </h3>
                )}
                <p className="text-slate-400 font-sans leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>

          {/* PRAYER BLOCK (IF PRESENT) */}
          {article.prayer && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[2.5rem] border border-[#d4af37]/35 bg-gradient-to-br from-[#1c1409] to-[#0c0803] relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-6">
                <Flame className="text-[#d4af37] animate-pulse" size={24} />
                <h4 className="text-lg font-serif font-bold text-white tracking-wide">
                  {article.prayer.title}
                </h4>
              </div>
              <p className="text-[#f7efe3]/90 font-serif italic leading-relaxed text-sm md:text-base whitespace-pre-line">
                "{article.prayer.body}"
              </p>
            </motion.div>
          )}

          {/* FINAL THOUGHTS */}
          <div className="p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-[#120d06]/45 my-8 space-y-4">
            <h4 className="text-lg font-serif font-bold text-[#f7efe3] tracking-wide flex items-center gap-2">
              <Sparkles className="text-[#d4af37] shrink-0" size={18} />
              Final Thoughts
            </h4>
            <p className="text-slate-400 font-sans leading-relaxed text-sm md:text-base whitespace-pre-line">
              {article.finalThoughts}
            </p>
          </div>

          {/* FAQ SECTION (IF PRESENT) */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="space-y-6 pt-6">
              <h3 className="text-2xl font-serif font-bold text-white tracking-wide flex items-center gap-2 mb-6">
                <HelpCircle className="text-[#d4af37]" size={22} />
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                {article.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-white/5 bg-white/[0.01] rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
                      >
                        <span className="text-sm md:text-base font-serif font-bold text-white hover:text-[#d4af37] transition-all">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp
                            className="text-[#d4af37] shrink-0"
                            size={18}
                          />
                        ) : (
                          <ChevronDown
                            className="text-slate-500 shrink-0"
                            size={18}
                          />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="p-5 md:p-6 pt-0 text-slate-400 text-sm md:text-base leading-relaxed border-t border-white/5 bg-black/10">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CONNECT TO COVENANT WORKSPACE CARDS */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-lg font-serif font-bold text-white">
                Inspired by this reading?
              </h4>
              <p className="text-slate-500 text-xs">
                Explore further companion audio guides and personalized daily
                plans on our mobile sanctuary.
              </p>
            </div>
            <Link
              to="/download"
              className="px-8 py-3.5 bg-gradient-to-r from-[#d4af37] to-[#b8952e] text-black font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Flame size={12} className="animate-pulse" /> Download the Sanctum
              App
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}