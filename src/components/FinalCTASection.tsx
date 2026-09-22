import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
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
            GET STARTED
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
            See how the autonomous SDR researches, writes, and books qualified
            meetings — all while keeping you in control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-10 max-w-xl"
        >
          <Button
            asChild
            size="lg"
            className="h-13 cursor-pointer rounded-xl border border-ink bg-ink px-8 text-[16px] font-semibold text-white shadow-sm transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Link to="/demo" className="flex items-center gap-2.5">
              <Sparkles className="h-4.5 w-4.5 text-ai-orange" />
              <span>Book a Demo</span>
              <ArrowRight className="h-4.5 w-4.5 opacity-80" />
            </Link>
          </Button>

          <p className="mt-5 text-xs leading-relaxed text-ink-subtle">
            30-minute call. No commitment. We'll model your projected pipeline
            and cost per meeting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
