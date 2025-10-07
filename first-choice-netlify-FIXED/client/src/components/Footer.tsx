import React from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">First Choice Insurance</h3>
            <p className="mb-4">
              Your trusted insurance partner in San Antonio since 1995. Providing personalized coverage solutions for individuals, families, and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Insurance Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Home Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Renters Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Travel Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Business Insurance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors" onClick={(e) => handleNavClick(e, '#contact')}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-accent" size={18} />
                <span>
                  8526 Tuxford<br />
                  San Antonio, TX 78239
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent" size={18} />
                <a href="tel:210-590-9955" className="hover:text-accent transition-colors">
                  210-590-9955
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent" size={18} />
                <a href="mailto:info@firstchoiceins.com" className="hover:text-accent transition-colors">
                  info@firstchoiceins.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-accent" size={18} />
                <div>
                  <div>Monday - Friday: 9:00 AM - 5:30 PM</div>
                  <div>Saturday: 10:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} First Choice Insurance Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
