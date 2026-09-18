import { useRef } from "react";
import {
  Mail,
  ShieldAlert,
  ShieldCheck,
  ServerCrash,
} from "lucide-react";
import { motion, useInView } from "motion/react";

const DELIVERABILITY_FEATURES = [
  {
    icon: Mail,
    title: "Verify at Point-of-Send",
    description: "Cached databases have a 20% bounce rate. We verify MX records and SMTP connections milliseconds before every send.",
    metric: "< 2%",
    metricLabel: "Bounce rate guarantee",
  },
  {
    icon: ShieldAlert,
    title: "Spam Trap Avoidance",
    description: "We cross-reference every prospect against a dynamic list of known spam traps and honeypots before outreach begins.",
    metric: "0",
    metricLabel: "Spam traps hit",
  },
  {
    icon: ServerCrash,
    title: "Volume Caps & Warmup",
    description: "Sending 1,000 emails on day one burns your domain. We algorithmically ramp volume to protect your sender reputation.",
    metric: "100%",
    metricLabel: "Automated warmup",
  },
];

export function EvidenceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="evidence"
      aria-labelledby="deliverability-heading"
      className="border-t border-hairline bg-surface-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wide text-ink-muted">
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
            DELIVERABILITY IS A FEATURE
          </p>
          <h2
            id="deliverability-heading"
            className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl"
          >
            If it lands in spam,
            <br />
            it doesn't exist.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Your domain reputation is your most valuable asset. Hormozi X protects it with enterprise-grade deliverability infrastructure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {DELIVERABILITY_FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="flex flex-col justify-between overflow-hidden rounded-xl border border-hairline bg-canvas p-6 sm:p-8"
              >
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-hairline bg-surface-card text-ink">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-8 border-t border-hairline pt-5">
                  <div className="flex items-end gap-3">
                    <span className="font-mono text-3xl font-semibold tracking-tight text-ai-orange">
                      {feature.metric}
                    </span>
                    <span className="mb-1 text-xs font-medium uppercase tracking-wide text-ink-subtle">
                      {feature.metricLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deliverability Shield Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-semantic-success/20 bg-semantic-success/5 px-6 py-5 sm:px-8"
        >
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-8 w-8 text-semantic-success" />
            <div>
              <h4 className="text-sm font-semibold text-ink">Deliverability Guarantee</h4>
              <p className="text-xs text-ink-muted mt-0.5">We monitor your mailbox health 24/7. If bounce rates spike, campaigns pause automatically.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
