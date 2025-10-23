import Link from "next/link";
import {
  Send,
  Twitter,
  Link as LinkIcon,
  Video,
  Rss,
  Users,
  HelpCircle,
  MessageSquareHeart,
  Briefcase,
  DollarSign,
  Mail,
  Code,
  Repeat,
  Megaphone,
} from "lucide-react";
import { Logo } from "@/components/logo";

const socialLinks = [
  {
    href: "#",
    icon: <LinkIcon className="h-5 w-5" />,
    name: "Linktree",
  },
  {
    href: "https://x.com/Cryptofinder_01",
    icon: <Twitter className="h-5 w-5" />,
    name: "[X] Twitter",
  },
  {
    href: "https://www.binance.com/en/live/u/29226531",
    icon: <Video className="h-5 w-5" />,
    name: "Binance live",
  },
  {
    href: "https://t.me/CryptoFinderClub_Ama",
    icon: <Send className="h-5 w-5" />,
    name: "Telegram chat",
  },
  {
    href: "https://t.me/Crypto_FinderNews",
    icon: <Rss className="h-5 w-5" />,
    name: "Telegram news",
  },
];

const sitemapLinks = [
  { href: "/#team", icon: <Users className="h-5 w-5" />, name: "Our Team" },
  { href: "/faq", icon: <HelpCircle className="h-5 w-5" />, name: "FAQ" },
  { href: "/feedback", icon: <MessageSquareHeart className="h-5 w-5" />, name: "Customer Feedback" },
  { href: "/services", icon: <Briefcase className="h-5 w-5" />, name: "Services" },
  { href: "/pricing", icon: <DollarSign className="h-5 w-5" />, name: "Pricing" },
  { href: "/#contact", icon: <Mail className="h-5 w-5" />, name: "Contact" },
  { href: "/developers", icon: <Code className="h-5 w-5" />, name: "Developer" },
];

const resourcesLinks = [
  { href: "/ama-recaps", icon: <Repeat className="h-5 w-5" />, name: "AMA Recaps" },
  { href: "/ama-announcements", icon: <Megaphone className="h-5 w-5" />, name: "AMA Announcements" },
];


export function Footer() {
  return (
    <footer className="bg-card/80 border-t-2 mt-12">
      <div className="container mx-auto p-8 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-8 md:mb-0">
            <Logo />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Social Links</h3>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Sitemap</h3>
              <ul className="space-y-3">
                {sitemapLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Resources</h3>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground border-t pt-8">
          © 2025 Crypto Finder Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
