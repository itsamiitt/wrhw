import { ReactNode, useEffect } from "react";
import { Link } from "wouter";
import PageNavbar from "@/components/PageNavbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | WRHWFOUR Private Limited`;
    }
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-background font-sans">
      <PageNavbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
