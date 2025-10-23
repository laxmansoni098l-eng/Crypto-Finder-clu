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
        <div className={cn("relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[6px] rounded-[1.5rem] h-[240px] w-[120px] shadow-xl", className)}>
            <div className="w-[60px] h-[8px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[18px] w-[2px] bg-gray-800 absolute -start-[8px] top-[40px] rounded-s-lg"></div>
            <div className="h-[28px] w-[2px] bg-gray-800 absolute -start-[8px] top-[70px] rounded-s-lg"></div>
            <div className="h-[28px] w-[2px] bg-gray-800 absolute -end-[8px] top-[80px] rounded-e-lg"></div>
            <div className="rounded-[1.2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                <Image src={src} alt={alt} layout="fill" objectFit="cover" className="w-full h-full"/>
            </div>
        </div>
    );
};

export function MobileMockupSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
            <MobileMockup src={banners[0].src} alt={banners[0].alt} className="transition-transform duration-300 transform -mr-10 hover:scale-105" style={{ transform: 'rotateY(30deg) scale(0.9)' }} />
            <MobileMockup src={banners[1].src} alt={banners[1].alt} className="z-10 transition-transform duration-300 transform hover:scale-105" />
            <MobileMockup src={banners[2].src} alt={banners[2].alt} className="transition-transform duration-300 transform -ml-10 hover:scale-105" style={{ transform: 'rotateY(-30deg) scale(0.9)' }} />
        </div>
      </div>
    </section>
  );
}
