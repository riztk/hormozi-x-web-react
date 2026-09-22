import { useRef, useState } from "react";
import {
  FileEdit,
  CheckSquare,
  Zap,
  MessageCircle,
  HelpCircle,
  Clock,
  XCircle,
  AlertTriangle,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";

type AutonomyMode = "draft" | "approval" | "autonomous";

interface ModeInfo {
  label: string;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const MODES: Record<AutonomyMode, ModeInfo> = {
  draft: {
    label: "Draft",
    icon: FileEdit,
    title: "AI suggests. Human sends.",
    description:
      "Every message is drafted by the AI and placed in your review queue. Nothing leaves without your explicit approval.",
    details: [
      "Full visibility into research and reasoning",
      "Edit any message before it sends",
      "Best for onboarding and testing",
    ],
  },
  approval: {
    label: "Approval",
    icon: CheckSquare,
    title: "AI prepares. Human approves.",
    description:
      "The AI queues outreach batches for one-click approval. Review a summary, approve the batch, and the system handles timing and delivery.",
    details: [
      "Batch approval for efficiency",
      "Policy guardrails auto-enforce limits",
      "Best for teams ramping up confidence",
    ],
  },
  autonomous: {
    label: "Autonomous",
    icon: Zap,
    title: "AI executes. Within your limits.",
    description:
      "The AI runs outreach end-to-end within the boundaries you define — daily volume caps, approved topics, escalation triggers, and domain safety rules.",
    details: [
      "Human-defined safety limits enforced",
      "Automatic escalation for pricing or competitors",
      "Best for proven campaigns with measured accuracy",
    ],
  },
};

const MODE_ORDER: AutonomyMode[] = ["draft", "approval", "autonomous"];

interface ReplyRoute {
  icon: React.ElementType;
  reply: string;
  action: string;
  isEscalation: boolean;
}

const REPLY_ROUTES: ReplyRoute[] = [
  { icon: MessageCircle, reply: "Interested", action: "Continue conversation", isEscalation: false },
  { icon: HelpCircle, reply: "Question", action: "Answer from knowledge base", isEscalation: false },
  { icon: Clock, reply: "Out of office", action: "Reschedule automatically", isEscalation: false },
  { icon: XCircle, reply: "Opt-out", action: "Instant workspace-wide suppression", isEscalation: false },
  { icon: AlertTriangle, reply: "Pricing mentioned", action: "Human takeover", isEscalation: true },
];

export function AutonomySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeMode, setActiveMode] = useState<AutonomyMode>("approval");

  const modeIndex = MODE_ORDER.indexOf(activeMode);
  const sliderPercent = (modeIndex / (MODE_ORDER.length - 1)) * 100;
  const info = MODES[activeMode];
  const ActiveIcon = info.icon;

  return (
    <section
      ref={ref}
      id="autonomy"
      aria-labelledby="autonomy-heading"
      className="border-t border-hairline bg-surface-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ink-muted">
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
            GRADUATED AUTONOMY
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
          </p>
          <h2
            id="autonomy-heading"
            className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl"
          >
            Autonomy is a dial,
            <br />
            not a switch.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Start with drafts. Earn trust through measured accuracy. Graduate to full autonomy
            when you&apos;re ready.
          </p>
        </div>

        {/* Autonomy dial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-[0_8px_32px_-16px_rgba(0,0,0,0.10)]"
        >
          {/* Slider track */}
          <div className="px-6 pt-8 pb-4 sm:px-10 sm:pt-10">
            <div className="mb-2 flex items-center justify-between text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-subtle">
              <span>Human control</span>
              <span>AI autonomy</span>
            </div>

            {/* Track */}
            <div className="relative mx-auto h-2 rounded-full bg-canvas border border-hairline">
              {/* Filled portion */}
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-ink-subtle via-ai-orange/70 to-ai-orange"
                animate={{ width: `${sliderPercent}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {/* Handle */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-ai-orange bg-surface-card shadow-md"
                animate={{ left: `${sliderPercent}%`, x: "-50%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Mode buttons */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {MODE_ORDER.map((mode) => {
                const m = MODES[mode];
                const Icon = m.icon;
                const isActive = activeMode === mode;

                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`flex min-h-[44px] cursor-pointer flex-col items-center gap-1.5 rounded-lg px-3 py-3 text-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-orange ${
                      isActive
                        ? "bg-ink text-white"
                        : "bg-canvas text-ink-muted hover:bg-surface-subtle hover:text-ink"
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs font-semibold">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mode detail */}
          <div className="border-t border-hairline px-6 py-6 sm:px-10 sm:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMode}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ai-orange-soft text-ai-orange">
                    <ActiveIcon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-ink">
                    {info.title}
                  </h3>
                </div>
                <p className="mb-4 max-w-xl text-sm leading-relaxed text-ink-muted">
                  {info.description}
                </p>
                <ul className="space-y-2">
                  {info.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <ArrowRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ai-orange"
                        aria-hidden="true"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Human takeover — reply routing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl border border-hairline bg-surface-card p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-canvas border border-hairline">
              <UserCheck className="h-4 w-4 text-ink" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-ink">
                The AI owns the workflow. Your team owns the relationship.
              </h3>
              <p className="text-xs text-ink-muted mt-0.5">
                Every reply is classified and routed — complex cases always reach a human.
              </p>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {REPLY_ROUTES.map((route, i) => {
              const Icon = route.icon;
              return (
                <motion.div
                  key={route.reply}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.45 + i * 0.06 }}
                  className={`rounded-lg border p-3.5 ${
                    route.isEscalation
                      ? "border-ai-orange/30 bg-ai-orange-soft/30"
                      : "border-hairline bg-canvas/60"
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Icon
                      className={`h-3.5 w-3.5 ${route.isEscalation ? "text-ai-orange" : "text-ink-subtle"}`}
                      aria-hidden="true"
                    />
                    <span className="text-xs font-semibold text-ink">
                      {route.reply}
                    </span>
                  </div>
                  <p
                    className={`text-[11px] leading-relaxed ${route.isEscalation ? "font-semibold text-ai-orange" : "text-ink-muted"}`}
                  >
                    → {route.action}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
