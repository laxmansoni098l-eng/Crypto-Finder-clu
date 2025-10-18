export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl">
        <span>🐋</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold uppercase tracking-widest text-lg text-foreground">
          WhalesPad
        </span>
        <span className="text-xs uppercase tracking-wider text-primary">
          Wealth Creation Platform
        </span>
      </div>
    </div>
  );
}
