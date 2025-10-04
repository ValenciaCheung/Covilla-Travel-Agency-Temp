"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// Destinations data - same as in Header.tsx
const destinations = [
  {
    name: "France",
    vacations: 12,
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20French%20countryside%20with%20lavender%20fields%20and%20charming%20villages%2C%20golden%20hour%20lighting%2C%20cinematic%20photography&image_size=landscape_16_9",
  },
  {
    name: "Indonesia",
    vacations: 8,
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Tropical%20Indonesian%20beach%20with%20crystal%20clear%20turquoise%20water%2C%20palm%20trees%2C%20and%20traditional%20boats%2C%20paradise%20setting&image_size=landscape_16_9",
  },
  {
    name: "Greece",
    vacations: 15,
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Greek%20island%20with%20white%20buildings%2C%20blue%20domes%2C%20and%20stunning%20Mediterranean%20sea%20views%2C%20Santorini%20style&image_size=landscape_16_9",
  },
  {
    name: "Egypt",
    vacations: 6,
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Ancient%20Egyptian%20pyramids%20at%20sunset%20with%20golden%20desert%20sands%2C%20majestic%20and%20mysterious%20atmosphere&image_size=landscape_16_9",
  },
  {
    name: "Spain",
    vacations: 10,
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Spanish%20coastal%20town%20with%20colorful%20buildings%2C%20Mediterranean%20architecture%2C%20and%20vibrant%20culture&image_size=landscape_16_9",
  },
  {
    name: "Italy",
    vacations: 14,
    backgroundImage: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Italian%20countryside%20with%20rolling%20hills%2C%20vineyards%2C%20and%20historic%20architecture%2C%20Tuscany%20landscape&image_size=landscape_16_9",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
              COVILLA BENEFITS
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Take your family on the best vacation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec ac
              neque. Sed vitae sollicitudin elit, ac tristique nisi.
              Pellentesque rutrum egestas massa lacinia volutpat. Integer et
              facilisis elit, vitae.
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-none flex items-center gap-2"
                >
                  CHOOSE A DESTINATION
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                align="start"
                className="w-80 p-4 bg-white border border-gray-200 shadow-lg rounded-lg"
              >
                <div className="grid grid-cols-2 gap-3">
                  {destinations.map((destination, index) => (
                    <a
                      key={destination.name}
                      href={
                        destination.name === 'Egypt' 
                          ? 'http://localhost:3000/location/egypt/' 
                          : destination.name === 'France' 
                          ? 'http://localhost:3000/location/france/' 
                          : destination.name === 'Indonesia'
                          ? 'http://localhost:3000/location/indonesia/'
                          : destination.name === 'Greece'
                          ? 'http://localhost:3000/location/greece/'
                          : destination.name === 'Spain'
                          ? 'http://localhost:3000/location/spain/'
                          : destination.name === 'Italy'
                          ? 'http://localhost:3000/location/italy/'
                          : '#'
                      }
                      className="group cursor-pointer transition-all duration-300 hover:scale-105 block"
                    >
                      <div className="relative h-20 rounded-lg overflow-hidden border border-gray-200 bg-white group-hover:border-transparent transition-all duration-300">
                        {/* Background image - only visible on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            backgroundImage: `url(${destination.backgroundImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>

                        {/* Background overlay - only visible on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                        {/* Content */}
                        <div className="relative z-10 p-3 h-full flex flex-col justify-between">
                          <div>
                            <h3 className="font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300">
                              {destination.name}
                            </h3>
                            <p className="text-xs text-gray-500 group-hover:text-white/90 uppercase tracking-wide transition-colors duration-300">
                              {destination.vacations} VACATIONS
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Additional Navigation Links */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="space-y-2">
                      <DropdownMenuItem asChild>
                        <a
                          href="/about"
                          className="w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer flex items-center"
                        >
                          ABOUT
                        </a>
                      </DropdownMenuItem>
                    </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20Greek%20seascape%20with%20crystal%20clear%20blue%20waters%20and%20white%20cliffs%20Mediterranean%20coastline&image_size=portrait_4_3"
                alt="Beautiful Greek seascape with crystal clear waters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
