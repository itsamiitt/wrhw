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

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why Choose WRHWFOUR</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The Corporate Standard for IT Excellence
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We don't just supply hardware; we engineer reliability. Our strategic approach to IT infrastructure management ensures your technology investments yield maximum operational continuity.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-medium transition-all duration-300"
            >
              Discuss Your Requirements
            </button>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl hover:bg-slate-800 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-6 text-primary">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
