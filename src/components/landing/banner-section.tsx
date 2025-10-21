import Image from "next/image";

const banners = [
  {
    src: "https://i.postimg.cc/KzN6nL2H/Frame-1171276707.png",
    alt: "Banner 1",
  },
  {
    src: "https://i.postimg.cc/W3dK9z7p/Frame-1171276708.png",
    alt: "Banner 2",
  },
  {
    src: "https://i.postimg.cc/mD3m3b5X/Frame-1171276709.png",
    alt: "Banner 3",
  },
  {
    src: "https://i.postimg.cc/26bY9vLp/Frame-1171276710.png",
    alt: "Banner 4",
  },
  {
    src: "https://i.postimg.cc/Kz8D1zC3/Frame-1171276711.png",
    alt: "Banner 5",
  },
  {
    src: "https://i.postimg.cc/SN1KzZ47/Frame-1171276712.png",
    alt: "Banner 6",
  },
];

export function BannerSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          Our <span className="text-primary">Partners</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {banners.map((banner, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={banner.src}
                alt={banner.alt}
                width={150}
                height={75}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
