import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Mobile Fixed Call Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Button asChild className="bg-accent hover:bg-accent-dark text-white font-medium text-lg py-3 px-6 rounded-full shadow-lg">
          <a href="tel:210-590-9955" className="flex items-center">
            <Phone className="mr-2" size={18} />
            Call Now
          </a>
        </Button>
      </div>
    </>
  );
}
