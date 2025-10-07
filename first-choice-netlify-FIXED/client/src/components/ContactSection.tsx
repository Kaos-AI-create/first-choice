import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Basic form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.insuranceType || !formData.message) {
      e.preventDefault();
      toast({
        title: "Please Complete All Fields",
        description: "All fields are required to submit your inquiry.",
        variant: "destructive"
      });
      return;
    }
    // Let the form submit naturally to Netlify
    // Don't prevent default if validation passes
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            Have questions or ready to get started? Reach out to our team for personalized assistance.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden">
            <form 
              className="p-8" 
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">Get a Free Quote</h3>
              
              <div className="mb-4">
                <Label htmlFor="name" className="text-neutral-dark font-medium">Full Name</Label>
                <Input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-1"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="email" className="text-neutral-dark font-medium">Email Address</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className="mt-1"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="phone" className="text-neutral-dark font-medium">Phone Number</Label>
                <Input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(210) 123-4567"
                  className="mt-1"
                  required
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="insuranceType" className="text-neutral-dark font-medium">Insurance Type</Label>
                <select 
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select Insurance Type</option>
                  <option value="Auto Insurance">Auto Insurance</option>
                  <option value="Home Insurance">Home Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="Renters Insurance">Renters Insurance</option>
                  <option value="Travel Insurance">Travel Insurance</option>
                  <option value="Business Insurance">Business Insurance</option>
                </select>
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="text-neutral-dark font-medium">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your insurance needs..."
                  className="mt-1 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-dark text-white"
              >
                Submit Request
              </Button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="bg-primary rounded-lg shadow-md p-8 text-white flex-grow">
              <h3 className="text-2xl font-bold font-heading mb-6">Get In Touch</h3>
              
              <div className="mb-6">
                <h4 className="font-bold font-heading mb-2 flex items-center">
                  <MapPin className="mr-3 text-accent" size={18} />
                  Visit Our Office
                </h4>
                <p className="pl-8">
                  8526 Tuxford<br />
                  San Antonio, TX 78239
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold font-heading mb-2 flex items-center">
                  <Phone className="mr-3 text-accent" size={18} />
                  Call Us
                </h4>
                <p className="pl-8">
                  <a href="tel:210-590-9955" className="hover:text-accent transition-colors">210-590-9955</a>
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold font-heading mb-2 flex items-center">
                  <Mail className="mr-3 text-accent" size={18} />
                  Email Us
                </h4>
                <p className="pl-8">
                  <a href="mailto:info@firstchoiceins.com" className="hover:text-accent transition-colors">info@firstchoiceins.com</a>
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold font-heading mb-2 flex items-center">
                  <Clock className="mr-3 text-accent" size={18} />
                  Office Hours
                </h4>
                <ul className="pl-8">
                  <li>Monday - Friday: 9:00 AM - 5:30 PM</li>
                  <li>Saturday: 10:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold font-heading mb-4">Follow Us</h4>
                <div className="flex space-x-4 pl-2">
                  <a href="#" className="text-white hover:text-accent transition-colors">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA Section */}
        <div className="mt-12 bg-accent/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Get Protected?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect insurance solution for your needs.
            Contact us today for personalized service and expert advice.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="mr-2 h-4 w-4" /> Call Us Today
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = 'mailto:info@firstchoiceins.com'}
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
