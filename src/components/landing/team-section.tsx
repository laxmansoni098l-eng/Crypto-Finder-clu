import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const teamMembers = [
  {
    name: "Haris",
    role: "CEO At Crypto Finder Club",
    imageId: "team-member-1",
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
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto justify-center">
          {teamMembers.map((member) => {
            const image = getTeamMemberImage(member.imageId);
            return (
              <Card key={member.name} className="bg-card/80 border-primary/20 text-center overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Photo of ${member.name}`}
                      width={200}
                      height={200}
                      className="w-full h-auto object-cover aspect-square"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-base font-bold text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-xs text-primary">{member.role}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
