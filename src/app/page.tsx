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
import { ExperienceSection } from '@/components/landing/experience-section';
import { FeedbackSection } from '@/components/landing/feedback-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <TrendingSection />
        <PlatformStatusBadges />
        <HeroSection />
        <ExperienceSection />
        <BannerSection />
        <AboutSection />
        <TeamSection />
        <PartnersSection />
        <FeedbackSection />
        <MobileMockupSection />
      </main>
      <Footer />
    </div>
  );
}
