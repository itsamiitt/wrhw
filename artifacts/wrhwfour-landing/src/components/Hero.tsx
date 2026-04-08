import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

function AnimatedCounter({ end, suffix, label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let startTimestamp: number;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) window.requestAnimationFrame(step);
            else setCount(end);
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex flex-col items-center py-1">
      <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
        {count}{suffix}
      </span>
      <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-widest mt-1">{label}</span>
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -100]);
  const contentY = useTransform(scrollY, [0, 600], [0, 40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a1520]"
    >
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        <img
          src={heroBg}
          alt="Datacenter Background"
          className="w-full h-full object-cover opacity-[0.18] mix-blend-luminosity"
        />
        {/* Perspective grid */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            transform: 'perspective(600px) rotateX(55deg) scale(2.2) translateY(-60px)',
            transformOrigin: 'center bottom',
            opacity: 0.9,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 z-20 bg-gradient-to-t from-[#0a1520] to-transparent" />
        <div className="absolute inset-0 z-10" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(10,21,32,0.7) 100%)' }} />
      </motion.div>

      {/* Floating copper particles — hidden on very small screens to reduce visual noise */}
      {[
        { left: '8%', top: '22%', size: 'w-1.5 h-1.5', duration: 12 },
        { left: '55%', top: '18%', size: 'w-2 h-2', duration: 9 },
        { left: '88%', top: '35%', size: 'w-1.5 h-1.5', duration: 14 },
        { left: '25%', top: '65%', size: 'w-1 h-1', duration: 11 },
        { left: '72%', top: '72%', size: 'w-1.5 h-1.5', duration: 10 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: i * 1.8 }}
          className={`absolute ${p.size} rounded-full bg-primary z-20 hidden sm:block`}
          style={{ left: p.left, top: p.top, boxShadow: '0 0 12px rgba(212,96,26,0.9), 0 0 32px rgba(212,96,26,0.4)' }}
        />
      ))}

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-30 flex-1 flex flex-col"
      >
        {/* Hero text */}
        <div className="flex-1 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 md:pt-28 md:pb-10">
            <div className="max-w-5xl mx-auto text-center">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-6 md:mb-8"
              >
                <span
                  className="inline-flex items-center gap-2 py-2 px-4 sm:px-5 rounded-full text-white text-[11px] sm:text-xs font-semibold tracking-[0.15em] uppercase shadow-md"
                  style={{ background: 'var(--gradient-copper)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                  Enterprise IT Infrastructure
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-5 md:mb-6"
              >
                Precision Engineering for
                <br className="hidden sm:block" />{" "}
                <span className="relative inline-block mt-1">
                  <span
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: 'var(--gradient-copper)' }}
                  >
                    Corporate IT Ecosystems
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full origin-left hidden sm:block"
                    style={{ background: 'var(--gradient-copper)' }}
                  />
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-base sm:text-lg md:text-xl text-slate-300/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0"
              >
                Delivering robust hardware solutions, pan-India AMCs, and advanced
                security networking for Fortune 500 standards.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-2 sm:px-0"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onClick={scrollToContact}
                  className="w-full sm:w-auto px-7 sm:px-10 py-4 text-white rounded-md font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-3 group"
                  style={{
                    background: 'var(--gradient-copper)',
                    boxShadow: 'var(--shadow-copper-glow)',
                  }}
                >
                  Request a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  onClick={scrollToServices}
                  className="w-full sm:w-auto px-7 sm:px-10 py-4 bg-white/[0.06] text-white border border-white/[0.12] rounded-md font-semibold text-base sm:text-lg hover:bg-white/[0.1] transition-all backdrop-blur-sm"
                >
                  Explore Services
                </motion.button>
              </motion.div>

            </div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0 max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.13)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
          >
            {[
              { end: 500, suffix: '+', label: 'Corporate Clients' },
              { end: 28, suffix: '+', label: 'States Covered' },
              { end: 24, suffix: '/7', label: 'Support' },
              { end: 6, suffix: '+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center py-5 sm:py-7 px-3 sm:px-4 ${i > 0 ? 'border-l border-white/[0.08]' : ''} ${i === 2 ? 'border-t border-white/[0.08] md:border-t-0' : ''} ${i === 3 ? 'border-t border-white/[0.08] md:border-t-0' : ''}`}
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToServices}
      >
        <span className="text-[10px] text-slate-500 font-medium tracking-[0.2em] uppercase group-hover:text-slate-300 transition-colors">Scroll</span>
        <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors animate-bounce" />
      </motion.div>
    </section>
  );
}
