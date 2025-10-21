import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase text-foreground">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have a project in mind or want to learn more about our services? We'd love to hear from you.
        </p>
        <Button asChild size="lg" className="px-12 py-6 text-lg font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:shadow-primary hover:-translate-y-1">
          <a href="mailto:Cryptofinderclub15@gmail.Com">
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </a>
        </Button>
      </div>
    </section>
  );
}
