import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://i.postimg.cc/Hn0Y4h8y/IMG-20251021-125029-936.jpg"
        alt="Crypto Finder Club Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold uppercase tracking-widest text-lg text-foreground">
          Crypto Finder Club
        </span>
        <span className="text-xs uppercase tracking-wider text-primary">
          Find The Next Gem
        </span>
      </div>
    </div>
  );
}
