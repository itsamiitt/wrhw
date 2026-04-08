import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import lightLogo from "@assets/WRHW_logo_1775607098102.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Why Us", id: "why-us" },
    { name: "Coverage", id: "coverage" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center">
            <img
              src={lightLogo}
              alt="WRHWFOUR Logo"
              className={`transition-all duration-300 ${isScrolled ? "h-8" : "h-10 md:h-12 brightness-0 invert"}`}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? "text-secondary hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(25_55%_50%/0.39)] hover:shadow-[0_6px_20px_rgba(200,116,58,0.23)] hover:-translate-y-0.5"
                  : "bg-white text-primary hover:bg-gray-50"
              }`}
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
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
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-foreground font-medium text-lg py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
