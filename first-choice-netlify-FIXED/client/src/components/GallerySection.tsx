import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/attached_assets/owner.png",
    alt: "Business owner with company vehicle",
    category: "Team"
  },
  {
    src: "https://images.unsplash.com/photo-1523920290232-e4194064aaa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "San Antonio Riverwalk",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1607779097040-28d346cab303?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Insurance documents",
    category: "Business"
  },
  {
    src: "https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Tower of the Americas",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "Family protected by insurance",
    category: "Customers"
  },
  {
    src: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce817?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    alt: "San Antonio downtown skyline",
    category: "Community"
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Gallery
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            A glimpse into our community involvement, team, and the vibrant San Antonio area we proudly serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-accent text-black font-medium">{image.category}</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-neutral-dark font-medium">{image.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}