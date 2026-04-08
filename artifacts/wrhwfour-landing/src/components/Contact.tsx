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
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Upgrade Your Infrastructure?
            </h3>
            <p className="text-slate-400 text-lg mb-10">
              Contact our enterprise sales team for procurement inquiries, AMC proposals, or bespoke hardware configurations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Corporate HQ</h4>
                  <p className="text-slate-400 leading-relaxed">
                    8th Floor, Unit No.801<br />
                    World Trade Centre, Dhole Patil Farms Road<br />
                    EON Free Zone, Kharadi, Pune, Maharashtra 411014
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:hr.wrhwfour@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                    hr.wrhwfour@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Service Area</h4>
                  <p className="text-slate-400">Pan India Operations</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-2xl"
          >
            <h4 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h4>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-gray-50" />
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
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" {...field} className="bg-gray-50" />
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
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@acme.com" type="email" {...field} className="bg-gray-50" />
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
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} className="bg-gray-50" />
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
                      <FormLabel>Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-gray-50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cctv">CCTV Installation</SelectItem>
                          <SelectItem value="hardware">Computer / Server Sales</SelectItem>
                          <SelectItem value="amc">Corporate IT AMC</SelectItem>
                          <SelectItem value="networking">Networking Solutions</SelectItem>
                          <SelectItem value="biometric">Biometric Systems</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
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
                      <FormLabel>Message details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about your requirements..." 
                          className="min-h-[120px] bg-gray-50 resize-y"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button 
                  type="submit" 
                  className="w-full py-4 bg-primary text-white rounded-md font-semibold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group shadow-[0_4px_14px_0_hsl(25_55%_50%/0.39)]"
                >
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
