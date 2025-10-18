import { Search } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
        <Search className="text-foreground" />
      </div>
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
