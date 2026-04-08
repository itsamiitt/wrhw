import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "WRHWFOUR successfully overhauled our entire server room infrastructure over a single weekend. Their precision and project management are unmatched in the region.",
    author: "Sanjay Mehta",
    role: "CTO, Financial Services Firm",
    location: "Mumbai",
    initials: "SM"
  },
  {
    quote: "Managing IT for 15 branches across India was a nightmare until we handed our AMC to WRHWFOUR. Their response time is exceptional.",
    author: "Priya Desai",
    role: "VP of Operations, Retail Chain",
    location: "Delhi",
    initials: "PD"
  },
  {
    quote: "Their biometric and CCTV integration provided us with the exact enterprise-level security oversight we needed for our new manufacturing plant.",
    author: "Rajesh Kumar",
    role: "Facility Director, Manufacturing",
    location: "Pune",
    initials: "RK"
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

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#111D28] border-y border-slate-800 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-4">Client Trust</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Proven in the Boardroom</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-10 rounded-xl relative group"
            >
              {/* Large decorative quotation mark */}
              <Quote className="absolute top-6 left-6 text-primary/10 w-24 h-24 -z-10 group-hover:text-primary/20 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1.5 mb-8 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current drop-shadow-[0_0_3px_rgba(212,96,26,0.5)]" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-10 flex-grow font-light">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-base tracking-wide">{testimonial.author}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-xs text-slate-500 tracking-wider uppercase mt-1">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}