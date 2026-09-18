import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingDown, TrendingUp, DollarSign, Clock } from "lucide-react";

export function ROISection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-t border-hairline bg-surface-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ink-muted">
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
            THE BUSINESS CASE
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
          </p>
          <h2 className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl">
            More pipeline.
            <br />
            Fraction of the cost.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Traditional SDR */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-hairline bg-canvas p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-ink">Traditional SDR</h3>
              <span className="rounded-full bg-ink-subtle/10 px-3 py-1 text-xs font-medium text-ink-muted">
                Status Quo
              </span>
            </div>
            
            <div className="mb-8">
              <p className="font-mono text-5xl font-semibold tracking-tight text-ink">
                $180<span className="text-xl text-ink-muted">/meeting</span>
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <DollarSign className="mt-0.5 h-4 w-4 shrink-0 text-semantic-warning" />
                <span>$80,000+ base salary, commission, and software seats.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-semantic-warning" />
                <span>3-5 months to ramp to full quota capacity.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-semantic-warning" />
                <span>High turnover (average 14-month tenure).</span>
              </li>
            </ul>
          </motion.div>

          {/* Hormozi X */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-xl border-2 border-ai-orange bg-surface-card p-8 shadow-[0_8px_32px_-16px_rgba(255,86,0,0.15)]"
          >
            <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-ai-orange/10 blur-3xl" />
            
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-ink">Hormozi X</h3>
              <span className="rounded-full bg-ai-orange/10 px-3 py-1 text-xs font-medium text-ai-orange">
                Autonomous SDR
              </span>
            </div>
            
            <div className="mb-8">
              <p className="font-mono text-5xl font-semibold tracking-tight text-ai-orange">
                $38<span className="text-xl text-ink-muted">/meeting</span>
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-semantic-success" />
                <span className="font-medium text-ink">79% cost reduction</span>
                <span className="ml-[-8px]"> compared to human SDRs.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-semantic-success" />
                <span>Zero ramp time. Generating pipeline on day one.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-muted">
                <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-semantic-success" />
                <span>Infinite scalability without adding headcount.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
