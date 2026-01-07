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
        image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "sahl-hasheesh",
        name: "Sahl Hasheesh",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 7700,
        image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "alexandria",
        name: "Alexandria",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 5300,
        image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80&auto=format&fit=crop",
      },
    ],
    greece: [
      {
        id: "palaiokastritsa",
        name: "Palaiokastritsa",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 5600,
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "meteora",
        name: "Meteora",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 2800,
        image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "thessaloniki",
        name: "Thessaloniki",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 6700,
        image: "https://images.pexels.com/photos/164336/pexels-photo-164336.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    indonesia: [
      {
        id: "canggu",
        name: "Canggu",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 6500,
        image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "komodo",
        name: "Komodo",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 7600,
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "penida-island",
        name: "Penida Island",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 2800,
        image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    france: [
      {
        id: "bonifacio",
        name: "Bonifacio",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 1400,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "brittany",
        name: "Brittany",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 3600,
        image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80&auto=format&fit=crop",
      },
      {
        id: "carcassonne",
        name: "Carcassonne",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget.",
        price: 3900,
        image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800",
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
            onClick={() => window.location.href = '/location/egypt/'}
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
