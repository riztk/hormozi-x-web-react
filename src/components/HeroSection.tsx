import { useState } from "react";
import { Sparkles, ArrowRight, ArrowDown, Check } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 3) setIsSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden bg-surface-card px-4 py-20 sm:px-6 lg:px-8 font-sans selection:bg-ai-orange selection:text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--color-hairline) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at center, transparent 30%, black 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at center, transparent 30%, black 80%)",
          opacity: 0.6,
        }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-ai-orange/5 via-amber-400/2 to-transparent rounded-full blur-3xl z-0" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 sm:mb-6 text-[38px] sm:text-[62px] lg:text-[72px] font-medium tracking-[-0.035em] text-ink leading-[1.06]"
        >
          What if leads kept coming <br />
          <span className="font-semibold">without hiring more?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mb-8 sm:mb-10 max-w-2xl text-[17px] sm:text-[20px] font-normal leading-relaxed text-ink-muted"
        >
          Describe your ideal customer.{" "}
          <strong className="text-ink font-semibold">Hormozi X</strong> handles
          the research, outreach, and booking — automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mx-auto max-w-xl"
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
                <Check className="h-4 w-4" /> You're on the priority waitlist!
              </div>
              <p className="text-xs text-ink-muted mt-1">
                Reserved for <strong>{email}</strong>. We'll be in touch soon.
              </p>
            </div>
          )}

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] sm:text-[12px] font-mono text-ink-subtle">
            <span className="flex items-center gap-1">
              <Check className="h-3.5 w-3.5 text-semantic-success" />
              Up and running in minutes
            </span>
            <span className="text-hairline hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Check className="h-3.5 w-3.5 text-semantic-success" />
              No hiring or ramp time
            </span>
            <span className="text-hairline hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <Check className="h-3.5 w-3.5 text-semantic-success" />
              You stay in control
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#pipeline"
          className="group inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-subtle hover:text-ink transition-colors py-1 px-3 rounded-full hover:bg-canvas border border-transparent hover:border-hairline"
        >
          <span>See it in action</span>
          <ArrowDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5 text-ai-orange" />
        </a>
      </motion.div>
    </section>
  );
}
