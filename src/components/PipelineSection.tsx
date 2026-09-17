import { useState, useEffect } from "react";
import {
  Search,
  Globe,
  Mail,
  Calendar,
  Clock,
  Pencil,
  FileText,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Scenario {
  id: string;
  category: string;
  prompt: string;
  prospect: string;
  role: string;
  company: string;
  industry: string;
  signalSource: string;
  signalAge: string;
  signalSnippet: string;
  extractedFact: string;
  confidence: number;
  emailSubject: string;
  emailPreview: string;
  highlightedQuote: string;
  meetingTitle: string;
  meetingTime: string;
  meetingDay: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "cornerstone",
    category: "1",
    prompt:
      "Property management companies with 50+ units still tracking maintenance requests and leases on spreadsheets",
    prospect: "Rachel Kim",
    role: "Director of Operations",
    company: "Cornerstone Properties",
    industry: "Property Management",
    signalSource: "LinkedIn Post",
    signalAge: "5 days ago",
    signalSnippet:
      "Managing 200+ units across three buildings and our team is buried in spreadsheets. Maintenance requests fall through the cracks constantly. There has to be a better way…",
    extractedFact:
      "Managing 200+ units with manual spreadsheet systems, actively seeking a solution",
    confidence: 99.1,
    emailSubject: "Fixing Cornerstone's maintenance request chaos",
    emailPreview:
      "Hi Rachel — saw your post about managing 200+ units and losing track of maintenance requests in spreadsheets. We built a platform specifically to fix that — automated workflows, tenant portals, and real-time tracking from one dashboard. Worth a quick look?",
    highlightedQuote: "buried in spreadsheets",
    meetingTitle: "Product Walkthrough",
    meetingTime: "10:00 AM",
    meetingDay: "Wednesday",
  },
  {
    id: "petal",
    category: "2",
    prompt:
      "E-commerce brands doing $1M+ a year that want to open up wholesale and retail partnerships",
    prospect: "Maya Torres",
    role: "Founder & CEO",
    company: "Petal & Co",
    industry: "Consumer Goods",
    signalSource: "LinkedIn Post",
    signalAge: "4 days ago",
    signalSnippet:
      "We've maxed out our DTC channel. Looking to break into wholesale this year — any founders who've done this successfully?",
    extractedFact:
      "Actively exploring wholesale partnerships after maxing DTC channel",
    confidence: 98.6,
    emailSubject: "Helping Petal & Co land wholesale accounts",
    emailPreview:
      "Hi Maya — saw your post about breaking into wholesale after maxing out DTC. We help product brands like yours book meetings with buyers at major retail chains automatically. Happy to show you how it works for a brand your size.",
    highlightedQuote: "Looking to break into wholesale this year",
    meetingTitle: "Discovery Call",
    meetingTime: "11:00 AM",
    meetingDay: "Tuesday",
  },
  {
    id: "meridian",
    category: "3",
    prompt:
      "Marketing or creative agencies billing over $30k/month that want to land bigger retainer clients",
    prospect: "James Park",
    role: "Founder",
    company: "Meridian Digital",
    industry: "Digital Marketing",
    signalSource: "Podcast Interview",
    signalAge: "6 days ago",
    signalSnippet:
      "James mentioned they've been relying entirely on referrals and want to build a real outbound channel to land $20k+ monthly retainers…",
    extractedFact:
      "Wants to move beyond referrals to land larger retainer clients via outbound",
    confidence: 99.7,
    emailSubject: "Building Meridian's outbound for $20k+ retainers",
    emailPreview:
      "Hi James — caught your interview where you mentioned wanting to break past referrals to land bigger retainers. We run automated outbound specifically for agencies targeting enterprise-tier clients. Would love to show you a live demo.",
    highlightedQuote: "relying entirely on referrals",
    meetingTitle: "Strategy Call",
    meetingTime: "3:30 PM",
    meetingDay: "Friday",
  },
];

const AnimatedBeam = ({ delay = 0 }: { delay?: number }) => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <svg width="90%" height="2" className="overflow-visible">
      <line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke="var(--color-hairline)"
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      <motion.circle
        cx="0%"
        cy="1"
        r="4"
        fill="var(--color-ai-orange)"
        style={{ filter: "drop-shadow(0 0 6px var(--color-ai-orange))" }}
        initial={{ cx: "0%" }}
        animate={{ cx: "100%" }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
    </svg>
  </div>
);

export function PipelineSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const scenario = SCENARIOS[activeIdx];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SCENARIOS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section
      id="pipeline"
      className="border-t border-hairline bg-canvas min-h-screen flex flex-col"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div className="bg-surface-card border-b border-hairline relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-ai-orange via-amber-400 to-semantic-success" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-ink-subtle">
              <Search className="h-3.5 w-3.5 text-ai-orange" />
              Who do you want to reach?
            </div>
            <div className="flex items-center gap-1.5">
              {SCENARIOS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setActiveIdx(i);
                    setIsPlaying(false);
                  }}
                  className={`cursor-pointer h-7 w-7 rounded-full border font-mono text-[11px] font-bold transition-all flex items-center justify-center ${
                    i === activeIdx
                      ? "bg-ink text-white border-ink"
                      : "bg-canvas text-ink-muted border-hairline hover:border-ink-muted"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="w-full bg-canvas border border-hairline rounded-2xl py-4 pl-5 pr-12 text-[15px] sm:text-[17px] text-ink font-sans leading-snug relative min-h-[3rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={scenario.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="italic text-ink-muted"
                >
                  "{scenario.prompt}"
                </motion.span>
              </AnimatePresence>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-[10px] font-mono font-bold text-ai-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-ai-orange animate-pulse" />
                Live
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 flex-col justify-center">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_72px_1fr_72px_1fr] py-10">
            <div className="flex flex-col gap-4 pr-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-canvas border border-hairline font-mono text-[11px] font-bold text-ink shrink-0">
                  01
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-ink flex items-center gap-1.5">
                    <Search className="h-3.5 w-3.5 text-ai-orange" /> Find the
                    right people
                  </div>
                  <div className="text-[11px] text-ink-muted">
                    Scans the web for buying signals
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`find-${scenario.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-3"
                >
                  <div className="rounded-2xl border border-hairline bg-surface-card p-4 shadow-sm">
                    <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-wide mb-2.5">
                      Prospect identified
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-full bg-canvas border border-hairline flex items-center justify-center font-semibold text-sm text-ink shrink-0">
                        {scenario.prospect
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-ink">
                          {scenario.prospect}
                        </div>
                        <div className="text-xs text-ink-muted">
                          {scenario.role}
                        </div>
                        <div className="text-xs text-ai-orange font-mono font-semibold mt-0.5">
                          {scenario.company}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2.5 border-t border-hairline">
                      <span className="text-[10px] font-mono text-ink-subtle">
                        {scenario.industry}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-200 bg-sky-50/80 p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Globe className="h-3.5 w-3.5 text-sky-500" />
                      <span className="text-[10px] font-mono text-sky-600 font-bold uppercase">
                        {scenario.signalSource}
                      </span>
                      <span className="ml-auto text-[10px] font-mono text-sky-400">
                        {scenario.signalAge}
                      </span>
                    </div>
                    <p className="text-[12px] text-sky-900 leading-relaxed italic line-clamp-3">
                      "{scenario.signalSnippet}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex items-center justify-center">
              <AnimatedBeam delay={0} />
            </div>

            <div className="flex flex-col gap-4 px-6 border-x border-hairline/40">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-ai-orange-soft border border-ai-orange/20 font-mono text-[11px] font-bold text-ai-orange shrink-0">
                  02
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-ink flex items-center gap-1.5">
                    <Pencil className="h-3.5 w-3.5 text-ai-orange" /> Research &
                    write
                  </div>
                  <div className="text-[11px] text-ink-muted">
                    Every word backed by a real fact
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`write-${scenario.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.08 }}
                  className="flex flex-col gap-3"
                >
                  <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <FileText className="h-3.5 w-3.5 text-amber-600" />
                        <span className="text-[10px] font-mono text-amber-700 font-bold uppercase">
                          Verified fact
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-semantic-success font-bold">
                        {scenario.confidence}% match
                      </span>
                    </div>
                    <p className="text-[13px] font-semibold text-amber-900 leading-snug">
                      {scenario.extractedFact}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-hairline bg-surface-card p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-hairline">
                      <Mail className="h-3.5 w-3.5 text-ink-muted shrink-0" />
                      <span className="text-[11px] font-mono font-semibold text-ink truncate">
                        {scenario.emailSubject}
                      </span>
                    </div>
                    <p className="text-[12px] text-ink leading-relaxed line-clamp-4">
                      {
                        scenario.emailPreview.split(
                          scenario.highlightedQuote,
                        )[0]
                      }
                      <span className="bg-amber-100 text-amber-900 font-medium px-1 py-0.5 rounded border-b border-amber-300">
                        {scenario.highlightedQuote}
                      </span>
                      {
                        scenario.emailPreview.split(
                          scenario.highlightedQuote,
                        )[1]
                      }
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-semantic-success font-semibold">
                      <CheckCircle2 className="h-3 w-3" /> Source verified · No
                      hallucinations
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative flex items-center justify-center">
              <AnimatedBeam delay={0.5} />
            </div>

            <div className="flex flex-col gap-4 pl-6">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-semantic-success/10 border border-semantic-success/30 font-mono text-[11px] font-bold text-semantic-success shrink-0">
                  03
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-ink flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-semantic-success" />{" "}
                    Book the meeting
                  </div>
                  <div className="text-[11px] text-ink-muted">
                    Handles replies, lands on your calendar
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`book-${scenario.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.16 }}
                  className="flex flex-col gap-3"
                >
                  <div className="rounded-2xl border border-hairline bg-surface-card p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="h-3.5 w-3.5 text-ink-muted shrink-0" />
                      <span className="text-[11px] font-mono text-ink-subtle truncate">
                        Sent to {scenario.prospect}
                      </span>
                    </div>
                    <p className="text-[12px] text-ink-muted italic line-clamp-2 leading-relaxed">
                      "{scenario.emailPreview.substring(0, 90)}…"
                    </p>
                    <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono">
                      <span className="text-semantic-success font-bold">
                        ✓ Delivered
                      </span>
                      <span className="text-hairline">·</span>
                      <span className="text-ink-subtle">Inbox, not spam</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border-2 border-semantic-success bg-surface-card p-4 shadow-[0_4px_0_var(--color-semantic-success)]">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-semantic-success" />
                      <span className="text-[11px] font-bold text-semantic-success uppercase tracking-wide">
                        Meeting confirmed
                      </span>
                    </div>
                    <div className="text-[14px] font-semibold text-ink leading-snug mb-2">
                      {scenario.meetingTitle} · {scenario.company}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-ink-muted bg-canvas px-3 py-1.5 rounded-lg border border-hairline w-fit">
                      <Clock className="h-3 w-3" />
                      {scenario.meetingDay}, {scenario.meetingTime}
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-ink-subtle">
                      <ChevronRight className="h-3 w-3 text-ai-orange" />
                      Research summary attached for your team
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="divide-y divide-hairline py-6 space-y-0">
            <div className="py-6 space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-ai-orange uppercase tracking-wide">
                <span className="h-5 w-5 rounded-lg bg-canvas border border-hairline flex items-center justify-center font-bold text-ink text-[9px]">
                  01
                </span>
                Find the right people
              </div>
              <div className="bg-surface-card rounded-xl border border-hairline p-4 text-sm">
                <span className="font-semibold text-ink">
                  {scenario.prospect}
                </span>
                <span className="text-ink-muted"> · {scenario.role} at </span>
                <span className="text-ai-orange font-semibold">
                  {scenario.company}
                </span>
              </div>
              <div className="bg-sky-50 rounded-xl border border-sky-200 p-4 text-[12px] text-sky-800 italic leading-relaxed">
                "{scenario.signalSnippet.substring(0, 100)}…"
              </div>
            </div>

            <div className="py-6 space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-ai-orange uppercase tracking-wide">
                <span className="h-5 w-5 rounded-lg bg-ai-orange-soft border border-ai-orange/20 flex items-center justify-center font-bold text-ai-orange text-[9px]">
                  02
                </span>
                Research & write
              </div>
              <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 text-[13px] font-semibold text-amber-900">
                {scenario.extractedFact}
              </div>
              <div className="bg-surface-card rounded-xl border border-hairline p-4 text-[12px] text-ink-muted leading-relaxed">
                <div className="font-semibold text-ink font-mono text-[11px] mb-1.5 truncate">
                  Subject: {scenario.emailSubject}
                </div>
                {scenario.emailPreview.substring(0, 110)}…
              </div>
            </div>

            <div className="py-6 space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-semantic-success uppercase tracking-wide">
                <span className="h-5 w-5 rounded-lg bg-semantic-success/10 border border-semantic-success/30 flex items-center justify-center font-bold text-semantic-success text-[9px]">
                  03
                </span>
                Meeting booked
              </div>
              <div className="bg-surface-card rounded-xl border-2 border-semantic-success p-4 shadow-[0_3px_0_var(--color-semantic-success)]">
                <div className="font-semibold text-ink text-sm">
                  {scenario.meetingTitle} · {scenario.company}
                </div>
                <div className="text-[11px] text-ink-muted font-mono mt-1 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> {scenario.meetingDay},{" "}
                  {scenario.meetingTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto border-t border-hairline bg-surface-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <span className="text-[11px] font-mono text-ink-subtle flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" />
            Running continuously in the background
          </span>
          <div className="flex items-center gap-1.5">
            {SCENARIOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setActiveIdx(i);
                  setIsPlaying(false);
                }}
                className={`cursor-pointer h-1.5 rounded-full transition-all ${i === activeIdx ? "w-5 bg-ai-orange" : "w-1.5 bg-hairline hover:bg-ink-subtle"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
