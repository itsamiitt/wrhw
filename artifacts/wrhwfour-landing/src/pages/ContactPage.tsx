import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

const contactDetails = [
  {
    icon: Building2,
    title: "Registered Office",
    lines: ["WRHWFOUR Private Limited", "World Trade Centre, Kharadi", "Pune, Maharashtra — 411014"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@wrhwfour.com", "support@wrhwfour.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Saturday: 9:00 AM – 7:00 PM", "Emergency Support: 24/7 for AMC clients"],
  },
];

const services = [
  "CCTV Installation & Maintenance",
  "Computer & Workstation Sales",
  "Server Installation & Management",
  "Biometric Systems",
  "Corporate IT AMC",
  "Networking Solutions",
  "Hardware Procurement",
  "Other / General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout title="Contact Us">
      {/* Hero */}
      <section className="bg-[#0B1520] py-14 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 60% 50%, hsl(22 78% 46% / 0.4) 0%, transparent 60%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3 md:mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
              Contact <span className="text-primary">WRHWFOUR</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed">
              Whether you need a quote, technical consultation, or want to discuss an AMC agreement — our team is ready to respond promptly and professionally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-16 md:py-24 bg-[#FAFAF8]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <motion.div {...fadeUp} className="lg:col-span-2 space-y-6 md:space-y-8">
              <div>
                <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Contact Details</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4 md:mb-6">
                  We're Here to Help
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                  Reach out through any of the channels below. For urgent IT support, existing AMC clients should use the dedicated support line included in their contract documentation.
                </p>
              </div>

              {contactDetails.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4 md:gap-5"
                  >
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1.5 md:mb-2 text-sm md:text-base">{c.title}</h3>
                      {c.lines.map((line, j) => (
                        <p key={j} className="text-muted-foreground text-xs md:text-sm font-light">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}

              <div className="bg-[#0B1520] p-5 md:p-6 rounded">
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Company Information</p>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  <strong className="text-white font-semibold">WRHWFOUR Private Limited</strong><br />
                  CIN: U46491PN2024PTC232130<br />
                  GST: Available on request<br />
                  Incorporated under the Companies Act, 2013
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="lg:col-span-3"
            >
              <div className="bg-white border border-gray-100 rounded shadow-sm p-6 md:p-10">
                {submitted ? (
                  <div className="text-center py-10 md:py-12">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 md:mb-6">
                      <CheckCircle2 className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Message Received</h3>
                    <p className="text-muted-foreground font-light max-w-sm mx-auto text-sm md:text-base">
                      Thank you for reaching out. A member of our team will contact you within 1 business day. For urgent requirements, please call us directly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                    <div>
                      <p className="text-primary text-sm font-bold tracking-[0.1em] uppercase mb-1">Request a Quote or Consultation</p>
                      <p className="text-muted-foreground text-xs md:text-sm font-light">All fields marked * are required.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rajesh Kumar"
                          className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp Pvt Ltd"
                          className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="rajesh@acmecorp.com"
                          className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message / Requirements</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please describe your IT infrastructure requirements, number of locations, team size, or specific issues you need resolved..."
                        className="w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <p className="text-xs text-muted-foreground font-light">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                      We will never share your information with third parties.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-4 rounded text-white font-medium text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
                      style={{ backgroundImage: "var(--gradient-copper)" }}
                    >
                      <Send size={16} /> Submit Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Common Questions</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Before You Write to Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { q: "How quickly will you respond to my inquiry?", a: "We aim to respond to all general inquiries within 1 business day. For existing AMC clients, our SLA-defined response times apply." },
              { q: "Do you serve businesses outside Maharashtra?", a: "Yes — we have active coverage in 28+ Indian states. Reach out with your location and we'll confirm availability and response timelines." },
              { q: "Can I get a quote without committing to a service?", a: "Absolutely. Our initial consultation and quotation process is completely free with no obligation. We only charge once you proceed with a confirmed scope." },
              { q: "Do you offer site visits before finalizing a proposal?", a: "Yes, for projects above a certain scope, we recommend a free site survey to ensure accurate specifications and proper installation planning." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#FAFAF8] border border-gray-100 p-5 md:p-6 rounded"
              >
                <h3 className="font-semibold text-foreground mb-2 md:mb-3 text-sm">{faq.q}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
