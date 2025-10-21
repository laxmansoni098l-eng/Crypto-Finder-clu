import { Button } from "@/components/ui/button";
import Image from "next/image";

function CryptoIcon1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26.2222 13.0556H35.7778V48.9445H26.2222V13.0556Z"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      <path
        d="M13.0556 26.2222H48.9445V35.7778H13.0556V26.2222Z"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
    </svg>
  );
}

function CryptoIcon2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.75 17C29.75 24.0416 24.0416 29.75 17 29.75C9.95837 29.75 4.25 24.0416 4.25 17C4.25 9.95837 9.95837 4.25 17 4.25C24.0416 4.25 29.75 9.95837 29.75 17Z"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.3"
        strokeWidth="2"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-background">
      {/* Background crypto icons */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <CryptoIcon1 className="absolute top-[10%] left-[5%] animate-[spin_20s_linear_infinite]" />
        <CryptoIcon2 className="absolute top-[20%] right-[10%] animate-[pulse_5s_ease-in-out_infinite]" />
        <CryptoIcon1 className="absolute bottom-[25%] left-[15%] w-12 h-12 animate-[spin_15s_linear_infinite_reverse]" />
        <CryptoIcon2 className="absolute bottom-[10%] right-[20%] w-8 h-8 animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
      </div>
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
                src="https://i.postimg.cc/vBgksxQQ/1760844854162.png"
                alt="Web3 Media Powerhouse"
                width={500}
                height={500}
                className="object-contain rounded-lg"
                data-ai-hint="futuristic design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}