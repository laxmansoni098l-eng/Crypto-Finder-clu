import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/landing/hero-section';
import { PlatformStatusBadges } from '@/components/landing/platform-status-badges';
import { TrendingSection } from '@/components/landing/trending-section';
import dynamic from 'next/dynamic';

const BannerSection = dynamic(() => import('@/components/landing/banner-section').then(mod => mod.BannerSection));
const AboutSection = dynamic(() => import('@/components/landing/about-section').then(mod => mod.AboutSection));
const TeamSection = dynamic(() => import('@/components/landing/team-section').then(mod => mod.TeamSection));
const PartnersSection = dynamic(() => import('@/components/landing/partners-section').then(mod => mod.PartnersSection));
const MobileMockupSection = dynamic(() => import('@/components/landing/mobile-mockup-section').then(mod => mod.MobileMockupSection));
const ContactSection = dynamic(() => import('@/components/landing/contact-section').then(mod => mod.ContactSection));


export default function Home() {
  return (
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
  );
}
