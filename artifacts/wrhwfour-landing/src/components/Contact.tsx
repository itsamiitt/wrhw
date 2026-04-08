import { motion } from "framer-motion";
import { Mail, MapPin, Building, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details"),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Submitted",
      description: "Our corporate sales team will contact you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Dot-matrix pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-sm font-bold tracking-[0.1em] text-primary uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Ready to Upgrade Your Infrastructure?
            </h3>
            <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">
              Contact our enterprise sales team for procurement inquiries, AMC proposals, or bespoke hardware configurations.
            </p>

            <div className="space-y-10 flex-grow">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Building className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="border-l border-primary/30 pl-6 py-1">
                  <h4 className="text-white font-semibold text-xl mb-2 tracking-tight">Corporate HQ</h4>
                  <p className="text-slate-400 leading-relaxed font-light">
                    8th Floor, Unit No.801<br />
                    World Trade Centre, Dhole Patil Farms Road<br />
                    EON Free Zone, Kharadi, Pune, Maharashtra 411014
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="border-l border-primary/30 pl-6 py-1">
                  <h4 className="text-white font-semibold text-xl mb-2 tracking-tight">Email</h4>
                  <a href="mailto:hr.wrhwfour@gmail.com" className="text-slate-400 hover:text-primary transition-colors font-light">
                    hr.wrhwfour@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="border-l border-primary/30 pl-6 py-1">
                  <h4 className="text-white font-semibold text-xl mb-2 tracking-tight">Service Area</h4>
                  <p className="text-slate-400 font-light">Pan India Operations</p>
                </div>
              </div>
            </div>

            {/* Subtle animated connection graphic */}
            <div className="mt-12 h-24 relative opacity-40">
               <svg className="w-full h-full" viewBox="0 0 200 50">
                 <motion.path 
                   d="M10,25 Q50,5 100,25 T190,25" 
                   stroke="url(#gradient)" 
                   strokeWidth="1" 
                   fill="none"
                   initial={{ pathLength: 0, opacity: 0 }}
                   whileInView={{ pathLength: 1, opacity: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                 />
                 <defs>
                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#D4601A" stopOpacity="0" />
                     <stop offset="50%" stopColor="#D4601A" stopOpacity="1" />
                     <stop offset="100%" stopColor="#D4601A" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <motion.circle 
                   cx="100" cy="25" r="2" fill="#D4601A"
                   animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 />
               </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <h4 className="text-2xl font-bold text-white mb-8 tracking-tight">Request a Quote</h4>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-normal">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-normal">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" {...field} className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-normal">Work Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@acme.com" type="email" {...field} className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300 font-normal">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 font-normal">Service Required</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/15 text-white focus:border-primary focus:ring-1 focus:ring-primary data-[placeholder]:text-white/30">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-900 border-white/10 text-white">
                            <SelectItem value="cctv" className="focus:bg-primary/20 focus:text-white">CCTV Installation</SelectItem>
                            <SelectItem value="hardware" className="focus:bg-primary/20 focus:text-white">Computer / Server Sales</SelectItem>
                            <SelectItem value="amc" className="focus:bg-primary/20 focus:text-white">Corporate IT AMC</SelectItem>
                            <SelectItem value="networking" className="focus:bg-primary/20 focus:text-white">Networking Solutions</SelectItem>
                            <SelectItem value="biometric" className="focus:bg-primary/20 focus:text-white">Biometric Systems</SelectItem>
                            <SelectItem value="other" className="focus:bg-primary/20 focus:text-white">Other Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 font-normal">Message details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your requirements..." 
                            className="min-h-[120px] bg-white/5 border-white/15 text-white placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary resize-y"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    type="submit" 
                    className="w-full py-4 text-white rounded font-semibold text-lg flex items-center justify-center gap-3 shadow-[var(--shadow-copper-glow)] group transition-all mt-4"
                    style={{ background: 'var(--gradient-copper)' }}
                  >
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}