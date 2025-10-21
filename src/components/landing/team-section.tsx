import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Send } from "lucide-react";

const teamMembers = [
  {
    name: "Haris",
    role: "CEO At Crypto Finder Club",
    imageId: "team-member-1",
    promotionContact: {
        title: "Contact For Promotion",
        telegram: "Haris_ree",
        href: "https://t.me/Haris_ree",
    }
  },
  {
    name: "Francis Baker",
    role: "Co-Founder at Crypto Finder Club",
    imageId: "team-member-5",
  },
  {
    name: "Farabi",
    role: "CMO At Crypto Finder Club",
    imageId: "team-member-6",
  },
];

function getTeamMemberImage(imageId: string) {
    return PlaceHolderImages.find(p => p.id === imageId);
}

export function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto justify-center">
          {teamMembers.map((member) => {
            const image = getTeamMemberImage(member.imageId);
            return (
              <Card key={member.name} className="bg-card/80 overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary border-2 border-border/20 rounded-xl">
                <div className="relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Photo of ${member.name}`}
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover aspect-square"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  {member.promotionContact && (
                    <a href={member.promotionContact.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mt-2">
                        <Send className="h-4 w-4" />
                        <span>@{member.promotionContact.telegram}</span>
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
