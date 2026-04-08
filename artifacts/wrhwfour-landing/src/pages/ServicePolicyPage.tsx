import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

const sections = [
  {
    title: "1. Introduction",
    content: `This Service Delivery Policy outlines the standards, processes, and commitments that govern how WRHWFOUR Private Limited ("Company," "we," "our") delivers IT infrastructure services to its corporate clients across India. It covers hardware delivery, on-site installation, technical support, and Annual Maintenance Contract (AMC) execution.

This policy applies to all service engagements and should be read alongside our Terms and Conditions and any signed service agreement or purchase order. In the event of any conflict, the signed agreement takes precedence.`,
  },
  {
    title: "2. Service Scope",
    content: `WRHWFOUR provides the following categories of professional services:

**2.1 Hardware Supply & Delivery**
Procurement and delivery of enterprise-grade IT hardware including servers, workstations, laptops, networking equipment (switches, routers, access points), CCTV systems, biometric devices, UPS systems, and structured cabling materials.

**2.2 Professional Installation Services**
End-to-end installation of hardware and infrastructure at Client premises, including:
- Server rack installation and configuration
- Structured LAN/WAN cabling
- CCTV camera placement and DVR/NVR setup
- Biometric system installation and HRMS integration
- Network switch and router configuration
- UPS and power management setup

**2.3 Annual Maintenance Contracts (AMC)**
Scheduled preventive maintenance, emergency support, and SLA-backed uptime assurance for Client IT infrastructure. AMC services include quarterly health checks, priority emergency response, firmware updates, and component replacement coordination.

**2.4 Technical Support**
Remote and on-site troubleshooting, diagnostics, repair, and configuration support for Client IT infrastructure — including systems not originally supplied by WRHWFOUR (subject to feasibility assessment).`,
  },
  {
    title: "3. Service Request Process",
    content: `**3.1 New Service Requests**
New engagements are initiated via:
- Online inquiry form at www.wrhwfour.com/contact
- Email to info@wrhwfour.com
- Direct contact with an assigned Account Manager

All new requests are acknowledged within 1 business day. A site assessment or technical consultation may be scheduled before a formal quotation is issued.

**3.2 AMC Support Requests**
Existing AMC clients may log support requests via:
- Dedicated support line (provided in the AMC agreement)
- Email to support@wrhwfour.com (with contract reference number)
- WhatsApp Business line

All AMC support requests are logged with a unique ticket number and acknowledged within 2 hours during business hours.

**3.3 Emergency Escalation**
For critical failures (server down, network outage, surveillance system failure), AMC clients may invoke the emergency escalation procedure as described in their contract. WRHWFOUR guarantees a dedicated technical resource acknowledgement within 1 hour during business hours.`,
  },
  {
    title: "4. Hardware Delivery Policy",
    content: `**4.1 Delivery Timeline**
Standard hardware delivery timelines:
- In-stock items (Pune & Mumbai): 1–3 business days
- In-stock items (Other Tier 1 cities): 3–5 business days
- Imported or special-order equipment: 7–21 business days (timeline communicated at order confirmation)

**4.2 Delivery Confirmation**
WRHWFOUR will share a delivery tracking ID and expected delivery date via email/WhatsApp upon dispatch.

**4.3 Delivery Requirements**
The Client must ensure:
- A designated responsible person is present at the delivery site during the agreed delivery window
- Adequate physical access for delivery of large equipment (server racks, UPS units)
- Signed delivery receipt confirming receipt of all items

**4.4 Inspection at Delivery**
Clients must inspect all delivered hardware at the time of receipt. Visible damage, missing items, or specification mismatch must be noted on the delivery receipt and reported to WRHWFOUR within 48 hours. Claims made after this window may not be eligible for replacement.

**4.5 Packaging and Returns**
Original packaging must be preserved for any products that may need to be returned under warranty or replacement. WRHWFOUR is not liable for shipping damage caused by inadequate repackaging.`,
  },
  {
    title: "5. On-Site Installation Policy",
    content: `**5.1 Site Readiness**
The Client is responsible for ensuring the installation site meets minimum requirements communicated during the pre-installation assessment:
- Adequate power supply and power points
- Physical space clearance as per specifications
- Network conduit or cable pathway access
- Temperature-controlled environment for server installations
- Safety compliance for cable routing

If site conditions are inadequate on the day of installation, WRHWFOUR reserves the right to reschedule, and any re-visit fees may apply.

**5.2 Installation Standards**
All installations are performed by certified technicians in accordance with:
- Manufacturer guidelines and best practices
- TIA/EIA standards for structured cabling
- BIS and IS standards for electrical safety
- Relevant national and local regulations for surveillance systems

**5.3 Post-Installation Handover**
Upon completion, WRHWFOUR will:
- Conduct a functional test of all installed equipment
- Provide a completion report with component details, serial numbers, and warranty information
- Conduct a brief walkthrough with the Client representative
- Obtain sign-off on the installation completion form

**5.4 Documentation**
WRHWFOUR will provide as-built network diagrams, equipment registers, and configuration backups (where applicable) as part of the handover package for major installations.`,
  },
  {
    title: "6. AMC Service Delivery Standards",
    content: `**6.1 Preventive Maintenance Schedule**
AMC contracts include scheduled quarterly on-site preventive maintenance visits covering:
- Hardware health checks and cleaning
- Firmware and software update assessment
- Cable management and connection integrity checks
- UPS battery and load testing
- CCTV camera alignment and DVR/NVR recording verification
- Biometric system audit

**6.2 Response Time SLAs**
Response time commitments are zone-based (see our Coverage page). Standard AMC SLAs:
- Priority 1 (Critical — full outage): 4 business hours for acknowledgement; same-day response target
- Priority 2 (High — partial outage): 8 business hours
- Priority 3 (Medium — degraded performance): Next business day
- Priority 4 (Low — informational): Within 3 business days

**6.3 Spare Parts**
WRHWFOUR maintains a strategic inventory of commonly replaced components. For non-standard parts, procurement lead time will be communicated to the Client immediately upon diagnosis.

**6.4 AMC Reporting**
Clients receive a monthly or quarterly service report (per contract terms) summarizing:
- Preventive maintenance activities completed
- Incidents logged, resolved, and pending
- SLA compliance metrics
- Recommended infrastructure improvements`,
  },
  {
    title: "7. Service Exclusions",
    content: `The following are not covered under standard service agreements unless explicitly included via a supplementary addendum:

- Software licensing, OS installations, or application support (unless scoped in writing)
- IT security consulting, penetration testing, or compliance audits
- Peripheral replacements caused by user damage, misuse, or accidental damage
- Infrastructure changes outside the original scoped environment
- Third-party systems not supplied or approved by WRHWFOUR
- Power infrastructure (generators, main panels, earthing)`,
  },
  {
    title: "8. Client Obligations",
    content: `To ensure effective service delivery, the Client agrees to:

- Provide timely access to the premises for scheduled maintenance and support visits
- Designate a single point of contact (SPOC) for all service communications
- Maintain a record of relevant warranty cards, purchase receipts, and installation reports
- Not modify, repair, or permit third-party interference with systems under WRHWFOUR's maintenance scope without prior written approval
- Notify WRHWFOUR of any changes to infrastructure or additions that may affect service delivery`,
  },
  {
    title: "9. Service Policy Updates",
    content: `WRHWFOUR reserves the right to update this Service Delivery Policy at any time. Clients with active AMC agreements will be notified of material changes at least 30 days in advance. For one-time project engagements, the policy in effect at the time of contract signing applies.`,
  },
  {
    title: "10. Contact for Service Matters",
    content: `**WRHWFOUR Private Limited**
Service Delivery Team
World Trade Centre, Kharadi, Pune — 411014
Email: support@wrhwfour.com | info@wrhwfour.com`,
  },
];

export default function ServicePolicyPage() {
  return (
    <PageLayout title="Service Policy">
      <section className="bg-[#0B1520] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Service Delivery Policy</h1>
            <p className="text-slate-400 font-light">Last Updated: April 2026 &nbsp;|&nbsp; Covers hardware delivery, installation & AMC</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-green-50 border border-green-200 p-6 rounded mb-12">
              <p className="text-green-800 text-sm font-light leading-relaxed">
                <strong className="font-semibold">Our Commitment:</strong> This policy defines the service standards WRHWFOUR commits to upholding for every engagement. We hold ourselves accountable to these standards and encourage clients to reference this document when evaluating our performance.
              </p>
            </motion.div>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  <h2 className="text-xl font-bold text-foreground mb-4 pb-3 border-b border-gray-100">{section.title}</h2>
                  <div className="text-muted-foreground font-light leading-relaxed text-sm space-y-3">
                    {section.content.split("\n\n").map((para, j) => (
                      <p key={j} dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-foreground'>$1</strong>")
                          .replace(/\n- /g, "<br/>• ")
                      }} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-foreground mb-4">Related Legal Documents</p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
                { label: "Refund & Cancellation Policy", href: "/refund-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-white transition-all">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
