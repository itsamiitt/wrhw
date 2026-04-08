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
    title: "1. General Disclaimer",
    content: `The information contained on the WRHWFOUR Private Limited website (www.wrhwfour.com) is provided for general informational and marketing purposes only. While we strive to keep all content accurate and up to date, WRHWFOUR makes no representations, warranties, or guarantees — express or implied — regarding the completeness, accuracy, reliability, suitability, or availability of any information, product description, or service detail presented on this website.

Any reliance you place on information from this website is strictly at your own risk. For specific service commitments, pricing, product specifications, and technical capabilities, please request a formal quotation or written service agreement from our team.`,
  },
  {
    title: "2. No Professional Advice",
    content: `The content on this website does not constitute professional IT consulting, legal, financial, or technical advice. Information about services, products, and industry practices is presented for general awareness only.

Before making any significant IT infrastructure investment or procurement decision based on information found on this website, we strongly recommend engaging with WRHWFOUR's technical team directly for a customized assessment and formal recommendation tailored to your specific business requirements.

Nothing on this website should be construed as a formal tender response, technical specification, or binding offer.`,
  },
  {
    title: "3. Accuracy of Technical Information",
    content: `Product specifications, technical capabilities, and service parameters described on this website are indicative and may vary based on:

- Manufacturer product updates, discontinuations, or model revisions
- Regional availability of specific hardware configurations
- Site-specific infrastructure conditions
- Regulatory requirements applicable to specific industries or geographies

WRHWFOUR regularly updates its service portfolio, and some information on the website may not reflect the most current offerings. Please contact us directly for the most accurate and current technical specifications.`,
  },
  {
    title: "4. Metric and Statistics Disclaimer",
    content: `Performance metrics and statistics cited on this website — including client counts, state coverage, uptime percentages, and response time guarantees — represent general operational benchmarks based on our historical performance and current service capabilities.

These figures are not guaranteed outcomes for any specific engagement. Actual results may vary based on:
- Geographic location and zone classification
- Nature and complexity of the infrastructure
- Specific contractual terms agreed in the service agreement
- Third-party dependencies (ISPs, power infrastructure, manufacturer lead times)

All binding performance commitments are made exclusively through signed SLA agreements.`,
  },
  {
    title: "5. Third-Party Links and References",
    content: `Our website may contain links to third-party websites, partner portals, technology vendor pages, or external resources. These links are provided solely for informational convenience.

WRHWFOUR does not endorse, control, or take responsibility for the content, privacy practices, or accuracy of any third-party website. We encourage all users to review the privacy policies and terms of use of any external website they visit.

Any brand names, trademarks, product names, or logos mentioned on this website belong to their respective owners. Their mention does not imply any affiliation, endorsement, or partnership beyond what is explicitly stated.`,
  },
  {
    title: "6. OEM and Brand References",
    content: `WRHWFOUR is an authorized reseller and service partner for multiple OEM brands including (but not limited to) HP, Dell, Lenovo, Cisco, Hikvision, Ezviz, and others. References to these brands on our website are made for informational purposes regarding the products we supply and do not imply any exclusive partnership, co-branding, or formal endorsement beyond the authorized reseller/partner relationship.

All OEM trademarks, product names, and logos are the property of their respective manufacturers.`,
  },
  {
    title: "7. Limitation of Liability for Website Use",
    content: `WRHWFOUR will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:

- Your use of, or inability to use, this website
- Errors, omissions, or inaccuracies in website content
- Unauthorized access to or alteration of your data transmitted through this website
- Any loss of business, revenue, data, or goodwill resulting from reliance on website content

Our website is provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.`,
  },
  {
    title: "8. Intellectual Property Notice",
    content: `All original content on this website — including but not limited to text, service descriptions, graphics, brand identity, and structural design — is the intellectual property of WRHWFOUR Private Limited, protected under applicable Indian intellectual property laws.

Unauthorized reproduction, redistribution, or commercial use of any content from this website, in whole or in part, is strictly prohibited without prior written permission from WRHWFOUR.`,
  },
  {
    title: "9. Jurisdiction",
    content: `This disclaimer is governed by the laws of India. Any disputes arising from the use of this website are subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.`,
  },
  {
    title: "10. Updates to This Disclaimer",
    content: `WRHWFOUR reserves the right to modify this Disclaimer at any time without prior notice. The "Last Updated" date reflects the most recent revision. Continued use of the website constitutes acceptance of any updates.

For formal service commitments, warranties, or contractual obligations, please refer to your signed service agreement or contact our team directly.`,
  },
  {
    title: "11. Contact",
    content: `For any questions regarding this Disclaimer:

**WRHWFOUR Private Limited**
World Trade Centre, Kharadi, Pune — 411014
Email: info@wrhwfour.com`,
  },
];

export default function DisclaimerPage() {
  return (
    <PageLayout title="Disclaimer">
      <section className="bg-[#0B1520] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Disclaimer</h1>
            <p className="text-slate-400 font-light">Last Updated: April 2026 &nbsp;|&nbsp; Please read before using this website</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-red-50 border border-red-200 p-6 rounded mb-12">
              <p className="text-red-800 text-sm font-light leading-relaxed">
                <strong className="font-semibold">Important:</strong> By using this website, you acknowledge that you have read and understood this Disclaimer and agree to its terms. For formal, binding service commitments, only a signed contract or purchase order issued by WRHWFOUR Private Limited is legally binding.
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
                { label: "Service Policy", href: "/service-policy" },
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
