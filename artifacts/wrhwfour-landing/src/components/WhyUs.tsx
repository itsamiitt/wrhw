import { motion } from "framer-motion";
import { ShieldCheck, Clock, Zap, MapPin } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Security",
    description: "Every hardware deployment and network configuration is executed with enterprise-grade security protocols as the baseline.",
  },
  {
    icon: Zap,
    title: "Rapid SLA Resolution",
    description: "Our dedicated support matrices ensure minimal downtime with guaranteed response and resolution windows for critical infrastructure.",
  },
  {
    icon: MapPin,
    title: "Pan-India Reach",
    description: "Consistent service quality whether your branch is in a metro city or a tier-3 hub, managed centrally from our Pune HQ.",
  },
  {
    icon: Clock,
    title: "Proactive Maintenance",
    description: "We identify and resolve potential hardware and network bottlenecks before they manifest as operational disruptions.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Dot-matrix pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Abstract gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/3 sticky top-32"
          >
            <h2 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-4">Why Choose WRHWFOUR</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              The Corporate Standard for IT Excellence
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
              We don't just supply hardware; we engineer reliability. Our strategic approach to IT infrastructure management ensures your technology investments yield maximum operational continuity.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border border-primary/50 text-primary hover:bg-primary hover:text-white rounded font-semibold transition-all duration-300"
            >
              Discuss Your Requirements
            </motion.button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 rounded-lg transition-all duration-300 group border-l-2 border-l-transparent hover:border-l-primary hover:bg-slate-800/60"
                >
                  <div className="relative w-14 h-14 mb-8">
                    {/* Animated copper ring */}
                    <div className="absolute inset-0 rounded-full border border-primary/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                    <div className="absolute inset-0 rounded-full border border-primary/20 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500 delay-100" />
                    
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-primary relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-lg border border-slate-700">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{reason.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-base font-light">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Metric Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-24 border-t border-slate-800 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex flex-col items-center md:w-1/4 pt-4 md:pt-0">
              <span className="text-3xl font-bold text-white mb-1">99.9%</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Uptime SLA</span>
            </div>
            <div className="flex flex-col items-center md:w-1/4 pt-4 md:pt-0">
              <span className="text-3xl font-bold text-white mb-1">4hr</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Avg Response</span>
            </div>
            <div className="flex flex-col items-center md:w-1/4 pt-4 md:pt-0">
              <span className="text-3xl font-bold text-white mb-1">28</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">States</span>
            </div>
            <div className="flex flex-col items-center md:w-1/4 pt-4 md:pt-0">
              <span className="text-3xl font-bold text-white mb-1">500+</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest">Deployments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}