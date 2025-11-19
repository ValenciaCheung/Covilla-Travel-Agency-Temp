"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

interface Destination {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  location: string;
}

const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    description:
      "Discover the Island of the Gods with its stunning temples, lush rice terraces, and pristine beaches. Experience traditional Balinese culture, world-class spas, and vibrant nightlife in this tropical paradise.",
    price: "From $399",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Bali%20Indonesia%20rice%20terraces%20with%20traditional%20temple%20in%20background%2C%20lush%20green%20landscape%2C%20tropical%20paradise%2C%20golden%20hour%20lighting&image_size=landscape_16_9",
    location: "Bali, Indonesia",
  },
  {
    id: "komodo-island",
    name: "Komodo Island",
    description:
      "Home to the legendary Komodo dragons, this UNESCO World Heritage site offers incredible wildlife encounters, pristine diving spots, and dramatic landscapes. Perfect for adventure seekers and nature lovers.",
    price: "From $450",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Komodo%20Island%20Indonesia%20rugged%20volcanic%20landscape%20with%20Komodo%20dragons%2C%20dramatic%20hills%2C%20pristine%20beaches%2C%20UNESCO%20World%20Heritage%20site%2C%20wildlife%20sanctuary&image_size=landscape_16_9",
    location: "East Nusa Tenggara, Indonesia",
  },
  {
    id: "gili-islands",
    name: "Gili Islands",
    description:
      "Three small tropical islands offering crystal-clear waters, white sandy beaches, and vibrant coral reefs. No motorized vehicles allowed - just bicycles, horse carts, and pure island tranquility.",
    price: "From $299",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Gili%20Islands%20Indonesia%20pristine%20white%20sandy%20beach%20with%20crystal%20clear%20turquoise%20water%2C%20palm%20trees%2C%20tropical%20paradise%2C%20no%20cars&image_size=landscape_16_9",
    location: "Lombok, Indonesia",
  },
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    description:
      "Cultural heart of Java featuring ancient temples like Borobudur and Prambanan, traditional arts, royal palaces, and authentic Indonesian cuisine. A perfect blend of history and modern culture.",
    price: "From $199",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Yogyakarta%20Indonesia%20Borobudur%20temple%20at%20sunrise%2C%20ancient%20Buddhist%20architecture%2C%20misty%20mountains%2C%20cultural%20heritage&image_size=landscape_16_9",
    location: "Central Java, Indonesia",
  },
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    description:
      "The crown jewel of marine biodiversity, offering world-class diving with manta rays, whale sharks, and pristine coral reefs. Remote islands with untouched natural beauty and incredible underwater life.",
    price: "From $750",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Raja%20Ampat%20Indonesia%20pristine%20tropical%20islands%20with%20crystal%20clear%20water%2C%20coral%20reefs%2C%20remote%20paradise%2C%20diving%20destination&image_size=landscape_16_9",
    location: "West Papua, Indonesia",
  },
  {
    id: "lombok",
    name: "Lombok",
    description:
      "Bali's quieter neighbor offering pristine beaches, the majestic Mount Rinjani volcano, traditional Sasak culture, and world-class surfing spots. Perfect for those seeking authentic Indonesian experiences.",
    price: "From $350",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Lombok%20Indonesia%20Mount%20Rinjani%20volcano%20with%20crater%20lake%2C%20dramatic%20mountain%20landscape%2C%20tropical%20island%20scenery&image_size=landscape_16_9",
    location: "West Nusa Tenggara, Indonesia",
  },
];

export default function IndonesiaPage() {
  const featuredDestination = destinations[0]; // Bali as featured
  const otherDestinations = destinations.slice(1); // Show all remaining 5 destinations
  
  // Carousel state for featured images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = destinations.map(dest => dest.image);
  
  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="relative">
        <div className="flex min-h-screen">
          {/* Left Section - Featured Vacation */}
          <div className="w-[48%] relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
            <div className="absolute inset-0">
              <img
                src={carouselImages[currentImageIndex]}
                alt={destinations[currentImageIndex].name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-4">
              <button 
                onClick={nextImage}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <button 
                onClick={prevImage}
                className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Featured Content */}
            <div className="absolute bottom-0 left-0 right-0 text-white" style={{ padding: '5rem' }}>
              <span className="text-sm font-medium uppercase tracking-wider opacity-90 block mb-4">
                FEATURED VACATION
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {destinations[currentImageIndex].name}
              </h1>

              <button 
                onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destinations[currentImageIndex].name + ', Indonesia')}`, '_blank')}
                className="bg-white text-slate-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wide cursor-pointer"
              >
                VIEW VACATION
              </button>
            </div>


          </div>

          {/* Right Section - Destinations List */}
          <div className="w-[52%] bg-white pl-16 pr-12 pt-32">
            {/* Header */}
            <div className="mb-12 ml-10">
              <span
                className="inline-block text-sm font-semibold text-white px-4 py-2 rounded-full uppercase tracking-wider mb-6"
                style={{ backgroundColor: "#3572ff" }}
              >
                6 COVILLA VACATIONS
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Vacations in Indonesia
              </h2>
            </div>

            {/* Destination Cards */}
            <div className="space-y-6 ml-10">
              {otherDestinations.map((destination, index) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                >
                  <div className="flex">
                    {/* Card Image */}
                    <div className="relative overflow-hidden flex-shrink-0" style={{ width: '20rem', height: '15rem', borderRadius: '-0.25rem' }}>
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ borderRadius: '-0.25rem' }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/95 backdrop-blur-sm text-slate-700 text-xs font-semibold px-2 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                          DEAL
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 p-6 pl-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                              ASIA
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {destination.name}
                            </h3>
                          </div>
                          <button 
                            onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination.name + ', Indonesia')}`, '_blank')}
                            className="text-xs text-slate-500 uppercase tracking-wide font-medium hover:text-slate-700 transition-colors cursor-pointer"
                          >
                            DETAILS
                          </button>
                        </div>

                        <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-2">
                          {destination.description}
                        </p>

                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                            STARTS AT
                          </p>
                          <p className="text-lg font-bold text-slate-900">
                            {destination.price.replace("From ", "")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}