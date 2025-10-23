
"use client";

import * as React from "react";
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
import { Star, MessageSquareQuote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

  const testimonials = [
    {
      quote: "Working with Crypto Finder Club has been a game-changer for our project. Their community is incredibly engaged, and the AMA session drove a significant increase in our token holders.",
      author: "John Doe",
      project: "Project Alpha",
      rating: 5,
    },
    {
      quote: "The strategic marketing support we received was top-notch. They helped us reach a wider audience and build lasting momentum. Highly recommended!",
      author: "Jane Smith",
      project: "Project Beta",
      rating: 5,
    },
    {
      quote: "A truly professional and dedicated team. The promotion was seamless, and the results exceeded our expectations. We look forward to future collaborations.",
      author: "Sam Wilson",
      project: "Project Gamma",
      rating: 5,
    },
  ];
  
  export function FeedbackSection() {
    const plugin = React.useRef(
      Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MessageSquareQuote className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
              Feedback From Our <span className="text-primary">Partners</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We've helped amazing projects reach their goals. Here's what they have to say about us.
            </p>
          </div>
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="bg-card/80 border-2 border-border/20 flex flex-col h-full transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                    <CardHeader>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-primary">{testimonial.project}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    );
  }
  
