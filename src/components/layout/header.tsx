"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4 md:px-6 border-b-2 border-primary">
        <Logo />

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-primary/20">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                 <Logo />
                 {/* Navigation links can be added here */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
