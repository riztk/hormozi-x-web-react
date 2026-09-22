import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "How it works", href: "/#pipeline" },
    { label: "Deliverability", href: "/#evidence" },
    { label: "Autonomy", href: "/#autonomy" },
    { label: "Trust", href: "/#enterprise-trust" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-surface-card/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="group flex items-center gap-2.5 rounded-md p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ai-orange"
            aria-label="Hormozi X Home"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-surface-card text-ink shadow-2xs transition-colors group-hover:border-ink">
              <span className="font-mono text-xs font-bold tracking-tight">
                HX
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[17px] font-semibold tracking-tight text-ink">
                Hormozi{" "}
                <span className="text-[18px] font-bold text-ink">X</span>
              </span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            asChild
            className="h-9 cursor-pointer rounded-md border border-ink bg-ink px-4 text-[14px] font-medium text-white shadow-xs transition-all hover:bg-ink/90 active:bg-ink"
          >
            <Link to="/demo" className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-ai-orange" />
              <span>Book a Demo</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2.5 md:hidden">
          <Button
            asChild
            size="sm"
            className="h-8 cursor-pointer rounded-md bg-ink px-3 text-[13px] font-medium text-white shadow-xs hover:bg-ink/90"
          >
            <Link to="/demo" className="flex items-center gap-1.5">
              <Sparkles className="h-3 w-3 text-ai-orange" />
              <span>Demo</span>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 min-h-[44px] min-w-[44px] rounded-md border border-hairline bg-surface-card text-ink hover:bg-canvas"
                aria-label="Open Navigation Menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm border-l border-hairline bg-canvas p-6 text-ink"
            >
              <SheetHeader className="text-left pb-4 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline bg-surface-card font-mono text-xs font-bold">
                    HX
                  </div>
                  <SheetTitle className="text-base font-semibold text-ink">
                    Hormozi X Platform
                  </SheetTitle>
                </div>
              </SheetHeader>

              <nav className="flex flex-col gap-1 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-ink hover:bg-surface-card transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 text-ink-tertiary" />
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-4 pt-6 border-t border-hairline">
                <div className="rounded-xl border border-hairline bg-surface-card p-3.5 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 font-semibold text-ink">
                    <ShieldCheck className="h-4 w-4 text-semantic-success" />
                    <span>Deliverability Guarantee</span>
                  </div>
                  <p className="text-ink-muted text-[11px] leading-relaxed">
                    Zero hallucinations. Verified-at-send emails with &lt;2%
                    bounce shield.
                  </p>
                </div>

                <Button
                  asChild
                  className="h-11 w-full min-h-[44px] cursor-pointer rounded-lg bg-ink text-sm font-medium text-white hover:bg-ink/90"
                >
                  <Link
                    to="/demo"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Zap className="h-4 w-4 text-ai-orange" />
                    <span>Book a Demo</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
