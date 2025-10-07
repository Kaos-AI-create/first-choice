import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Home, Heart, Building, Plane, Briefcase, Check } from "lucide-react";
import { services } from "@/lib/data";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function ServicesSection() {
  const getServiceIcon = (type: string, size = 16) => {
    switch (type) {
      case "auto":
        return <Car size={size} />;
      case "home":
        return <Home size={size} />;
      case "life":
        return <Heart size={size} />;
      case "renters":
        return <Building size={size} />;
      case "travel":
        return <Plane size={size} />;
      case "business":
        return <Briefcase size={size} />;
      default:
        return <Car size={size} />;
    }
  };

  return (
    <section id="services" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-3">Our Insurance Services</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            Customized coverage options to protect what matters most to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg"
            >
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-accent rounded-full p-2 mr-3 text-white">
                    {getServiceIcon(service.type)}
                  </div>
                  <h3 className="font-bold text-primary text-xl">{service.title}</h3>
                </div>
                <p className="text-neutral-dark mb-4 text-sm">{service.description.split('.')[0]}.</p>
                <ul className="mb-5 text-neutral-dark text-sm space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-accent mt-0.5 mr-2 flex-shrink-0" size={14} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("#contact");
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
