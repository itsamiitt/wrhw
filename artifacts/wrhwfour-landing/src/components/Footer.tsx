import lightLogo from "@assets/WRHW_logo_1775607098102.png";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1520] pt-24 pb-8 relative overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Watermark */}
      <div className="absolute bottom-0 left-0 right-0 text-[15vw] font-bold text-white/[0.03] text-center leading-none pointer-events-none select-none whitespace-nowrap overflow-hidden">
        WRHWFOUR
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          <div className="lg:col-span-1">
            <img src={lightLogo} alt="WRHWFOUR Logo" className="h-12 mb-8 brightness-0 invert opacity-90" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
              Precision engineered IT services, hardware provisioning, and comprehensive infrastructure management for corporate India.
            </p>
            <p className="text-primary text-xs font-mono tracking-widest opacity-80">CIN: U46491PN2024PTC232130</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.15em] text-xs">Services</h4>
            <ul className="space-y-4">
              {['IT AMC Services', 'Hardware Sales', 'Server Installation', 'CCTV & Biometric', 'Networking Solutions'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-primary transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.15em] text-xs">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Why Choose Us', 'Pan India Coverage', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-400 hover:text-primary transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.15em] text-xs">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(212,96,26,0.4)]">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(212,96,26,0.4)]">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(212,96,26,0.4)]">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-light">
            © {currentYear} WRHWFOUR Private Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 font-light">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}