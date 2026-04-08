import { motion } from "framer-motion";
import { Server, Monitor, Network, Fingerprint, Shield, Wrench, HardDrive, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "CCTV Installation & Maintenance",
    description: "End-to-end surveillance solutions with high-definition IP cameras, NVRs, and 24/7 monitoring capabilities.",
  },
  {
    icon: Monitor,
    title: "Computer & CPU Sales",
    description: "Enterprise-grade workstations, custom-built CPUs, and rapid repair services to minimize downtime.",
  },
  {
    icon: Server,
    title: "Server Installation",
    description: "Rack, blade, and tower server deployment with comprehensive maintenance and disaster recovery planning.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Systems",
    description: "Advanced attendance and access control machines integrated directly with your HRMS platforms.",
  },
  {
    icon: Wrench,
    title: "Corporate IT AMC",
    description: "Comprehensive Annual Maintenance Contracts ensuring zero friction in your daily operations.",
  },
  {
    icon: Network,
    title: "Networking Solutions",
    description: "Structured cabling, secure Wi-Fi deployment, switches, and enterprise router configurations.",
  },
  {
    icon: HardDrive,
    title: "Hardware Support",
    description: "On-demand component replacement, upgrades, and deep-level hardware troubleshooting.",
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

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[#F7F8FA] -z-20" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'var(--noise-texture)' }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 tracking-tight">Comprehensive IT Capabilities</h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We deliver the critical infrastructure required to keep modern enterprises agile, secure, and operational.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col max-w-5xl"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = (index + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-row gap-4 md:gap-12 items-start md:items-center py-7 md:py-10 border-b border-gray-200 transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="flex items-center gap-4 md:gap-8 md:w-1/3 shrink-0 md:pl-8 pl-2">
                  <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent shrink-0" style={{ WebkitTextStroke: '1px var(--color-secondary)' }}>
                    <span className="group-hover:text-primary group-hover:[-webkit-text-stroke:0px] transition-all duration-300">
                      {number}
                    </span>
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white shadow-sm rounded-lg flex items-center justify-center text-secondary group-hover:text-primary transition-colors shrink-0">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex-1 md:w-2/3">
                  <h4 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors leading-tight">{service.title}</h4>
                  <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full-width CTA band */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="mt-20 md:mt-32 border-y border-white/10 relative"
        style={{ background: 'var(--gradient-section-dark)' }}
      >
        <div className="absolute left-0 right-0 h-[2px] bg-primary top-0" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Need a Custom Solution?</h4>
              <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
                We build tailored IT setups for specialized corporate needs. Our engineering team is ready to design a robust architecture for your next facility.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full md:w-auto shrink-0 px-7 md:px-8 py-4 bg-white text-primary rounded font-semibold text-base md:text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Contact Engineering Team
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
