import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

function AnimatedCounter({ end, label }: { end: number, label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 1500;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end]);

  return (
    <div className="flex flex-col border-l border-primary/40 pl-4 py-1">
      <span className="text-2xl md:text-3xl font-bold text-white">
        {count}{end > 100 || end === 28 ? "+" : ""}
        {end === 24 ? "/7" : ""}
      </span>
      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background Layering */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <img
          src={heroBg}
          alt="Datacenter Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        
        {/* Animated Grid Mesh */}
        <div 
          className="absolute inset-0 z-10 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)'
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0%", "-20%", "0%"],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3
          }}
          className="absolute w-2 h-2 rounded-full bg-primary z-20 shadow-[0_0_15px_rgba(212,96,26,0.8)]"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`
          }}
        />
      ))}

      <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:py-0">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full text-white text-xs font-semibold tracking-widest uppercase mb-8 shadow-sm" style={{ background: 'var(--gradient-copper)' }}>
              Enterprise IT Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-[1.1] mb-6 tracking-tight"
          >
            Precision Engineering for <br className="hidden md:block" />
            <span className="relative inline-block text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-copper)' }}>
              Corporate IT Ecosystems
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-[3px] bg-primary rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Delivering robust hardware solutions, pan-India AMCs, and advanced security networking for Fortune 500 standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 text-white rounded font-semibold text-lg transition-all flex items-center justify-center gap-3 group shadow-[var(--shadow-copper-glow)]"
              style={{ background: 'var(--gradient-copper)' }}
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Explore Services
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-xl"
          >
            <AnimatedCounter end={500} label="Clients" />
            <AnimatedCounter end={28} label="States" />
            <AnimatedCounter end={24} label="Support" />
            <AnimatedCounter end={6} label="Years Exp." />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer text-white/40 hover:text-white transition-colors"
        onClick={scrollToServices}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
}