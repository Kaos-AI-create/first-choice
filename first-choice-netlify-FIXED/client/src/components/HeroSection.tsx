import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Mail, Shield } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-0">
      <div className="relative min-h-screen flex items-center bg-gradient-to-b from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white/95 p-8 rounded-lg shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center bg-accent rounded-full p-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary mb-4">
                  Insurance That Puts You First
                </h1>
                <p className="text-base md:text-lg mb-6 text-neutral-dark">
                  Protect what matters most with San Antonio's trusted insurance partner.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white">
                    <a href="tel:210-590-9955" className="flex items-center">
                      <Phone className="mr-2" size={18} />
                      Call: 210-590-9955
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo("#contact");
                    }}
                  >
                    <a href="#contact" className="flex items-center">
                      <Mail className="mr-2" size={18} />
                      Get a Quote
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img 
                src="/assets/hero-image.png" 
                alt="First Choice Insurance Services - Insurance Agent in San Antonio" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <a 
            href="#about" 
            className="text-primary animate-bounce bg-white rounded-full p-2 shadow-md"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#about");
            }}
          >
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
