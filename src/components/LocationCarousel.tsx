"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { locations, Location } from "@/data/locations";

interface LocationCarouselProps {
  onLocationChange?: (location: Location, nextLocation?: Location) => void;
}

export function LocationCarousel({ onLocationChange }: LocationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentLocation = locations[currentIndex];

  // Trigger location change
  useEffect(() => {
    onLocationChange?.(currentLocation);
  }, [currentIndex, currentLocation, onLocationChange]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex =
      currentIndex === 0 ? locations.length - 1 : currentIndex - 1;
    const nextLocation = locations[newIndex];

    // Notify parent with next location for smooth transition
    onLocationChange?.(currentLocation, nextLocation);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newIndex =
      currentIndex === locations.length - 1 ? 0 : currentIndex + 1;
    const nextLocation = locations[newIndex];

    // Notify parent with next location for smooth transition
    onLocationChange?.(currentLocation, nextLocation);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="relative flex items-center h-full w-full">
      {/* 桌面端布局 - 左侧控制面板 + 右侧卡片 */}
      <div className="hidden lg:flex items-center h-full w-full">
        {/* Left Control Panel - Vertical Stack */}
        <div className="flex flex-col gap-3">
          {/* Up Arrow Button */}
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            aria-label="Previous location"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-all duration-200 group-hover:scale-110 rotate-90" />
          </button>

          {/* Down Arrow Button */}
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            aria-label="Next location"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-all duration-200 group-hover:scale-110 rotate-90" />
          </button>
        </div>

        {/* Location Card - Extended to Right Edge */}
        <Card className="bg-white/95 backdrop-blur-sm p-6 ml-4 mr-0 flex-1 max-w-none shadow-xl border-0 hover:shadow-2xl rounded-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase transition-all duration-300">
              POPULAR LOCATION
            </span>
            <ArrowRight className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-opacity duration-300">
              {currentLocation.name}
            </h3>
          </div>

          <div>
            <p className="text-base text-gray-600 mb-4 transition-opacity duration-300">
              <span className="font-medium">STARTING AT</span>{" "}
              {currentLocation.price}
            </p>
          </div>

          <div className="text-xs text-gray-400 mb-4">Follow @tycreated</div>

          {/* Progress Indicator */}
          <div className="flex gap-2">
            {locations.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                  index === currentIndex
                    ? "bg-gray-900 w-8 shadow-sm"
                    : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              />
            ))}
          </div>
        </Card>
      </div>

      {/* 移动端布局 - 单张卡片 + 左右滑动 */}
      <div className="lg:hidden w-full px-4">
        <Card className="bg-white/95 backdrop-blur-sm p-4 shadow-xl border-0 rounded-2xl transition-shadow duration-300 mx-auto max-w-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
              POPULAR LOCATION
            </span>
            <ArrowRight className="h-4 w-4 text-gray-400" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {currentLocation.name}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium">STARTING AT</span>{" "}
              {currentLocation.price}
            </p>
          </div>

          <div className="text-xs text-gray-400 mb-3">Follow @tycreated</div>

          {/* 移动端控制按钮 - 水平排列 */}
          <div className="flex items-center justify-between">
            {/* Progress Indicator */}
            <div className="flex gap-1.5">
              {locations.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    index === currentIndex
                      ? "bg-gray-900 w-6 shadow-sm"
                      : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className="w-8 h-8 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group disabled:opacity-50"
                aria-label="Previous location"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>

              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className="w-8 h-8 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group disabled:opacity-50"
                aria-label="Next location"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
