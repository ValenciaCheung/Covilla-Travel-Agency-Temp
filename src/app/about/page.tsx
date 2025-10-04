"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if mission section is visible
      if (missionRef.current) {
        const rect = missionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-2xl animate-breath"></div>
          </div>

          {/* Parallax Background */}
          <div
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Beautiful Mountain Landscape"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                Family travel agency
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                About Covilla
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section
          ref={missionRef}
          className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div
                className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-12"
                } order-2 lg:order-1`}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Changing the future of family travel
                </h2>
                <div className="pt-6 sm:pt-8">
                  <Link href="http://localhost:3000/about/">
                    <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden">
                      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">CONTACT US</span>
                    </button>
                  </Link>
                </div>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  We believe that travel should bring families closer together,
                  not stress them out. Our carefully curated experiences are
                  designed to create lasting memories while ensuring every
                  family member feels engaged and excited about the journey
                  ahead.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <div className="w-8 sm:w-12 h-1 bg-blue-500 rounded-full transition-all duration-700 delay-300"></div>
                  <div className="w-6 sm:w-8 h-1 bg-blue-300 rounded-full transition-all duration-700 delay-500"></div>
                  <div className="w-3 sm:w-4 h-1 bg-blue-200 rounded-full transition-all duration-700 delay-700"></div>
                </div>
              </div>
              <div
                className={`relative transition-all duration-1000 delay-200 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-12"
                } order-1 lg:order-2`}
              >
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <img
                    src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=real%20family%20photography%20with%20parents%20and%20children%20at%20scenic%20travel%20destination%2C%20authentic%20candid%20moments%2C%20natural%20lighting%2C%20documentary%20style&image_size=square_hd"
                    alt="Family Travel Experience"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8 sm:space-y-12">
              <span className="text-sm sm:text-base font-semibold text-white px-3 py-1 rounded uppercase tracking-wider" style={{ backgroundColor: "#3572ff" }}>
                Our mission
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
                Pellentesque rutrum egestas massa lacinia volutpat.
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec
                ac neque. Sed vitae sollicitudin elit, ac tristique nisi.
                Pellentesque rutrum egestas massa lacinia volutpat. Integer et
                facilisis elit, vitae.
              </p>

              {/* Gallery */}
              <div className="pt-8 sm:pt-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div className="col-span-2 md:col-span-1 lg:col-span-2">
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20walking%20on%20pristine%20tropical%20beach%20with%20turquoise%20water%2C%20romantic%20travel%20photography%2C%20golden%20hour%20lighting&image_size=landscape_16_9"
                      alt="Couple on beach"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=woman%20enjoying%20scenic%20mountain%20view%20from%20cliff%2C%20travel%20adventure%20photography%2C%20natural%20lighting&image_size=portrait_4_3"
                      alt="Mountain view"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2 lg:col-span-1">
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=tropical%20resort%20with%20lush%20green%20mountains%20and%20crystal%20clear%20lagoon%2C%20paradise%20destination%20photography&image_size=landscape_4_3"
                      alt="Tropical resort"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=dramatic%20mountain%20landscape%20reflected%20in%20calm%20lake%2C%20serene%20nature%20photography%2C%20misty%20atmosphere&image_size=portrait_4_3"
                      alt="Lake reflection"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=white%20buildings%20of%20Santorini%20Greece%20overlooking%20blue%20Aegean%20sea%2C%20Mediterranean%20travel%20photography&image_size=portrait_4_3"
                      alt="Santorini view"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=lush%20green%20rice%20terraces%20in%20tropical%20valley%2C%20agricultural%20landscape%20photography%2C%20vibrant%20colors&image_size=portrait_4_3"
                      alt="Rice terraces"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                  {/* Additional image in bottom right */}
                  <div>
                    <img
                      src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20tropical%20sunset%20over%20ocean%20with%20palm%20trees%20silhouette%2C%20golden%20hour%20travel%20photography&image_size=landscape_4_3"
                      alt="Tropical sunset"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Covilla Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-left">
              <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
                Covilla team
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Covilla team
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Meet your next travel agent
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl">
                Donec sed auctor orci. In a nisl vel nisi egestas efficitur nec
                ac neque. Sed vitae sollicitudin elit, ac tristique nisi.
                Pellentesque rutrum egestas massa lacinia volutpat. Integer et
                facilisis elit, vitae.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 bg-white rounded-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20travel%20agent%20portrait%2C%20friendly%20smile%2C%20business%20attire%2C%20warm%20lighting%2C%20office%20background&image_size=portrait_4_3"
                  alt="Terry Von"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Terry Von
                </h3>
                <p className="text-sm text-gray-600">New York, New York</p>
              </div>
            </div>

            <div className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 bg-white rounded-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20travel%20consultant%2C%20confident%20pose%2C%20modern%20office%20setting%2C%20natural%20lighting&image_size=portrait_4_3"
                  alt="Sarah Prat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Sarah Prat
                </h3>
                <p className="text-sm text-gray-600">Austin, Texas</p>
              </div>
            </div>

            <div className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 bg-white rounded-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20travel%20advisor%20headshot%2C%20welcoming%20expression%2C%20business%20casual%20attire%2C%20bright%20office%20environment&image_size=portrait_4_3"
                  alt="Samantha Tai"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Samantha Tai
                </h3>
                <p className="text-sm text-gray-600">Miami, Florida</p>
              </div>
            </div>

            <div className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300 border-0 bg-white rounded-lg">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=experienced%20travel%20specialist%20portrait%2C%20professional%20demeanor%2C%20suit%20and%20tie%2C%20corporate%20background&image_size=portrait_4_3"
                  alt="Craig Wents"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Craig Wents
                </h3>
                <p className="text-sm text-gray-600">Brooklyn, New York</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
