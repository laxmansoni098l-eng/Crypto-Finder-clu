import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Providers } from '../providers';

const pricingOptions = [
  {
    title: "Text AMA",
    price: "$300",
    features: ["Includes $100 reward pool"],
  },
  {
    title: "Voice AMA",
    price: "$400",
    features: ["Includes $100 reward pool"],
  },
  {
    title: "Video AMA",
    price: "$450",
    features: ["Includes $100 reward pool"],
  },
  {
    title: "Twitter Space AMA",
    price: "$400",
    features: ["Includes $100 reward pool"],
  },
  {
    title: "Binance Live AMA",
    price: "$450",
    features: ["Includes $100 reward pool"],
  },
  {
    title: "Telegram Pin-Post",
    price: "$100",
    features: [],
  },
  {
    title: "Telegram + Twitter Pin-Post",
    price: "$150",
    features: [],
  },
];

export default function PricingPage() {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
                Cost of <span className="text-primary">Promotion</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pricingOptions.map((option) => (
                  <Card key={option.title} className="bg-card/80 border-2 border-border/20 flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl font-bold text-foreground">{option.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow items-center justify-center">
                      <p className="text-4xl font-bold text-primary my-4">{option.price}</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {option.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
