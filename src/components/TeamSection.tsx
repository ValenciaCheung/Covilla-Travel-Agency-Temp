"use client";

import { Card } from "@/components/ui/card";

interface TeamMember {
  id: string;
  name: string;
  location: string;
  image: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: "terry-von",
      name: "Terry Von",
      location: "New York, New York",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Beautiful%20ocean%20seascape%20with%20crystal%20clear%20turquoise%20water%2C%20white%20sandy%20beach%2C%20and%20tropical%20paradise%20setting&image_size=portrait_4_3",
    },
    {
      id: "sarah-prat",
      name: "Sarah Prat",
      location: "Austin, Texas",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Majestic%20waterfall%20cascading%20down%20rocky%20cliffs%20surrounded%20by%20lush%20green%20forest%2C%20misty%20and%20serene%20atmosphere&image_size=portrait_4_3",
    },
    {
      id: "samantha-tai",
      name: "Samantha Tai",
      location: "Miami, Florida",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Stunning%20coastal%20seascape%20with%20dramatic%20waves%20crashing%20against%20rocky%20shores%2C%20golden%20sunset%20lighting&image_size=portrait_4_3",
    },
    {
      id: "craig-wents",
      name: "Craig Wents",
      location: "Brooklyn, New York",
      image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Powerful%20waterfall%20in%20tropical%20rainforest%20with%20emerald%20green%20pool%2C%20exotic%20plants%20and%20natural%20beauty&image_size=portrait_4_3",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-9">
          <div className="text-left">
            <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
              MEET YOUR TRAVEL AGENTS
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
