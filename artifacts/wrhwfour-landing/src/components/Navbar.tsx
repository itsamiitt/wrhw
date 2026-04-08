import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import lightLogo from "@assets/WRHW_logo_1775607098102.png";

const navLinks = [
  { name: "Services", type: "scroll", id: "services" },
  { name: "About Us", type: "link", href: "/about" },
  { name: "Why Us", type: "link", href: "/why-choose-us" },
  { name: "Coverage", type: "link", href: "/coverage" },
  { name: "Contact", type: "link", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-xl shadow-sm py-3 border-b border-white/30"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection("hero")} className="flex items-center group">
              <img
                src={lightLogo}
                alt="WRHWFOUR Logo"
                className={`transition-all duration-500 ${isScrolled ? "h-12" : "h-14 md:h-16 brightness-0 invert"}`}
              />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) =>
                link.type === "scroll" ? (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id!)}
                    className={`text-sm font-medium tracking-[0.02em] transition-colors font-sans ${
                      isScrolled
                        ? "text-secondary hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href!}
                    className={`text-sm font-medium tracking-[0.02em] transition-colors font-sans ${
                      isScrolled
                        ? "text-secondary hover:text-primary"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <motion.div
                whileHover={{ y: -0.5 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="/contact"
                  className={`px-6 py-2.5 rounded text-sm font-medium tracking-wide transition-all block ${
                    isScrolled
                      ? "text-white shadow-[var(--shadow-copper-glow)] hover:opacity-90"
                      : "bg-white text-primary hover:bg-gray-50 shadow-md"
                  }`}
                  style={isScrolled ? { backgroundImage: 'var(--gradient-copper)' } : {}}
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-foreground" : "text-white"} size={24} />
              ) : (
                <Menu className={isScrolled ? "text-foreground" : "text-white"} size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-2 md:hidden">
            {navLinks.map((link) =>
              link.type === "scroll" ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-left text-foreground font-medium text-lg py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  href={link.href!}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left text-foreground font-medium text-lg py-3 px-4 rounded-md hover:bg-gray-50 transition-colors block"
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-md text-white font-medium shadow-md text-center block"
                style={{ backgroundImage: 'var(--gradient-copper)' }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
