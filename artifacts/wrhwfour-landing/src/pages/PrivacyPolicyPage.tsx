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
    content: `WRHWFOUR Private Limited ("Company," "we," "our," or "us"), incorporated under the Companies Act 2013 with CIN U46491PN2024PTC232130 and registered at World Trade Centre, Kharadi, Pune, Maharashtra, is committed to protecting the privacy and personal information of our clients, website visitors, and business contacts.

This Privacy Policy explains how we collect, use, process, store, and protect your personal data when you interact with our website (www.wrhwfour.com), communicate with our team, or engage us for IT infrastructure services. Please read this policy carefully before providing us with any personal information.

By using our website or services, you consent to the data practices described in this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following categories of personal and business information:

**2.1 Information You Provide Directly**
- Full name, designation, and company name
- Business email address and telephone number
- Registered office address and billing address
- Service requirements and technical specifications
- Communications sent via contact forms, email, or telephone

**2.2 Information Collected Automatically**
- IP address and browser type
- Pages visited, session duration, and referral source
- Device information (operating system, screen resolution)
- Cookies and similar tracking technologies (see Section 8)

**2.3 Information From Third Parties**
- Business references provided by mutual contacts
- Publicly available professional information (e.g., LinkedIn)
- Data from analytics platforms (Google Analytics)

We do not collect sensitive personal data such as financial account numbers, Aadhaar numbers, or health-related information unless strictly required for billing or background verification purposes, in which case we will seek your explicit consent.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal information only for legitimate business purposes, including:

- **Service Delivery**: Processing inquiries, preparing quotations, executing service agreements, and managing ongoing maintenance contracts.
- **Communication**: Responding to queries, scheduling site visits, sending service updates, and issuing invoices.
- **Account Management**: Managing client accounts, tracking service history, and handling complaints or escalations.
- **Legal & Compliance**: Fulfilling statutory obligations under Indian law, including GST returns, corporate filings, and regulatory reporting.
- **Improvement of Services**: Analysing usage patterns to improve our website experience and service offerings.
- **Marketing (with consent)**: Sending information about new services, offers, or industry updates — only if you have opted in.

We will never sell, rent, or trade your personal information to any third party for their marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your personal data on the following legal grounds under applicable Indian data protection law and principles:

- **Contractual Necessity**: Processing required to fulfil a service contract or pre-contractual inquiry.
- **Legal Obligation**: Processing required by law (e.g., GST registration data, company records).
- **Legitimate Interest**: Processing for fraud prevention, network security, and internal business analytics.
- **Consent**: Processing for marketing communications, cookies, or any other purpose where you have explicitly opted in.

You have the right to withdraw consent at any time without affecting the lawfulness of processing already carried out.`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `We may share your information with:

**5.1 Service Partners**
Our certified field service partners in Tier 2 and 3 cities who perform on-site work on our behalf. These partners are bound by confidentiality agreements and are prohibited from using your data for any purpose other than service delivery.

**5.2 Technology Providers**
Cloud hosting providers, CRM platforms, and communication tools used in our internal operations. We select vendors who comply with industry-standard data security practices.

**5.3 Professional Advisors**
Legal counsel, auditors, and accountants who may access client data in the course of providing professional services to WRHWFOUR.

**5.4 Legal and Regulatory Authorities**
Government bodies, courts, or law enforcement agencies when required by applicable law, court order, or regulatory directive.

We do not transfer your data outside of India unless required by law or you explicitly consent to an international transfer.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal data only for as long as necessary for the purposes outlined in this policy, or as required by applicable law:

- **Client and Contract Records**: Minimum 8 years from the end of the contract (as per the Companies Act and GST requirements).
- **Contact Form Submissions**: Up to 3 years, or until you request deletion.
- **Marketing Preferences**: Until you withdraw consent or opt out.
- **Website Analytics Data**: Aggregated data retained indefinitely; personally identifiable data deleted within 26 months.

After the applicable retention period, we securely destroy or anonymize your data.`,
  },
  {
    title: "7. Data Security",
    content: `We implement industry-standard technical and organizational security measures to protect your information:

- Secure HTTPS encryption for all data transmitted through our website
- Access controls limiting data access to authorized personnel only
- Regular security reviews and vulnerability assessments
- Secure data deletion protocols for expired records
- Staff training on data protection and confidentiality

However, no method of transmission over the internet or electronic storage is 100% secure. While we take commercially reasonable steps to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: "8. Cookies Policy",
    content: `Our website uses cookies to enhance your browsing experience:

- **Essential Cookies**: Required for the website to function correctly (session management, security).
- **Analytics Cookies**: Used to understand visitor behaviour and improve website performance (e.g., Google Analytics). These are anonymized.
- **Marketing Cookies**: Only used if you have given explicit consent for marketing communications.

You can manage cookie preferences through your browser settings. Disabling cookies may affect certain website functionality.`,
  },
  {
    title: "9. Your Rights",
    content: `You have the following rights regarding your personal data:

- **Right to Access**: Request a copy of the personal data we hold about you.
- **Right to Rectification**: Ask us to correct inaccurate or incomplete information.
- **Right to Erasure**: Request deletion of your personal data, subject to legal retention obligations.
- **Right to Restriction**: Ask us to limit how we use your data in certain circumstances.
- **Right to Object**: Object to processing based on legitimate interest, including direct marketing.
- **Right to Withdraw Consent**: Withdraw consent for consent-based processing at any time.

To exercise any of these rights, please contact us at privacy@wrhwfour.com. We will respond within 30 days.`,
  },
  {
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites, including technology partners and industry resources. These sites have their own privacy policies, and we have no control over their content or practices. We are not responsible for the privacy practices of any third-party website. We encourage you to review the privacy policy of any external site you visit.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We reserve the right to update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. Material changes will be communicated via a notice on our website or by email to active clients. The "Last Updated" date at the top of this page will indicate when the policy was most recently revised.

Continued use of our website or services after any update constitutes acceptance of the revised policy.`,
  },
  {
    title: "12. Contact for Privacy Matters",
    content: `For any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact:

**WRHWFOUR Private Limited**
Data Privacy Team
World Trade Centre, Kharadi
Pune, Maharashtra — 411014

Email: info@wrhwfour.com
We aim to respond to all privacy-related correspondence within 30 days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      {/* Hero */}
      <section className="bg-[#0B1520] py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-primary text-sm font-bold tracking-[0.15em] uppercase mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">Privacy Policy</h1>
            <p className="text-slate-400 font-light">Last Updated: April 2026 &nbsp;|&nbsp; Effective: April 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="bg-amber-50 border border-amber-200 p-6 rounded mb-12">
              <p className="text-amber-800 text-sm font-light leading-relaxed">
                <strong className="font-semibold">Summary:</strong> WRHWFOUR collects only the information necessary to provide IT infrastructure services to businesses. We do not sell your data, we protect it with industry-standard security, and you can request its deletion at any time. For the full details, please read this policy.
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
                  <div className="text-muted-foreground font-light leading-relaxed text-sm space-y-3 whitespace-pre-line">
                    {section.content.split("\n\n").map((para, j) => (
                      <p key={j} dangerouslySetInnerHTML={{
                        __html: para
                          .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-foreground'>$1</strong>")
                      }} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-[#FAFAF8] border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-foreground mb-4">Related Legal Documents</p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Terms & Conditions", href: "/terms-conditions" },
                { label: "Refund & Cancellation Policy", href: "/refund-policy" },
                { label: "Service Policy", href: "/service-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-white transition-all"
                >
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
