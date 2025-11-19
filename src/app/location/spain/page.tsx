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
    id: "barcelona",
    name: "Barcelona",
    description:
      "Discover the architectural wonders of Antoni Gaudí in this vibrant Catalan capital. From the iconic Sagrada Familia to the whimsical Park Güell, Barcelona offers a perfect blend of art, culture, and Mediterranean charm.",
    price: "From $399",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20French%20countryside%20landscape%20with%20rolling%20hills%2C%20vineyards%2C%20lavender%20fields%2C%20charming%20stone%20village%2C%20golden%20sunset%20light&image_size=landscape_16_9",
    location: "Catalonia, Spain",
  },
  {
    id: "madrid",
    name: "Madrid",
    description:
      "Spain's magnificent capital city boasts world-class museums like the Prado, elegant boulevards, and vibrant plazas. Experience the heart of Spanish culture with its royal palaces, art galleries, and lively tapas scene.",
    price: "From $350",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Picturesque%20French%20village%20with%20cobblestone%20streets%2C%20traditional%20architecture%2C%20flower%20boxes%2C%20cafe%20terraces%2C%20warm%20afternoon%20light&image_size=landscape_16_9",
    location: "Community of Madrid, Spain",
  },
  {
    id: "seville",
    name: "Seville",
    description:
      "The passionate capital of Andalusia enchants visitors with its Moorish architecture, flamenco rhythms, and orange-scented streets. Explore the magnificent Alcázar palace and the world's largest Gothic cathedral.",
    price: "From $299",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Stunning%20French%20Mediterranean%20coastline%20with%20azure%20blue%20sea%2C%20white%20cliffs%2C%20coastal%20towns%2C%20boats%20in%20harbor%2C%20sunny%20day&image_size=landscape_16_9",
    location: "Andalusia, Spain",
  },
  {
    id: "granada",
    name: "Granada",
    description:
      "Nestled at the foot of the Sierra Nevada mountains, Granada is home to the breathtaking Alhambra palace. This historic city perfectly blends Moorish heritage with Spanish culture in an unforgettable setting.",
    price: "From $275",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Majestic%20French%20castle%20surrounded%20by%20lush%20green%20forests%2C%20Loire%20Valley%20landscape%2C%20fairy%20tale%20architecture%2C%20clear%20blue%20sky&image_size=landscape_16_9",
    location: "Andalusia, Spain",
  },
  {
    id: "valencia",
    name: "Valencia",
    description:
      "Spain's third-largest city combines futuristic architecture with ancient history. Famous for paella, beautiful beaches, and the stunning City of Arts and Sciences, Valencia offers the perfect Mediterranean experience.",
    price: "From $320",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20French%20Alps%20mountain%20landscape%20with%20snow%20capped%20peaks%2C%20alpine%20meadows%2C%20traditional%20chalets%2C%20crystal%20clear%20lake&image_size=landscape_16_9",
    location: "Valencia, Spain",
  },
  {
    id: "toledo",
    name: "Toledo",
    description:
      "The ancient 'City of Three Cultures' sits majestically on a hilltop overlooking the Tagus River. This UNESCO World Heritage site showcases centuries of Christian, Muslim, and Jewish coexistence through its stunning architecture.",
    price: "From $250",
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Romantic%20French%20Paris%20cityscape%20with%20Eiffel%20Tower%2C%20Seine%20river%2C%20historic%20bridges%2C%20Haussmanian%20buildings%2C%20golden%20hour%20lighting&image_size=landscape_16_9",
    location: "Castile-La Mancha, Spain",
  },
];

export default function SpainPage() {
  const featuredDestination = destinations[0]; // Barcelona as featured
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
                onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destinations[currentImageIndex].name + ', Spain')}`, '_blank')}
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
                Vacations in Spain
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
                            onClick={() => window.open(`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination.name + ', Spain')}`, '_blank')}
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