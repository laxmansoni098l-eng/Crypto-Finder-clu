import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/landing/hero-section';
import { PlatformStatusBadges } from '@/components/landing/platform-status-badges';
import { TrendingSection } from '@/components/landing/trending-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <TrendingSection />
        <PlatformStatusBadges />
        <HeroSection />
      </main>
    </div>
  );
}
