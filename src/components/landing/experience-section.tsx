import { Star } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-20 md:py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-primary/50 bg-primary/10 px-6 py-2 mb-8 shadow-md">
            <Star className="h-6 w-6 text-primary animate-pulse-light" />
            <span className="font-bold text-lg text-primary tracking-wide">
              5 Years of Experience
            </span>
          </div>
          <blockquote className="relative p-4 text-xl italic text-foreground/80">
            <p className="mb-4">
              "In the ever-changing world of cryptocurrency, success requires adaptability, perseverance, and collaboration. At Crypto Finder Club, we're not just shaping the future - we're writing the playbook."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
