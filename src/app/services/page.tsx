import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Briefcase, Zap, Megaphone, BarChart, Users, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { Providers } from '../providers';

const servicesList = [
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'AMA Sessions',
    description: 'Host engaging text, voice, or video AMAs with our large, active community to generate buzz and answer user questions directly.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Strategic Marketing',
    description: 'Leverage our expertise for comprehensive marketing campaigns, including social media promotion and content creation.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Community Growth',
    description: 'Grow your project\'s community with targeted strategies to attract and retain members who believe in your vision.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Project Incubation',
    description: 'We provide end-to-end support for early-stage projects, from strategy and development to a successful launch.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Trusted Partnerships',
    description: 'Connect with our network of trusted partners, including exchanges, influencers, and other key players in the Web3 space.',
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Custom Packages',
    description: 'We offer tailored promotional packages to meet the unique needs and goals of your project, ensuring maximum impact.',
  },
];

export default function ServicesPage() {
  return (
    <Providers>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Briefcase className="h-12 w-12 mx-auto text-primary mb-4" />
                <h2 className="text-3xl md:text-5xl font-bold uppercase text-foreground">
                  Our <span className="text-primary">Services</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  We offer a comprehensive suite of promotional services to elevate your project's visibility and success in the Web3 ecosystem.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                      <Image 
                          src="https://i.postimg.cc/gcx6Y6Ln/IMG-20251023-070725-658.jpg"
                          alt="Crypto Finder Club Services"
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                      />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {servicesList.slice(0, 4).map((service, index) => (
                      <div key={index} className="p-6 bg-card/80 rounded-xl border-2 border-border/20 transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                          <div className="inline-block p-3 bg-primary/10 text-primary rounded-full mb-4">
                              {service.icon}
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                  ))}
                  </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {servicesList.map((service, index) => (
                  <div key={index} className="p-6 bg-card/80 rounded-xl border-2 border-border/20 flex flex-col text-center items-center transition-all duration-300 hover:border-primary hover:-translate-y-2 hover:shadow-primary">
                    <div className="inline-block p-4 bg-primary/10 text-primary rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
