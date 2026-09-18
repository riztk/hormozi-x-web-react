import { useRef } from "react";
import {
  Database,
  FileText,
  Sparkles,
  Send,
  Search,
  FlaskConical,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { motion, useInView } from "motion/react";

interface FlowStep {
  icon: React.ElementType;
  label: string;
  description: string;
}

const TRADITIONAL_STEPS: FlowStep[] = [
  { icon: Database, label: "Cached database snapshot", description: "High bounce rates from stale data." },
  { icon: FileText, label: "Template merge variables", description: "Generic, robotic personalization." },
  { icon: Sparkles, label: "Black-box agent output", description: "No way to verify claims before sending." },
  { icon: Send, label: "Binary on/off control", description: "Zero human oversight once launched." },
];

const HORMOZI_STEPS: FlowStep[] = [
  { icon: Search, label: "Verify at point of outreach", description: "Zero bounces. Real-time data." },
  { icon: FlaskConical, label: "Grounded generation", description: "Unique outreach built from evidence." },
  { icon: ShieldCheck, label: "Mandatory citations", description: "Every claim links back to a source." },
  { icon: SlidersHorizontal, label: "Graduated autonomy", description: "Take over at any stage." },
];

export function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="comparison"
      aria-labelledby="comparison-heading"
      className="border-t border-hairline bg-canvas px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ink-muted">
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
            NOT ANOTHER AI EMAIL WRITER
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
          </p>
          <h2
            id="comparison-heading"
            className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl"
          >
            Writing emails is
            <br />
            the easy part.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            The hard part is knowing who to contact, why now, what to say, and
            when a human should take over.
          </p>
        </div>

        {/* Comparison columns */}
        <div className="grid gap-5 md:grid-cols-2">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-xl border border-hairline bg-surface-card p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-canvas text-[10px] font-bold text-ink-subtle">
                ×
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
                Traditional AI Outreach
              </span>
            </div>

            <div className="space-y-0">
              {TRADITIONAL_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label}>
                    <div className="flex items-start gap-3 py-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-canvas text-ink-subtle mt-0.5">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink-muted">{step.label}</p>
                        <p className="text-xs text-ink-tertiary mt-0.5">{step.description}</p>
                      </div>
                    </div>
                    {i < TRADITIONAL_STEPS.length - 1 && (
                      <div className="ml-[18px] h-4 w-px bg-hairline" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-lg border border-hairline bg-canvas/60 p-3">
              <p className="text-[11px] font-mono leading-relaxed text-ink-subtle">
                Result: Generic templates sent to stale lists. Low reply rates,
                high bounce, burned domains.
              </p>
            </div>
          </motion.div>

          {/* Hormozi X */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="rounded-xl border-2 border-ink bg-surface-card p-6 shadow-sm sm:p-8"
          >
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-[10px] font-bold text-white">
                ✓
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-ink">
                Hormozi X
              </span>
            </div>

            <div className="space-y-0">
              {HORMOZI_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: 8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + i * 0.06,
                    }}
                  >
                    <div className="flex items-start gap-3 py-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-canvas text-ink mt-0.5">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink">{step.label}</p>
                        <p className="text-xs text-ink-muted mt-0.5">{step.description}</p>
                      </div>
                    </div>
                    {i < HORMOZI_STEPS.length - 1 && (
                      <div className="ml-[18px] h-4 w-px bg-ai-orange/30" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-lg border border-semantic-success/20 bg-semantic-success/5 p-3">
              <p className="text-[11px] font-mono leading-relaxed text-ink">
                Result: Evidence-backed conversations with verified prospects.
                Higher reply rates, protected domains, booked meetings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
