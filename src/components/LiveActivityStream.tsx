import { useEffect, useRef, useState } from "react";
import { Check, CalendarCheck } from "lucide-react";
import { motion, useInView } from "motion/react";

interface ActivityEntry {
  time: string;
  text: string;
  type: "research" | "verify" | "generate" | "policy" | "schedule" | "reply" | "meeting";
}

const STREAM_A: ActivityEntry[] = [
  { time: "13:41:08", text: "Found new hiring signal at Acme Corp.", type: "research" },
  { time: "13:41:12", text: "Identified VP Engineering as decision maker.", type: "research" },
  { time: "13:41:18", text: "Verified email address via multi-vendor waterfall.", type: "verify" },
  { time: "13:41:23", text: "Found 3 relevant research signals.", type: "research" },
  { time: "13:41:31", text: "Generated personalized opening.", type: "generate" },
  { time: "13:41:34", text: "Evidence check passed.", type: "policy" },
  { time: "13:41:36", text: "Message approved by campaign policy.", type: "policy" },
  { time: "13:41:38", text: "Scheduled for 10:17 AM prospect local time.", type: "schedule" },
];

const STREAM_B: ActivityEntry[] = [
  { time: "13:44:02", text: "Reply received from Acme Corp.", type: "reply" },
  { time: "13:44:03", text: "Intent classified: Interested (97% confidence).", type: "verify" },
  { time: "13:44:05", text: "Qualification criteria met.", type: "policy" },
  { time: "13:44:07", text: "Meeting availability retrieved from calendar.", type: "meeting" },
  { time: "13:44:09", text: "Meeting booked — Thu 2:00 PM.", type: "meeting" },
];

function useStreamAnimation(
  entries: ActivityEntry[],
  isInView: boolean,
  isPaused: boolean,
  delay: number
) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!isInView || isPaused) return;

    if (visibleCount >= entries.length) {
      // Reset after a pause to loop
      const resetTimer = window.setTimeout(() => setVisibleCount(0), 3000);
      return () => window.clearTimeout(resetTimer);
    }

    const timer = window.setTimeout(
      () => setVisibleCount((c) => c + 1),
      visibleCount === 0 ? delay : 400 + Math.random() * 300
    );
    return () => window.clearTimeout(timer);
  }, [isInView, isPaused, visibleCount, entries.length, delay]);

  return visibleCount;
}

export function LiveActivityStream() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);

  const visibleA = useStreamAnimation(STREAM_A, isInView, isPaused, 600);
  const visibleB = useStreamAnimation(STREAM_B, isInView, isPaused, STREAM_A.length * 500 + 1200);

  return (
    <section
      ref={ref}
      id="live-stream"
      aria-labelledby="stream-heading"
      className="border-t border-hairline bg-surface-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end sm:mb-16">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wide text-ink-muted">
              <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
              ALWAYS ON
            </p>
            <h2
              id="stream-heading"
              className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl"
            >
              Your outbound motion
              <br />
              doesn&apos;t sleep.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            Watch the AI SDR work — researching, verifying, writing, and booking
            around the clock.
          </p>
        </div>

        {/* Stream card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-[0_8px_32px_-16px_rgba(0,0,0,0.10)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5 sm:px-8">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ai-orange opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ai-orange" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink">
                AI SDR Active
              </span>
            </div>
            <span className="rounded-full border border-hairline px-2.5 py-1 text-[10px] font-mono text-ink-subtle">
              {isPaused ? "Paused on hover" : "Simulated activity"}
            </span>
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Stream A — Outbound */}
            <div className="border-b border-hairline px-5 py-6 sm:px-8 lg:border-b-0 lg:border-r">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-subtle">
                Outbound Execution
              </p>
              <div className="space-y-1 min-h-[280px]">
                {STREAM_A.map((entry, i) => (
                  <StreamEntry
                    key={`a-${entry.time}`}
                    entry={entry}
                    visible={i < visibleA}
                  />
                ))}
              </div>
            </div>

            {/* Stream B — Reply handling */}
            <div className="px-5 py-6 sm:px-8">
              <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-subtle">
                Reply Handling
              </p>
              <div className="space-y-1 min-h-[280px]">
                {STREAM_B.map((entry, i) => (
                  <StreamEntry
                    key={`b-${entry.time}`}
                    entry={entry}
                    visible={i < visibleB}
                    isMeeting={entry.type === "meeting" && i === STREAM_B.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-hairline bg-canvas/40 px-5 py-3 sm:px-8">
            <p className="text-center font-mono text-[10px] text-ink-subtle">
              Simulated workflow · Hover to pause · Demonstrates the autonomous SDR loop
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StreamEntry({
  entry,
  visible,
  isMeeting = false,
}: {
  entry: ActivityEntry;
  visible: boolean;
  isMeeting?: boolean;
}) {
  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-start gap-3 rounded-md px-2.5 py-2 ${
        isMeeting ? "bg-semantic-success/5 border border-semantic-success/20" : ""
      }`}
    >
      <span className="mt-0.5 shrink-0 font-mono text-[11px] text-ink-tertiary">
        {entry.time}
      </span>
      <div className="flex items-start gap-1.5">
        {isMeeting ? (
          <CalendarCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-semantic-success" />
        ) : (
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-semantic-success" />
        )}
        <span
          className={`text-[13px] leading-relaxed ${isMeeting ? "font-semibold text-ink" : "text-ink-muted"}`}
        >
          {entry.text}
        </span>
      </div>
    </motion.div>
  );
}
