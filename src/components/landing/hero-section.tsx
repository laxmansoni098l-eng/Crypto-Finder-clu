import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background via-card to-background">
      {/* Background Glows */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline font-bold text-4xl md:text-6xl lg:text-7xl !leading-tight uppercase">
            <span className="text-primary">Launch The</span>
            <br />
            <span className="text-primary">Future</span>
            <br />
            <span className="text-foreground">of Crypto</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            The most advanced decentralized launchpad for next-generation
            blockchain projects.
          </p>
          <p className="mt-4 text-xl font-bold text-primary tracking-wide">
            Secure, Transparent, Community-Driven.
          </p>
          <Button
            size="lg"
            className="mt-8 px-12 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-primary hover:-translate-y-1"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}
