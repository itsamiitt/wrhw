import { motion } from "framer-motion";
import {
  CheckCircle2, Users, Award, TrendingUp, MapPin, Building2,
  Shield, Clock, Cpu, Zap, Target, Star
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import officeBuilding from "@/assets/office-building.jpg";

const milestones = [
  { year: "2018", title: "Founded", desc: "WRHWFOUR Private Limited incorporated in Pune with a vision to redefine IT infrastructure for corporate India." },
  { year: "2020", title: "Pan-India Expansion", desc: "Extended operations to 18 states, establishing a reliable logistics and technical support network across the country." },
  { year: "2022", title: "500+ Clients", desc: "Crossed the milestone of 500 active corporate clients, with presence in Fortune 500 companies and fast-growing enterprises." },
  { year: "2024", title: "28 States Covered", desc: "Achieved full Pan-India presence with certified service partners in 28 states and Union Territories." },
];

const leadership = [
  {
    name: "Operations & Delivery",
    desc: "Our operations team ensures every project is delivered on time, within scope, and to the highest quality standard — backed by rigorous SLAs.",
    icon: Target,
  },
  {
    name: "Technical Engineering",
    desc: "A team of certified hardware specialists, network engineers, and IT architects who bring precision to every deployment.",
    icon: Cpu,
  },
  {
    name: "Client Success",
    desc: "Dedicated account managers and support executives ensuring seamless communication, rapid resolution, and long-term partnership.",
    icon: Users,
  },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We deliver on our commitments. Every SLA, every promise, every deadline is treated as a non-negotiable obligation." },
  { icon: Zap, title: "Agility", desc: "We adapt rapidly to evolving enterprise needs, deploying solutions without bureaucratic delays or vendor lock-ins." },
  { icon: Star, title: "Excellence", desc: "From product selection to post-installation support, we hold our work to the highest technical and service standards." },
  { icon: Award, title: "Trust", desc: "Our relationships with clients are built on transparency, consistent delivery, and honest consultation — not just sales." },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

export default function AboutPage() {
  return (
    <PageLayout title="About Us">
      {/* Hero Banner */}
      <section className="bg-[#0B1520] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(22 78% 46% / 0.4) 0%, transparent 60%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-4">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              About <span className="text-primary">WRHWFOUR</span>
            </h1>
            <p className="text-slate-300 text-xl font-light leading-relaxed">
              A premier IT infrastructure and hardware partner for corporate India — built on precision, reliability, and a deep commitment to enterprise excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeUp} className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-primary z-10" />
              <div className="relative overflow-hidden shadow-2xl aspect-[4/3] rounded bg-secondary">
                <img
                  src={officeBuilding}
                  alt="WRHWFOUR Corporate Headquarters"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B38]/90 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded text-white shadow-lg">
                    <p className="font-semibold text-lg mb-1">World Trade Centre</p>
                    <p className="text-white/70 text-sm tracking-widest uppercase">Kharadi, Pune — Headquarters</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-primary text-sm font-bold tracking-[0.1em] uppercase mb-4">Who We Are</p>
              <h2 className="text-4xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
                Engineering Reliability for India's Fastest Growing Enterprises
              </h2>
              <div className="space-y-5 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  WRHWFOUR Private Limited (CIN: U46491PN2024PTC232130) is a Pune-headquartered IT infrastructure company providing end-to-end hardware provisioning, networking, surveillance, server management, and annual maintenance services to corporate clients across India.
                </p>
                <p>
                  Anchored at the prestigious <strong className="text-secondary font-semibold">World Trade Centre, Kharadi</strong>, we serve Fortune 500 companies, NBFCs, logistics firms, manufacturing units, and high-growth startups that demand uninterrupted IT operations.
                </p>
                <blockquote className="pl-6 border-l-2 border-primary text-secondary font-medium text-xl my-6">
                  "We understand that in the corporate sector, downtime is not an option. Our solutions are engineered for precision, scalability, and absolute reliability."
                </blockquote>
                <p>
                  With over 6 years of field expertise, 500+ active corporate relationships, and coverage spanning 28+ Indian states, WRHWFOUR has become the trusted IT backbone of enterprises that cannot afford to compromise.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                {[
                  { value: "500+", label: "Corporate Clients", icon: Users },
                  { value: "28+", label: "States Covered", icon: MapPin },
                  { value: "6+", label: "Years of Expertise", icon: Award },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="flex flex-col">
                      <Icon size={20} className="text-primary mb-2" />
                      <span className="text-3xl font-bold text-foreground tracking-tight">{s.value}</span>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">{s.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Purpose & Direction</p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <motion.div
              {...fadeUp}
              className="bg-[#FAFAF8] p-10 rounded border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <Target className="text-primary mb-5" size={28} />
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                To deliver precision-engineered IT infrastructure solutions that eliminate operational friction, reduce downtime, and empower corporate India to focus on growth — not IT problems. We exist to be the most reliable technology backbone for businesses that run the nation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#0B1520] p-10 rounded relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <TrendingUp className="text-primary mb-5" size={28} />
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-slate-400 leading-relaxed font-light">
                To be India's most trusted pan-national IT infrastructure partner — known for zero-compromise service delivery, deep enterprise relationships, and scalable solutions that grow with our clients. We aim to cover every major Indian city with certified support and same-day response SLAs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Our Journey</p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">Built Year by Year</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex gap-8 items-start relative"
                >
                  <div className="shrink-0 w-16 h-16 rounded bg-primary text-white flex items-center justify-center text-sm font-bold relative z-10">
                    {m.year}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#0B1520]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold text-white leading-tight">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white/5 border border-white/10 p-8 rounded hover:border-primary/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">The People Behind It</p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">Our Functional Pillars</h2>
            <p className="text-muted-foreground mt-4 font-light">
              WRHWFOUR is powered by specialized teams that work in sync to deliver seamless end-to-end IT infrastructure services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((l, i) => {
              const Icon = l.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-[#FAFAF8] border border-gray-100 p-10 rounded text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{l.name}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{l.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAFAF8] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Partner with WRHWFOUR?</h2>
            <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto">
              Let's discuss your IT infrastructure needs and build a reliable, scalable solution tailored to your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 text-white rounded font-medium shadow-lg inline-block"
                style={{ backgroundImage: "var(--gradient-copper)" }}
              >
                Get in Touch
              </a>
              <a
                href="/#services"
                className="px-8 py-4 border border-gray-300 text-foreground rounded font-medium hover:border-primary hover:text-primary transition-colors inline-block"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
