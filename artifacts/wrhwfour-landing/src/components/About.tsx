import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import { useState, useEffect } from "react";
import officeBuilding from "@/assets/office-building.jpg";

function CountUpNumber({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end]);

  return <>{count}{suffix}</>;
}

const stats = [
  { value: 500, suffix: "+", label: "Corporate Clients", icon: Users },
  { value: 99, suffix: ".9%", label: "Uptime Guaranteed", icon: TrendingUp },
  { value: 24, suffix: "/7", label: "Technical Support", icon: Award },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-primary z-10" />

            <div className="relative overflow-hidden shadow-2xl aspect-[4/3] rounded bg-secondary">
              <img
                src={officeBuilding}
                alt="WRHWFOUR Corporate Office"
                className="w-full h-full object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B38]/90 via-transparent to-transparent" />

              <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded text-white shadow-lg">
                  <p className="font-semibold text-base md:text-lg mb-1 tracking-wide">World Trade Centre</p>
                  <p className="text-white/70 text-xs md:text-sm tracking-widest uppercase">Kharadi, Pune - Headquarters</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-3">Corporate Identity</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Engineering Reliability for India's Fastest Growing Enterprises
            </h3>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground mb-8 md:mb-10 leading-relaxed font-light">
              <p>
                Based in the prestigious World Trade Centre, Pune, WRHWFOUR Private Limited stands as a premier IT infrastructure and hardware partner for corporate India.
              </p>

              <blockquote className="pl-5 md:pl-6 border-l-2 border-primary text-secondary font-medium text-lg md:text-xl my-6 md:my-8">
                "We understand that in the corporate sector, downtime is not an option. Our solutions are engineered for precision, scalability, and absolute reliability."
              </blockquote>

              <p>
                From secure networking and advanced surveillance to comprehensive server management and pan-India hardware support, we ensure your operations never miss a beat.
              </p>
            </div>

            {/* Horizontal Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-12 py-6 md:py-8 border-y border-gray-200">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-row sm:flex-col relative group items-center sm:items-start gap-4 sm:gap-0">
                    {idx !== stats.length - 1 && (
                      <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200" />
                    )}
                    <div className="flex items-center gap-3 mb-0 sm:mb-2 text-primary">
                      <Icon size={22} className="text-primary/60 shrink-0" />
                      <span className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                        <CountUpNumber end={stat.value} suffix={stat.suffix} />
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                  </div>
                );
              })}
            </div>

            <ul className="space-y-3 md:space-y-4">
              {[
                "Certified hardware specialists & network engineers",
                "Strict adherence to corporate compliance standards",
                "Rapid deployment and SLA-backed support across India"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
