"use client";

import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const banners = [
  {
    src: "https://i.postimg.cc/63NXQhTz/IMG-20251021-123741-831.jpg",
    alt: "Previous work banner",
  },
  {
    src: "https://i.postimg.cc/Pxzkv88Q/IMG-20251021-123742-104.jpg",
    alt: "Previous work banner 2",
  },
  {
    src: "https://i.postimg.cc/mDGsrShq/IMG-20251021-123742-729.jpg",
    alt: "Previous work banner 3",
  },
  {
    src: "https://i.postimg.cc/2yRMGjnL/IMG-20251021-123741-896.jpg",
    alt: "Previous work banner 4",
  },
  {
    src: "https://i.postimg.cc/pTtHdByS/IMG-20251021-123742-208.jpg",
    alt: "Previous work banner 5",
  },
  {
    src: "https://i.postimg.cc/yxLhdv6d/IMG-20251021-123742-347.jpg",
    alt: "Previous work banner 6",
  },
  {
    src: "https://i.postimg.cc/j5QrnJJh/IMG-20251021-123742-465.jpg",
    alt: "Previous work banner 7",
  },
  {
    src: "https://i.postimg.cc/j5QrnJJG/IMG-20251021-123742-736.jpg",
    alt: "Previous work banner 8",
  },
];

export function BannerSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          PREVIOUS <span className="text-primary">WORK</span>
        </h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <div className="p-2 bg-card rounded-xl border-2 border-primary/20 shadow-lg">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={800}
                    height={400}
                    className="object-contain rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
