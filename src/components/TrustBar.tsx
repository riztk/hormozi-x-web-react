import { useEffect, useRef, useState } from "react";
import { TrendingUp, Zap, ShieldCheck, Clock4 } from "lucide-react";
import { motion, useInView } from "motion/react";

interface Metric {
  icon: React.ElementType;
  value: string;
  numericEnd: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
  sublabel: string;
  color: string;
  iconColor: string;
}

const METRICS: Metric[] = [
  {
    icon: TrendingUp,
    value: "20+",
    numericEnd: 20,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Qualified meetings / month",
    sublabel: "average per active workspace",
    color: "text-semantic-success",
    iconColor: "text-semantic-success",
  },
  {
    icon: Zap,
    value: "≥ 3%",
    numericEnd: 3,
    prefix: "≥\u00a0",
    suffix: "%",
    decimals: 0,
    label: "Positive reply rate",
    sublabel: "vs. industry avg < 1%",
    color: "text-ai-orange",
    iconColor: "text-ai-orange",
  },
  {
    icon: ShieldCheck,
    value: "< $38",
    numericEnd: 38,
    prefix: "< $",
    suffix: "",
    decimals: 0,
    label: "Cost per qualified meeting",
    sublabel: "blended, all-in",
    color: "text-brand-blue",
    iconColor: "text-brand-blue",
  },
  {
    icon: Clock4,
    value: "99.9%",
    numericEnd: 99.9,
    prefix: "",
    suffix: "%",
    decimals: 1,
    label: "Send-path availability",
    sublabel: "enterprise uptime guarantee",
    color: "text-ink",
    iconColor: "text-ink-muted",
  },
];

function useCountUp(end: number, decimals: number, active: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const startVal = 0;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((startVal + (end - startVal) * eased).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [active, end, decimals, duration]);

  return count;
}

function MetricCard({ metric, index, active }: { metric: Metric; index: number; active: boolean }) {
  const count = useCountUp(metric.numericEnd, metric.decimals, active, 1200 + index * 100);
  const Icon = metric.icon;

  const displayValue = active
    ? `${metric.prefix}${metric.decimals > 0 ? count.toFixed(metric.decimals) : Math.floor(count)}${metric.suffix}`
    : metric.value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col items-center gap-2 px-6 py-6 text-center sm:items-start sm:text-left"
    >
      {/* Vertical divider — hidden on first item */}
      {index > 0 && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-hairline sm:block"
        />
      )}

      <div className={`flex items-center gap-2 ${metric.iconColor}`}>
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-ink-subtle">
          {metric.label}
        </span>
      </div>

      <p
        className={`font-mono text-[32px] font-semibold leading-none tracking-tight sm:text-[36px] ${metric.color}`}
        aria-label={`${metric.label}: ${metric.value}`}
      >
        {displayValue}
      </p>

      <p className="text-[11px] text-ink-subtle">{metric.sublabel}</p>
    </motion.div>
  );
}

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="border-y border-hairline bg-surface-card"
      aria-label="Platform performance benchmarks"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top label strip */}
        <div className="flex items-center gap-3 border-b border-hairline py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" aria-hidden="true" />
          <p className="text-[11px] font-mono font-medium uppercase tracking-widest text-ink-subtle">
            Autonomous Pipeline Benchmarks
          </p>
          <span className="ml-auto rounded-full border border-hairline px-2.5 py-0.5 text-[10px] font-mono text-ink-subtle">
            Live Network Data
          </span>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {METRICS.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} index={i} active={isInView} />
          ))}
        </div>

        {/* Bottom disclaimer */}
        <div className="border-t border-hairline py-3 text-center">
          <p className="text-[10px] font-mono text-ink-subtle">
            Aggregated customer campaign benchmarks. Individual pipeline metrics vary based on ICP data quality and approval cadence.
          </p>
        </div>
      </div>
    </div>
  );
}
