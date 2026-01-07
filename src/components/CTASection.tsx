"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/1081758887/2041208434.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Section Header */}
          <span className="text-sm font-medium tracking-wider uppercase mb-6 block opacity-90">
            COVILLA PROMISE
          </span>

          {/* Main Heading - 响应式字体大小 */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight px-4 lg:px-0">
            Get unparalleled peace of mind from start to finish of your trip
          </h2>

          {/* Action Buttons - 移动端垂直排列，桌面端水平排列 */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center px-4 lg:px-0">
            <Link href="/about/" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg h-12 shadow-md hover:shadow-lg transition-all duration-200"
              >
                CONTACT US
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const section = document.getElementById('how-it-works');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto border-white bg-transparent text-white hover:bg-white/10 hover:text-white font-medium px-8 py-4 rounded-lg h-12 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              HOW IT WORKS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
