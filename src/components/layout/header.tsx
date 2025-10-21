"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Send, Twitter } from "lucide-react";
import { Logo } from "@/components/logo";
import Link from "next/link";

const navLinks = [
  { href: "#about", name: "About" },
  { href: "#services", name: "Services" },
  { href: "#team", name: "Team" },
  { href: "#testimonials", name: "Testimonials" },
  { href: "#pricing", name: "Pricing" },
  { href: "#contact", name: "Contact" },
];

const promotionContact = {
    name: "Haris",
    title: "Contact For Promotion",
    telegram: "Haris_ree",
    href: "https://t.me/Haris_ree",
};

function BinanceIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.25 7.75l-4.5 4.5-4.5-4.5L3 12l4.5 4.5 4.5-4.5 4.5 4.5L21 12l-4.75-4.25z" />
      <path d="M11.75 3L3 12l8.75 9 8.75-9L11.75 3z" />
      <path d="M5 12l-2 2" />
      <path d="M19 12l2 2" />
      <path d="M11.75 3l-2 2" />
      <path d="M11.75 21l-2-2" />
      <path d="M11.75 3l2 2" />
      <path d="M11.75 21l2-2" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 md:px-6 border-b-2">
        <Logo />
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-center">
                <p className="text-xs font-bold text-foreground">{promotionContact.title}</p>
                <a href={promotionContact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm">
                    <Send className="h-4 w-4" />
                    <span>@{promotionContact.telegram}</span>
                </a>
             </div>
             <Button>Get a Quote</Button>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l-primary/20 w-full max-w-xs">
                 <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  <Logo />
                   <div className="flex flex-col gap-6 items-center">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-lg text-foreground hover:text-primary transition-colors"
                      >
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                   <div className="flex flex-col items-center">
                        <p className="text-sm font-bold text-foreground">{promotionContact.title}</p>
                        <a href={promotionContact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Send className="h-4 w-4" />
                            <span>@{promotionContact.telegram}</span>
                        </a>
                    </div>
                   <Button size="lg">Get a Quote</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
