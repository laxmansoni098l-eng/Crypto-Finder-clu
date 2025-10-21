import { Users, Zap, Target, Globe } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase text-foreground">
            About <span className="text-primary">Crypto Finder Club</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Crypto Finder Club is a global community with a mission to share
            knowledge and opportunities about cryptocurrency and blockchain. We
            strive to connect our community with high-quality projects,
            fostering a space for learning, growth, and collaboration in the
            ever-evolving world of Web3.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6 bg-card/80 rounded-xl border-2 border-border/20 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
            <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">
              Community Focused
            </h3>
            <p className="text-muted-foreground text-sm">
              We are dedicated to building a strong, supportive, and engaged
              community of crypto enthusiasts and investors from around the
              world.
            </p>
          </div>
          <div className="text-center p-6 bg-card/80 rounded-xl border-2 border-border/20 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
            <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">
              Quality Projects
            </h3>
            <p className="text-muted-foreground text-sm">
              Our focus is on identifying and partnering with promising,
              high-potential blockchain projects to bring exclusive
              opportunities to our members.
            </p>
          </div>
          <div className="text-center p-6 bg-card/80 rounded-xl border-2 border-border/20 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
            <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-foreground">
              Strategic Growth
            </h3>
            <p className="text-muted-foreground text-sm">
              We provide comprehensive marketing and promotional services to help
              our partner projects achieve their strategic growth and market
              penetration goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
