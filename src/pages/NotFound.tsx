import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-canvas px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        {/* 404 badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-hairline bg-surface-card"
        >
          <Search className="h-9 w-9 text-ink-subtle" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="mb-3 font-mono text-sm font-semibold tracking-wider text-ai-orange">
            404
          </p>
          <h1 className="text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-ink sm:text-[44px]">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button
            asChild
            className="h-11 w-full sm:w-auto cursor-pointer rounded-md border border-ink bg-ink px-6 text-[14px] font-medium text-white shadow-sm transition-all hover:bg-ink/90 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Link to="/" className="flex items-center gap-2">
              Go to Home
              <ArrowRight className="h-4 w-4 opacity-80" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-11 w-full sm:w-auto cursor-pointer rounded-md border border-hairline bg-surface-card px-6 text-[14px] font-medium text-ink transition-all hover:bg-canvas"
          >
            <Link to="/demo" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ai-orange" />
              Book a Demo
            </Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-xs text-ink-subtle"
        >
          If you think this is an error, contact us at{" "}
          <a
            href="mailto:hello@hormozix.ai"
            className="font-medium text-ai-orange hover:underline"
          >
            hello@hormozix.ai
          </a>
        </motion.p>
      </div>
    </main>
  );
}
