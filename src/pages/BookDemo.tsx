import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  teamSize: string;
  outboundVolume: string;
  notes: string;
}

const TEAM_SIZE_OPTIONS = [
  { value: "", label: "Select team size" },
  { value: "1-5", label: "1–5 people" },
  { value: "6-20", label: "6–20 people" },
  { value: "21-50", label: "21–50 people" },
  { value: "51-200", label: "51–200 people" },
  { value: "200+", label: "200+ people" },
];

const VOLUME_OPTIONS = [
  { value: "", label: "Select monthly volume" },
  { value: "not-yet", label: "Not doing outbound yet" },
  { value: "<1k", label: "Less than 1,000" },
  { value: "1k-10k", label: "1,000–10,000" },
  { value: "10k-50k", label: "10,000–50,000" },
  { value: "50k+", label: "50,000+" },
];

export function BookDemo() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    workEmail: "",
    company: "",
    jobTitle: "",
    teamSize: "",
    outboundVolume: "",
    notes: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      navigate("/demo/booked", {
        state: { name: form.fullName, email: form.workEmail },
      });
    }, 800);
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-canvas px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-16 lg:grid-cols-5">
          {/* Left column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="mb-10">
              <p className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wide text-ink-muted">
                <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
                REQUEST A DEMO
              </p>
              <h1 className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-[44px]">
                See Hormozi X in action
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                Tell us about your team and outbound goals. We'll show you how
                the autonomous SDR builds pipeline for companies like yours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-hairline bg-surface-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="demo-fullName"
                    className="text-[13px] font-medium text-ink"
                  >
                    Full name <span className="text-semantic-error">*</span>
                  </label>
                  <Input
                    id="demo-fullName"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="h-11 rounded-md border-hairline bg-canvas px-3.5 text-[14px] text-ink placeholder:text-ink-tertiary focus-visible:border-ai-orange focus-visible:ring-1 focus-visible:ring-ai-orange"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="demo-workEmail"
                    className="text-[13px] font-medium text-ink"
                  >
                    Work email <span className="text-semantic-error">*</span>
                  </label>
                  <Input
                    id="demo-workEmail"
                    type="email"
                    required
                    placeholder="jane@acme.com"
                    value={form.workEmail}
                    onChange={(e) => updateField("workEmail", e.target.value)}
                    className="h-11 rounded-md border-hairline bg-canvas px-3.5 text-[14px] text-ink placeholder:text-ink-tertiary focus-visible:border-ai-orange focus-visible:ring-1 focus-visible:ring-ai-orange"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Company */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="demo-company"
                    className="text-[13px] font-medium text-ink"
                  >
                    Company <span className="text-semantic-error">*</span>
                  </label>
                  <Input
                    id="demo-company"
                    type="text"
                    required
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    className="h-11 rounded-md border-hairline bg-canvas px-3.5 text-[14px] text-ink placeholder:text-ink-tertiary focus-visible:border-ai-orange focus-visible:ring-1 focus-visible:ring-ai-orange"
                  />
                </div>

                {/* Job Title */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="demo-jobTitle"
                    className="text-[13px] font-medium text-ink"
                  >
                    Job title <span className="text-semantic-error">*</span>
                  </label>
                  <Input
                    id="demo-jobTitle"
                    type="text"
                    required
                    placeholder="VP of Sales"
                    value={form.jobTitle}
                    onChange={(e) => updateField("jobTitle", e.target.value)}
                    className="h-11 rounded-md border-hairline bg-canvas px-3.5 text-[14px] text-ink placeholder:text-ink-tertiary focus-visible:border-ai-orange focus-visible:ring-1 focus-visible:ring-ai-orange"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Team Size */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="demo-teamSize"
                    className="text-[13px] font-medium text-ink"
                  >
                    Sales team size{" "}
                    <span className="text-semantic-error">*</span>
                  </label>
                  <select
                    id="demo-teamSize"
                    required
                    value={form.teamSize}
                    onChange={(e) => updateField("teamSize", e.target.value)}
                    className="flex h-11 w-full rounded-md border border-hairline bg-canvas px-3.5 text-[14px] text-ink focus-visible:border-ai-orange focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ai-orange"
                  >
                    {TEAM_SIZE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Outbound Volume */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="demo-outboundVolume"
                    className="text-[13px] font-medium text-ink"
                  >
                    Monthly outbound volume
                  </label>
                  <select
                    id="demo-outboundVolume"
                    value={form.outboundVolume}
                    onChange={(e) =>
                      updateField("outboundVolume", e.target.value)
                    }
                    className="flex h-11 w-full rounded-md border border-hairline bg-canvas px-3.5 text-[14px] text-ink focus-visible:border-ai-orange focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ai-orange"
                  >
                    {VOLUME_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label
                  htmlFor="demo-notes"
                  className="text-[13px] font-medium text-ink"
                >
                  Anything else we should know?
                </label>
                <textarea
                  id="demo-notes"
                  rows={3}
                  placeholder="Tell us about your outbound goals, current challenges, or questions you have..."
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  className="flex min-h-[80px] w-full rounded-md border border-hairline bg-canvas px-3.5 py-3 text-[14px] text-ink placeholder:text-ink-tertiary focus-visible:border-ai-orange focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ai-orange resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full cursor-pointer rounded-md border border-ink bg-ink px-7 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-ai-orange" />
                    Request a Demo
                    <ArrowRight className="h-4 w-4 opacity-80" />
                  </span>
                )}
              </Button>

              <p className="text-center text-xs text-ink-subtle">
                We'll respond within one business day. No commitment required.
              </p>
            </form>
          </motion.div>

          {/* Right column — Value props */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6 lg:col-span-2 lg:sticky lg:top-24"
          >
            <div className="rounded-xl border border-hairline bg-surface-card p-6">
              <h3 className="mb-5 text-lg font-semibold text-ink">
                What to expect
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-canvas">
                    <Clock className="h-4 w-4 text-ink-muted" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-ink">
                      30-minute discovery call
                    </p>
                    <p className="mt-0.5 text-[13px] text-ink-muted">
                      We'll learn about your ICP, outbound goals, and current
                      stack.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-canvas">
                    <Sparkles className="h-4 w-4 text-ai-orange" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-ink">
                      Live product walkthrough
                    </p>
                    <p className="mt-0.5 text-[13px] text-ink-muted">
                      See the autonomous SDR research, write, and handle replies
                      in real time.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-canvas">
                    <Users className="h-4 w-4 text-ink-muted" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-ink">
                      Custom pipeline projection
                    </p>
                    <p className="mt-0.5 text-[13px] text-ink-muted">
                      We'll model meeting volume and cost per meeting for your
                      market.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-semantic-success/20 bg-semantic-success/5 p-5">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-semantic-success" />
                <p className="text-[13px] font-semibold text-ink">
                  No commitment required
                </p>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                This is a genuine conversation about your outbound goals, not a
                high-pressure sales pitch. Come with questions — we'll come with
                answers.
              </p>
            </div>

            <div className="rounded-xl border border-hairline bg-surface-card p-5">
              <div className="flex items-center gap-3 font-mono text-[11px] text-ink-subtle">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ai-orange opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ai-orange" />
                </span>
                <span className="uppercase tracking-wider font-semibold">
                  Limited availability
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                We onboard a limited number of enterprise teams each month to ensure
                deliverability quality and dedicated inbox infrastructure across our network.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
