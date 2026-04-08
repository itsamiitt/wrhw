import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import darkLogo from "@assets/WRHW_logo_blue_1775607098105.png";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder gradient if image fails, else image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a2430] to-slate-800 opacity-90 z-10" />
        <img
          src={heroBg}
          alt="Datacenter Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Noise overlay */}
        <div
          className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-30 mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <img src={darkLogo} alt="WRHWFOUR Logo" className="h-16 md:h-24 object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary-foreground border border-white/20 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
              Enterprise IT Infrastructure
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight md:leading-tight mb-6"
          >
            Precision Engineering for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Corporate IT Ecosystems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Delivering robust hardware solutions, pan-India AMCs, and advanced security networking for Fortune 500 standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-md font-semibold text-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(200,116,58,0.4)] hover:shadow-[0_0_30px_rgba(200,116,58,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border border-white/20 rounded-md font-semibold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 cursor-pointer text-white/50 hover:text-white transition-colors"
        onClick={scrollToServices}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </section>
  );
}
