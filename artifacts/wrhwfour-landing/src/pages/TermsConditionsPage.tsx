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
    title: "1. Acceptance of Terms",
    content: `By accessing the WRHWFOUR website (www.wrhwfour.com), submitting an inquiry, or engaging WRHWFOUR Private Limited ("Company," "we," "our") for any IT infrastructure service, you ("Client," "you," "your") agree to be bound by these Terms and Conditions, our Privacy Policy, and any specific terms outlined in your signed service agreement or purchase order.

If you do not agree to these terms, you must not use our website or engage our services. These terms apply to all website visitors, prospective clients, and existing corporate clients.`,
  },
  {
    title: "2. Nature of Services",
    content: `WRHWFOUR Private Limited is a business-to-business (B2B) IT infrastructure company providing the following categories of services to corporate clients across India:

- **Hardware Procurement & Sales**: Supply of computers, workstations, servers, networking equipment, CCTV systems, biometric devices, and related IT hardware.
- **Installation Services**: Professional installation of servers, networking infrastructure (LAN/WAN), CCTV surveillance systems, biometric access systems, and structured cabling.
- **Annual Maintenance Contracts (AMC)**: Scheduled preventive maintenance, emergency support, and SLA-backed uptime guarantees for IT infrastructure.
- **Technical Support**: Remote and on-site troubleshooting, repairs, firmware updates, and configuration management.

All services are subject to a formal scope of work, purchase order, or signed AMC agreement between WRHWFOUR and the Client.`,
  },
  {
    title: "3. Quotations and Acceptance",
    content: `3.1 All quotations provided by WRHWFOUR are valid for 15 calendar days from the date of issue unless otherwise specified in writing.

3.2 A quotation does not constitute a binding contract. A contract is formed only upon written acceptance of the quotation by the Client (via signed purchase order, email confirmation, or formal acceptance letter) and written acknowledgment by WRHWFOUR.

3.3 Quotations are based on information provided by the Client. If site conditions, technical specifications, or requirements differ from those described, WRHWFOUR reserves the right to revise the pricing accordingly.

3.4 Prices in quotations are exclusive of applicable GST and other taxes unless expressly stated otherwise.`,
  },
  {
    title: "4. Payment Terms",
    content: `4.1 Payment terms are specified in each individual quotation, purchase order, or AMC agreement. Standard terms are:
- 50% advance payment upon acceptance of quotation
- 50% balance payment upon completion of installation or delivery of hardware

4.2 For Annual Maintenance Contracts, payment is typically billed quarterly or annually in advance, as agreed in the contract.

4.3 Invoices are due within 15 business days of the invoice date unless a separate credit arrangement has been agreed in writing.

4.4 WRHWFOUR reserves the right to suspend or withhold services for accounts with outstanding payments beyond 30 days of the due date.

4.5 Late payments may attract interest at 18% per annum (1.5% per month) on the overdue amount, applied from the due date.

4.6 All payments must be made via bank transfer (NEFT/RTGS/IMPS), cheque, or other approved methods. WRHWFOUR does not accept cash payments above the statutory threshold.`,
  },
  {
    title: "5. Delivery and Installation",
    content: `5.1 Hardware delivery timelines are estimates based on product availability and logistics. WRHWFOUR will communicate expected delivery dates at the time of order confirmation.

5.2 WRHWFOUR is not liable for delays caused by manufacturer lead times, logistics disruptions, force majeure events, or incomplete site readiness on the Client's side.

5.3 The Client is responsible for ensuring that the site is prepared for installation, including power availability, adequate network infrastructure, physical access, and compliance with safety standards.

5.4 Risk of loss or damage to hardware transfers to the Client upon delivery at the designated site. WRHWFOUR recommends Clients obtain appropriate insurance for high-value equipment.`,
  },
  {
    title: "6. Warranties",
    content: `6.1 Hardware supplied by WRHWFOUR carries the original manufacturer's warranty, the terms of which are governed by the respective OEM. WRHWFOUR will assist Clients in invoking manufacturer warranties where applicable.

6.2 WRHWFOUR provides a 90-day workmanship warranty on all installation services, covering defects in installation quality. This does not cover damage caused by misuse, power fluctuations, or third-party interference.

6.3 AMC agreements include specific SLA commitments regarding response times and uptime guarantees, as detailed in the signed contract. These are contractual obligations and not manufacturer warranties.

6.4 Warranties are void if equipment is tampered with, repaired, or modified by unauthorized personnel without WRHWFOUR's prior written approval.`,
  },
  {
    title: "7. Intellectual Property",
    content: `7.1 All content on the WRHWFOUR website — including text, graphics, logos, service descriptions, and technical documentation — is the proprietary intellectual property of WRHWFOUR Private Limited, protected under applicable Indian copyright and intellectual property laws.

7.2 No content from this website may be reproduced, distributed, modified, or used for commercial purposes without prior written permission from WRHWFOUR.

7.3 Any software, configurations, network designs, or technical documentation developed specifically for a Client as part of a project engagement remain WRHWFOUR's intellectual property unless a specific IP assignment clause is included in the signed agreement.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `8.1 WRHWFOUR's total aggregate liability for any claim arising from a service engagement shall not exceed the total fees paid by the Client for the specific service to which the claim relates.

8.2 WRHWFOUR is not liable for:
- Indirect, incidental, special, or consequential damages
- Loss of business, revenue, data, or goodwill
- Downtime caused by third-party network outages, power failures, or acts of nature
- Damage caused by the Client's failure to maintain software updates or security patches

8.3 Nothing in these terms limits WRHWFOUR's liability for death or personal injury caused by negligence, or for fraudulent misrepresentation.`,
  },
  {
    title: "9. Confidentiality",
    content: `Both parties agree to maintain strict confidentiality regarding business information, technical specifications, network architectures, client lists, pricing, and any other proprietary information disclosed during the course of the engagement. This obligation survives the termination of any service agreement for a period of 3 years.`,
  },
  {
    title: "10. Termination",
    content: `10.1 Either party may terminate a service agreement by providing 30 days' written notice, subject to the specific termination clauses in the signed contract.

10.2 WRHWFOUR may terminate services immediately without notice in the event of:
- Non-payment exceeding 60 days past the due date
- Material breach of these terms by the Client
- Fraudulent misrepresentation of service requirements

10.3 Upon termination, the Client must pay all outstanding amounts for services rendered up to the termination date. WRHWFOUR will return Client property in its possession within a reasonable timeframe.`,
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or any service engagement shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra.

WRHWFOUR encourages disputes to be resolved amicably through direct negotiation in the first instance. If negotiation fails, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator appointed by mutual agreement.`,
  },
  {
    title: "12. Amendments",
    content: `WRHWFOUR reserves the right to amend these Terms and Conditions at any time. Material changes will be communicated via the website or email notice to active clients. Continued use of the website or services after notification of changes constitutes acceptance of the revised terms.`,
  },
  {
    title: "13. Contact",
    content: `For any questions regarding these Terms and Conditions:

**WRHWFOUR Private Limited**
World Trade Centre, Kharadi, Pune — 411014
Email: info@wrhwfour.com`,
  },
];

export default function TermsConditionsPage() {
  return (
    <PageLayout title="Terms & Conditions">
      <section className="bg-[#0B1520] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Terms & Conditions</h1>
            <p className="text-slate-400 font-light">Last Updated: April 2026 &nbsp;|&nbsp; Applicable to all service engagements</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-blue-50 border border-blue-200 p-6 rounded mb-12">
              <p className="text-blue-800 text-sm font-light leading-relaxed">
                <strong className="font-semibold">Please Read Carefully:</strong> These Terms and Conditions govern your use of WRHWFOUR's website and all service engagements. By engaging our services or using this website, you accept these terms in full. If you have questions before proceeding, please <a href="/contact" className="underline font-medium">contact our team</a>.
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
                { label: "Refund & Cancellation Policy", href: "/refund-policy" },
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
