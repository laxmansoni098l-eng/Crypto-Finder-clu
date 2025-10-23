import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { PlatformStatusBadges } from '@/components/landing/platform-status-badges';
import { TrendingSection } from '@/components/landing/trending-section';
import { TeamSection } from '@/components/landing/team-section';
import { BannerSection } from '@/components/landing/banner-section';
import { AboutSection } from '@/components/landing/about-section';
import { ContactSection } from '@/components/landing/contact-section';
import { PartnersSection } from '@/components/landing/partners-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <TrendingSection />
        <PlatformStatusBadges />
        <HeroSection />
        <AboutSection />
        <PartnersSection />
        <TeamSection />
        <BannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
