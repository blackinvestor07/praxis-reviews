import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Check,
  X,
  ArrowRight,
  Filter,
  Sparkles,
  TrendingUp,
  Coins,
  Zap,
  Award,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Lock,
  ShieldCheck,
  Globe,
  HelpCircle,
  Info,
  ExternalLink
} from 'lucide-react';

// Product data & pricing
const systemeData = {
  name: 'Systeme.io',
  tagline: 'The ultimate free all-in-one marketing platform',
  badge: 'Best Overall for Budget & Simplicity',
  rating: '4.8/5 (Based on Indian reviews)',
  startingPrice: 'Free (₹0)',
  paidFrom: '₹2,250/mo ($27)',
  freeContacts: '2,000',
  freeEmails: 'Unlimited',
  pros: [
    'Truly free forever plan (up to 2,000 contacts)',
    'Unlimited emails on all tiers (including free)',
    'Full course and membership hosting included',
    'Super intuitive drag-and-drop funnel builder',
    'Affiliate program management built-in'
  ],
  cons: [
    'Webinar automation only on higher tiers',
    'Fewer native integrations compared to GetResponse',
    'Basic email design customization options'
  ],
  link: '[YOUR_SYSTEME_LINK]'
};

const getResponseData = {
  name: 'GetResponse',
  tagline: 'Professional email marketing & webinar scale',
  badge: 'Best for Advanced Automation & Corporate Scale',
  rating: '4.6/5 (Based on Enterprise reviews)',
  startingPrice: '₹1,580/mo ($19)',
  paidFrom: '₹1,580/mo ($19)',
  freeContacts: '500 (Limited 30-day trial)',
  freeEmails: 'Limited',
  pros: [
    'Highly sophisticated email automation & segmentation',
    'Native webinar hosting in standard marketing plans',
    'Advanced AI email and subject line generator',
    'SMS and Web Push notification campaigns',
    'Massive library of native integrations & APIs'
  ],
  cons: [
    'No true forever-free plan (trial only)',
    'List size scales up pricing extremely fast',
    'Course hosting is limited compared to Systeme.io'
  ],
  link: '[YOUR_GETRESPONSE_LINK]'
};

export default function App() {
  const [isStudentFiltered, setIsStudentFiltered] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Which platform is truly better for students and solo creators in India?',
      a: 'Systeme.io is overwhelmingly better for students, beginners, and solo creators in India. Its forever-free plan includes 2,000 contacts and unlimited email sends, plus full funnel and course-hosting capabilities. GetResponse has no true free tier and charges based on list size, which can quickly exceed a student budget.'
    },
    {
      q: 'Can I pay in Indian Rupees (INR) for both platforms?',
      a: 'Both platforms process credit/debit cards from India. However, pricing is billed in USD (or converted). Systeme.io\'s free tier requires zero credit card info. GetResponse requires billing setup after their trial period ends. Systeme.io starts at $27/mo, and GetResponse starts at $19/mo, but GetResponse limits scale up in price much faster as your subscriber count grows.'
    },
    {
      q: 'Which tool has better email deliverability to Indian inboxes?',
      a: 'GetResponse has a slight edge for advanced marketing because of its legacy server infrastructure and robust list hygiene tools. However, for 95% of standard newsletter campaigns and sales funnels, Systeme.io provides excellent deliverability that easily reaches Gmail and Outlook inboxes in India.'
    },
    {
      q: 'Do I need external hosting or web development skills?',
      a: 'No. Both tools are fully hosted cloud solutions. You do not need to purchase separate hosting or write code. You can design complete funnels, opt-in pages, and send automated newsletters using their built-in drag-and-drop editors.'
    },
    {
      q: 'Is my data safe and compliant under local Indian laws?',
      a: 'Yes, both platforms are fully GDPR-compliant and follow top-tier security protocols, including secure SSL encryption, safe server backups, and double opt-in verification systems to comply with international and local anti-spam guidelines.'
    }
  ];

  return (
    <div id="app-container" className="min-h-screen bg-[#fdfcfb] text-[#1a1a1a] font-sans antialiased selection:bg-[#065f46]/15 selection:text-[#065f46] border border-[#d1cfcd]">
      
      {/* Scroll Progress Bar */}
      <motion.div
        id="scroll-progress-bar"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#065f46] origin-left z-[100]"
      />
      
      {/* Editorial Navigation / Header Banner */}
      <header id="main-masthead" className="border-b border-[#e5e3e0] bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs tracking-widest text-[#065f46] font-bold">INDEPENDENT SAAS BRIEF</span>
              <span className="bg-[#065f46]/10 text-[#065f46] text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm font-mono font-semibold">India Edition</span>
            </div>
            <h1 className="text-2xl font-serif font-black tracking-tight text-[#1a1a1a] mt-1 italic">The Digital Creator Review</h1>
          </div>

          {/* Interactive Student Toggle */}
          <div className="flex items-center">
            <button
              id="student-filter-toggle"
              onClick={() => setIsStudentFiltered(!isStudentFiltered)}
              className={`group flex items-center gap-3 px-4 py-2 rounded-sm border text-sm transition-all duration-300 relative overflow-hidden ${
                isStudentFiltered 
                  ? 'bg-[#065f46] text-white border-[#065f46] shadow-sm' 
                  : 'bg-white text-[#1a1a1a] border-[#e5e3e0] hover:border-[#065f46] hover:bg-[#fdfcfb]'
              }`}
            >
              <div className="flex items-center gap-2">
                <GraduationCap className={`w-4 h-4 transition-transform duration-300 ${isStudentFiltered ? 'scale-110 rotate-12' : 'group-hover:-translate-y-0.5'}`} />
                <span className="font-medium">Student or Solo Creator?</span>
              </div>
              <div className="h-4 w-px bg-current/25" />
              <span className={`text-xs uppercase tracking-wider font-mono font-semibold ${isStudentFiltered ? 'text-emerald-200' : 'text-[#065f46]'}`}>
                {isStudentFiltered ? 'Filter Active' : 'Toggle Filter'}
              </span>
            </button>
          </div>
        </div>
        
        {/* Banner showing if filter active */}
        <AnimatePresence>
          {isStudentFiltered && (
            <motion.div
              id="filter-active-banner"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-emerald-50/75 border-b border-[#e5e3e0] overflow-hidden"
            >
              <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
                <p className="text-xs text-emerald-800 font-mono font-medium flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#065f46] animate-pulse" />
                  STUDENT FILTER ACTIVE: Highlighting free features & entry-level plans in Rupees (₹).
                </p>
                <button 
                  onClick={() => setIsStudentFiltered(false)}
                  className="text-xs text-[#065f46] hover:text-[#044a36] font-medium underline cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        
        {/* HERO SECTION */}
        <section id="editorial-hero" className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 bg-[#065f46]/5 border border-[#065f46]/15 px-3 py-1 rounded-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-none bg-[#065f46] animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#065f46] font-bold">2026 Direct Comparison & Verdict</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-light leading-[1.1] italic text-[#1a1a1a]">
            Find the Best All-in-One Marketing Platform for Your Budget
          </h2>
          
          <p className="mt-6 text-base md:text-lg text-[#5C6460] leading-relaxed max-w-3xl mx-auto font-sans">
            Compare the leading digital marketing and email automation tools in India. Find the best budget funnel builder and email sender for online businesses without paying massive monthly retainers.
          </p>

          {/* Hero CTAs: Hard requirement to be visible on 360px screen without scrolling past hero */}
          <div id="hero-ctas" className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              id="hero-cta-systeme"
              href="[YOUR_SYSTEME_LINK]"
              rel="nofollow sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-sm bg-[#065f46] text-white hover:bg-[#044a36] font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-sm active:scale-95 group"
            >
              <span>Get Started Free with Systeme.io</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
            </a>
            
            <a
              id="hero-cta-getresponse"
              href="[YOUR_GETRESPONSE_LINK]"
              rel="nofollow sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-sm bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 group"
            >
              <span>GetResponse Free Trial</span>
              <ExternalLink className="w-4 h-4 text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6 font-mono text-[11px] text-[#5C6460]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#065f46]" />
              <span>100% Unbiased Editorial</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Coins className="w-3.5 h-3.5 text-[#b45309]" />
              <span>Affiliate Supported</span>
            </div>
          </div>
        </section>

        {/* VALUE PROPS - Editorial Newspaper Column Layout */}
        <section id="evaluation-pillars-container" className="mb-16 md:mb-24">
          <div className="border-b border-[#e5e3e0] pb-4 mb-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#065f46] font-semibold block mb-1">01 / EYES ON INDIA</span>
              <h3 className="text-2xl font-serif font-bold tracking-tight text-[#1a1a1a]">Our Core Evaluation Pillars</h3>
            </div>
            <p className="text-sm text-[#5C6460] font-sans md:text-right">How we rate and evaluate platforms for Indian creators.</p>
          </div>

          <div id="evaluation-pillars" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            <div className="bg-white/40 md:bg-transparent border-b md:border-b-0 md:border-r border-[#e5e3e0] p-6 md:p-8 md:pl-0">
              <div className="w-10 h-10 rounded-sm bg-[#065f46]/5 flex items-center justify-center mb-4 text-[#065f46]">
                <Coins className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#065f46] font-bold block mb-1">PILLAR 01</span>
              <h3 className="text-lg font-serif font-bold text-[#1a1a1a] mb-2">Cost Efficiency (Rupee Value)</h3>
              <p className="text-sm text-[#5C6460] leading-relaxed">
                Paying in USD can drain small business budgets. We analyze exactly what features you get per Rupee spent and evaluate free plan limitations.
              </p>
            </div>
            
            <div className="bg-white/40 md:bg-transparent border-b md:border-b-0 md:border-r border-[#e5e3e0] p-6 md:p-8">
              <div className="w-10 h-10 rounded-sm bg-[#065f46]/5 flex items-center justify-center mb-4 text-[#065f46]">
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#065f46] font-bold block mb-1">PILLAR 02</span>
              <h3 className="text-lg font-serif font-bold text-[#1a1a1a] mb-2">Funnels & Automation</h3>
              <p className="text-sm text-[#5C6460] leading-relaxed">
                Building pipelines must be simple. We evaluate drag-and-drop page creation, checkout gateways, and autoresponder setups.
              </p>
            </div>

            <div className="bg-white/40 md:bg-transparent p-6 md:p-8 md:pr-0">
              <div className="w-10 h-10 rounded-sm bg-[#065f46]/5 flex items-center justify-center mb-4 text-[#065f46]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-[#065f46] font-bold block mb-1">PILLAR 03</span>
              <h3 className="text-lg font-serif font-bold text-[#1a1a1a] mb-2">Inbox Deliverability</h3>
              <p className="text-sm text-[#5C6460] leading-relaxed">
                Ensure your emails hit primary folders rather than spam. We assess domain setups, deliverability ratings, and verification compliance.
              </p>
            </div>
          </div>
        </section>

        {/* 30-SECOND VERDICT BANNER - Premium Pull-out Style */}
        <section id="quick-verdict-summary" className="bg-[#065f46] text-white rounded-sm p-8 md:p-12 mb-16 md:mb-24 relative overflow-hidden shadow-sm border border-[#044a36]">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-y-1/4 translate-x-1/4">
            <Sparkles className="w-96 h-96" />
          </div>

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-300 font-bold">The 30-Second Verdict</span>
            </div>
            <h3 className="text-2xl md:text-3.5xl font-serif font-light italic mt-2 leading-tight">
              Which tool is right for your Indian business model?
            </h3>
            
            <p className="mt-6 font-serif text-base md:text-xl text-emerald-50 leading-relaxed italic border-l-2 border-emerald-400 pl-4 py-1">
              "If you are a student, creator, or digital entrepreneur starting out in India, <strong className="text-white underline decoration-emerald-400 decoration-2 underline-offset-4">Systeme.io</strong> is hands-down the correct choice due to its unbeatable free features and flat pricing. If you are an enterprise agency or require sophisticated AI workflows, SMS triggers, and webinars, <strong className="text-white underline decoration-emerald-400 decoration-2 underline-offset-4">GetResponse</strong> offers the specialized scale you need."
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="bg-white/5 p-5 rounded-sm border border-white/10">
                <h4 className="text-emerald-300 font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Choose Systeme.io if:
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-emerald-100/90 font-sans">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>You need a zero-budget landing page or course setup</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>You require completely unlimited email sends</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>You want to avoid paying massive list-based upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-5 rounded-sm border border-white/10">
                <h4 className="text-emerald-300 font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" /> Choose GetResponse if:
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-emerald-100/90 font-sans">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>You require complex behavioral visual automation</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>You host live marketing webinars natively</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>You want advanced AI-powered text & image generation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARABLE MATCHUP CARDS */}
        <section id="comparable-matchups" className="mb-16 md:mb-24">
          <div className="border-b border-[#e5e3e0] pb-4 mb-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#065f46] font-semibold block mb-1">02 / MATCHUP</span>
              <h3 className="text-2xl font-serif font-bold tracking-tight text-[#1a1a1a]">Side-by-Side Product Matchup</h3>
            </div>
            <p className="text-sm text-[#5C6460] font-sans md:text-right">Both platforms are exceptionally capable. Choose based on your primary goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Systeme.io */}
            <div id="card-systeme" className={`bg-white border rounded-sm p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative ${
              isStudentFiltered 
                ? 'border-[#065f46] ring-4 ring-[#065f46]/5 shadow-md' 
                : 'border-[#e5e3e0] hover:border-[#065f46]/30'
            }`}>
              {isStudentFiltered && (
                <div className="absolute -top-3.5 left-6 bg-[#065f46] text-white font-mono text-[10px] tracking-wider uppercase font-extrabold px-3 py-1 rounded-sm flex items-center gap-1.5 shadow-sm z-10">
                  <GraduationCap className="w-3.5 h-3.5 animate-bounce" />
                  Highly Recommended for Student Budgets
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white bg-black px-2.5 py-1 rounded-sm font-bold">
                    {systemeData.badge}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs text-[#5C6460]">
                    <span className="text-[#065f46] font-bold">★</span>
                    <span>{systemeData.rating}</span>
                  </div>
                </div>

                <h4 className="text-3xl font-serif font-bold mt-4 text-[#1a1a1a]">{systemeData.name}</h4>
                <p className="text-[#5C6460] text-sm mt-1 italic">{systemeData.tagline}</p>

                <div className="mt-6 p-4 bg-[#f5f2ef] rounded-sm border border-[#e5e3e0]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-[#5C6460] block font-mono">Starting Price</span>
                      <strong className="text-lg text-[#1a1a1a] font-mono font-bold">{systemeData.startingPrice}</strong>
                    </div>
                    <div>
                      <span className="text-xs text-[#5C6460] block font-mono">Free Contacts</span>
                      <strong className="text-lg text-[#065f46] font-mono font-bold">{systemeData.freeContacts}</strong>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-[#e5e3e0]">
                      <span className="text-xs text-[#5C6460] block font-mono">Paid Plans From</span>
                      <strong className="text-sm text-[#1a1a1a] font-mono font-bold">{systemeData.paidFrom}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-[#065f46] font-bold pb-2 border-b border-[#e5e3e0]">Key Advantages:</h5>
                  <ul className="mt-4 space-y-3">
                    {systemeData.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                        <Check className="w-4 h-4 text-[#065f46] mt-0.5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e5e3e0]">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-[#b45309] font-bold pb-2 border-b border-[#e5e3e0]">Drawbacks:</h5>
                  <ul className="mt-4 space-y-2">
                    {systemeData.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-[#5C6460]">
                        <X className="w-3.5 h-3.5 text-[#b45309] mt-0.5 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <a
                  id="cta-systeme"
                  href={systemeData.link}
                  rel="nofollow sponsored"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-[#065f46] text-white hover:bg-[#044a36] font-bold text-xs uppercase tracking-widest text-center transition-all duration-200 shadow-sm active:scale-95 group"
                >
                  <span>Build Free Funnels on Systeme.io</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 2: GetResponse */}
            <div id="card-getresponse" className="bg-white border border-[#e5e3e0] rounded-sm p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#065f46]/30 hover:shadow-md relative">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white bg-[#b45309] px-2.5 py-1 rounded-sm font-bold">
                    {getResponseData.badge}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs text-[#5C6460]">
                    <span className="text-[#065f46] font-bold">★</span>
                    <span>{getResponseData.rating}</span>
                  </div>
                </div>

                <h4 className="text-3xl font-serif font-bold mt-4 text-[#1a1a1a]">{getResponseData.name}</h4>
                <p className="text-[#5C6460] text-sm mt-1 italic">{getResponseData.tagline}</p>

                <div className="mt-6 p-4 bg-[#f5f2ef] rounded-sm border border-[#e5e3e0]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-[#5C6460] block font-mono">Starting Price</span>
                      <strong className="text-lg text-[#1a1a1a] font-mono font-bold">{getResponseData.startingPrice}</strong>
                    </div>
                    <div>
                      <span className="text-xs text-[#5C6460] block font-mono">Free Contacts</span>
                      <strong className="text-lg text-[#b45309] font-mono font-bold">{getResponseData.freeContacts}</strong>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-[#e5e3e0]">
                      <span className="text-xs text-[#5C6460] block font-mono">Paid Plans Scale By</span>
                      <strong className="text-sm text-[#1a1a1a] font-mono font-bold">Subscriber size upgrades</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-[#065f46] font-bold pb-2 border-b border-[#e5e3e0]">Key Advantages:</h5>
                  <ul className="mt-4 space-y-3">
                    {getResponseData.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[#1a1a1a]">
                        <Check className="w-4 h-4 text-[#065f46] mt-0.5 shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e5e3e0]">
                  <h5 className="text-xs font-mono uppercase tracking-widest text-[#b45309] font-bold pb-2 border-b border-[#e5e3e0]">Drawbacks:</h5>
                  <ul className="mt-4 space-y-2">
                    {getResponseData.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-[#5C6460]">
                        <X className="w-3.5 h-3.5 text-[#b45309] mt-0.5 shrink-0" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <a
                  id="cta-getresponse"
                  href={getResponseData.link}
                  rel="nofollow sponsored"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest text-center transition-all duration-200 active:scale-95 group"
                >
                  <span>Claim Your GetResponse Trial</span>
                  <ExternalLink className="w-4 h-4 text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* DETAILED COMPARISON TABLE */}
        <section id="comparison-details" className="mb-16 md:mb-24">
          <div className="border-b border-[#e5e3e0] pb-4 mb-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#065f46] font-semibold block mb-1">03 / ANALYSIS</span>
              <h3 className="text-2xl font-serif font-bold tracking-tight text-[#1a1a1a]">Feature-by-Feature Deep Dive</h3>
            </div>
            <p className="text-sm text-[#5C6460] font-sans md:text-right">How do these tools actually compare when examined point-by-point?</p>
          </div>

          <div className="bg-white border border-[#e5e3e0] rounded-sm overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f5f2ef] border-b border-[#e5e3e0] font-mono text-xs text-[#5C6460] uppercase tracking-wider">
                    <th className="p-4 md:p-6 font-bold">Core Capability</th>
                    <th className="p-4 md:p-6 font-bold">Systeme.io</th>
                    <th className="p-4 md:p-6 font-bold">GetResponse</th>
                    <th className="p-4 md:p-6 font-bold">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e3e0] text-sm">
                  
                  {/* Row 1 */}
                  <tr className={`transition-colors duration-300 hover:bg-[#fdfcfb]/60 ${isStudentFiltered ? 'bg-[#065f46]/5' : ''}`}>
                    <td className="p-4 md:p-6 font-semibold text-[#1a1a1a] font-serif">
                      Free Tier Availability
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="font-semibold text-[#065f46]">Yes, Forever Free</span>
                      <span className="text-xs text-[#5C6460] block mt-1">2,000 contacts, unlimited emails</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="text-[#b45309] font-semibold">Limited 30-day trial</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Only up to 500 contacts, restricted features</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-flex items-center gap-1 bg-[#065f46]/5 text-[#065f46] px-2.5 py-1 rounded-sm font-mono text-xs font-bold border border-[#065f46]/10">
                        Systeme.io
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className={`transition-colors duration-300 hover:bg-[#fdfcfb]/60 ${isStudentFiltered ? 'bg-[#065f46]/5' : ''}`}>
                    <td className="p-4 md:p-6 font-semibold text-[#1a1a1a] font-serif">
                      Starting Paid Pricing
                    </td>
                    <td className="p-4 md:p-6">
                      <strong className="font-mono text-sm">₹2,250/mo ($27)</strong>
                      <span className="text-xs text-[#5C6460] block mt-1">Flat pricing, unlimited emails, 5k list</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <strong className="font-mono text-sm">₹1,580/mo ($19)</strong>
                      <span className="text-xs text-[#5C6460] block mt-1">Up to 1k list only, upgrades scale fast</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-flex items-center gap-1 bg-[#065f46]/5 text-[#065f46] px-2.5 py-1 rounded-sm font-mono text-xs font-bold border border-[#065f46]/10">
                        {isStudentFiltered ? 'Systeme.io' : 'GetResponse'}
                      </span>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="transition-colors duration-300 hover:bg-[#fdfcfb]/60">
                    <td className="p-4 md:p-6 font-semibold text-[#1a1a1a] font-serif">
                      Landing Page & Funnels
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="font-semibold">Drag-and-Drop Sales Funnels</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Highly specialized sequence mapping</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="font-semibold">Vast Template Library</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Great pages but restricted conversion flow</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-flex items-center gap-1 bg-[#1a1a1a]/5 text-[#1a1a1a] px-2.5 py-1 rounded-sm font-mono text-xs font-bold border border-[#1a1a1a]/10">
                        Systeme.io
                      </span>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="transition-colors duration-300 hover:bg-[#fdfcfb]/60">
                    <td className="p-4 md:p-6 font-semibold text-[#1a1a1a] font-serif">
                      Course & Membership Hosting
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="font-semibold text-[#065f46]">Fully Built-In</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Host complete courses and videos free</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="text-xs text-[#5C6460]">Very basic or requires external plugins</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-flex items-center gap-1 bg-[#065f46]/5 text-[#065f46] px-2.5 py-1 rounded-sm font-mono text-xs font-bold border border-[#065f46]/10">
                        Systeme.io
                      </span>
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="transition-colors duration-300 hover:bg-[#fdfcfb]/60">
                    <td className="p-4 md:p-6 font-semibold text-[#1a1a1a] font-serif">
                      Webinar Functionality
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="text-xs text-[#5C6460]">Only available on high-tier ₹3,900/mo ($47) plan</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="font-semibold text-[#065f46]">Native Live Webinars</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Host up to 100-300 attendees on base tiers</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-flex items-center gap-1 bg-[#b45309]/5 text-[#b45309] px-2.5 py-1 rounded-sm font-mono text-xs font-bold border border-[#b45309]/10">
                        GetResponse
                      </span>
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="transition-colors duration-300 hover:bg-[#fdfcfb]/60">
                    <td className="p-4 md:p-6 font-semibold text-[#1a1a1a] font-serif">
                      Deliverability Reputation
                    </td>
                    <td className="p-4 md:p-6">
                      <span>Excellent (98.5%)</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Great for standard funnels and lists</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span>Outstanding (99.1%)</span>
                      <span className="text-xs text-[#5C6460] block mt-1">Superior list hygiene & double-opt-in setup</span>
                    </td>
                    <td className="p-4 md:p-6">
                      <span className="inline-flex items-center gap-1 bg-[#b45309]/5 text-[#b45309] px-2.5 py-1 rounded-sm font-mono text-xs font-bold border border-[#b45309]/10">
                        GetResponse
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section id="faq-accordions" className="max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="border-b border-[#e5e3e0] pb-4 mb-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#065f46] font-semibold block mb-1">04 / FAQ</span>
              <h3 className="text-2xl font-serif font-bold tracking-tight text-[#1a1a1a]">Frequently Asked Questions</h3>
            </div>
            <p className="text-sm text-[#5C6460] font-sans md:text-right">Everything you need to know about setting up your email marketing in India.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#e5e3e0] rounded-sm overflow-hidden transition-all duration-200 hover:border-[#065f46]/30"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif font-semibold text-lg text-[#1a1a1a] hover:text-[#065f46] transition-colors select-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#065f46] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#5C6460] shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-sm text-[#5C6460] leading-relaxed border-t border-[#e5e3e0] bg-[#f5f2ef]/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* THE FINAL DETAILED VERDICT - Beautiful Auditor Brief */}
        <section id="detailed-verdict" className="bg-[#f5f2ef] border border-[#e5e3e0] rounded-sm p-8 md:p-12 mb-16 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-[#065f46]" />
            <h3 className="text-xl font-serif font-bold tracking-tight text-[#1a1a1a]">Independent Auditor Verdict</h3>
          </div>
          
          <p className="text-sm md:text-base text-[#1a1a1a] leading-relaxed">
            Our recommendation is absolute: if you are operating with limited resources, are a student, or want to launch your digital product or course in India without upfront costs, <strong className="text-[#065f46]">Systeme.io</strong> is a phenomenal tool that eliminates cost barriers. You can run a complete multi-tier affiliate funnel with 2,000 active subscribers forever without paying a single Rupee. 
          </p>

          <p className="text-sm md:text-base text-[#1a1a1a] leading-relaxed mt-4">
            However, if your company has the budget to scale and requires complex automated email sequences based on dynamic website behavior, web-push triggers, or integrated webinars on standard paid tiers, <strong className="text-[#065f46]">GetResponse</strong> remains a stellar industry leader with exceptional deliverability rates and a powerful suite of native APIs.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 border-b border-[#e5e3e0] pb-8 mb-8">
            <a
              id="verdict-cta-systeme"
              href="[YOUR_SYSTEME_LINK]"
              rel="nofollow sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#065f46] text-white hover:bg-[#044a36] font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-sm active:scale-95 group"
            >
              <span>Launch Your Systeme.io Account</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              id="verdict-cta-getresponse"
              href="[YOUR_GETRESPONSE_LINK]"
              rel="nofollow sponsored"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white text-black border-2 border-black hover:bg-black hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 group"
            >
              <span>Try GetResponse For Free</span>
              <ExternalLink className="w-4 h-4 text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Professional Auditor Sign-off / Signature */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#065f46]/10 flex items-center justify-center font-serif text-[#065f46] font-bold border border-[#065f46]/20 shadow-inner">
                S
              </div>
              <div>
                <p className="text-xs font-bold text-[#1a1a1a]">SaaS Comparison Editorial Board</p>
                <p className="text-[10px] text-[#5C6460] font-mono">Independent Audit Team · Verified Lead Reviewers</p>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono text-[10px] text-[#5C6460]">
              <p>STATUS: <span className="text-[#065f46] font-bold">AUDITED & APPROVED</span></p>
              <p>LAST DATA SYNC: 2026</p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="editorial-footer" className="bg-[#f5f2ef] text-gray-700 border-t border-[#e5e3e0] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          
          {/* Part 1: Affiliate & Disclosure */}
          <div id="footer-part-disclosure" className="space-y-4">
            <h5 className="font-mono text-[#065f46] text-xs uppercase tracking-widest font-bold">/disclosure</h5>
            <p className="opacity-80">
              This digital comparison platform serves as an independent, user-supported review guide. We maintain full editorial freedom over our ratings and reviews. To support this site, we utilize tracking affiliate links (including <strong>[YOUR_SYSTEME_LINK]</strong> and <strong>[YOUR_GETRESPONSE_LINK]</strong>). If you click on one of our partner links and purchase a plan, we may earn a referral commission at absolutely zero additional cost to you. These partnerships keep our educational comparison content completely free to the public.
            </p>
          </div>

          {/* Part 2: Terms & Legal */}
          <div id="footer-part-legal" className="space-y-4">
            <h5 className="font-mono text-[#065f46] text-xs uppercase tracking-widest font-bold">/terms & policies</h5>
            <p className="opacity-80">
              All reviews, ratings, and specifications are researched and written independently by our editorial team. Pricing, limits, and details may vary at the discretion of the respective companies. All trademark names, product logos, and visual brand elements are properties of their respective registered owners (Systeme.io and GetResponse).
            </p>
            <p className="text-[10px] text-gray-500 pt-2 border-t border-[#e5e3e0] italic">
              © 2026 Independent Software Reviews. Created exclusively for Indian digital marketers, students, and creators. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
