"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Vacation {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export function VacationTabsSection() {
  const vacationsByCountry = {
    egypt: [
      {
        id: "bahariya-oasis",
        name: "Bahariya Oasis",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 6400,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20ocean%20seascape%20with%20crystal%20clear%20blue%20water%2C%20peaceful%20waves%20and%20horizon%2C%20serene%20maritime%20view&image_size=landscape_4_3",
      },
      {
        id: "sahl-hasheesh",
        name: "Sahl Hasheesh",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 7700,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Elegant%20sailboat%20on%20calm%20ocean%20waters%20near%20beautiful%20coastline%2C%20white%20sails%20against%20blue%20sky%2C%20maritime%20adventure&image_size=landscape_4_3",
      },
      {
        id: "alexandria",
        name: "Alexandria",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 5300,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Tropical%20beach%20vacation%20scene%20with%20palm%20trees%2C%20white%20sand%2C%20turquoise%20water%2C%20perfect%20holiday%20destination&image_size=landscape_4_3",
      },
    ],
    greece: [
      {
        id: "palaiokastritsa",
        name: "Palaiokastritsa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 5600,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Traditional%20Greek%20coastal%20houses%20with%20white%20walls%20and%20blue%20roofs%20overlooking%20the%20Mediterranean%20sea%2C%20Santorini%20style%20architecture&image_size=landscape_4_3",
      },
      {
        id: "meteora",
        name: "Meteora",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 2800,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Stunning%20Indonesian%20tropical%20landscape%20with%20lush%20green%20rice%20terraces%2C%20volcanic%20mountains%2C%20and%20traditional%20villages%2C%20Bali%20scenery&image_size=landscape_4_3",
      },
      {
        id: "thessaloniki",
        name: "Thessaloniki",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 6700,
        image: "https://ext.same-assets.com/1081758887/1892031695.jpeg",
      },
    ],
    indonesia: [
      {
        id: "canggu",
        name: "Canggu",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 6500,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Stunning%20Bali%20Canggu%20beach%20with%20black%20volcanic%20sand%2C%20surfers%20and%20palm%20trees%2C%20tropical%20Indonesian%20coastline%20at%20sunset&image_size=landscape_4_3",
      },
      {
        id: "komodo",
        name: "Komodo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 7600,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Dramatic%20Komodo%20Island%20landscape%20with%20rugged%20hills%2C%20savanna%20grasslands%2C%20and%20crystal%20blue%20waters%2C%20Indonesian%20national%20park&image_size=landscape_4_3",
      },
      {
        id: "penida-island",
        name: "Penida Island",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 2800,
        image: "https://ext.same-assets.com/1081758887/3332353641.jpeg",
      },
    ],
    france: [
      {
        id: "bonifacio",
        name: "Bonifacio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 1400,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Picturesque%20French%20countryside%20with%20lavender%20fields%2C%20rolling%20hills%2C%20and%20charming%20stone%20villages%2C%20Provence%20landscape&image_size=landscape_4_3",
      },
      {
        id: "brittany",
        name: "Brittany",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 3600,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20French%20coastal%20town%20with%20colorful%20buildings%2C%20harbor%20boats%2C%20and%20Mediterranean%20architecture%2C%20French%20Riviera%20style&image_size=landscape_4_3",
      },
      {
        id: "carcassonne",
        name: "Carcassonne",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 3900,
        image: "https://ext.same-assets.com/1081758887/2015427747.jpeg",
      },
    ],
  };

  const VacationCard = ({ vacation }: { vacation: Vacation }) => (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={vacation.image}
          alt={vacation.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {vacation.name}
        </h4>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {vacation.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500 block">RATES FROM</span>
            <span className="text-lg font-bold text-gray-900">
              ${vacation.price.toLocaleString()}
            </span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-none"
            onClick={() => window.location.href = 'http://localhost:3000/location/egypt/'}
          >
            DETAILS
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
            POPULAR COVILLA VACATIONS
          </span>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="egypt" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="egypt" className="text-sm font-medium">
              EGYPT
            </TabsTrigger>
            <TabsTrigger value="greece" className="text-sm font-medium">
              GREECE
            </TabsTrigger>
            <TabsTrigger value="indonesia" className="text-sm font-medium">
              INDONESIA
            </TabsTrigger>
            <TabsTrigger value="france" className="text-sm font-medium">
              FRANCE
            </TabsTrigger>
          </TabsList>

          {Object.entries(vacationsByCountry).map(([country, vacations]) => (
            <TabsContent key={country} value={country}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vacations.map((vacation) => (
                  <VacationCard key={vacation.id} vacation={vacation} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
