import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Truck, Clock, Users, Phone, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const zones = [
  {
    name: "West India",
    color: "from-amber-500/20 to-orange-500/20",
    accent: "border-amber-500/40",
    cities: ["Mumbai", "Pune", "Nashik", "Nagpur", "Aurangabad", "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Goa"],
    highlight: "HQ Zone — Fastest Response",
  },
  {
    name: "North India",
    color: "from-blue-500/20 to-indigo-500/20",
    accent: "border-blue-500/40",
    cities: ["Delhi NCR", "Gurugram", "Noida", "Lucknow", "Kanpur", "Jaipur", "Chandigarh", "Ludhiana", "Agra", "Dehradun"],
    highlight: "Major IT Hub Coverage",
  },
  {
    name: "South India",
    color: "from-green-500/20 to-teal-500/20",
    accent: "border-green-500/40",
    cities: ["Bengaluru", "Hyderabad", "Chennai", "Coimbatore", "Kochi", "Mysuru", "Vijayawada", "Madurai", "Thiruvananthapuram", "Mangaluru"],
    highlight: "Tech & Manufacturing Belt",
  },
  {
    name: "East & North-East",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "border-purple-500/40",
    cities: ["Kolkata", "Bhubaneswar", "Patna", "Ranchi", "Guwahati", "Siliguri", "Raipur", "Agartala", "Shillong", "Dimapur"],
    highlight: "Expanding Partner Network",
  },
];

const slaTable = [
  { zone: "Pune & Mumbai Metropolitan", response: "2–4 Hours", resolution: "Same Day", type: "Priority Zone" },
  { zone: "Delhi NCR & Bengaluru", response: "4–6 Hours", resolution: "Next Business Day", type: "Tier 1 Hub" },
  { zone: "All Other Tier 1 Cities", response: "6–12 Hours", resolution: "Within 48 Hours", type: "Standard Zone" },
  { zone: "Tier 2 Cities & Districts", response: "12–24 Hours", resolution: "Within 72 Hours", type: "Partner Network" },
];

const stats = [
  { value: "28+", label: "States & UTs", icon: MapPin },
  { value: "100+", label: "Cities Served", icon: Building2 },
  { value: "500+", label: "Corporate Clients", icon: Users },
  { value: "24/7", label: "Remote Support", icon: Clock },
];

export default function CoveragePage() {
  return (
    <PageLayout title="Pan India Coverage">
      {/* Hero */}
      <section className="bg-[#0B1520] py-14 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 50% 60%, hsl(22 78% 46% / 0.4) 0%, transparent 60%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3 md:mb-4">Nationwide Reach</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
              Pan India <span className="text-primary">IT Infrastructure</span> Coverage
            </h1>
            <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed">
              From the foothills of the Himalayas to the tip of the peninsula — wherever your enterprise operates, WRHWFOUR is there. Active service presence in 28+ states across 100+ cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <Icon className="text-white/70 mx-auto mb-1.5" size={18} />
                  <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{s.value}</div>
                  <div className="text-white/70 text-xs uppercase tracking-widest font-light mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Zones */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Service Zones</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Coverage by Region</h2>
            <p className="text-muted-foreground mt-3 md:mt-4 font-light text-sm md:text-base">
              Our service delivery is organized into four geographic zones, each supported by a network of certified local partners and in-house technical teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {zones.map((zone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`bg-white border ${zone.accent} p-6 md:p-8 rounded shadow-sm`}
              >
                <div className="flex items-start justify-between mb-5 md:mb-6 gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{zone.name}</h3>
                  <span className="text-xs font-semibold text-primary border border-primary/30 bg-primary/5 px-2 py-1 rounded-full whitespace-nowrap shrink-0">{zone.highlight}</span>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {zone.cities.map((city) => (
                    <div key={city} className="flex items-center gap-1.5">
                      <MapPin className="text-primary shrink-0" size={12} />
                      <span className="text-sm text-foreground font-light">{city}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-6 md:mt-8 bg-[#0B1520] p-5 md:p-6 rounded text-center">
            <p className="text-slate-300 font-light text-sm md:text-base">
              Don't see your city listed? We likely still cover it through our partner network.{" "}
              <a href="/contact" className="text-primary font-semibold hover:underline">Contact us</a>{" "}
              for a location-specific availability check.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SLA Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Service Commitments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Response & Resolution SLAs</h2>
            <p className="text-muted-foreground mt-3 md:mt-4 font-light text-sm md:text-base">
              Our service commitments vary by geography and are defined clearly in every contract. No ambiguity, no excuses.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="max-w-3xl mx-auto overflow-x-auto -mx-4 sm:mx-auto px-4 sm:px-0">
            <table className="w-full text-left min-w-[520px]">
              <thead>
                <tr className="bg-[#0B1520]">
                  <th className="px-4 md:px-6 py-3 md:py-4 text-primary text-xs font-bold uppercase tracking-widest">Service Zone</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-primary text-xs font-bold uppercase tracking-widest whitespace-nowrap">First Response</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-primary text-xs font-bold uppercase tracking-widest whitespace-nowrap">Resolution</th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-primary text-xs font-bold uppercase tracking-widest">Zone Type</th>
                </tr>
              </thead>
              <tbody>
                {slaTable.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-[#FAFAF8]" : "bg-white"}`}>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-foreground font-medium text-xs md:text-sm">{row.zone}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-primary font-semibold text-xs md:text-sm whitespace-nowrap">{row.response}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4 text-foreground text-xs md:text-sm font-light whitespace-nowrap">{row.resolution}</td>
                    <td className="px-4 md:px-6 py-3 md:py-4">
                      <span className="text-xs font-semibold text-muted-foreground border border-gray-200 px-2 py-1 rounded whitespace-nowrap">{row.type}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="text-center text-muted-foreground text-xs md:text-sm font-light mt-4 md:mt-6 px-4">
            SLAs are subject to contract terms. Critical infrastructure failures may qualify for priority escalation regardless of zone.
          </p>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Delivery Model</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">How Pan-India Service Actually Works</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Direct Teams in Primary Zones",
                desc: "In Pune, Mumbai, Delhi NCR, and Bengaluru, WRHWFOUR maintains in-house technical teams who are dispatched directly. No middlemen, no coordination delays.",
              },
              {
                icon: Users,
                title: "Certified Partner Network",
                desc: "In secondary and tertiary cities, we work with a vetted network of OEM-certified local partners who operate under our SLA standards and reporting protocols.",
              },
              {
                icon: Truck,
                title: "Logistics & Hardware Delivery",
                desc: "For hardware procurement, we ship via express logistics networks with real-time tracking. Critical spares are pre-positioned in major hubs for next-day delivery.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white border border-gray-100 p-6 md:p-8 rounded text-center shadow-sm"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 md:mb-6">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-[#0B1520]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">Verify Coverage for Your Location</h2>
            <p className="text-slate-400 font-light mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
              Share your office locations and we'll map our coverage, response times, and nearest service partners for each site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="w-full sm:w-auto px-7 md:px-8 py-4 text-white rounded font-medium shadow-lg inline-block text-center"
                style={{ backgroundImage: "var(--gradient-copper)" }}
              >
                Check Coverage for My Location
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="w-full sm:w-auto px-7 md:px-8 py-4 border border-white/20 text-white rounded font-medium hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Phone size={16} /> Call Our Coverage Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
