import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import officeBuilding from "@/assets/office-building.jpg";

const stats = [
  { value: "500+", label: "Corporate Clients", icon: Users },
  { value: "99.9%", label: "Uptime Guaranteed", icon: TrendingUp },
  { value: "24/7", label: "Technical Support", icon: Award },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={officeBuilding}
                alt="WRHWFOUR Corporate Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                  <p className="font-semibold text-lg mb-1">World Trade Centre</p>
                  <p className="text-white/80 text-sm">Kharadi, Pune - Headquarters</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Corporate Identity</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Engineering Reliability for India's Fastest Growing Enterprises
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in the prestigious World Trade Centre, Pune, WRHWFOUR Private Limited stands as a premier IT infrastructure and hardware partner for corporate India. 
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We understand that in the corporate sector, downtime is not an option. Our solutions are engineered for precision, scalability, and absolute reliability. From secure networking and advanced surveillance to comprehensive server management and pan-India hardware support, we ensure your operations never miss a beat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Icon size={20} />
                      <span className="text-3xl font-bold">{stat.value}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            <ul className="space-y-4">
              {[
                "Certified hardware specialists & network engineers",
                "Strict adherence to corporate compliance standards",
                "Rapid deployment and SLA-backed support across India"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
