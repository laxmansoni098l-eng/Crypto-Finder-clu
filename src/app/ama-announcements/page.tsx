
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

const announcementLinks = [
  {
    title: "AMA Announcement: Project BabyBNBTiger",
    date: "April 25, 2023",
    url: "https://t.me/Crypto_FinderNews/1218",
  },
  {
    title: "AMA Announcement: Project Gate.io Exchange",
    date: "January 30, 2023",
    url: "https://t.me/Crypto_FinderNews/800",
  },
  {
    title: "AMA Announcement: Project Tapbit Exchange",
    date: "May 19, 2024",
    url: "https://t.me/Crypto_FinderNews/3538",
  },
  {
    title: "AMA Announcement: Project Wondra",
    date: "January 5, 2024",
    url: "https://t.me/Crypto_FinderNews/3679",
  },
  {
    title: "AMA Announcement: Project Vara Network",
    date: "January 11, 2024",
    url: "https://t.me/Crypto_FinderNews/3699",
  },
  {
    title: "AMA Announcement: Project AI Dragon Global",
    date: "January 16, 2024",
    url: "https://t.me/Crypto_FinderNews/3771",
  },
  {
    title: "AMA Announcement: Project FINE Citizens",
    date: "January 29, 2024",
    url: "https://t.me/Crypto_FinderNews/3897",
  },
  {
    title: "AMA Announcement: Project SBT",
    date: "August 13, 2024",
    url: "https://t.me/Crypto_FinderNews/4123",
  },
  {
    title: "AMA Announcement: Project Platon Network",
    date: "August 21, 2024",
    url: "https://t.me/Crypto_FinderNews/4164",
  },
  {
    title: "AMA Announcement: Project MEVBRIDGE",
    date: "September 11, 2024",
    url: "https://t.me/Crypto_FinderNews/4244",
  },
  {
    title: "AMA Announcement: Project ANTA Global",
    date: "October 8, 2024",
    url: "https://t.me/Crypto_FinderNews/4412",
  },
  {
    title: "AMA Announcement: Project CryptoCasino",
    date: "October 18, 2024",
    url: "https://t.me/Crypto_FinderNews/4454",
  },
  {
    title: "AMA Announcement: Project Gather Top",
    date: "October 25, 2024",
    url: "https://t.me/Crypto_FinderNews/4492",
  },
  {
    title: "AMA Announcement: Project Infinity Exchange",
    date: "October 25, 2024",
    url: "https://t.me/Crypto_FinderNews/4510",
  },
  {
    title: "AMA Announcement: Project VETRA",
    date: "November 24, 2024",
    url: "https://t.me/Crypto_FinderNews/4656",
  },
  {
    title: "AMA Announcement: Project MIRA",
    date: "January 3, 2025",
    url: "https://t.me/Crypto_FinderNews/4921",
  },
  {
    title: "AMA Announcement: Project CHAI",
    date: "January 9, 2025",
    url: "https://t.me/Crypto_FinderNews/4967",
  },
  {
    title: "AMA Announcement: Project SmartMall",
    date: "February 27, 2025",
    url: "https://t.me/Crypto_FinderNews/5173",
  },
  {
    title: "AMA Announcement: Project JF JuFinance",
    date: "August 2, 2025",
    url: "https://t.me/Crypto_FinderNews/5742",
  },
];

export default function AmaAnnouncementsPage() {
  return (
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
  );
}
