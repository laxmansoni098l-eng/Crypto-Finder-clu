import Image from "next/image";

export function BannerSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 uppercase text-foreground">
          PREVIOUS <span className="text-primary">WORK</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
            <Image
              src="https://i.postimg.cc/63NXQhTz/IMG-20251021-123741-831.jpg"
              alt="Previous work banner"
              width={600}
              height={300}
              className="object-contain rounded-lg"
            />
            <Image
              src="https://i.postimg.cc/Pxzkv88Q/IMG-20251021-123742-104.jpg"
              alt="Previous work banner 2"
              width={600}
              height={300}
              className="object-contain rounded-lg"
            />
        </div>
      </div>
    </section>
  );
}
