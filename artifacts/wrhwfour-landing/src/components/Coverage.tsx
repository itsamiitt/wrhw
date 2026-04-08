import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Coverage() {
  return (
    <section id="coverage" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Service Area</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Pan-India Coverage, <br/>Centrally Managed
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              From our headquarters at the World Trade Centre in Pune, we coordinate IT deployments, AMCs, and hardware support across the entirety of India. Our vast network of certified engineers ensures that your remote branches receive the same enterprise-grade service as your head office.
            </p>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100 rounded-lg">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">HQ: World Trade Centre, Pune</p>
                <p className="text-sm text-muted-foreground">Serving Tier 1, 2, and 3 cities nationwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full relative aspect-square max-w-md mx-auto lg:max-w-none"
          >
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 bg-slate-50 rounded-full border-4 border-slate-100 flex items-center justify-center overflow-hidden shadow-inner">
              <div className="absolute w-[120%] h-[120%] border-[1px] border-slate-200 rounded-full" />
              <div className="absolute w-[80%] h-[80%] border-[1px] border-slate-200 rounded-full" />
              <div className="absolute w-[40%] h-[40%] border-[1px] border-slate-200 rounded-full" />
              
              {/* Nodes representing coverage */}
              <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(200,116,58,0.8)]" />
              <div className="absolute top-[50%] left-[50%] w-5 h-5 bg-secondary rounded-full shadow-lg z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <div className="absolute top-[60%] left-[30%] w-2 h-2 bg-primary/60 rounded-full" />
              <div className="absolute top-[40%] left-[70%] w-2 h-2 bg-primary/60 rounded-full" />
              <div className="absolute top-[70%] left-[60%] w-3 h-3 bg-primary/80 rounded-full" />
              <div className="absolute top-[20%] left-[60%] w-2 h-2 bg-primary/60 rounded-full" />
              
              {/* Connecting lines SVG */}
              <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 100 100" style={{ zIndex: 0 }}>
                <line x1="40" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="30" y1="60" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="70" y1="40" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="60" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <line x1="60" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            
            {/* Overlay stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl border border-gray-100 rounded-lg">
              <p className="text-3xl font-bold text-foreground">28+</p>
              <p className="text-sm font-medium text-muted-foreground uppercase">States Covered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
