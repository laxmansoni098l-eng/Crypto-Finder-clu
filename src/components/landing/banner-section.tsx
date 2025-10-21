
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
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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

const MobileMockup = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[300px] w-[150px] shadow-xl", className)}>
            <div className="w-[70px] h-[10px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[20px] w-[3px] bg-gray-800 absolute -start-[11px] top-[50px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[11px] top-[90px] rounded-s-lg"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -end-[11px] top-[100px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                <Image src={src} alt={alt} layout="fill" objectFit="cover" className="w-full h-full"/>
            </div>
        </div>
    );
};

export function BannerSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = (api: CarouselApi) => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          PREVIOUS <span className="text-primary">WORK</span>
        </h2>
        
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-4xl mx-auto mb-12"
        >
          <CarouselContent>
            {banners.map((banner, index) => (
              <CarouselItem key={index} className="flex justify-center md:basis-1/2 lg:basis-1/3">
                <div className="p-2 bg-card rounded-xl border-2 shadow-lg">
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    width={400}
                    height={200}
                    className="object-contain rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center gap-2 mb-12">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 w-2 rounded-full",
                current === index ? "bg-primary" : "bg-muted"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            <MobileMockup src={banners[0].src} alt={banners[0].alt} />
            <MobileMockup src={banners[1].src} alt={banners[1].alt} />
            <MobileMockup src={banners[2].src} alt={banners[2].alt} />
        </div>
      </div>
    </section>
  );
}
