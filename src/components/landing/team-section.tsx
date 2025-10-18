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
    name: "Alex Johnson",
    role: "Co-Founder & CEO",
    imageId: "team-member-1",
  },
  {
    name: "Samantha Bee",
    role: "Co-Founder & CTO",
    imageId: "team-member-2",
  },
  {
    name: "John Doe",
    role: "Lead Blockchain Developer",
    imageId: "team-member-3",
  },
  {
    name: "Jane Smith",
    role: "Head of Marketing",
    imageId: "team-member-4",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const image = getTeamMemberImage(member.imageId);
            return (
              <Card key={member.name} className="bg-card/80 border-primary/20 text-center overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                <CardHeader className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Photo of ${member.name}`}
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.role}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
