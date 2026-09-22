import { useRef } from "react";
import {
  ShieldCheck,
  FileSearch,
  Gauge,
  UserCheck,
  Lock,
} from "lucide-react";
import { motion, useInView } from "motion/react";

interface TrustCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TRUST_CARDS: TrustCard[] = [
  {
    icon: ShieldCheck,
    title: "Customer Data Isolation",
    description:
      "Dedicated encryption keys and strict multi-tenant isolation. Zero cross-account data leakage.",
  },
  {
    icon: FileSearch,
    title: "7-Year Audit Log",
    description:
      "Every automated action is logged and reconstructable. Append-only audit log retained for 7 years.",
  },
  {
    icon: UserCheck,
    title: "RBAC & SCIM",
    description:
      "Enterprise role-based access control and SCIM provisioning. Set granular limits across teams and senders.",
  },
  {
    icon: Gauge,
    title: "99.9% Uptime SLA",
    description:
      "High-availability enterprise cloud infrastructure with continuous failover and redundant backup systems.",
  },
  {
    icon: Lock,
    title: "VPC-Deployable",
    description:
      "Available as dedicated cloud instances or single-tenant VPC deployments for strict data residency compliance.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II Ready",
    description:
      "AES-256 encryption at rest, TLS 1.3 in transit. Built to strict SOC 2 Type II compliance standards.",
  },
];

export function EnterpriseTrustSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="enterprise-trust"
      aria-labelledby="trust-heading"
      className="border-t border-hairline bg-canvas px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ink-muted">
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
            ENTERPRISE CONTROL
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
          </p>
          <h2
            id="trust-heading"
            className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl"
          >
            Autonomous doesn&apos;t mean
            <br />
            uncontrolled.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Enterprise-grade security, governance, and audit controls built into
            every layer of the platform.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + i * 0.07,
                  ease: "easeOut",
                }}
                className="group rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-ink-tertiary"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-canvas text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
