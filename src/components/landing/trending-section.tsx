import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";

export function TrendingSection() {
  return (
    <section className="py-6 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2">
                <Flame className="h-6 w-6 text-primary" />
                <span className="font-bold text-base uppercase tracking-wider text-foreground">Trending</span>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm cursor-pointer hover:bg-primary/20 transition-colors w-fit">
                <Badge className="bg-orange-500/20 text-orange-400 border-none px-2.5">#1</Badge>
                <span className="font-bold text-foreground">WPT</span>
                <Flame className="h-5 w-5 text-orange-400"/>
                <Badge className="bg-primary/20 text-green-400 border-none uppercase px-2.5">Trending</Badge>
            </div>
        </div>
      </div>
    </section>
  );
}
