"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ArrowRight } from "lucide-react";
import { LocationCarousel } from "./LocationCarousel";
import { locations, Location } from "@/data/locations";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHover, setIsHover] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<Location>(
    locations[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleEnter = () => {
    setIsHover(true);
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setIsHover(false);
    const v = videoRef.current;
    if (v) v.pause();
  };

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const handleVideoError = () => {
    console.log("Video failed to load, using fallback image");
    setVideoError(true);
  };

  const handleLocationChange = (
    location: Location,
    nextLocation?: Location
  ) => {
    if (nextLocation) {
      // Simple fade transition
      setIsTransitioning(true);

      // Complete transition after fade
      setTimeout(() => {
        setCurrentLocation(nextLocation);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    } else {
      // Direct change without animation (initial load)
      setCurrentLocation(location);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with simple fade transition */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ease-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url('${currentLocation.backgroundImage}')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* Content - 优化移动端布局和间距 */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start">
        {/* 文本内容 - 在移动端完全居中，桌面端左对齐，增加底部间距 */}
        <div className="w-full lg:w-auto px-4 sm:px-6 lg:px-16 text-center lg:text-left mb-8 lg:mb-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            {/* Badge - 增加底部间距 */}
            <div className="inline-block mb-8 lg:mb-10">
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                FAMILY TRAVEL AGENCY
              </span>
            </div>

            {/* Main Heading - 响应式字体大小，增加底部间距 */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 lg:mb-10 leading-tight break-words"
              style={{
                lineHeight: "1.1",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              Let's plan your next vacation
            </h1>

            {/* CTA Button - 增加底部间距 */}
            <div className="mb-8 lg:mb-0">
              <Link href="/about/">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-4 text-base rounded-lg lg:text-[18px] h-12 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  CONTACT US
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 视频播放器 - 在移动端置于文本下方居中，桌面端右侧，增加底部间距 */}
        <div className="mt-8 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 mb-16 lg:mb-0">
          <div
            className="group w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] z-20 transition-all duration-500 ease-out hover:w-[200px] hover:h-[200px] sm:hover:w-[240px] sm:hover:h-[240px] lg:hover:w-[320px] lg:hover:h-[320px] mx-auto lg:mx-0"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
          >
            {/* Outer breathing rings (ONLY when hovering) */}
            {isHover && (
              <>
                <div className="pointer-events-none absolute -inset-16 rounded-full border-[12px] border-white/10 animate-breath will-change-transform" />
                <div className="pointer-events-none absolute -inset-24 rounded-full border-[12px] border-white/10 animate-breath-slow will-change-transform" />
              </>
            )}

            {/* Circular video mask - semi-transparent by default, opaque on hover */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-[2px] opacity-60 group-hover:opacity-100 group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
              {!videoError ? (
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4"
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  onError={handleVideoError}
                />
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url('${currentLocation.backgroundImage}')`,
                  }}
                />
              )}

              {/* Center play control - perfectly centered */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* White outer circle - semi-transparent by default, scales with container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white/70 group-hover:bg-white shadow-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    {/* Dark inner circle */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-slate-900/80 group-hover:bg-slate-900 text-white flex items-center justify-center transition-colors duration-300">
                      <Play className="h-3 w-3 sm:h-3 sm:w-3 lg:h-4 lg:w-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Carousel - 增加顶部间距，确保与视频播放器有足够距离 */}
      <div className="absolute bottom-4 left-0 right-0 lg:bottom-8 lg:right-0 lg:left-auto lg:w-1/3 h-48 z-30 px-4 lg:px-0">
        {/* 移动端分隔线和间距 */}
        <div className="lg:hidden mb-8">
          <div className="w-full h-px bg-white/20 mb-8"></div>
        </div>
        <div className="block lg:hidden">
          {/* 移动端显示简化版本 */}
          <LocationCarousel onLocationChange={handleLocationChange} />
        </div>
        <div className="hidden lg:block">
          {/* 桌面端显示完整版本 */}
          <LocationCarousel onLocationChange={handleLocationChange} />
        </div>
      </div>
    </section>
  );
}
