"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    author: "Samantha Vohnhale"
  },
  {
    id: 2,
    quote: "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    author: "Wilson Tomales"
  },
  {
    id: 3,
    quote: "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    author: "Tammy Georgeon"
  },
  {
    id: 4,
    quote: "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    author: "Emily Camphon"
  },
  {
    id: 5,
    quote: "Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac neque. Sed vitae sollicitudin elit, ac tristique nisi. Pellentesque rutrum egestas massa lacinia volutpat. Integer et facilisis elit, vitae lobortis enim.",
    author: "Cassie Shamath"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(3); // Default to index 3 (4th testimonial)
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevious = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const currentTestimonial = testimonials[currentIndex];
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/1081758887/3305024072.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Navigation Numbers */}
          <div className="flex justify-center space-x-8 mb-12">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`text-lg ${
                  index === currentIndex
                    ? "text-white font-bold"
                    : "text-white/60"
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div 
            key={`testimonial-${currentIndex}`}
            className="animate-fade-up"
          >
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="mb-12">
              <div className="text-lg font-semibold">{currentTestimonial.author}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              size="icon"
              variant="outline"
              className="w-12 h-12 rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-12 h-12 rounded-full border-white/30 bg-white/10 hover:bg-white/20 text-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
