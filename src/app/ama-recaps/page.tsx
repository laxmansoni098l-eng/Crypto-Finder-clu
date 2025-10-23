import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Repeat } from "lucide-react";

const recapLinks = [
  {
    title: "AMA Recap: Exciting Project Alpha",
    date: "October 26, 2023",
    url: "https://t.me/Crypto_FinderNews/4981",
  },
  {
    title: "AMA Recap: Insights from Project Beta",
    date: "December 15, 2023",
    url: "https://t.me/Crypto_FinderNews/5393",
  },
  {
    title: "AMA Recap: Exploring Project Gamma",
    date: "February 28, 2024",
    url: "https://t.me/Crypto_FinderNews/5732",
  },
  {
    title: "AMA Recap: The Future of Project Delta",
    date: "March 5, 2024",
    url: "https://t.me/Crypto_FinderNews/5754",
  },
  {
    title: "AMA Recap: Deep Dive into Project Epsilon",
    date: "April 12, 2024",
    url: "https://t.me/Crypto_FinderNews/5876",
  },
];

export default function AmaRecapsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <Repeat className="h-12 w-12 mx-auto text-primary mb-4" />
                <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
                    AMA <span className="text-primary">Recaps</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Catch up on our past "Ask Me Anything" sessions with innovative blockchain projects.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {recapLinks.map((recap) => (
                <Card key={recap.url} className="bg-card/80 border-2 border-border/20 flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">{recap.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground pt-2">{recap.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end">
                    <Button asChild className="w-full">
                      <a href={recap.url} target="_blank" rel="noopener noreferrer">
                        View Recap
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
