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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
    },
    {
      id: "sarah-prat",
      name: "Sarah Prat",
      location: "Austin, Texas",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format&fit=crop",
    },
    {
      id: "samantha-tai",
      name: "Samantha Tai",
      location: "Miami, Florida",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
    },
    {
      id: "craig-wents",
      name: "Craig Wents",
      location: "Brooklyn, New York",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop",
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
