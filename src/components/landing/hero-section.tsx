import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-background">
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline font-bold text-4xl md:text-6xl lg:text-7xl !leading-tight uppercase">
              <span className="text-primary">Your Premier</span>
              <br />
              <span className="text-foreground">Web3 Media</span>
              <br />
              <span className="text-primary">Powerhouse</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-muted-foreground">
              From community engagement to strategic partnerships, we provide the
              fuel for your project's journey to the moon. Relax, we handle it
              all.
            </p>
            <Button
              size="lg"
              className="mt-8 px-12 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-primary hover:-translate-y-1"
            >
              Get a Quote
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://i.postimg.cc/9f1qfdBc/1760844854162.png"
              alt="Web3 Media Powerhouse"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
