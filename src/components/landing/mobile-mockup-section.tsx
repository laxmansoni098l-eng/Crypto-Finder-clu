"use client";

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

const MobileMockup = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
    return (
        <div className={cn("relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] h-[300px] w-[150px] shadow-2xl", className)}>
            <div className="w-[70px] h-[10px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[20px] w-[2px] bg-gray-900 absolute -start-[10px] top-[50px] rounded-s-lg"></div>
            <div className="h-[30px] w-[2px] bg-gray-900 absolute -start-[10px] top-[90px] rounded-s-lg"></div>
            <div className="h-[30px] w-[2px] bg-gray-900 absolute -end-[10px] top-[100px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
                <Image src={src} alt={alt} layout="fill" objectFit="cover" className="w-full h-full"/>
            </div>
        </div>
    );
};

export function MobileMockupSection() {
  return (
    <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 uppercase text-foreground">
                Showcasing our <span className="text-primary">Impact</span>
            </h2>
            <div className="flex justify-center items-center max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
                <div className="transition-transform duration-500 transform-gpu hover:scale-110 hover:-translate-y-4" style={{ transform: 'rotateY(25deg) scale(0.95)', transformStyle: 'preserve-3d' }}>
                    <MobileMockup src={banners[0].src} alt={banners[0].alt} className="shadow-primary/20" />
                </div>
                <div className="z-10 transition-transform duration-500 transform-gpu hover:scale-110 hover:-translate-y-4" style={{ transformStyle: 'preserve-3d' }}>
                    <MobileMockup src={banners[1].src} alt={banners[1].alt} className="shadow-primary/40" />
                </div>
                <div className="transition-transform duration-500 transform-gpu hover:scale-110 hover:-translate-y-4" style={{ transform: 'rotateY(-25deg) scale(0.95)', transformStyle: 'preserve-3d' }}>
                    <MobileMockup src={banners[2].src} alt={banners[2].alt} className="shadow-primary/20" />
                </div>
            </div>
        </div>
    </section>
  );
}