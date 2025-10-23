import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Crypto Finder Club?",
    answer: "Crypto Finder Club is a global community and promotional platform dedicated to connecting high-quality cryptocurrency and blockchain projects with a broad audience of enthusiasts and investors. We specialize in marketing, community growth, and strategic partnerships.",
  },
  {
    question: "What services do you offer for blockchain projects?",
    answer: "We offer a wide range of services, including AMA (Ask Me Anything) sessions (Text, Voice, Video), strategic marketing campaigns, community building, project incubation, and access to our network of trusted partners in the Web3 space.",
  },
  {
    question: "How can I get my project featured or promoted by Crypto Finder Club?",
    answer: "To get started, please reach out to our promotion contact, Haris, on Telegram (@Haris_ree) or via our official contact email. We will review your project and discuss a custom promotional package that fits your needs.",
  },
  {
    question: "What is an AMA session and how does it work?",
    answer: "An AMA (Ask Me Anything) session is a live event where your project's team can interact directly with our community. It's a great way to answer questions, share updates, and build trust. We can host AMAs on various platforms like Telegram (text, voice, or video), Twitter Spaces, and Binance Live.",
  },
  {
    question: "What are the costs for your promotion services?",
    answer: "Our pricing varies depending on the service. For example, a Text AMA starts at $300, which includes a reward pool for the community. Please visit our 'Pricing' page for a detailed list of services and their costs.",
  },
  {
    question: "Who are the key members of the Crypto Finder Club team?",
    answer: "Our core team includes Haris (CEO), Francis Baker (Co-Founder), and Farabi (CMO). You can learn more about them on our 'Team' page.",
  }
];

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <HelpCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
                    Frequently Asked <span className="text-primary">Questions</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Find answers to common questions about our services and community.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-card/80 border-2 border-border/20 rounded-lg mb-4 px-4 transition-all duration-300 hover:border-primary">
                    <AccordionTrigger className="text-left font-bold text-lg text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
