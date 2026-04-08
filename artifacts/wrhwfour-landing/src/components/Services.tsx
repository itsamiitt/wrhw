import { motion } from "framer-motion";
import { Server, Monitor, Network, Fingerprint, Shield, Wrench, HardDrive } from "lucide-react";

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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Comprehensive IT Capabilities</h3>
          <p className="text-lg text-muted-foreground">
            We deliver the critical infrastructure required to keep modern enterprises agile, secure, and operational.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-secondary to-slate-800 p-8 rounded-xl border border-slate-700 shadow-sm flex flex-col justify-center items-center text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Need a Custom Solution?</h4>
            <p className="text-slate-300 mb-6 text-sm relative z-10">
              We build tailored IT setups for specialized corporate needs.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-white hover:text-primary transition-colors relative z-10"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
