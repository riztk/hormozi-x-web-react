import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface-card pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-hairline">
          <div className="md:col-span-5 space-y-4 max-w-md">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline bg-canvas text-ink shadow-2xs">
                <span className="font-mono text-xs font-bold">HX</span>
              </div>
              <span className="text-base font-semibold tracking-tight text-ink">
                Hormozi<span className="font-bold text-ink">X</span>
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-ink-muted">
              The autonomous digital SDR platform for modern B2B revenue teams.
              Turns your offer into researched target accounts,
              evidence-grounded outreach, and qualified meetings.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-ink-subtle">
              Product
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px] font-medium text-ink-muted">
              <a
                href="/#pipeline"
                className="hover:text-ink transition-colors"
              >
                Pipeline Workflow
              </a>
              <a href="/#evidence" className="hover:text-ink transition-colors">
                Deliverability
              </a>
              <a href="/#autonomy" className="hover:text-ink transition-colors">
                Graduated Autonomy
              </a>
              <a href="/#enterprise-trust" className="hover:text-ink transition-colors">
                Enterprise Trust
              </a>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-ink-subtle">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px] font-medium text-ink-muted">
              <Link
                to="/legal/privacy"
                className="hover:text-ink transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/legal/terms"
                className="hover:text-ink transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/legal/dpa"
                className="hover:text-ink transition-colors"
              >
                DPA
              </Link>
              <Link
                to="/legal/subprocessors"
                className="hover:text-ink transition-colors"
              >
                Sub-processors
              </Link>
              <Link
                to="/legal/acceptable-use"
                className="hover:text-ink transition-colors"
              >
                Acceptable Use
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-ink-subtle">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px] font-medium text-ink-muted">
              <a
                href="mailto:hello@hormozix.ai"
                className="hover:text-ink transition-colors"
              >
                Contact Us
              </a>
              <Link
                to="/demo"
                className="inline-flex items-center gap-1.5 font-semibold text-ai-orange hover:underline transition-colors mt-1"
              >
                <Sparkles className="h-3 w-3" />
                <span>Book a Demo</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-subtle">
          <p>
            © {new Date().getFullYear()} Hormozi X Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-ink-subtle">
            <ShieldCheck className="h-3.5 w-3.5 text-semantic-success" />
            <span>Enterprise Security & Privacy Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
