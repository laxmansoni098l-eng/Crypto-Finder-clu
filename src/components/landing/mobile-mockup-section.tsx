"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const banners = [
  {
    src: "https://i.postimg.cc/4yXfHq4B/IMG-20251022-090702-397.jpg",
    alt: "Mobile mockup image 1",
  },
  {
    src: "https://i.postimg.cc/0QY5QPvK/IMG-20251022-090704-141.jpg",
    alt: "Mobile mockup image 2",
  },
  {
    src: "https://i.postimg.cc/ZqyKG6Dj/IMG-20251022-090705-601.jpg",
    alt: "Mobile mockup image 3",
  },
];

const MobileMockup = ({
  src,
  alt,
  className,
  style,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto bg-red-900 border-red-700 border-[10px] rounded-[2.5rem] h-[320px] w-[160px] shadow-2xl shadow-primary/20 cursor-pointer",
        className
      )}
      style={style}
      onClick={onClick}
    >
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-red-900 rounded-full z-20"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          className="w-full h-full p-1"
        />
      </div>
    </div>
  );
};

export function MobileMockupSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const getStyle = (index: number) => {
    if (index === activeIndex) {
      return {
        transform: "scale(1.1) translateY(-1rem)",
        zIndex: 10,
      };
    }
    // Item to the left of active
    if (index === (activeIndex - 1 + banners.length) % banners.length) {
      return {
        transform: "translateX(-6rem) rotate(-15deg) scale(1)",
        zIndex: 5,
      };
    }
    // Item to the right of active
    if (index === (activeIndex + 1) % banners.length) {
      return {
        transform: "translateX(6rem) rotate(15deg) scale(1)",
        zIndex: 5,
      };
    }
    // Fallback for other items (in case of more than 3)
    return {
        transform: "scale(0.8) translateY(2rem)",
        zIndex: 1,
        opacity: 0.8
    }
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 uppercase text-foreground">
          Showcasing our <span className="text-primary">Impact</span>
        </h2>
        <div className="relative flex justify-center items-center h-[400px] w-full max-w-4xl mx-auto">
          {banners.map((banner, index) => (
            <MobileMockup
              key={banner.src}
              src={banner.src}
              alt={banner.alt}
              className="absolute transition-all duration-500 ease-in-out"
              style={getStyle(index)}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
