export function PlatformStatusBadges() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
          
          <div className="flex items-center gap-4 rounded-xl border border-green-400/30 bg-green-500/10 p-4 md:p-5">
            <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_8px_hsl(148,100%,50%)] animate-pulse"></div>
            <span className="font-bold uppercase tracking-wider text-green-400">
              Platform Live & Secured
            </span>
          </div>

          <div className="flex items-center gap-4 rounded-xl border border-yellow-400/30 bg-yellow-500/10 p-4 md:p-5">
            <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_hsl(45,100%,50%)]"></div>
            <span className="font-bold uppercase tracking-wider text-yellow-400">
              ⭐ Top Rated Platform
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
