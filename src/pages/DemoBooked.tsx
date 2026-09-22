import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationState {
  name?: string;
  email?: string;
}

const TIMELINE_STEPS = [
  {
    icon: Mail,
    title: "Confirmation email sent",
    description:
      "Check your inbox for a confirmation with next steps and a calendar invite link.",
    timing: "Within minutes",
  },
  {
    icon: Calendar,
    title: "We'll reach out to schedule",
    description:
      "A team member will email you within one business day to find a time that works.",
    timing: "Within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "30-minute discovery call",
    description:
      "We'll walk through the platform, discuss your ICP, and model your projected pipeline.",
    timing: "At your convenience",
  },
];

export function DemoBooked() {
  const location = useLocation();
  const state = (location.state as LocationState) || {};

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-canvas px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        {/* Success icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-semantic-success/20 bg-semantic-success/10"
        >
          <CheckCircle2 className="h-10 w-10 text-semantic-success" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-[44px]">
            You're all set
            {state.name ? `, ${state.name.split(" ")[0]}` : ""}!
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Your demo request has been received.
            {state.email && (
              <>
                {" "}
                We'll send a confirmation to{" "}
                <span className="font-medium text-ink">{state.email}</span>.
              </>
            )}
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-12 max-w-md"
        >
          <h2 className="mb-6 text-lg font-semibold text-ink">
            What happens next
          </h2>

          <div className="space-y-0">
            {TIMELINE_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative flex gap-4 pb-8">
                  {/* Vertical connector line */}
                  {i < TIMELINE_STEPS.length - 1 && (
                    <div
                      className="absolute left-[19px] top-[44px] h-[calc(100%-28px)] w-px bg-hairline"
                      aria-hidden="true"
                    />
                  )}

                  {/* Step icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-surface-card">
                    <Icon className="h-4.5 w-4.5 text-ink-muted" />
                  </div>

                  {/* Step content */}
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-medium text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">
                      {step.description}
                    </p>
                    <span className="mt-1.5 inline-block rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] text-ink-subtle">
                      {step.timing}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            className="h-11 cursor-pointer rounded-md border border-ink bg-ink px-6 text-[14px] font-medium text-white shadow-sm transition-all hover:bg-ink/90"
          >
            <Link to="/" className="flex items-center gap-2">
              Back to Home
              <ArrowRight className="h-4 w-4 opacity-80" />
            </Link>
          </Button>

          <a
            href="mailto:hello@hormozix.ai"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-muted transition-colors hover:text-ink"
          >
            <Mail className="h-4 w-4" />
            Have questions? Email us
          </a>
        </motion.div>
      </div>
    </main>
  );
}
