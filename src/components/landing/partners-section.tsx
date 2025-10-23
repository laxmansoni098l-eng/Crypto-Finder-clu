import Image from "next/image";

const partners = [
  {
    name: "Partner 1",
    logoUrl: "https://i.postimg.cc/85tdq83Q/IMG-20251023-072436.jpg",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 md:py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          Our <span className="text-primary">Partner</span>
        </h2>
        <div className="flex justify-center items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                width={600}
                height={300}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
