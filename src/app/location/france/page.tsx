"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Destination {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const destinations: Destination[] = [
  {
    id: "bonifacio",
    name: "Bonifacio",
    description:
      "Perched dramatically on white limestone cliffs, Bonifacio offers breathtaking views of the Mediterranean. This medieval citadel town in Corsica combines stunning natural beauty with rich history, featuring narrow cobblestone streets and ancient fortifications.",
    price: 2800,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Bonifacio%20Corsica%20medieval%20citadel%20white%20limestone%20cliffs%20Mediterranean%20sea%20ancient%20fortifications%20cobblestone%20streets%20dramatic%20coastal%20view&image_size=landscape_4_3",
  },
  {
    id: "nice",
    name: "Nice",
    description:
      "The jewel of the French Riviera, Nice enchants visitors with its famous Promenade des Anglais, azure Mediterranean waters, and Belle Époque architecture. Experience world-class museums, vibrant markets, and glamorous beach culture.",
    price: 3200,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Nice%20French%20Riviera%20Promenade%20des%20Anglais%20azure%20Mediterranean%20waters%20Belle%20Epoque%20architecture%20glamorous%20beach%20culture&image_size=landscape_4_3",
  },
  {
    id: "provence",
    name: "Provence",
    description:
      "Immerse yourself in endless fields of purple lavender, charming hilltop villages, and sun-drenched vineyards. Provence embodies the essence of southern French lifestyle with its markets, cuisine, and timeless rural beauty.",
    price: 2600,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Provence%20France%20endless%20purple%20lavender%20fields%20charming%20hilltop%20villages%20sun-drenched%20vineyards%20rural%20beauty&image_size=landscape_4_3",
  },
  {
    id: "paris",
    name: "Paris",
    description:
      "The City of Light captivates with iconic landmarks like the Eiffel Tower and Louvre, romantic Seine riverbanks, and world-renowned cuisine. Discover art, fashion, and culture in this eternally elegant capital.",
    price: 3800,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Paris%20City%20of%20Light%20Eiffel%20Tower%20Louvre%20romantic%20Seine%20riverbanks%20elegant%20capital%20iconic%20landmarks&image_size=landscape_4_3",
  },
  {
    id: "loire",
    name: "Loire Valley",
    description:
      "Known as the 'Garden of France,' the Loire Valley showcases magnificent Renaissance châteaux, world-class vineyards, and pristine countryside. Experience royal history and exceptional wines in this UNESCO World Heritage region.",
    price: 2900,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Loire%20Valley%20France%20magnificent%20Renaissance%20chateaux%20world-class%20vineyards%20pristine%20countryside%20royal%20history&image_size=landscape_4_3",
  },
  {
    id: "normandy",
    name: "Normandy",
    description:
      "From the dramatic white cliffs of Étretat to the historic D-Day beaches, Normandy offers profound history and natural beauty. Explore charming coastal towns, sample world-famous Calvados, and walk in the footsteps of history.",
    price: 2400,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Normandy%20France%20white%20cliffs%20coastal%20beauty%20historic%20beaches%20charming%20towns%20dramatic%20coastline&image_size=landscape_4_3",
  },
  {
    id: "lyon",
    name: "Lyon",
    description:
      "France's gastronomic capital offers Renaissance architecture, vibrant cultural scene, and world-renowned cuisine. Explore the UNESCO-listed Old Town, sample traditional Lyonnaise dishes, and discover the city's rich silk-weaving heritage.",
    price: 2700,
    image:
      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Lyon%20France%20gastronomic%20capital%20Renaissance%20architecture%20UNESCO%20Old%20Town%20Rhone%20Saone%20rivers%20cultural%20heritage&image_size=landscape_4_3",
  },
];

export default function FrancePage() {
  const featuredDestination = destinations[0]; // Bonifacio as featured
  const otherDestinations = destinations.slice(1); // Show all remaining 6 destinations

  // Carousel state for featured images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Updated carousel images with 6 images from the destination cards
  const carouselImages = [
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Nice%20French%20Riviera%20azure%20Mediterranean%20coastline%20Promenade%20des%20Anglais%20palm%20trees%20luxury%20hotels%20beach%20culture&image_size=landscape_16_9", // Nice
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Provence%20lavender%20fields%20rolling%20hills%20charming%20villages%20French%20countryside%20purple%20flowers%20rustic%20beauty&image_size=landscape_16_9", // Provence
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Paris%20Eiffel%20Tower%20Seine%20River%20romantic%20city%20lights%20French%20architecture%20iconic%20landmark%20evening%20glow&image_size=landscape_16_9", // Paris
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Loire%20Valley%20France%20magnificent%20Renaissance%20chateaux%20world-class%20vineyards%20pristine%20countryside%20royal%20history&image_size=landscape_16_9", // Loire Valley
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Normandy%20France%20white%20cliffs%20coastal%20beauty%20historic%20beaches%20charming%20towns%20dramatic%20coastline&image_size=landscape_16_9", // Normandy
    "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=French%20vineyard%20countryside%20rolling%20hills%20golden%20sunset%20wine%20region%20peaceful%20rural%20landscape&image_size=landscape_16_9", // French countryside
  ];

  // Manual carousel navigation only - auto-play removed

  // Carousel navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  // Get current destination name for display
  const getCurrentDestinationName = () => {
    const destinationNames = [
      "Nice",
      "Provence",
      "Paris",
      "Loire Valley",
      "Normandy",
      "French Countryside",
    ];
    return destinationNames[currentImageIndex];
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
            <div
              className="absolute bottom-0 left-0 right-0 text-white"
              style={{ padding: "5rem" }}
            >
              <span className="text-sm font-medium uppercase tracking-wide opacity-90 block mb-4">
                FEATURED VACATION
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                French Riviera
              </h1>

              <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-2xl">
                Discover the glamorous French Riviera, where azure Mediterranean
                waters meet elegant coastal towns. Experience luxury, culture,
                and breathtaking scenery in this iconic destination.
              </p>

              <button
                onClick={() =>
                  window.open(
                    `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(
                      getCurrentDestinationName() + ", France"
                    )}`,
                    "_blank"
                  )
                }
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wide cursor-pointer"
              >
                VIEW VACATION
              </button>
            </div>
          </div>

          {/* Right Section - Other Destinations */}
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
                Vacations in France
              </h2>
            </div>

            {/* Destination Cards */}
            <div className="space-y-6 ml-10">
              {otherDestinations.map((destination, index) => {
                // Map each card to different destination pages based on user requirements
                // 6 cards: Nice, Provence, Paris, Loire Valley, Normandy, Lyon
                // Link to all 6 destinations: Egypt, France, Indonesia, Greece, Spain, Italy
                const destinationLinks = [
                  "/location/egypt/", // Nice -> Egypt
                  "/location/france/", // Provence -> France
                  "/location/indonesia/", // Paris -> Indonesia
                  "/location/greece/", // Loire Valley -> Greece
                  "/location/spain/", // Normandy -> Spain
                  "/location/italy/", // Lyon -> Italy
                ];

                return (
                  <Link
                    key={destination.id}
                    href={destinationLinks[index]}
                    className="block group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="flex pointer-events-none">
                      {/* Card Image */}
                      <div
                        className="relative overflow-hidden flex-shrink-0"
                        style={{ width: "20rem", height: "15rem" }}
                      >
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="text-xs font-semibold bg-white/95 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
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
                              onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = "/location/france/";
                              }}
                              className="text-xs text-slate-500 uppercase tracking-wide font-medium hover:text-slate-700 transition-colors cursor-pointer pointer-events-auto bg-white border border-slate-200 px-3 py-1.5 rounded hover:bg-slate-50"
                            >
                              DETAILS
                            </button>
                          </div>

                          <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-3">
                            {destination.description}
                          </p>

                          <div>
                            <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                              From ${destination.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
