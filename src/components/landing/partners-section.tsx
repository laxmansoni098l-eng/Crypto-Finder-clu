import Image from "next/image";

const partners = [
  {
    name: "Partner 1",
    logoUrl: "https://i.postimg.cc/DyWmTVDm/1761183628117.png",
  },
  {
    name: "Partner 2",
    logoUrl: "https://i.postimg.cc/DyWmTVDm/1761183628117.png",
  },
  {
    name: "Partner 3",
    logoUrl: "https://i.postimg.cc/DyWmTVDm/1761183628117.png",
  },
  {
    name: "Partner 4",
    logoUrl: "https://i.postimg.cc/DyWmTVDm/1761183628117.png",
  },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 md:py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          Our <span className="text-primary">Partners</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={partner.logoUrl}
                alt={partner.name}
                width={150}
                height={75}
                className="object-contain filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
