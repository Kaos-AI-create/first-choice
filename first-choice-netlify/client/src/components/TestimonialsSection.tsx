import React from "react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8 relative">
              <div className="absolute -top-4 left-8 text-primary text-6xl">"</div>
              <div className="pt-4">
                <p className="mb-6 text-neutral-dark italic">{testimonial.comment}</p>
                <div className="flex items-center">
                  <div className={`mr-4 h-12 w-12 bg-${testimonial.accentColor} rounded-full flex items-center justify-center text-white`}>
                    <span className="font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-dark">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
