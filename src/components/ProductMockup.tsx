import { useRef } from "react";
import {
  Activity,
  Check,
  AlertTriangle,
  FileEdit,
  ShieldCheck,
  UserCheck,
  CalendarCheck,
} from "lucide-react";
import { motion, useInView } from "motion/react";

interface CampaignItem {
  name: string;
  status: "active" | "paused" | "scheduled";
}

const CAMPAIGNS: CampaignItem[] = [
  { name: "VP Eng - Infra", status: "active" },
  { name: "CISO - Compliance", status: "active" },
  { name: "RevOps - Analytics", status: "paused" },
  { name: "Series B Founders", status: "scheduled" },
];

const STATUS_STYLES: Record<
  CampaignItem["status"],
  { dot: string; label: string }
> = {
  active: { dot: "bg-semantic-success", label: "Active" },
  paused: { dot: "bg-ink-tertiary", label: "Paused" },
  scheduled: { dot: "bg-brand-blue", label: "Scheduled" },
};

interface StatCard {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
}

const STATS: StatCard[] = [
  { icon: FileEdit, value: "42", label: "Drafts pending review", color: "text-ink" },
  { icon: ShieldCheck, value: "100%", label: "Evidence verified", color: "text-semantic-success" },
  { icon: UserCheck, value: "3", label: "Escalated to human", color: "text-semantic-warning" },
  { icon: CalendarCheck, value: "12", label: "Meetings booked", color: "text-ai-orange" },
];

interface ActivityItem {
  text: string;
  type: "success" | "warning" | "info";
}

const ACTIVITY_LOG: ActivityItem[] = [
  { text: "Drafted 12 messages with verified evidence", type: "success" },
  { text: "Blocked 2 prospects (competitor suppression rule)", type: "info" },
  { text: "Escalated reply from Acme Corp (Pricing mention)", type: "warning" },
  { text: "Paused campaign due to domain warmup limits", type: "info" },
  { text: "Booked meeting with VP Eng at Acme", type: "success" },
];

export function ProductMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Product dashboard preview"
      className="border-t border-hairline bg-canvas px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-xl border border-hairline bg-surface-card shadow-[0_8px_32px_-16px_rgba(0,0,0,0.10)]"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-hairline bg-canvas font-mono text-[10px] font-bold text-ink">
                HX
              </div>
              <span className="text-sm font-semibold text-ink">
                Autonomous SDR
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[200px_1fr]">
            {/* Sidebar — campaigns */}
            <aside className="hidden border-r border-hairline bg-canvas/50 p-4 lg:block">
              <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-subtle">
                Campaigns
              </p>
              <ul className="space-y-1" role="list">
                {CAMPAIGNS.map((campaign) => {
                  const style = STATUS_STYLES[campaign.status];
                  return (
                    <li
                      key={campaign.name}
                      className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] ${campaign.status === "active" ? "bg-surface-card font-medium text-ink" : "text-ink-muted"}`}
                    >
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${style.dot} ${campaign.status === "active" ? "animate-pulse" : ""}`}
                        aria-label={style.label}
                      />
                      {campaign.name}
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Main content */}
            <div className="px-5 py-6 sm:px-6 sm:py-8">
              {/* Campaign header */}
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-subtle">
                    Active Campaign
                  </p>
                  <h3 className="mt-1 text-xl font-medium tracking-tight text-ink sm:text-2xl">
                    VP Engineering - Infrastructure
                  </h3>
                </div>
                {/* Mobile: campaign pills */}
                <div className="flex flex-wrap gap-1.5 lg:hidden">
                  {CAMPAIGNS.filter((c) => c.status === "active").map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-canvas px-2.5 py-1 text-[11px] font-medium text-ink-muted"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-semantic-success animate-pulse" />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats grid */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {STATS.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + i * 0.08,
                        ease: "easeOut",
                      }}
                      className="rounded-lg border border-hairline bg-canvas/60 p-3.5"
                    >
                      <div className="mb-2 flex items-center gap-1.5">
                        <Icon
                          className={`h-3.5 w-3.5 ${stat.color}`}
                          aria-hidden="true"
                        />
                        <span className="text-[10px] font-medium text-ink-subtle">
                          {stat.label}
                        </span>
                      </div>
                      <p
                        className={`font-mono text-2xl font-semibold tracking-tight ${stat.color}`}
                      >
                        {stat.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Today's activity */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Activity
                    className="h-3.5 w-3.5 text-ai-orange"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink-subtle">
                    Today&apos;s Activity
                  </span>
                </div>
                <ul className="space-y-2" role="list">
                  {ACTIVITY_LOG.map((item, i) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.35,
                        delay: 0.5 + i * 0.07,
                        ease: "easeOut",
                      }}
                      className="flex items-start gap-2.5 text-[13px] text-ink-muted"
                    >
                      {item.type === "warning" ? (
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-semantic-warning" />
                      ) : (
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-semantic-success" />
                      )}
                      <span>{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-hairline bg-canvas/40 px-5 py-3 sm:px-6">
            <p className="text-center font-mono text-[10px] text-ink-subtle">
              Illustrative product interface · Not connected to live data
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
