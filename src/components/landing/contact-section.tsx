import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
            <span className="text-primary">Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Directly Card */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Contact Directly
            </h3>
            <Card className="bg-card/80 border-2 border-border/20">
              <CardContent className="p-6 space-y-4">
                <a
                  href="https://t.me/Haris_ree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Send className="h-6 w-6 text-primary" />
                  <span className="text-lg text-foreground">
                    Send Message on TG
                  </span>
                </a>
                <a
                  href="mailto:Cryptofinderclub15@gmail.Com"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-lg text-foreground">Email us</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Send us a Message Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Enter your project name"
                  className="bg-muted/50 border-border/30"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-muted/50 border-border/30"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Enter your message"
                  className="bg-muted/50 border-border/30 min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-bold uppercase tracking-wider"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
