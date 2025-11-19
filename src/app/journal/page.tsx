"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function JournalPage() {
  // Pagination state for "Browse our journal" cards
  const [page, setPage] = useState(0); // 0 -> first page, 1 -> second page
  const [heroHeight, setHeroHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const compute = () => {
      const el = document.getElementById("journal-hero");
      if (el) {
        const rect = el.getBoundingClientRect();
        const base = rect.height || window.innerHeight * 0.3;
        setHeroHeight(Math.round(base * 2));
      } else {
        setHeroHeight(Math.round(window.innerHeight * 0.6));
      }
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const cards = [
    {
      title: "Exploring Hidden Beaches",
      date: "APRIL 19, 2021",
      image: "https://ext.same-assets.com/1081758887/1876638433.jpeg",
    },
    {
      title: "Mountain Trek Essentials",
      date: "APRIL 19, 2021",
      image: "https://ext.same-assets.com/1081758887/2732707531.jpeg",
    },
    {
      title: "City Breaks On A Budget",
      date: "APRIL 19, 2021",
      image: "https://ext.same-assets.com/1081758887/1756908556.jpeg",
    },
    {
      title: "Top Family Resorts",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Road Trip Packing List",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Safari Photography Tips",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    },
    // second page
    {
      title: "Island Hopping Guide",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Winter Getaway Ideas",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Best Local Foods",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Glamping Spots",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1519680772-8b2b0b3e9d88?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Surfing For Beginners",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1528150177503-5b5b12f9c5b0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "National Parks You Must See",
      date: "APRIL 19, 2021",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const visible = page === 0 ? cards.slice(0, 6) : cards.slice(6, 8);

  const handleNext = () => setPage((p) => Math.min(1, p + 1));
  const handlePrev = () => setPage((p) => Math.max(0, p - 1));

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero header */}
      <section
        id="journal-hero"
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: heroHeight ? `${heroHeight}px` : undefined,
          backgroundImage:
            "url('https://cdn.prod.website-files.com/60675f13ea324fdd4af9ef2a/6075041a5cc5c760b623c7e7_Travel004.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 container mx-auto px-6 text-center py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Covilla Journal
          </h1>
          <p className="text-white text-lg">
            Insporation and tips for your next vacation
          </p>
        </div>
      </section>

      {/* Feature + Popular posts */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: feature card on large image */}
            <div>
              <Card className="rounded-xl overflow-hidden border-0 shadow-lg group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Majestic%20waterfall%20cascading%20down%20rocky%20cliffs%20surrounded%20by%20lush%20green%20forest%2C%20misty%20spray%20and%20natural%20beauty&image_size=landscape_4_3"
                    alt="What Will Website Be Like In 100 Years?"
                    className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-3 block">
                    April 19, 2021
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    What Will Website Be Like In 100 Years?
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur
                    nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                  </p>
                  <a
                    href="/journal/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border border-gray-200 px-4 py-2 rounded-none hover:bg-gray-50"
                    aria-label="Read more"
                  >
                    READ MORE
                  </a>
                </div>
              </Card>
            </div>

            {/* Right: popular posts list */}
            <div>
              <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-8 block">
                Popular posts
              </span>
              <div className="space-y-6">
                {[
                  {
                    title: "14 Common Misconceptions About Web Design",
                    image:
                      "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Spectacular%20tropical%20waterfall%20with%20crystal%20clear%20water%20falling%20into%20turquoise%20pool%2C%20surrounded%20by%20tropical%20vegetation&image_size=square",
                  },
                  {
                    title: "5 Principles Of Effective Web Design",
                    image:
                      "https://ext.same-assets.com/1081758887/1876638433.jpeg",
                  },
                  {
                    title: "10 Web Design Blogs You Can't Miss",
                    image:
                      "https://ext.same-assets.com/1081758887/2732707531.jpeg",
                  },
                  {
                    title: "Designers Who Changed the Web",
                    image:
                      "https://ext.same-assets.com/1081758887/1756908556.jpeg",
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href="/journal/"
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-500 font-medium tracking-wider uppercase block mb-2">
                        April 19, 2021
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse our journal cards with paging */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Browse our journal
            </h2>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                className="h-10 px-4 rounded-none border border-gray-200"
                onClick={handlePrev}
                aria-label="Previous"
                disabled={page === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> previous
              </Button>
              <Button
                variant="ghost"
                className="h-10 px-4 rounded-none border border-gray-200"
                onClick={handleNext}
                aria-label="Next"
                disabled={page === 1}
              >
                next <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((card, idx) => (
              <Card
                key={idx}
                className="overflow-hidden rounded-xl border border-gray-200 group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-500 font-medium tracking-wider uppercase block mb-2">
                    {card.date}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Donec sed auctor orci. In a nisl vel nisi egestas efficitur
                    nec ac neque. Sed vitae sollicitudin elit, ac tristique.
                  </p>
                  <a
                    href="/journal/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border border-gray-200 px-4 py-2 rounded-none hover:bg-gray-50"
                  >
                    Read more
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inserted CTA-like section between Browse and Form */}
      <section className="relative py-16 lg:py-24 overflow-hidden w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/60675f13ea324fdd4af9ef2a/607b6ec5eba5a81fd8c62ddd_031.jpeg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <span className="text-sm font-medium tracking-wider uppercase mb-6 block opacity-90">
              COVILLA PROMISE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight px-4 lg:px-0">
              Get unparalleled peace of mind from start to finish of your trip
            </h2>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center px-4 lg:px-0">
              <a href="/about/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg h-12 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  CONTACT US
                </Button>
              </a>
              <a href="/about/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white bg-transparent text-white hover:bg-white/10 hover:text-white font-medium px-8 py-4 rounded-lg h-12 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  HOW IT WORKS
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
