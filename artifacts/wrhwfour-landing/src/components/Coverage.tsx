import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Coverage() {
  return (
    <section id="coverage" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-4">Service Area</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
              Pan-India Coverage, <br/>Centrally Managed
            </h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
              From our headquarters at the World Trade Centre in Pune, we coordinate IT deployments, AMCs, and hardware support across the entirety of India. Our vast network of certified engineers ensures that your remote branches receive the same enterprise-grade service as your head office.
            </p>
            
            <div className="flex items-center gap-5 p-6 bg-[#FAFAF8] border border-gray-100 rounded-xl shadow-sm">
              <div className="bg-white p-4 rounded-full text-primary shrink-0 shadow-sm border border-gray-100">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-foreground text-xl mb-1 tracking-tight">HQ: World Trade Centre, Pune</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Serving Tier 1, 2, and 3 cities nationwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full relative aspect-square max-w-md mx-auto lg:max-w-none"
          >
            {/* Abstract Connected Nodes Representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              
              <svg className="w-full h-full text-slate-200" viewBox="0 0 100 100" style={{ zIndex: 0, overflow: 'visible' }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(212, 96, 26, 0.1)" />
                    <stop offset="100%" stopColor="rgba(212, 96, 26, 0.4)" />
                  </linearGradient>
                </defs>
                
                {/* Connecting lines with path drawing animation */}
                {[
                  { d: "M50,50 L30,20", delay: 0.2 },
                  { d: "M50,50 L75,30", delay: 0.4 },
                  { d: "M50,50 L80,65", delay: 0.6 },
                  { d: "M50,50 L25,75", delay: 0.8 },
                  { d: "M50,50 L40,85", delay: 1.0 },
                  { d: "M30,20 L15,40", delay: 1.2 },
                  { d: "M75,30 L90,20", delay: 1.4 },
                  { d: "M25,75 L15,60", delay: 1.6 },
                ].map((line, i) => (
                  <motion.path
                    key={i}
                    d={line.d}
                    stroke="url(#lineGrad)"
                    strokeWidth="0.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: line.delay, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              {/* Nodes */}
              {/* HQ Node (Pune) */}
              <div className="absolute top-[50%] left-[50%] w-6 h-6 bg-secondary rounded-full shadow-xl z-20 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border-2 border-white">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-50" />
              </div>

              {/* Satellite Nodes */}
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-primary rounded-full z-10 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(212,96,26,0.5)]" />
              <div className="absolute top-[30%] left-[75%] w-2.5 h-2.5 bg-primary/80 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-[65%] left-[80%] w-3.5 h-3.5 bg-primary rounded-full z-10 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(212,96,26,0.5)]" />
              <div className="absolute top-[75%] left-[25%] w-2.5 h-2.5 bg-primary/80 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-[85%] left-[40%] w-2 h-2 bg-primary/60 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-[40%] left-[15%] w-2 h-2 bg-primary/60 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-[20%] left-[90%] w-2 h-2 bg-primary/60 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-[60%] left-[15%] w-2 h-2 bg-primary/60 rounded-full z-10 -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            {/* Overlay stats card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-0 right-0 bg-slate-900 p-8 shadow-2xl rounded-xl border-t-4 border-primary z-30"
            >
              <p className="text-5xl font-bold text-white mb-2 tracking-tight">28<span className="text-primary">+</span></p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">States Covered</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}