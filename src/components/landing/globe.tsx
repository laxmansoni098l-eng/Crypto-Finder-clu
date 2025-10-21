"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Node = ({ index, totalNodes }: { index: number, totalNodes: number }) => {
  const [style, setStyle] = useState({});
  const [nodeStyle, setNodeStyle] = useState({});

  useEffect(() => {
    const angle = (index / totalNodes) * 360;
    const animationDuration = 10 + Math.random() * 10;
    const animationDelay = Math.random() * 5;
    const orbitRadius = 120 + Math.random() * 20; // smaller radius for mobile

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
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
            <div
            className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full"
            style={{
                backgroundImage: 'url("https://i.postimg.cc/Hn0Y4h8y/IMG-20251021-125029-936.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: 'globe 60s linear infinite',
                boxShadow: 'inset 0 0 10px 2px hsl(var(--primary) / 0.5), 0 0 30px -10px hsl(var(--primary))',
                transformStyle: 'preserve-3d',
            }}
            />
             <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] border-2 border-primary/20 rounded-full" />
             <div className="absolute w-[300px] h-[300px] md:w-[550px] md:h-[550px] border border-primary/10 rounded-full" />

            <div className="w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(20deg) scale(1.25)' }}>
                {Array.from({ length: totalNodes }).map((_, i) => (
                    <Node key={i} index={i} totalNodes={totalNodes} />
                ))}
            </div>
        </div>
    );
};
