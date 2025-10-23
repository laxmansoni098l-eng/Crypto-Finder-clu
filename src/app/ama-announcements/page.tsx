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
import { ExternalLink, Megaphone } from "lucide-react";
import { Providers } from '../providers';

const announcementLinks = [
  {
    title: "AMA Announcement: Project Alpha",
    date: "October 25, 2023",
    url: "https://t.me/Crypto_FinderNews/4981",
  },
  {
    title: "AMA Announcement: Project Beta",
    date: "December 14, 2023",
    url: "https://t.me/Crypto_FinderNews/5393",
  },
  {
    title: "AMA Announcement: Project Gamma",
    date: "February 27, 2024",
    url: "https://t.me/Crypto_FinderNews/5732",
  },
  {
    title: "AMA Announcement: Project Delta",
    date: "March 4, 2024",
    url: "https://t.me/Crypto_FinderNews/5754",
  },
  {
    title: "AMA Announcement: Project Epsilon",
    date: "April 11, 2024",
    url: "https://t.me/Crypto_FinderNews/5876",
  },
];

export default function AmaAnnouncementsPage() {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <Megaphone className="h-12 w-12 mx-auto text-primary mb-4" />
                  <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
                      AMA <span className="text-primary">Announcements</span>
                  </h2>
                  <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                      Stay updated with our upcoming "Ask Me Anything" sessions.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {announcementLinks.map((announcement) => (
                  <Card key={announcement.url} className="bg-card/80 border-2 border-border/20 flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-foreground">{announcement.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground pt-2">{announcement.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex items-end">
                      <Button asChild className="w-full">
                        <a href={announcement.url} target="_blank" rel="noopener noreferrer">
                          View Announcement
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
    </Providers>
  );
}
