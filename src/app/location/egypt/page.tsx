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
    id: "bahariya-oasis",
    name: "Bahariya Oasis",
    description:
      "Experience the magic of the Western Desert with its natural hot springs, ancient ruins, and stunning landscapes. Perfect for adventure seekers looking to explore Egypt's hidden gems.",
    price: "From $299",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Bahariya%20Oasis%20Egypt%20desert%20landscape%20with%20palm%20trees%20and%20natural%20hot%20springs%2C%20golden%20sand%20dunes%2C%20clear%20blue%20sky&image_size=landscape_16_9",
    location: "Western Desert, Egypt",
  },
  {
    id: "sahl-hasheesh",
    name: "Sahl Hasheesh",
    description:
      "Luxury resort destination on the Red Sea coast featuring pristine beaches, world-class diving, and exclusive resorts. Ideal for relaxation and water sports enthusiasts.",
    price: "From $450",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Sahl%20Hasheesh%20Red%20Sea%20luxury%20resort%20with%20crystal%20clear%20turquoise%20water%2C%20white%20sandy%20beach%2C%20palm%20trees%2C%20modern%20hotels&image_size=landscape_16_9",
    location: "Red Sea, Egypt",
  },
  {
    id: "alexandria",
    name: "Alexandria",
    description:
      "Historic Mediterranean port city with ancient landmarks, beautiful coastline, and rich cultural heritage. Discover the legendary Library of Alexandria and Pharos Lighthouse.",
    price: "From $199",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Alexandria%20Egypt%20Mediterranean%20coastline%20with%20ancient%20architecture%2C%20historic%20buildings%2C%20blue%20sea%2C%20lighthouse%20in%20distance&image_size=landscape_16_9",
    location: "Mediterranean Coast, Egypt",
  },
  {
    id: "el-gouna",
    name: "El Gouna",
    description:
      "Modern resort town built on lagoons with Venetian-style architecture, championship golf courses, and vibrant nightlife. A perfect blend of luxury and adventure.",
    price: "From $380",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=El%20Gouna%20Egypt%20lagoon%20resort%20with%20colorful%20buildings%2C%20marina%2C%20boats%2C%20clear%20water%2C%20modern%20architecture&image_size=landscape_16_9",
    location: "Red Sea, Egypt",
  },
  {
    id: "marsa-matruh",
    name: "Marsa Matruh",
    description:
      "Stunning Mediterranean beach destination with crystal-clear waters and white sandy beaches. Famous for Cleopatra's Beach and ancient Roman ruins.",
    price: "From $250",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Marsa%20Matruh%20Egypt%20pristine%20white%20sandy%20beach%20with%20crystal%20clear%20turquoise%20Mediterranean%20water%2C%20rocky%20cliffs%2C%20sunny%20day&image_size=landscape_16_9",
    location: "Mediterranean Coast, Egypt",
  },
  {
    id: "sharm-el-sheikh",
    name: "Sharm El-Sheikh",
    description:
      "World-renowned diving destination at the southern tip of Sinai Peninsula. Home to spectacular coral reefs, luxury resorts, and vibrant marine life.",
    price: "From $350",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Sharm%20El%20Sheikh%20Egypt%20coral%20reef%20underwater%20scene%20with%20colorful%20fish%2C%20clear%20blue%20water%2C%20diving%20paradise&image_size=landscape_16_9",
    location: "Sinai Peninsula, Egypt",
  },
];

export default function EgyptPage() {
  const featuredDestination = destinations[0]; // Bahariya Oasis as featured
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
                onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destinations[currentImageIndex].name + ', Egypt')}`, '_blank')}
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
                Vacations in Egypt
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
                              AFRICA
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {destination.name}
                            </h3>
                          </div>
                          <button 
                            onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination.name + ', Egypt')}`, '_blank')}
                            className="text-xs text-slate-500 uppercase tracking-wide font-medium hover:text-slate-700 transition-colors cursor-pointer"
                          >
                            DETAILS
                          </button>
                        </div>

                        <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi sollicitudin eget.
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
