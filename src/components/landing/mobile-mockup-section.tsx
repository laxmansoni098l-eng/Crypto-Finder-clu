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
        <div className={cn("relative mx-auto bg-zinc-900 border-zinc-700 border-[10px] rounded-[2.5rem] h-[320px] w-[160px] shadow-2xl shadow-primary/20", className)}>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-full z-20"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background">
                <Image src={src} alt={alt} layout="fill" objectFit="contain" className="w-full h-full p-1"/>
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
            <div className="relative flex justify-center items-center h-[400px] w-full max-w-4xl mx-auto group">
                <div className="absolute transition-all duration-500 ease-in-out transform group-hover:-translate-x-24 group-hover:rotate-[-15deg] group-hover:scale-105">
                     <MobileMockup src={banners[0].src} alt={banners[0].alt} />
                </div>
                <div className="absolute z-10 transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-4">
                    <MobileMockup src={banners[1].src} alt={banners[1].alt} />
                </div>
                <div className="absolute transition-all duration-500 ease-in-out transform group-hover:translate-x-24 group-hover:rotate-[15deg] group-hover:scale-105">
                     <MobileMockup src={banners[2].src} alt={banners[2].alt} />
                </div>
            </div>
        </div>
    </section>
  );
}
