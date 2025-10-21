import Link from "next/link";
import { Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "#about", name: "About" },
  { href: "#services", name: "Services" },
  { href: "#team", name: "Team" },
  { href: "#testimonials", name: "Testimonials" },
  { href: "#pricing", name: "Pricing" },
  { href: "#contact", name: "Contact" },
];

const socialLinks = [
  {
    href: "https://t.me/CryptoFinderClub_Ama",
    icon: <Send className="h-5 w-5" />,
    name: "Telegram Group",
  },
  {
    href: "https://t.me/Crypto_FinderNews",
    icon: <Send className="h-5 w-5" />,
    name: "Telegram Channel",
  },
  {
    href: "https://x.com/Cryptofinder_01",
    icon: <Twitter className="h-5 w-5" />,
    name: "Twitter",
  },
  {
    href: "https://www.binance.com/en/live/u/29226531",
    icon: <BinanceIcon className="h-5 w-5" />,
    name: "Binance Live",
  },
  {
    href: "https://www.binance.com/square/profile/cryptofinder_club",
    icon: <BinanceIcon className="h-5 w-5" />,
    name: "Binance Feed",
  },
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

export function Footer() {
  return (
    <footer className="bg-card/80 border-t-2 border-primary mt-12">
      <div className="container mx-auto p-4 md:px-6">
        <div className="grid md:grid-cols-3 items-center justify-between gap-8">
            <Logo />
             <div className="flex flex-col items-center">
                <p className="text-sm font-bold text-foreground">{promotionContact.title}</p>
                <a href={promotionContact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Send className="h-4 w-4" />
                    <span>@{promotionContact.telegram}</span>
                </a>
             </div>
            <div className="flex items-center gap-2 justify-self-end">
              {socialLinks.map((link) => (
                <Button key={link.name} variant="ghost" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground border-t border-border pt-4">
            © 2025 Crypto Finder Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
