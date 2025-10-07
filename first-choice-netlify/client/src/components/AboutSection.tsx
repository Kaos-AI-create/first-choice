import React from "react";
import { Shield, Handshake, PiggyBank, Clock, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-4">About First Choice Insurance</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
            <div className="relative">
              <img 
                src="/assets/agent-image.png" 
                alt="First Choice Insurance Services Agent in San Antonio" 
                className="h-80 w-full rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-medium text-center">
                  <Shield className="mx-auto mb-2" size={24} />
                  <span className="text-xl">25+ Years</span><br />
                  <span>of Excellence</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8 lg:p-10">
              <h3 className="text-2xl font-bold font-heading text-primary mb-4">Our Commitment To You</h3>
              <p className="mb-6 text-neutral-dark">
                At First Choice Insurance Services, we believe that insurance is about more than policies—it's about people. Located in the heart of San Antonio, we've been helping individuals, families, and businesses find the right coverage at the right price for over two decades.
              </p>
              <p className="mb-6 text-neutral-dark">
                Our team of experienced agents takes the time to understand your unique needs, offering personalized solutions that provide peace of mind and financial security.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-accent-light rounded-full p-2 mr-4 text-white">
                    <Handshake size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading mb-1">Personal Service</h4>
                    <p className="text-sm">Dedicated agents who know your name</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-light rounded-full p-2 mr-4 text-white">
                    <PiggyBank size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading mb-1">Competitive Rates</h4>
                    <p className="text-sm">Options that fit your budget</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-light rounded-full p-2 mr-4 text-white">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading mb-1">Quick Response</h4>
                    <p className="text-sm">Same-day quotes and assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent-light rounded-full p-2 mr-4 text-white">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading mb-1">Locally Owned</h4>
                    <p className="text-sm">Proud to serve San Antonio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
