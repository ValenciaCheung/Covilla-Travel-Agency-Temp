"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Gift, DollarSign, User } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: <MapPin className="h-8 w-8 text-blue-600" />,
      title: "Hands-on planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.",
    },
    {
      icon: <Gift className="h-8 w-8 text-blue-600" />,
      title: "Added value & perks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-blue-600" />,
      title: "Access best deals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.",
    },
    {
      icon: <User className="h-8 w-8 text-blue-600" />,
      title: "Personalized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
            WHY WE'RE DIFFERENT
          </span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
