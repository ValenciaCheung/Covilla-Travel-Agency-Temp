"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";
import { useState, useEffect } from "react";

export function DestinationsSection() {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("idle"); // 'idle', 'moving', 'scaling'
  const [translateOffset, setTranslateOffset] = useState(0); // 用于控制水平移动
  const totalCards = locations.length;

  const handlePrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setAnimationPhase("moving");

    // 计算目标卡片需要移动的距离
    const cardWidth = 416 + 24; // 卡片宽度 + 间距
    const targetIndex =
      currentActiveIndex === 0 ? totalCards - 1 : currentActiveIndex - 1;

    // 先执行水平移动动画
    setTranslateOffset(cardWidth); // 向右移动一个卡片的距离

    setTimeout(() => {
      // 移动完成后更新索引并重置位移
      setCurrentActiveIndex(targetIndex);
      setTranslateOffset(0);

      // 添加短暂延迟确保移动完全完成后再开始放大
      setTimeout(() => {
        setAnimationPhase("scaling");

        // 开始放大动画
        setTimeout(() => {
          setAnimationPhase("idle");
          setIsTransitioning(false);
        }, 800); // 放大动画时长 0.8秒
      }, 50); // 短暂延迟确保移动完成
    }, 600); // 移动动画时长 0.6秒
  };

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setAnimationPhase("moving");

    // 计算目标卡片需要移动的距离
    const cardWidth = 416 + 24; // 卡片宽度 + 间距
    const targetIndex =
      currentActiveIndex === totalCards - 1 ? 0 : currentActiveIndex + 1;

    // 先执行水平移动动画
    setTranslateOffset(-cardWidth); // 向左移动一个卡片的距离

    setTimeout(() => {
      // 移动完成后更新索引并重置位移
      setCurrentActiveIndex(targetIndex);
      setTranslateOffset(0);

      // 添加短暂延迟确保移动完全完成后再开始放大
      setTimeout(() => {
        setAnimationPhase("scaling");

        // 开始放大动画
        setTimeout(() => {
          setAnimationPhase("idle");
          setIsTransitioning(false);
        }, 800); // 放大动画时长 0.8秒
      }, 50); // 短暂延迟确保移动完成
    }, 600); // 移动动画时长 0.6秒
  };

  // 获取当前显示的3张卡片的索引
  const getVisibleCardIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentActiveIndex + i;
      if (index < 0) index = totalCards + index;
      if (index >= totalCards) index = index - totalCards;
      indices.push(index);
    }
    return indices;
  };

  const visibleIndices = getVisibleCardIndices();

  return (
    <section className="py-16 lg:py-24 bg-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm text-gray-500 font-medium tracking-wider uppercase mb-4 block">
            COVILLA DESTINATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Across the world
          </h2>
        </div>

        {/* 桌面端轮播 - 显示3张卡片 */}
        <div className="hidden lg:block relative">
          {/* Cards Container */}
          <div
            className="flex justify-center items-center gap-6 px-6"
            style={{
              gap: "24px",
              paddingLeft: "24px",
              paddingRight: "24px",
              transform: `translate3d(${translateOffset}px, 0, 0)`,
              transition:
                animationPhase === "moving"
                  ? "transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)"
                  : "none",
              willChange: animationPhase !== "idle" ? "transform" : "auto",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {visibleIndices.map((locationIndex, displayIndex) => {
              const location = locations[locationIndex];
              const isCenter = displayIndex === 1; // 中间位置的卡片

              // 根据动画阶段决定卡片样式
              const getCardStyle = () => {
                const baseWidth = 416;
                const baseScale = 1.0;
                const activeScale = 1.1;

                // 基础样式，包含GPU加速优化
                const baseStyle = {
                  flex: `0 0 ${baseWidth}px`,
                  transformOrigin: "center center",
                  willChange:
                    isCenter || animationPhase !== "idle"
                      ? "transform"
                      : "auto",
                  backfaceVisibility: "hidden" as const,
                  WebkitBackfaceVisibility: "hidden" as const,
                  perspective: "1000px",
                  WebkitPerspective: "1000px",
                  transformStyle: "preserve-3d" as const,
                };

                if (animationPhase === "idle" && isCenter) {
                  // 静止状态下，中心卡片保持放大
                  return {
                    ...baseStyle,
                    transform: `translate3d(0, 0, 0) scale(${activeScale})`,
                    transition: "transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
                  };
                } else if (animationPhase === "moving") {
                  // 移动阶段，所有卡片保持基础尺寸，使用更快的过渡
                  return {
                    ...baseStyle,
                    transform: `translate3d(0, 0, 0) scale(${baseScale})`,
                    transition:
                      "transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  };
                } else if (animationPhase === "scaling" && isCenter) {
                  // 放大阶段，中心卡片开始放大 - 使用更平滑的缓动
                  return {
                    ...baseStyle,
                    transform: `translate3d(0, 0, 0) scale(${activeScale})`,
                    transition: "transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
                  };
                } else {
                  // 其他情况保持基础尺寸
                  return {
                    ...baseStyle,
                    transform: `translate3d(0, 0, 0) scale(${baseScale})`,
                    transition: "transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)",
                  };
                }
              };

              return (
                <div
                  key={`${location.id}-${currentActiveIndex}`}
                  className={`${isCenter ? "transform z-10" : "transform z-0"}`}
                  style={{
                    ...getCardStyle(),
                    isolation: "isolate",
                  }}
                >
                  <a
                    href={
                      location.name === "Egypt"
                        ? "/location/egypt/"
                        : location.name === "France"
                        ? "/location/france/"
                        : location.name === "Indonesia"
                        ? "/location/indonesia/"
                        : location.name === "Greece"
                        ? "/location/greece/"
                        : location.name === "Spain"
                        ? "/location/spain/"
                        : location.name === "Italy"
                        ? "/location/italy/"
                        : "#"
                    }
                    className="block"
                  >
                    <Card
                      className={`group relative overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isCenter &&
                        (animationPhase === "idle" ||
                          animationPhase === "scaling")
                          ? "h-96"
                          : "h-80"
                      }`}
                      style={{
                        willChange:
                          isCenter || animationPhase !== "idle"
                            ? "transform, box-shadow"
                            : "auto",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{
                          backgroundImage: `url('${location.backgroundImage}')`,
                          willChange: "transform",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "translate3d(0, 0, 0)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                        <div className="text-white">
                          <span
                            className={`text-sm font-medium tracking-wider uppercase opacity-90 block mb-2 transition-all duration-300 ${
                              isCenter &&
                              (animationPhase === "idle" ||
                                animationPhase === "scaling")
                                ? "text-base"
                                : "text-sm"
                            }`}
                          >
                            6 VACATIONS
                          </span>
                          <h3
                            className={`font-bold mb-4 transition-all duration-300 ${
                              isCenter &&
                              (animationPhase === "idle" ||
                                animationPhase === "scaling")
                                ? "text-4xl"
                                : "text-3xl"
                            }`}
                          >
                            {location.name}
                          </h3>
                          <p
                            className={`font-semibold transition-all duration-300 ${
                              isCenter &&
                              (animationPhase === "idle" ||
                                animationPhase === "scaling")
                                ? "text-xl"
                                : "text-lg"
                            }`}
                          >
                            From {location.price}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls - Below Images */}
          <div className="flex justify-center items-center mt-8">
            <Button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 shadow-lg mr-4"
              variant="outline"
            >
              ←
            </Button>
            <Button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 shadow-lg ml-4"
              variant="outline"
            >
              →
            </Button>
          </div>
        </div>

        {/* 移动端轮播 - 单张卡片居中显示 */}
        <div className="lg:hidden">
          <div className="flex justify-center">
            <div className="w-full max-w-sm mx-auto">
              <a
                href={
                  locations[currentActiveIndex].name === "Egypt"
                    ? "/location/egypt/"
                    : locations[currentActiveIndex].name === "France"
                    ? "/location/france/"
                    : locations[currentActiveIndex].name === "Indonesia"
                    ? "/location/indonesia/"
                    : locations[currentActiveIndex].name === "Greece"
                    ? "/location/greece/"
                    : locations[currentActiveIndex].name === "Spain"
                    ? "/location/spain/"
                    : locations[currentActiveIndex].name === "Italy"
                    ? "/location/italy/"
                    : "#"
                }
                className="block"
              >
                <Card className="group relative overflow-hidden cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-80">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${locations[currentActiveIndex].backgroundImage}')`,
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="text-white">
                      <span className="text-sm font-medium tracking-wider uppercase opacity-90 block mb-2">
                        6 VACATIONS
                      </span>
                      <h3 className="text-2xl font-bold mb-3">
                        {locations[currentActiveIndex].name}
                      </h3>
                      <p className="text-lg font-semibold">
                        From {locations[currentActiveIndex].price}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          </div>

          {/* 移动端导航控制 */}
          <div className="flex items-center justify-center mt-6 gap-4">
            {/* Progress Indicator */}
            <div className="flex gap-2">
              {locations.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentActiveIndex
                      ? "bg-gray-900 w-8"
                      : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2 ml-4">
              <Button
                onClick={handlePrevious}
                disabled={isTransitioning}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 shadow-lg disabled:opacity-50"
                variant="outline"
              >
                ←
              </Button>
              <Button
                onClick={handleNext}
                disabled={isTransitioning}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 shadow-lg disabled:opacity-50"
                variant="outline"
              >
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
