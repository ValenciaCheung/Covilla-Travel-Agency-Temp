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
    id: "rome",
    name: "Rome",
    description:
      "The Eternal City captivates with its ancient wonders and timeless beauty. From the mighty Colosseum to the sacred Vatican, Rome offers an unparalleled journey through history, art, and culture that spans over two millennia.",
    price: "From $450",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Roman%20Colosseum%20at%20golden%20hour%2C%20historic%20architecture%2C%20tourists%20walking%2C%20warm%20sunset%20lighting%2C%20iconic%20Italian%20landmark&image_size=landscape_16_9",
    location: "Lazio, Italy",
  },
  {
    id: "florence",
    name: "Florence",
    description:
      "The birthplace of the Renaissance enchants visitors with its artistic treasures and architectural masterpieces. Home to Michelangelo's David, the Uffizi Gallery, and the magnificent Duomo, Florence is a living museum of human creativity.",
    price: "From $380",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Florence%20Ponte%20Vecchio%20bridge%20over%20Arno%20river%2C%20medieval%20stone%20bridge%2C%20colorful%20buildings%2C%20Tuscan%20architecture%2C%20Renaissance%20city&image_size=landscape_16_9",
    location: "Tuscany, Italy",
  },
  {
    id: "venice",
    name: "Venice",
    description:
      "The magical floating city built on water offers a unique and romantic experience. Glide through ancient canals on a gondola, explore St. Mark's Square, and discover the timeless beauty of this UNESCO World Heritage masterpiece.",
    price: "From $420",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Venice%20Grand%20Canal%20with%20gondolas%2C%20historic%20palaces%2C%20water%20reflections%2C%20romantic%20Italian%20waterways%2C%20sunset%20atmosphere&image_size=landscape_16_9",
    location: "Veneto, Italy",
  },
  {
    id: "milan",
    name: "Milan",
    description:
      "Italy's fashion and design capital combines modern sophistication with historical grandeur. Marvel at the Gothic Duomo, shop in the elegant Quadrilatero della Moda, and experience world-class art including Da Vinci's Last Supper.",
    price: "From $400",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Milan%20Cathedral%20Duomo%20with%20Gothic%20spires%2C%20white%20marble%20facade%2C%20Italian%20architecture%2C%20city%20square%2C%20fashion%20capital&image_size=landscape_16_9",
    location: "Lombardy, Italy",
  },
  {
    id: "naples",
    name: "Naples",
    description:
      "The vibrant gateway to southern Italy offers authentic culture, incredible cuisine, and access to Pompeii and the Amalfi Coast. Experience the birthplace of pizza, explore ancient ruins, and soak in the passionate Neapolitan spirit.",
    price: "From $320",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Naples%20Bay%20with%20Mount%20Vesuvius%2C%20Italian%20coastal%20city%2C%20Mediterranean%20sea%2C%20volcanic%20landscape%2C%20southern%20Italy&image_size=landscape_16_9",
    location: "Campania, Italy",
  },
  {
    id: "cinque-terre",
    name: "Cinque Terre",
    description:
      "Five picturesque fishing villages perched dramatically on the rugged Ligurian coastline. Connected by scenic hiking trails and charming trains, these colorful towns offer breathtaking views, fresh seafood, and authentic Italian coastal charm.",
    price: "From $350",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Cinque%20Terre%20colorful%20houses%20on%20cliffs%2C%20Italian%20Riviera%2C%20Mediterranean%20coastline%2C%20fishing%20village%2C%20terraced%20vineyards&image_size=landscape_16_9",
    location: "Liguria, Italy",
  },
];

export default function ItalyPage() {
  const featuredDestination = destinations[0]; // Rome as featured
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
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('${carouselImages[currentImageIndex]}')`
              }}
            >
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
                onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destinations[currentImageIndex].name + ', Italy')}`, '_blank')}
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
                Vacations in Italy
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
                              EUROPE
                            </span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {destination.name}
                            </h3>
                          </div>
                          <button 
                            onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination.name + ', Italy')}`, '_blank')}
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