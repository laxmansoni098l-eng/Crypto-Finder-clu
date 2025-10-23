"use client"

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$฿₵€£¥₽₿";
const cryptoSymbols = ['B', 'Ξ', 'Ł', 'D'];

const Stream = ({ streamId }: { streamId: number }) => {
    const [charStream, setCharStream] = useState<(string | React.ReactNode)[]>([]);
    
    useEffect(() => {
        const streamLength = Math.floor(Math.random() * 20) + 10;
        const fallDuration = Math.random() * 8 + 4;
        const fallDelay = Math.random() * 10;
        const streamSpeed = Math.random() * 50 + 150;

        const leftPosition = Math.random() * 100;
        
        const isCrypto = Math.random() < 0.2; // 20% chance to be a crypto stream
        const streamColor = isCrypto ? 'text-primary' : 'text-primary';

        let interval: NodeJS.Timeout;

        const setupStream = () => {
            let count = 0;
            interval = setInterval(() => {
                if(count < streamLength) {
                    const char = isCrypto 
                        ? cryptoSymbols[Math.floor(Math.random() * cryptoSymbols.length)] 
                        : characters[Math.floor(Math.random() * characters.length)];
                    
                    setCharStream(prev => [...prev, char]);
                    count++;
                } else {
                    clearInterval(interval);
                }
            }, streamSpeed);
        };

        const timer = setTimeout(setupStream, fallDelay * 1000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        }

    }, [streamId]);

    const fallDuration = Math.random() * 8 + 4;
    const fallDelay = Math.random() * 5;

    return (
        <div
            className="fixed top-[-10vh] flex flex-col text-sm md:text-base leading-tight"
            style={{
                left: `${Math.random() * 100}vw`,
                animation: `fall ${fallDuration}s linear ${fallDelay}s infinite`,
                writingMode: 'vertical-rl',
                textShadow: '0 0 8px currentColor',
            }}
        >
            {charStream.map((char, index) => {
                const isCrypto = typeof char === 'string' && cryptoSymbols.includes(char);
                const color = isCrypto ? 'text-primary' : 'text-primary';
                const opacity = index === charStream.length -1 ? 1 : Math.max(0.1, (index / charStream.length) * 0.8);

                return (
                    <span 
                        key={index}
                        className={cn(color, index < charStream.length - 2 && 'opacity-50')}
                        style={{ opacity: opacity }}
                    >
                        {char}
                    </span>
                );
            })}
        </div>
    )
}


export const MatrixRain = () => {
    const [streams, setStreams] = useState<number[]>([]);

    useEffect(() => {
        const streamCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 50;
        const initialStreams = Array.from({ length: streamCount }, (_, i) => i);
        setStreams(initialStreams);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            {streams.map(i => <Stream key={i} streamId={i} />)}
        </div>
    );
};
