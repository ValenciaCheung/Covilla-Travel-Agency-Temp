"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "First, clone this template.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit ut sollicitudin. Nunc ullamcorper nibh nulla. In viverra id felis id tincidunt.",
    },
    {
      number: "2",
      title: "Next, use it on your projects.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit ut sollicitudin. Nunc ullamcorper nibh nulla. In viverra id felis id tincidunt.",
    },
    {
      number: "3",
      title: "Then, tell me what you think.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit ut sollicitudin. Nunc ullamcorper nibh nulla. In viverra id felis id tincidunt.",
    },
    {
      number: "4",
      title: "Finally, share the template.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin eget velit ut sollicitudin. Nunc ullamcorper nibh nulla. In viverra id felis id tincidunt.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Image and Content */}
          <div>
            {/* Image */}
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src="https://ext.same-assets.com/1081758887/596937053.jpeg"
                alt="Family vacation planning"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Section Info */}
            <div>
              <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
                GET STARTED TODAY
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Take the stress out of planning vacations
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec
                ac neque. Sed vitae sollicitudin elit, ac tristique nisi.
              </p>
              <Link href="/about/">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-none"
                >
                  MEET YOUR TRAVEL AGENTS
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div>
            <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-12 block">
              HOW IT WORKS
            </span>

            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
