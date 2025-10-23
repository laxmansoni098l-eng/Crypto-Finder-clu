import { Logo } from "./logo";

export function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Logo />
        </div>
      </div>
    </div>
  );
}
