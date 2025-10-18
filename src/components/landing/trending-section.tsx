"use client";

import { Flame, TrendingUp, TrendingDown } from "lucide-react";

const cryptoData = [
  { name: "BTC", price: "68,420.10", change: "+2.5%", trend: "up" },
  { name: "ETH", price: "3,567.80", change: "+4.1%", trend: "up" },
  { name: "SOL", price: "168.99", change: "-1.2%", trend: "down" },
  { name: "BNB", price: "601.50", change: "+1.8%", trend: "up" },
  { name: "DOGE", price: "0.158", change: "+8.7%", trend: "up" },
  { name: "XRP", price: "0.523", change: "-0.5%", trend: "down" },
  { name: "ADA", price: "0.456", change: "+3.2%", trend: "up" },
  { name: "SHIB", price: "0.000025", change: "+12.3%", trend: "up" },
  { name: "AVAX", price: "37.80", change: "-2.1%", trend: "down" },
  { name: "DOT", price: "7.15", change: "+1.5%", trend: "up" },
];

const CryptoTicker = () => {
  const extendedCryptoData = [...cryptoData, ...cryptoData]; // Duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll">
        {extendedCryptoData.map((crypto, index) => (
          <div key={index} className="flex flex-shrink-0 items-center gap-4 px-6">
            <span className="font-bold text-foreground">{crypto.name}</span>
            <span className="text-muted-foreground">${crypto.price}</span>
            <div
              className={`flex items-center gap-1 text-sm ${
                crypto.trend === "up" ? "text-green-400" : "text-red-400"
              }`}
            >
              {crypto.trend === "up" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{crypto.change}</span>
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
