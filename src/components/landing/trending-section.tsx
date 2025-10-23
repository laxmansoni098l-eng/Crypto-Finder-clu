"use client";

import { Flame, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,tether,usd-coin,solana,ripple,dogecoin&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&x_cg_demo_api_key=CG-8udaN3LrarKVBUDPSVbZbXZ2"
        );
        if (!response.ok) {
            throw new Error('Failed to fetch crypto data');
        }
        const data: CryptoData[] = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  if (cryptoData.length === 0) {
    return (
        <div className="flex items-center justify-center w-full">
            <span className="text-muted-foreground">Loading prices...</span>
        </div>
    );
  }

  const extendedCryptoData = [...cryptoData, ...cryptoData];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll">
        {extendedCryptoData.map((crypto, index) => (
          <div key={index} className="flex flex-shrink-0 items-center gap-4 px-6">
            <span className="font-bold text-foreground">{crypto.symbol.toUpperCase()}</span>
            <span className="text-muted-foreground">
              ${crypto.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
            </span>
            <div
              className={`flex items-center gap-1 text-sm ${
                crypto.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {crypto.price_change_percentage_24h >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{crypto.price_change_percentage_24h.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export function TrendingSection() {
  return (
    <section className="py-4 border-b border-border">
      <div className="container mx-auto flex items-center gap-4">
        <div className="flex flex-shrink-0 items-center gap-2">
          <Flame className="h-6 w-6 text-primary" />
          <span className="font-bold text-base uppercase tracking-wider text-foreground">
            Trending
          </span>
        </div>
        <div className="flex-grow overflow-hidden">
          <CryptoTicker />
        </div>
      </div>
    </section>
  );
}
