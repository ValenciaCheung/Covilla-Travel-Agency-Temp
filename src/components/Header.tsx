"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Menu,
  ChevronDown,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const destinations = [
    {
      name: "France",
      vacations: 15,
      backgroundImage:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop",
    },
    {
      name: "Indonesia",
      vacations: 12,
      backgroundImage:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format&fit=crop",
    },
    {
      name: "Greece",
      vacations: 18,
      backgroundImage:
        "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1920&q=80&auto=format&fit=crop",
    },
    {
      name: "Egypt",
      vacations: 9,
      backgroundImage:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80&auto=format&fit=crop",
    },
    {
      name: "Spain",
      vacations: 21,
      backgroundImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80&auto=format&fit=crop",
    },
    {
      name: "Italy",
      vacations: 16,
      backgroundImage:
        "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1920&q=80&auto=format&fit=crop",
    },
  ];

  // Background image rotation for DESTINATIONS button
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [destinations.length]);

  // Scroll progress tracking and navbar state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      // Calculate the progress bar container height (2/3 of viewport height)
      const progressBarHeight = window.innerHeight * (2 / 3);
      // Indicator height is 80px
      const indicatorHeight = 80;
      // Calculate the maximum translateY distance (container height - indicator height)
      const maxTranslateDistance = progressBarHeight - indicatorHeight;
      // Calculate the actual translateY value
      const translateY = scrollPercent * maxTranslateDistance;

      setScrollProgress(translateY);
      setScrollY(scrollTop);

      // Set navbar state based on scroll position
      setIsScrolled(scrollTop > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 overflow-hidden">
        {/* White background that slides down */}
        <div
          className="absolute inset-0 bg-white transition-all duration-300 ease-out border-b border-[#e0e0e0]"
          style={{
            transform: `translateY(${Math.min(scrollY / 40, 1) * 100 - 100}%)`,
          }}
        />

        {/* Content container - 移除左右padding，确保全宽度 */}
        <div className="relative z-10 h-full w-full">
          <div className="flex items-center justify-between h-full w-full">
            <div className="flex items-center">
              {/* Left Side Menu - 优化移动端显示 */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-16 w-16 p-0 flex items-center justify-center transition-all duration-300 rounded-none bg-white hover:bg-white text-gray-900 border-b border-r border-[#e0e0e0] md:border-r"
                  >
                    <Menu className="h-6 w-6 transition-colors duration-300 text-gray-900" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-full sm:w-[400px] p-0 bg-white border-r-0 overflow-y-auto"
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100">
                      <SheetTitle className="text-2xl font-bold text-gray-900">
                        Explore vacations
                      </SheetTitle>
                    </div>

                    {/* Choose Destination Section */}
                    <div className="px-6 py-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        CHOOSE A DESTINATION
                      </span>
                    </div>

                    {/* Destinations */}
                    <div className="flex-1 px-6 pb-6">
                      <div className="space-y-4">
                        {destinations.map((destination, index) => (
                          <a
                            key={destination.name}
                            href={
                              destination.name === "Egypt"
                                ? "/location/egypt/"
                                : destination.name === "France"
                                ? "/location/france/"
                                : destination.name === "Indonesia"
                                ? "/location/indonesia/"
                                : destination.name === "Greece"
                                ? "/location/greece/"
                                : destination.name === "Spain"
                                ? "/location/spain/"
                                : destination.name === "Italy"
                                ? "/location/italy/"
                                : "#"
                            }
                            className="group cursor-pointer transition-all duration-300 hover:scale-105 block"
                          >
                            <div className="relative h-24 rounded-lg overflow-hidden border border-gray-200 bg-white group-hover:border-transparent transition-all duration-300">
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
                              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                                <div>
                                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-white transition-colors duration-300">
                                    {destination.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 group-hover:text-white/90 uppercase tracking-wide transition-colors duration-300">
                                    {destination.vacations} VACATIONS
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Contact Section */}
                    <div className="border-t border-gray-100 p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-4">
                        CONTACT US
                      </h3>
                      <div className="space-y-3 mb-6">
                        <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gray-900 hover:text-gray-700 transition-colors"
                          >
                            Schedule a call
                          </a>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <a
                            href="mailto:info@template.com"
                            className="text-gray-900 hover:text-gray-700 transition-colors"
                          >
                            info@template.com
                          </a>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <a
                            href="facetime:(555) 555-5555"
                            className="text-gray-900 hover:text-gray-700 transition-colors"
                          >
                            (555) 555-5555
                          </a>
                        </div>
                      </div>

                      {/* Social Media */}
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-4">
                          FOLLOW US
                        </h3>
                        <div className="flex gap-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 p-0 flex items-center justify-center text-gray-400 hover:text-gray-600"
                          >
                            <Instagram className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 p-0 flex items-center justify-center text-gray-400 hover:text-gray-600"
                          >
                            <Facebook className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 p-0 flex items-center justify-center text-gray-400 hover:text-gray-600"
                          >
                            <Linkedin className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Logo - 优化移动端显示 */}
              <div className="px-4 md:px-6 h-16 flex items-center">
                <a href="/" aria-label="Home" className="inline-block">
                  <h1
                    className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    COVILLA
                  </h1>
                </a>
              </div>
            </div>

            {/* Desktop Navigation - 隐藏在中小屏幕 */}
            <nav className="hidden lg:flex items-center px-6 h-16 flex-1">
              <div
                className={`${
                  isScrolled ? "flex" : "hidden"
                } items-center gap-8 mx-auto`}
                aria-label="Primary navigation"
              >
                <a
                  href="/about/"
                  aria-label="About"
                  className="text-sm font-medium text-gray-900 px-1 py-2 transition-colors duration-200 hover:text-gray-700"
                >
                  ABOUT
                </a>
                <a
                  href="/journal/"
                  aria-label="Journal"
                  className="text-sm font-medium text-gray-900 px-1 py-2 transition-colors duration-200 hover:text-gray-700"
                >
                  JOURNAL
                </a>
                <a
                  href="/support/"
                  aria-label="Support"
                  className="text-sm font-medium text-gray-900 px-1 py-2 transition-colors duration-200 hover:text-gray-700"
                >
                  SUPPORT
                </a>
              </div>
              <div className="ml-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`relative overflow-hidden h-10 px-6 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 ${
                        isScrolled
                          ? "bg-white hover:bg-gray-50 border border-gray-200 text-gray-900"
                          : "bg-transparent hover:bg-white/10 border border-white text-white"
                      }`}
                    >
                      <span
                        className={`relative z-10 font-semibold tracking-wide transition-colors duration-300 ${
                          isScrolled ? "text-gray-900" : "text-white"
                        }`}
                      >
                        DESTINATIONS
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 relative z-10 transition-colors duration-300 ${
                          isScrolled ? "text-gray-900" : "text-white"
                        }`}
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-80 p-4 bg-white border border-gray-200 shadow-lg rounded-lg"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {destinations.map((destination, index) => (
                        <a
                          key={destination.name}
                          href={
                            destination.name === "Egypt"
                              ? "/location/egypt/"
                              : destination.name === "France"
                              ? "/location/france/"
                              : destination.name === "Indonesia"
                              ? "/location/indonesia/"
                              : destination.name === "Greece"
                              ? "/location/greece/"
                              : destination.name === "Spain"
                              ? "/location/spain/"
                              : destination.name === "Italy"
                              ? "/location/italy/"
                              : "#"
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
            </nav>
          </div>
        </div>
      </header>

      {/* Left Side Scroll Indicator and Social Icons - 只在大屏幕显示 */}
      <div
        className={`fixed left-0 top-0 z-40 hidden lg:flex flex-col justify-between items-center h-screen w-16 py-8 border-r border-[#e0e0e0] ${
          isScrolled ? "border-r border-[#e0e0e0]" : ""
        }`}
      >
        {/* Divider Line - aligned with button */}
        <div
          className={`w-8 h-px mb-4 transition-colors duration-300 ${
            isScrolled ? "bg-gray-300" : "bg-white/40"
          }`}
        ></div>

        {/* Scroll Progress Indicator */}
        <div className="relative w-0.5 lg:w-1 h-2/3 bg-gray-200 rounded-full overflow-hidden shadow-sm">
          <div
            className="absolute top-0 left-0 w-full bg-gray-400 rounded-full transition-all duration-300 ease-out"
            style={{
              height: `80px`,
              transform: `translateY(${scrollProgress}px)`,
            }}
          />
        </div>

        {/* Social Media Icons - positioned at bottom */}
        <div className="flex flex-col space-y-2 lg:space-y-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1.5 lg:p-2 bg-gray-100/30 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-gray-300"
          >
            <Instagram className="h-3 w-3 lg:h-4 lg:w-4 text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1.5 lg:p-2 bg-gray-100/30 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-gray-300"
          >
            <Facebook className="h-3 w-3 lg:h-4 lg:w-4 text-gray-300 group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-1.5 lg:p-2 bg-gray-100/30 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-gray-300"
          >
            <Linkedin className="h-3 w-3 lg:h-4 lg:w-4 text-gray-300 group-hover:text-blue-700 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </>
  );
}
