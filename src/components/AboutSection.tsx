"use client";

import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: "https://cdn.prod.website-files.com/60675f13ea324fdd4af9ef2a/607b6d1847737e3cad7ace73_Family005.jpeg",
      alt: "Family vacation"
    },
    {
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop",
      alt: "Tropical beach sunset"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop",
      alt: "Luxury resort pool"
    },
    {
      src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1920&q=80&auto=format&fit=crop",
      alt: "Mountain hiking adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80&auto=format&fit=crop",
      alt: "City skyline at night"
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80&auto=format&fit=crop",
      alt: "Cozy winter cabin"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-4">
              <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-6 block">
                ABOUT COVILLA
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sollicitudin eget velit ut sollicitudin. Nunc ullamcorper nibh
                nulla.
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sollicitudin eget velit ut sollicitudin. Nunc ullamcorper nibh
                nulla. In viverra id felis id tincidunt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec
                ac neque. Sed vitae sollicitudin elit, ac tristique nisi.
                Pellentesque rutrum egestas massa lacinia volutpat. Integer et
                facilisis elit, vitae lobortis enim.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Full Width Image Gallery */}
      <div className="mt-16 overflow-hidden">
        <div className="flex w-full" style={{ margin: 0, padding: 0, gap: 0 }}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden cursor-pointer aspect-square"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsViewerOpen(true);
                  }}
                  style={{ 
                    margin: 0, 
                    padding: 0, 
                    width: `${100/6}%`,
                    flexShrink: 0,
                    border: 'none',
                    outline: 'none'
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out origin-center ${
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    }`}
                    style={{ margin: 0, padding: 0, display: 'block' }}
                  />
                  
                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-white text-center">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">View Image</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setIsViewerOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Main Image Container */}
          <div className="relative flex items-center justify-center mb-6" style={{ maxHeight: '60vh', maxWidth: '90vw' }}>
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            {/* Main Image */}
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
              style={{ maxHeight: '60vh', maxWidth: '90vw' }}
            />

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>

          {/* Thumbnail Navigation - Horizontal Layout */}
          <div className="flex space-x-3 justify-center max-w-full overflow-x-auto px-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded border-2 border-transparent hover:border-white transition-all duration-200"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Selected Overlay */}
                {currentImageIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 border-2 border-white rounded" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
