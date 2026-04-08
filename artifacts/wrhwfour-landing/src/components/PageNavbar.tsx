import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import lightLogo from "@assets/WRHW_logo_1775607098102.png";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/about" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Coverage", href: "/coverage" },
  { name: "Contact", href: "/contact" },
];

export default function PageNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <img
                src={lightLogo}
                alt="WRHWFOUR Logo"
                className="h-10 md:h-12 transition-all duration-300"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium tracking-[0.02em] transition-colors font-sans ${
                      isActive ? "text-primary" : "text-secondary hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded text-sm font-medium tracking-wide text-white transition-all hover:opacity-90"
                style={{ backgroundImage: "var(--gradient-copper)" }}
              >
                Get a Quote
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="text-foreground" size={24} />
              ) : (
                <Menu className="text-foreground" size={24} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-2 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-foreground font-medium text-lg py-3 px-4 rounded-md hover:bg-gray-50 transition-colors block"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-md text-white font-medium shadow-md text-center block"
                style={{ backgroundImage: "var(--gradient-copper)" }}
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
