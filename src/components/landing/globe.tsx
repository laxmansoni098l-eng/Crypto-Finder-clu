"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Node = ({ index, totalNodes }: { index: number, totalNodes: number }) => {
  const [style, setStyle] = useState({});
  const [nodeStyle, setNodeStyle] = useState({});

  useEffect(() => {
    // These will only run on the client, after initial hydration
    const angle = (index / totalNodes) * 360;
    const animationDuration = 10 + Math.random() * 10;
    const animationDelay = Math.random() * 5;
    
    // Use a smaller radius for mobile and larger for desktop
    const isMobile = window.innerWidth < 768;
    const orbitRadius = isMobile ? 100 + Math.random() * 15 : 210 + Math.random() * 40;

    setStyle({
      transform: `rotateY(${angle}deg)`,
      animation: `orbit ${animationDuration}s linear infinite`,
      animationDelay: `${-animationDelay}s`,
    });

    setNodeStyle({
      transform: `translateX(${orbitRadius}px) scale(0.8)`, // scale down nodes
      boxShadow: "0 0 8px 2px hsl(var(--primary) / 0.8)",
    });
  }, [index, totalNodes]);


  return (
    <div
      className="absolute w-full h-full"
      style={style}
    >
      <div
        className="absolute w-2.5 h-2.5 rounded-full bg-primary top-1/2 left-1/2 -mt-1 -ml-1" // smaller nodes
        style={nodeStyle}
      />
    </div>
  );
};

export const Globe = () => {
    const totalNodes = 12;
    return (
        <div className="relative w-[250px] h-[250px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            <div
            className="absolute w-32 h-32 md:w-80 md:h-80 rounded-full"
            style={{
                backgroundImage: 'url("https://i.postimg.cc/Hn0Y4h8y/IMG-20251021-125029-936.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: 'globe 60s linear infinite',
                boxShadow: 'inset 0 0 10px 2px hsl(var(--primary) / 0.5), 0 0 30px -10px hsl(var(--primary))',
                transformStyle: 'preserve-3d',
            }}
            />
             <div className="absolute w-[220px] h-[220px] md:w-[450px] md:h-[450px] border-2 border-primary/20 rounded-full" />
             <div className="absolute w-[280px] h-[280px] md:w-[550px] md:h-[550px] border border-primary/10 rounded-full" />

            <div className="w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(20deg)' }}>
                {Array.from({ length: totalNodes }).map((_, i) => (
                    <Node key={i} index={i} totalNodes={totalNodes} />
                ))}
            </div>
        </div>
    );
};
