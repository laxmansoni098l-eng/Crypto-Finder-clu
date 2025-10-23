import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { PlatformStatusBadges } from '@/components/landing/platform-status-badges';
import { TrendingSection } from '@/components/landing/trending-section';
import { BannerSection } from '@/components/landing/banner-section';
import { AboutSection } from '@/components/landing/about-section';
import { TeamSection } from '@/components/landing/team-section';
import { PartnersSection } from '@/components/landing/partners-section';
import { MobileMockupSection } from '@/components/landing/mobile-mockup-section';
import { ContactSection } from '@/components/landing/contact-section';
import { Providers } from './providers';

export default function Home() {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
          <TrendingSection />
          <PlatformStatusBadges />
          <HeroSection />
          <BannerSection />
          <AboutSection />
          <TeamSection />
          <PartnersSection />
          <MobileMockupSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
