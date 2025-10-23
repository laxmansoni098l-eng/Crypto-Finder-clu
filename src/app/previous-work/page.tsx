import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Eye } from 'lucide-react';

const previousWorkItems = [
  {
    src: "https://i.postimg.cc/Pxzkv88Q/IMG-20251021-123742-104.jpg",
    alt: "Previous work banner 2",
    title: "Project Beta Campaign",
  },
  {
    src: "https://i.postimg.cc/mDGsrShq/IMG-20251021-123742-729.jpg",
    alt: "Previous work banner 3",
    title: "Project Gamma Launch",
  },
  {
    src: "https://i.postimg.cc/2yRMGjnL/IMG-20251021-123741-896.jpg",
    alt: "Previous work banner 4",
    title: "Project Delta Promotion",
  },
  {
    src: "https://i.postimg.cc/pTtHdByS/IMG-20251021-123742-208.jpg",
    alt: "Previous work banner 5",
    title: "Project Epsilon Partnership",
  },
  {
    src: "https://i.postimg.cc/yxLhdv6d/IMG-20251021-123742-347.jpg",
    alt: "Previous work banner 6",
    title: "Project Zeta AMA",
  },
  {
    src: "https://i.postimg.cc/j5QrnJJh/IMG-20251021-123742-465.jpg",
    alt: "Previous work banner 7",
    title: "Project Eta Community Growth",
  },
  {
    src: "https://i.postimg.cc/j5QrnJJG/IMG-20251021-123742-736.jpg",
    alt: "Previous work banner 8",
    title: "Project Theta Incubation",
  },
];

export default function PreviousWorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
                    Previous <span className="text-primary">Work</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    A look into some of the successful campaigns and projects we have been a part of.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {previousWorkItems.map((item) => (
                <Card key={item.src} className="group bg-card/80 border-2 border-border/20 flex flex-col transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary overflow-hidden">
                  <div className="relative aspect-video">
                    <Image 
                        src={item.src}
                        alt={item.alt}
                        fill
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-foreground text-center">{item.title}</h3>
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
