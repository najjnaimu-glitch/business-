/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight,
  Search,
  Plus,
  Settings,
  Network, 
  MapPin, 
  Compass, 
  Quote, 
  LayoutGrid,
  ExternalLink,
  ChevronRight,
  Monitor,
  Share2
} from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 transition-all">
    <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 bg-primary-container flex items-center justify-center transition-transform group-hover:rotate-45 rounded-lg">
          <LayoutGrid className="text-white w-5 h-5" />
        </div>
        <div className="text-xl font-bold tracking-tight text-white font-headline">
          Architectural Insights
        </div>
      </div>
      
      <nav className="hidden md:flex items-center space-x-10">
        {["Services", "About Us", "Insights", "Contact"].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-colors ${
              item === "Insights" ? "text-primary-container border-b-2 border-primary-container pb-1" : "text-outline hover:text-white"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center space-x-8">
        <button className="text-outline hover:text-white transition-opacity">
          <Search className="w-5 h-5" />
        </button>
        <button className="bg-white text-on-primary px-8 py-3 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary-container hover:text-white transition-all rounded-full">
          Consultation
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface pt-20">
    <div className="absolute inset-0 architectural-grid opacity-20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-8 bento-card flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            alt="Architectural structure" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#18181b] via-[#18181b]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-4">
          <span className="bento-badge mb-8">Executive Vision</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-8 max-w-2xl">
            Precision in <br/>
            <span className="text-primary-container">Strategy.</span>
          </h1>
          <p className="text-base md:text-lg text-outline max-w-lg mb-10 font-medium leading-relaxed">
            Engineering organizational resilience through high-fidelity architectural design and operational mastery.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button className="bg-primary-container text-white px-8 py-4 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-on-primary transition-all rounded-full shadow-lg">
              Discover Our Method
            </button>
            <a className="group flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.2em]" href="#">
              <span className="reveal-border">Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-container" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:col-span-4 bento-card flex flex-col justify-between"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-primary-container/10 rounded-xl">
            <Monitor className="text-primary-container w-6 h-6" />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-outline font-black">Market Insights</p>
            <h3 className="font-headline text-lg font-bold text-white">Agility 2025</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-outline text-sm italic leading-relaxed">
            "Structural agility is no longer an advantage; it is a baseline requirement for survival in the global landscape."
          </p>
          <div className="h-1 w-full bg-outline-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary-container w-[70%]"></div>
          </div>
          <div className="flex justify-between text-[9px] font-bold text-outline uppercase tracking-widest">
            <span>Critical</span>
            <span>Optimized</span>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-outline-variant mt-4">
          <span className="text-[9px] font-black uppercase tracking-widest text-white">Full Briefing</span>
          <Plus className="text-primary-container w-5 h-5 cursor-pointer hover:rotate-90 transition-transform" />
        </div>
      </motion.div>
    </div>
  </section>
);

const Expertise = () => {
  const items = [
    {
      title: "Strategic Planning",
      description: "Long-horizon roadmapping that aligns organizational DNA with emerging market shifts. We build the structural skeleton of your future success.",
      icon: LayoutGrid,
      badge: "Horizon"
    },
    {
      title: "Efficiency Audits",
      description: "Eliminating friction through algorithmic process design. We apply precision engineering to eliminate waste and maximize yield.",
      icon: Settings,
      badge: "Audit"
    },
    {
      title: "Digital Systems",
      description: "Integrating advanced intelligence systems that enhance decision-making and scale corporate capability.",
      icon: Network,
      badge: "Network"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="bento-badge mb-4">Core Focus</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white tracking-tighter">Strategic Foundations</h2>
          </div>
          <div className="text-right">
            <p className="text-outline max-w-xs text-[10px] leading-relaxed uppercase tracking-widest font-bold">
              Precision engineering for modern challenges.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div 
              key={item.title}
              whileHover={{ y: -5 }}
              className="bento-card group flex flex-col justify-between"
            >
              <div>
                <span className="bento-badge mb-6">{item.badge}</span>
                <div className="mb-6">
                  <item.icon className="w-12 h-12 text-primary-container group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-headline text-lg font-bold text-white group-hover:text-primary-container mb-4 uppercase tracking-widest transition-colors">
                  {item.title}
                </h3>
                <p className="text-outline text-sm leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>
              <a className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-outline group-hover:text-white transition-colors" href="#">
                Approach <ChevronRight className="ml-1 w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactAnalysis = () => (
  <section className="py-24 bg-surface relative">
    <div className="max-w-7xl mx-auto px-8 relative z-10">
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="bento-badge mb-4">Portfolio</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-white tracking-tighter">Impact Analysis</h2>
        </div>
        <div className="hidden md:block">
          <button className="bg-surface-container-low border border-outline-variant text-white px-8 py-3 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-on-primary transition-all rounded-full">
            View All Projects
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:min-h-[600px]">
        {/* Main Feature */}
        <div className="lg:col-span-8 bento-card relative group overflow-hidden p-0 aspect-video lg:aspect-auto">
          <img 
            alt="Boardroom" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-[#18181b]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-outline">Financial Sector</span>
            </div>
            <h3 className="text-3xl font-headline font-black text-white mb-6">Global Banking Network Restructuring</h3>
            <p className="text-outline max-w-md mb-8 leading-relaxed text-[11px] uppercase tracking-widest font-bold">
              Architectural overhaul of legacy decentralized nodes resulting in 40% reduction in operational latency.
            </p>
            <button className="bg-white text-on-primary px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-primary-container hover:text-white transition-all">
              Full Case Study
            </button>
          </div>
        </div>

        {/* Secondary Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-grow bento-card bg-primary-container/20 flex flex-col justify-between border-primary-container/30">
            <div>
              <span className="bento-badge mb-4">Retail</span>
              <h4 className="text-2xl font-bold text-white font-headline leading-tight">Supply Chain <br/> Optimization</h4>
            </div>
            <Share2 className="text-primary-container w-10 h-10" />
          </div>
          
          <div className="flex-grow bento-card flex flex-col justify-center">
            <div className="text-6xl font-headline font-black text-primary-container mb-1">+28%</div>
            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-outline">Annual Yield Increase</p>
            <div className="w-12 h-1 bg-primary-container mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Presence = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 bento-card flex flex-col justify-between">
          <div>
            <span className="bento-badge mb-8">Presence</span>
            <h2 className="font-headline text-4xl font-black text-white tracking-tighter mb-8 leading-tight">A Global Mesh of Expertise.</h2>
            <p className="text-outline text-base mb-10 leading-relaxed font-medium">
              Strategy is conceptual; execution is structural. Our decentralized network ensures that wherever your business evolves, our insights are already operational.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Western Command", locations: "London, New York, Berlin, Paris", icon: MapPin },
                { title: "Eastern Corridors", locations: "Singapore, Tokyo, Sydney", icon: Compass }
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-low border border-outline-variant flex items-center justify-center group-hover:bg-primary-container transition-colors">
                    <item.icon className="text-outline group-hover:text-white w-4 h-4 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-white mb-0.5">{item.title}</h4>
                    <p className="text-[10px] text-outline font-medium tracking-wide uppercase">{item.locations}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bento-card p-0 relative overflow-hidden h-[400px] lg:h-auto">
          <img 
            alt="World Map" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-surface-card/80 to-transparent"></div>
          
          {/* Pulse Markers */}
          <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-primary-container rounded-full animate-ping"></div>
          <div className="absolute top-[40%] left-[48%] w-2 h-2 bg-primary-container rounded-full animate-ping delay-75"></div>
          <div className="absolute top-[65%] right-[20%] w-2 h-2 bg-primary-container rounded-full animate-ping delay-150"></div>
          
          <div className="absolute bottom-8 right-8 bento-card bg-surface/90 backdrop-blur-md border-primary-container/30 p-6 shadow-2xl">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 opacity-70 text-outline">Global Coverage</p>
            <div className="text-4xl font-black mb-1 text-white">100%</div>
            <p className="text-[9px] uppercase tracking-widest font-bold text-primary-container">Synchronized</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="pb-32 bg-surface">
    <div className="max-w-7xl mx-auto px-8">
      <div className="bg-primary-container text-white p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden rounded-[32px]">
        <div className="absolute right-0 bottom-0 w-2/3 h-[2px] bg-white/20"></div>
        <div className="absolute right-0 bottom-0 w-[2px] h-2/3 bg-white/20"></div>
        
        <div className="flex-grow relative z-10">
          <Quote className="w-16 h-16 text-white/30 mb-8" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 italic leading-[1.4] max-w-3xl">
            "True strategy is not the avoidance of risk, but the precise architectural design of your response to it."
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/40"></div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-black">
              Marcus Thorne, <span className="text-white opacity-60">Senior Partner</span>
            </p>
          </div>
        </div>
        <div className="shrink-0 relative z-10 w-full md:w-auto">
          <button className="w-full md:w-auto bg-white text-on-primary px-12 py-6 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-surface-card hover:text-white transition-all rounded-full shadow-2xl">
            Initiate Connection
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-low border-t border-outline-variant/30 py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-primary"></div>
            <span className="font-bold tracking-tighter text-primary uppercase text-sm font-headline italic">Architectural Insights</span>
          </div>
          <p className="text-[9px] text-outline leading-loose uppercase tracking-[0.2em] font-bold">
            Precision strategy for the modern enterprise. Built on the principles of structural integrity and clear vision.
          </p>
        </div>
        
        {[
          { 
            title: "Core", 
            links: ["Strategic Planning", "Efficiency Audits", "Network Mapping"] 
          },
          { 
            title: "Firm", 
            links: ["About Us", "Methodology", "Careers"] 
          },
          { 
            title: "Global HQ", 
            content: ["The Shard, 22nd Floor", "32 London Bridge St", "London, SE1 9SG"] 
          }
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">{col.title}</h4>
            {col.links ? (
              <ul className="space-y-4">
                {col.links.map(link => (
                  <li key={link}>
                    <a className="text-[10px] font-bold text-outline hover:text-primary transition-colors uppercase tracking-[0.22em]" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-[10px] font-bold text-outline leading-loose uppercase tracking-[0.22em]">
                {col.content?.map(line => <p key={line}>{line}</p>)}
                <div className="mt-8 flex gap-4">
                  <ExternalLink className="w-4 h-4 text-primary cursor-pointer hover:opacity-50 transition-opacity" />
                  <Share2 className="w-4 h-4 text-primary cursor-pointer hover:opacity-50 transition-opacity" />
                  <Plus className="w-4 h-4 text-primary cursor-pointer hover:opacity-50 transition-opacity" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-outline">
          © 2026 Architectural Insights. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a className="text-[9px] font-black uppercase tracking-[0.4em] text-outline hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="text-[9px] font-black uppercase tracking-[0.4em] text-outline hover:text-primary transition-colors" href="#">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-on-primary-container selection:text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Expertise />
        <ImpactAnalysis />
        <Presence />
        <QuoteSection />
      </motion.main>
      <Footer />
    </div>
  );
}
