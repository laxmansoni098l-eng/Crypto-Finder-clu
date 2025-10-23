import { Logo } from "@/components/logo";

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50 animate-fade-out" style={{ animationDelay: '2s' }}>
      <div className="animate-spin-slow">
        <Logo />
      </div>
    </div>
  );
}
