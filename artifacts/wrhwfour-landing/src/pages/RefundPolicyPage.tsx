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
    title: "1. Overview",
    content: `WRHWFOUR Private Limited ("Company") is a B2B IT infrastructure company providing hardware procurement, installation, and annual maintenance services exclusively to corporate and business clients. This Refund and Cancellation Policy governs all financial transactions between WRHWFOUR and its clients.

Given the nature of our business — involving customized hardware procurement, professional installation services, and time-bound maintenance contracts — refund and cancellation requests are evaluated on a case-by-case basis against the terms outlined herein.

By placing an order or signing a service agreement, you acknowledge and accept this policy.`,
  },
  {
    title: "2. Hardware Procurement – Refund Policy",
    content: `**2.1 Eligibility for Refund or Replacement**
WRHWFOUR will process a replacement or refund for hardware items under the following conditions:

- The product is found to be Dead on Arrival (DOA) within 48 hours of delivery and the issue is reported in writing within this window.
- The product delivered does not match the specifications agreed upon in the confirmed purchase order.
- The product is damaged during transit and the damage is documented at the time of delivery with supporting photographs.

**2.2 Non-Eligible Scenarios**
No refund or replacement will be processed for:

- Products that have been installed, configured, or used by the Client or any third party.
- Products damaged due to improper handling, power fluctuations, physical damage, or unauthorized modification after delivery.
- Change of mind after a purchase order has been confirmed and goods have been dispatched.
- Products that have been specifically procured on custom order from a manufacturer or distributor (non-standard or bulk custom configurations).

**2.3 Manufacturer Warranty**
Most hardware products are covered under the respective OEM manufacturer's warranty. DOA claims and post-installation defects (after the 48-hour window) must be processed directly through the manufacturer's RMA process. WRHWFOUR will assist clients in initiating and following up on manufacturer warranty claims at no additional charge.`,
  },
  {
    title: "3. Installation Services – Refund Policy",
    content: `**3.1 Workmanship Guarantee**
WRHWFOUR provides a 90-day workmanship guarantee on all installation services. If a defect directly attributable to our installation work is identified within this period, WRHWFOUR will rectify the issue at no additional cost.

**3.2 Refund for Installation Services**
Refunds for professional installation services are not issued once the work has been commenced. However:

- If WRHWFOUR cancels the installation before commencement without cause, any advance paid for the installation service will be refunded in full within 15 business days.
- If the installation is incomplete due to WRHWFOUR's failure to perform, a proportionate refund reflecting the unperformed work will be issued after a formal review.

**3.3 Non-Eligible Scenarios**
- Refund requests based on the Client's dissatisfaction with design choices that were approved prior to installation.
- Requests made after more than 90 days from the completion of installation.
- Damages caused by site conditions not communicated to WRHWFOUR before the installation commenced.`,
  },
  {
    title: "4. Annual Maintenance Contracts (AMC) – Cancellation & Refund",
    content: `**4.1 AMC Cancellation by Client**

- **Within 30 days of signing**: Clients may cancel an AMC within 30 calendar days of the contract signing date for any reason. WRHWFOUR will refund the pro-rated unused portion of the prepaid AMC fee, less a one-time administrative fee of ₹2,000 or 5% of the contract value (whichever is lower).
- **After 30 days**: Cancellation of an AMC after the initial 30-day period will not entitle the Client to a refund for any prepaid fees, as resources (staff deployment, spare parts allocation, remote monitoring infrastructure) have already been committed.
- **Exception – Material Breach**: If WRHWFOUR materially fails to meet the SLAs defined in the AMC contract (e.g., repeated missed response windows, persistent infrastructure failures caused by WRHWFOUR's negligence), the Client may request a formal review. If the breach is substantiated, WRHWFOUR will offer a pro-rated refund or service credit for the affected period.

**4.2 AMC Cancellation by WRHWFOUR**
WRHWFOUR may terminate an AMC contract with 30 days' written notice. In this case, a full pro-rated refund for the remaining unused contract period will be issued within 15 business days.

**4.3 Non-Renewal**
AMCs are not auto-renewed without explicit written consent from the Client. Non-renewal at the end of a contract term does not entitle the Client to any refund.`,
  },
  {
    title: "5. Advance Payments – Cancellation",
    content: `**5.1 Project Cancellation Before Commencement**
If a Client cancels a confirmed order (hardware or service) before WRHWFOUR has commenced work or placed procurement orders:

- 100% refund of advance paid, less bank transaction charges.

**5.2 Project Cancellation After Procurement**
If WRHWFOUR has already placed procurement orders with suppliers on the Client's behalf:

- The advance will be applied against any cancellation charges levied by the supplier. The residual balance, if any, will be refunded to the Client.
- If the supplier's cancellation charges exceed the advance paid, the Client will be liable for the difference.

**5.3 Project Cancellation After Work Commencement**
If work has commenced (installation begun, engineers deployed, or significant project work performed):

- No refund of advance paid. The Client will be billed for work completed up to the cancellation date at the rate agreed in the purchase order.`,
  },
  {
    title: "6. Refund Process",
    content: `**6.1 How to Request a Refund**
All refund requests must be submitted in writing via email to info@wrhwfour.com with the following details:

- Company name and registered contact name
- Purchase order or contract reference number
- Date of transaction
- Reason for refund request
- Supporting documentation (delivery receipt, photographs, inspection report, etc.)

**6.2 Review and Decision**
WRHWFOUR will acknowledge the refund request within 3 business days and provide a decision within 15 business days of receiving all required documentation.

**6.3 Refund Disbursement**
Approved refunds will be credited to the original payment method (bank transfer to the company's registered account) within 7–10 business days of the refund approval.

All refunds are subject to applicable tax deductions as required by Indian law.`,
  },
  {
    title: "7. Disputes",
    content: `If you disagree with a refund decision, you may escalate the matter in writing to our senior management at info@wrhwfour.com, marked "REFUND DISPUTE." We will review the escalation within 10 business days and provide a final resolution. Unresolved disputes will be handled as per the dispute resolution mechanism in our Terms and Conditions.`,
  },
  {
    title: "8. Contact for Refund Queries",
    content: `For all refund and cancellation-related queries:

**WRHWFOUR Private Limited**
Finance & Client Relations Team
World Trade Centre, Kharadi, Pune — 411014
Email: info@wrhwfour.com

Please include your order/contract reference number in all correspondence for faster resolution.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <PageLayout title="Refund & Cancellation Policy">
      <section className="bg-[#0B1520] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Refund & Cancellation Policy</h1>
            <p className="text-slate-400 font-light">Last Updated: April 2026 &nbsp;|&nbsp; Applicable to all B2B service engagements</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-amber-50 border border-amber-200 p-6 rounded mb-12">
              <p className="text-amber-800 text-sm font-light leading-relaxed">
                <strong className="font-semibold">Important Note:</strong> WRHWFOUR provides enterprise IT infrastructure services to corporate clients. All refund and cancellation decisions are governed by this policy and the specific terms of your signed service agreement or purchase order. In case of conflict, the signed agreement prevails.
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
                { label: "Service Policy", href: "/service-policy" },
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
