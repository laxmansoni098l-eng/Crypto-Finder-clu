"use client";

import { useState, useEffect } from 'react';
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
import { Loader } from '@/components/loader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
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
