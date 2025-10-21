"use client";
import React from "react";

const Node = ({ index, totalNodes }: { index: number, totalNodes: number }) => {
  const angle = (index / totalNodes) * 360;
  const animationDuration = 10 + Math.random() * 10;
  const animationDelay = Math.random() * 5;
  const orbitRadius = 200 + Math.random() * 50;

  return (
    <div
      className="absolute w-full h-full"
      style={{
        transform: `rotateY(${angle}deg)`,
        animation: `orbit ${animationDuration}s linear infinite`,
        animationDelay: `${-animationDelay}s`,
      }}
    >
      <div
        className="absolute w-3 h-3 rounded-full bg-primary top-1/2 left-1/2 -mt-1.5 -ml-1.5"
        style={{
          transform: `translateX(${orbitRadius}px)`,
          boxShadow: "0 0 10px 2px hsl(var(--primary) / 0.8)",
        }}
      />
    </div>
  );
};

export const Globe = () => {
    const totalNodes = 12;
    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <div
            className="absolute w-80 h-80 rounded-full"
            style={{
                backgroundImage: 'url("https://i.postimg.cc/Hn0Y4h8y/IMG-20251021-125029-936.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animation: 'globe 60s linear infinite',
                boxShadow: 'inset 0 0 20px 5px hsl(var(--primary) / 0.5), 0 0 50px -10px hsl(var(--primary))',
                transformStyle: 'preserve-3d',
            }}
            />
             <div className="absolute w-[450px] h-[450px] border-2 border-primary/20 rounded-full" />
             <div className="absolute w-[550px] h-[550px] border border-primary/10 rounded-full" />

            <div className="w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(20deg)' }}>
                {Array.from({ length: totalNodes }).map((_, i) => (
                    <Node key={i} index={i} totalNodes={totalNodes} />
                ))}
            </div>
        </div>
    );
};
