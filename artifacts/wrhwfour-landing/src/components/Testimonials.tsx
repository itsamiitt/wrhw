import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "WRHWFOUR successfully overhauled our entire server room infrastructure over a single weekend. Their precision and project management are unmatched in the region.",
    author: "CTO, Financial Services Firm",
    location: "Mumbai",
  },
  {
    quote: "Managing IT for 15 branches across India was a nightmare until we handed our AMC to WRHWFOUR. Their response time is exceptional.",
    author: "VP of Operations, Retail Chain",
    location: "Delhi",
  },
  {
    quote: "Their biometric and CCTV integration provided us with the exact enterprise-level security oversight we needed for our new manufacturing plant.",
    author: "Facility Director, Manufacturing",
    location: "Pune",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Client Trust</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Proven in the Boardroom</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-gray-100 w-16 h-16 -z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
