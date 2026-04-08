import { motion } from "framer-motion";
import {
  Shield, Clock, MapPin, Wrench, Users, Award, CheckCircle2,
  Zap, TrendingUp, Lock, Headphones, BarChart2
} from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const pillars = [
  {
    icon: Clock,
    title: "SLA-Backed Response Times",
    stat: "4-Hour",
    statLabel: "Critical Response SLA",
    desc: "Our service level agreements are non-negotiable. For critical IT failures, we guarantee an on-site or remote response within 4 business hours across our primary coverage zones. Every minute of downtime costs your business — we don't let it drag.",
    points: [
      "24-hour resolution target for non-critical issues",
      "Named escalation contacts for enterprise accounts",
      "Monthly SLA compliance reports on request",
    ],
  },
  {
    icon: MapPin,
    title: "Pan-India Service Network",
    stat: "28+",
    statLabel: "States & UTs Covered",
    desc: "Unlike regional IT vendors, WRHWFOUR maintains active service partnerships in 28+ Indian states and Union Territories. Whether you have a branch in Kochi, a warehouse in Guwahati, or a data centre in Delhi, our network covers it.",
    points: [
      "Certified partner network in Tier 1 & 2 cities",
      "Single vendor for multi-location hardware needs",
      "Centralized account management, decentralized execution",
    ],
  },
  {
    icon: Wrench,
    title: "Certified Technical Expertise",
    stat: "100%",
    statLabel: "OEM-Certified Engineers",
    desc: "Our engineers are OEM-certified across leading brands including HP, Dell, Lenovo, Cisco, Hikvision, and more. We don't generalize — we specialize, ensuring every installation, repair, and upgrade meets manufacturer standards.",
    points: [
      "Brand-specific hardware specialists on staff",
      "Regular training and re-certification cycles",
      "Vendor-neutral advice for best-fit procurement",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    stat: "Zero",
    statLabel: "Compromise on Compliance",
    desc: "Security is embedded into every engagement. From encrypted networking protocols to biometric access integration and surveillance system hardening, we ensure your infrastructure meets enterprise compliance and data protection standards.",
    points: [
      "CCTV systems with tamper-proof configuration",
      "Biometric access integrated with HRMS platforms",
      "Structured cabling with EMI-shielded pathways",
    ],
  },
  {
    icon: BarChart2,
    title: "Proactive Maintenance & AMC",
    stat: "99.9%",
    statLabel: "Uptime Guaranteed",
    desc: "Our Annual Maintenance Contract model is built on prevention, not reaction. We schedule quarterly health checks, firmware updates, and predictive maintenance to identify failures before they cause disruptions.",
    points: [
      "Quarterly on-site inspection and audit",
      "Remote monitoring dashboards (on request)",
      "Priority replacement for critical components",
    ],
  },
  {
    icon: Headphones,
    title: "Dedicated Account Management",
    stat: "24/7",
    statLabel: "Support Availability",
    desc: "Every enterprise client is assigned a dedicated account manager who understands your infrastructure, your team, and your growth plans. You never get bounced between departments — you always have a single point of contact.",
    points: [
      "Named technical and business contacts",
      "Quarterly business reviews for AMC clients",
      "Direct escalation path to senior engineers",
    ],
  },
];

const differentiators = [
  { title: "No Vendor Lock-In", desc: "We recommend the right product for your needs — not the one with the best margin for us. Our advice is always brand-neutral." },
  { title: "Transparent Pricing", desc: "No hidden charges, no surprise invoices. Every quote is itemized, every service scoped, and every cost explained upfront." },
  { title: "Fast Procurement", desc: "With an established vendor network, we can procure and deliver enterprise hardware faster than standard market timelines." },
  { title: "Corporate Credit Terms", desc: "For qualified enterprise clients, we offer flexible payment terms that align with corporate procurement and finance cycles." },
  { title: "After-Sales Continuity", desc: "Our relationship doesn't end at delivery. We ensure hardware is operational, integrated, and maintained across its full lifecycle." },
  { title: "Scalable Engagement", desc: "Whether you need a one-time server rack or a multi-year AMC across 12 offices, we scale our engagement to match your needs." },
];

const comparisons = [
  { criteria: "Pan-India Coverage", us: true, typical: false },
  { criteria: "OEM-Certified Engineers", us: true, typical: false },
  { criteria: "Dedicated Account Manager", us: true, typical: false },
  { criteria: "SLA-Backed Response Time", us: true, typical: false },
  { criteria: "Vendor-Neutral Advice", us: true, typical: false },
  { criteria: "Proactive AMC with Health Checks", us: true, typical: false },
  { criteria: "Corporate Credit Terms", us: true, typical: false },
  { criteria: "Single Vendor for All IT Hardware", us: true, typical: false },
];

export default function WhyChooseUsPage() {
  return (
    <PageLayout title="Why Choose Us">
      {/* Hero */}
      <section className="bg-[#0B1520] py-14 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(22 78% 46% / 0.4) 0%, transparent 60%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3 md:mb-4">The WRHWFOUR Difference</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
              Why Leading Enterprises <span className="text-primary">Choose Us</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed">
              When your IT infrastructure is the lifeline of your operations, you can't afford to compromise. Here's why 500+ corporate clients trust WRHWFOUR — and stay.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Core Strengths</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Six Pillars of Enterprise Trust</h2>
            <p className="text-muted-foreground mt-3 md:mt-4 font-light text-sm md:text-base">
              These are not marketing claims. These are the operational standards we hold ourselves to every single day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="bg-white border border-gray-100 p-6 md:p-8 rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
                        <span className="text-2xl md:text-3xl font-bold text-primary">{p.stat}</span>
                        <span className="text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-widest">{p.statLabel}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{p.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm mb-3 md:mb-4">{p.desc}</p>
                      <ul className="space-y-1.5 md:space-y-2">
                        {p.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2 md:gap-3">
                            <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={14} />
                            <span className="text-xs md:text-sm text-foreground font-light">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Differentiators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Beyond the Basics</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">What Makes Us Different</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-[#FAFAF8] border border-gray-100 p-6 md:p-7 rounded"
              >
                <div className="w-2 h-2 rounded-full bg-primary mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-[#0B1520]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">The Benchmark</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">WRHWFOUR vs. Typical IT Vendors</h2>
          </motion.div>

          <motion.div {...fadeUp} className="max-w-2xl mx-auto overflow-x-auto">
            <div className="rounded overflow-hidden border border-white/10 min-w-[320px]">
              <div className="grid grid-cols-3 bg-white/5 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Criteria</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider text-center">WRHWFOUR</span>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider text-center">Typical Vendor</span>
              </div>
              {comparisons.map((c, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-4 md:px-6 py-3 md:py-4 border-b border-white/5 items-center ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                >
                  <span className="text-slate-300 text-xs md:text-sm font-light pr-2">{c.criteria}</span>
                  <div className="flex justify-center">
                    <CheckCircle2 className="text-primary" size={18} />
                  </div>
                  <div className="flex justify-center">
                    <span className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-slate-600 flex items-center justify-center">
                      <span className="w-2 h-px bg-slate-600 block" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Strip */}
      <section className="py-14 md:py-20 bg-[#FAFAF8] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              { quote: "WRHWFOUR resolved a critical server failure across two of our Pune offices within 3 hours. No other vendor has matched that.", role: "IT Head, NBFC — Pune" },
              { quote: "Their pan-India AMC has cut our hardware downtime by over 60%. The proactive maintenance model is genuinely different.", role: "VP Operations, Logistics Firm — Mumbai" },
              { quote: "Transparent pricing, honest recommendations, and on-time delivery. A rare combination in the Indian IT hardware market.", role: "CTO, Fast-Growth Startup — Bengaluru" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-6 md:p-8 rounded shadow-sm"
              >
                <div className="text-primary text-3xl md:text-4xl leading-none mb-3 md:mb-4 font-serif">"</div>
                <p className="text-foreground font-light leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">{t.quote}</p>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">Experience the WRHWFOUR Standard</h2>
            <p className="text-muted-foreground font-light mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
              Join 500+ enterprises who have made WRHWFOUR their trusted IT infrastructure partner. Let's start with a no-obligation consultation.
            </p>
            <a
              href="/contact"
              className="w-full sm:w-auto px-7 md:px-8 py-4 text-white rounded font-medium shadow-lg inline-block text-center"
              style={{ backgroundImage: "var(--gradient-copper)" }}
            >
              Request a Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
