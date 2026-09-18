import { useState } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) setIsSubmitted(true);
  };

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="border-t border-hairline bg-canvas px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-ink-muted">
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
            SECURE YOUR SPOT
            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" />
          </p>

          <h2
            id="cta-heading"
            className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-5xl"
          >
            Scale your pipeline.
            <br />
            Keep your standards.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Hire the SDR that never burns out, never sends a template, and only costs $38 per qualified meeting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-10 max-w-xl"
        >
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2.5"
            >
              <Input
                type="email"
                required
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-xl border-hairline bg-surface-card px-4 text-[15px] text-ink placeholder:text-ink-tertiary shadow-2xs focus-visible:border-ai-orange focus-visible:ring-1 focus-visible:ring-ai-orange"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 w-full sm:w-auto shrink-0 cursor-pointer rounded-xl border border-ink bg-ink px-7 text-[15px] font-semibold text-white shadow-sm transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="mr-2 h-4 w-4 text-ai-orange" />
                <span>Reserve Spot</span>
                <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
              </Button>
            </form>
          ) : (
            <div className="rounded-xl border border-semantic-success/30 bg-semantic-success/10 p-4 text-center shadow-xs animate-in fade-in-50">
              <div className="flex items-center justify-center gap-2 text-sm font-semibold text-semantic-success">
                <Check className="h-4 w-4" /> You&apos;re on the priority
                waitlist!
              </div>
              <p className="text-xs text-ink-muted mt-1">
                Reserved for <strong>{email}</strong>. We&apos;ll be in touch
                soon.
              </p>
            </div>
          )}

          <p className="mt-4 text-xs leading-relaxed text-ink-subtle">
            Early access is strictly limited to ensure deliverability quality across the network.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
