import { useEffect, useId, useState } from "react";
import {
    ArrowDown, ArrowRight, ArrowUpRight, Calendar, Check,
    Clock, FileText, Mail, Pause, Play, RotateCcw, Search,
} from "lucide-react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";

interface Scenario {
    id: string;
    category: string;
    prompt: string;
    prospect: string;
    role: string;
    company: string;
    signalSource: string;
    signalAge: string;
    sourceBefore: string;
    evidence: string;
    sourceAfter: string;
    extractedFact: string;
    emailSubject: string;
    emailBefore: string;
    emailAfter: string;
    meetingTitle: string;
    meetingTime: string;
    meetingDay: string;
}


const SCENARIOS: Scenario[] = [
    {
        id: "infrastructure",
        category: "DevTools",
        prompt: "SaaS companies with 100+ engineers selling to enterprise infrastructure teams.",
        prospect: "Sarah Chen",
        role: "VP Engineering",
        company: "Acme Cloud",
        signalSource: "Engineering Blog Post",
        signalAge: "2 days ago",
        sourceBefore: "As we scale our multi-region architecture, our team is ",
        evidence: "struggling with configuration drift",
        sourceAfter: " across Kubernetes clusters. We're actively evaluating solutions.",
        extractedFact: "A growing engineering org actively looking for a solution to Kubernetes configuration drift.",
        emailSubject: "Solving configuration drift at Acme Cloud",
        emailBefore: "Hi Sarah — read your team's recent blog post about scaling multi-region architecture. Since you mentioned ",
        emailAfter: ", our platform automatically detects and remediates cluster drift in real-time. Worth a 15-minute look?",
        meetingTitle: "Product walkthrough",
        meetingTime: "10:00 AM",
        meetingDay: "Wednesday",
    },
    {
        id: "security",
        category: "Cybersecurity",
        prompt: "Fintech companies scaling operations and preparing for SOC 2 compliance.",
        prospect: "Marcus Webb",
        role: "CISO",
        company: "VaultPay",
        signalSource: "Job listing",
        signalAge: "4 days ago",
        sourceBefore: "We are hiring a Compliance Manager to help us ",
        evidence: "prepare for our upcoming SOC 2 Type II audit",
        sourceAfter: " and establish continuous monitoring.",
        extractedFact: "A fintech company actively hiring to tackle an upcoming compliance audit.",
        emailSubject: "Accelerating VaultPay's SOC 2 Type II audit",
        emailBefore: "Hi Marcus — saw VaultPay is hiring a Compliance Manager to ",
        emailAfter: ". We automate evidence collection and continuous monitoring, cutting audit prep time in half. Open to a conversation on how this fits into your roadmap?",
        meetingTitle: "Discovery call",
        meetingTime: "11:00 AM",
        meetingDay: "Tuesday",
    },
    {
        id: "revops",
        category: "RevOps",
        prompt: "B2B SaaS companies relying on outdated manual data entry for CRM hygiene.",
        prospect: "Elena Rodriguez",
        role: "VP Revenue Operations",
        company: "Nexus Data",
        signalSource: "LinkedIn post",
        signalAge: "6 days ago",
        sourceBefore: "Our AEs are spending ",
        evidence: "20% of their week on manual CRM updates",
        sourceAfter: " instead of selling. We need a better data hygiene strategy.",
        extractedFact: "A revenue leader quantifying the exact cost of their CRM data hygiene problem.",
        emailSubject: "Giving your AEs their time back",
        emailBefore: "Hi Elena — your post resonated with me. You mentioned AEs are spending ",
        emailAfter: ". We automatically enrich and sync CRM records from prospect interactions, eliminating manual data entry. Worth a quick look to see if this could help?",
        meetingTitle: "Strategy call",
        meetingTime: "3:30 PM",
        meetingDay: "Friday",
    },
];

const STAGES = [
    { label: "Find a signal", short: "Find", icon: Search },
    { label: "Write outreach", short: "Write", icon: Mail },
    { label: "Book a meeting", short: "Book", icon: Calendar },
];
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ai-orange focus-visible:ring-offset-4";

export function PipelineSection() {
    const [activeIdx, setActiveIdx] = useState(0);
    // Start with a complete, readable example. Playback is always opt-in.
    const [stage, setStage] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const reduceMotion = useReducedMotion();
    const workspaceId = useId();
    const scenario = SCENARIOS[activeIdx];
    const duration = reduceMotion ? 0 : 0.24;

    useEffect(() => {
        if (!isPlaying) return;
        if (reduceMotion || stage === STAGES.length - 1) {
            setIsPlaying(false);
            return;
        }
        const timer = window.setTimeout(() => setStage((current) => current + 1), stage === 0 ? 2600 : 4200);
        return () => window.clearTimeout(timer);
    }, [isPlaying, stage, reduceMotion]);

    useEffect(() => {
        const pauseWhenHidden = () => {
            if (document.hidden) setIsPlaying(false);
        };
        document.addEventListener("visibilitychange", pauseWhenHidden);
        return () => document.removeEventListener("visibilitychange", pauseWhenHidden);
    }, []);

    function selectStage(next: number) {
        setIsPlaying(false);
        setStage(next);
    }

    function togglePlayback() {
        if (isPlaying) {
            setIsPlaying(false);
            return;
        }
        if (reduceMotion) {
            selectStage(stage === 2 ? 0 : stage + 1);
            return;
        }
        setStage(0);
        setIsPlaying(true);
    }

    return (
        <section id="pipeline" aria-labelledby={`${workspaceId}-heading`} className="scroll-mt-20 border-t border-hairline bg-canvas px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <p className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wide text-ink-muted">
                            <span className="h-px w-8 bg-ai-orange" aria-hidden="true" /> THE WORK, MADE VISIBLE
                        </p>
                        <h2 id={`${workspaceId}-heading`} className="text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-ink sm:text-5xl">
                            A buying signal.<br />A real conversation.
                        </h2>
                    </div>
                    <p className="max-w-sm text-base leading-relaxed text-ink-muted">
                        Follow one prospect from the first useful detail to a place on your calendar.
                    </p>
                </div>

                <div role="group" aria-label="Choose an example industry" className="mb-6 flex flex-wrap gap-2">
                    {SCENARIOS.map((item, index) => (
                        <button key={item.id} type="button" aria-pressed={activeIdx === index}
                            onClick={() => { setActiveIdx(index); selectStage(1); }}
                            className={`${FOCUS} inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors motion-reduce:transition-none ${activeIdx === index ? "border-ink bg-ink text-white" : "border-hairline bg-surface-card text-ink-muted hover:border-ink-subtle hover:text-ink"}`}>
                            {item.category}
                            {activeIdx === index && <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />}
                        </button>
                    ))}
                </div>

                <LayoutGroup id={workspaceId}>
                    <div className="overflow-hidden rounded-2xl border border-hairline bg-surface-card shadow-[0_12px_48px_-24px_rgba(0,0,0,0.16)]">
                        <div className="flex flex-col gap-3 border-b border-hairline px-5 py-5 sm:px-8 md:flex-row md:items-center md:gap-6">
                            <span className="shrink-0 text-xs font-medium text-ink-subtle">YOUR IDEAL CUSTOMER</span>
                            <p className="text-sm leading-relaxed text-ink">{scenario.prompt}</p>
                        </div>

                        <nav aria-label="Example workflow stages" className="border-b border-hairline px-5 sm:px-8">
                            <ol className="grid grid-cols-3 gap-3 sm:gap-8">
                                {STAGES.map((item, index) => (
                                    <li key={item.label}>
                                        <button type="button" aria-current={stage === index ? "step" : undefined}
                                            aria-controls={`${workspaceId}-detail`} onClick={() => selectStage(index)}
                                            className={`${FOCUS} relative flex min-h-16 w-full cursor-pointer items-center gap-2 rounded-sm py-4 text-left text-sm sm:gap-3 ${stage === index ? "text-ink" : "text-ink-subtle hover:text-ink"}`}>
                                            <span className={`font-mono text-xs ${stage === index ? "text-ai-orange" : "text-ink-subtle"}`}>0{index + 1}</span>
                                            <span className="hidden font-medium sm:inline">{item.label}</span>
                                            <span className="font-medium sm:hidden">{item.short}</span>
                                            {stage === index && <motion.span layoutId={reduceMotion ? undefined : "stage-indicator"} transition={{ duration }} className="absolute inset-x-0 bottom-0 h-0.5 bg-ai-orange" />}
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline px-5 py-5 sm:px-8">
                            <div className="flex min-w-0 items-center gap-3">
                                <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-canvas text-sm font-medium text-ink">
                                    {scenario.prospect.split(" ").map((part) => part[0]).join("")}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-ink">{scenario.prospect}</p>
                                    <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{scenario.role} · {scenario.company}</p>
                                </div>
                            </div>
                            <span className="rounded-full border border-hairline px-2.5 py-1 text-xs text-ink-subtle">Illustrative example</span>
                        </div>

                        <div className="grid lg:min-h-[440px] lg:grid-cols-[0.85fr_1.15fr]">
                            <aside aria-label="Source evidence" className="border-b border-hairline bg-canvas/60 px-5 py-7 sm:px-8 sm:py-8 lg:border-r lg:border-b-0">
                                <div className="mb-7 flex items-center justify-between gap-3 text-xs text-ink-muted">
                                    <span className="flex items-center gap-2"><FileText className="h-4 w-4" aria-hidden="true" /> {scenario.signalSource}</span>
                                    <span>{scenario.signalAge}</span>
                                </div>
                                <blockquote className="text-lg font-medium leading-relaxed tracking-[-0.015em] text-ink sm:text-xl">
                                    “{scenario.sourceBefore}
                                    <span className="relative isolate inline">
                                        {stage === 0 && <motion.span layoutId={reduceMotion ? undefined : `evidence-${scenario.id}`} transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeInOut" }} className="absolute -inset-x-0.5 inset-y-0 -z-10 rounded-sm bg-ai-orange/10" />}
                                        <span className={stage !== 0 ? "bg-ai-orange-soft decoration-ai-orange/40 underline decoration-1 underline-offset-4" : ""}>{scenario.evidence}</span>
                                    </span>
                                    {scenario.sourceAfter}”
                                </blockquote>
                                <div className="mt-8 border-t border-hairline pt-5">
                                    <p className="mb-2 text-xs font-medium text-ink-subtle">WHY THIS MATTERS</p>
                                    <p className="text-sm leading-relaxed text-ink-muted">{scenario.extractedFact}</p>
                                </div>
                                <p className="mt-5 text-xs leading-relaxed text-ink-subtle">Sample source content, shown to explain the workflow.</p>
                            </aside>

                            <div id={`${workspaceId}-detail`} role="region" aria-label={STAGES[stage].label} className="min-w-0 px-5 py-7 sm:px-8 sm:py-8">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div key={`${scenario.id}-${stage}`} initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }} transition={{ duration }}>
                                        {stage === 0 && (
                                            <div>
                                                <div className="mb-7 flex items-center gap-2 text-xs text-ink-muted"><Search className="h-4 w-4" aria-hidden="true" /> 01 / THE SIGNAL</div>
                                                <h3 className="max-w-sm text-2xl font-medium tracking-tight text-ink">Start with a reason.<br />Not just a name.</h3>
                                                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">A relevant source gives the conversation context. The useful detail stays attached as the outreach takes shape.</p>
                                                <dl className="mt-7 divide-y divide-hairline border-y border-hairline text-sm">
                                                    <div className="flex justify-between gap-6 py-3"><dt className="text-ink-muted">Who</dt><dd className="text-right font-medium text-ink">{scenario.company}</dd></div>
                                                    <div className="flex justify-between gap-6 py-3"><dt className="text-ink-muted">Where</dt><dd className="text-right text-ink">{scenario.signalSource}</dd></div>
                                                    <div className="flex justify-between gap-6 py-3"><dt className="text-ink-muted">What</dt><dd className="text-right text-ink">A need in their own words</dd></div>
                                                </dl>
                                                <button type="button" onClick={() => selectStage(1)} className={`${FOCUS} mt-5 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm text-sm font-medium text-ink hover:text-ai-orange`}>See the outreach <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                                            </div>
                                        )}
                                        {stage === 1 && (
                                            <div>
                                                <div className="mb-7 flex items-center justify-between gap-3 text-xs text-ink-muted"><span className="flex items-center gap-2"><Mail className="h-4 w-4" aria-hidden="true" /> 02 / THE OUTREACH</span><span>Example draft</span></div>
                                                <dl className="space-y-3 border-b border-hairline pb-5 text-sm">
                                                    <div className="flex gap-4"><dt className="w-12 shrink-0 text-ink-subtle">To</dt><dd className="text-ink">{scenario.prospect}</dd></div>
                                                    <div className="flex gap-4"><dt className="w-12 shrink-0 text-ink-subtle">Subject</dt><dd className="font-medium text-ink">{scenario.emailSubject}</dd></div>
                                                </dl>
                                                <p className="mt-6 text-base leading-[1.85] text-ink">
                                                    {scenario.emailBefore}
                                                    <span className="relative isolate inline">
                                                        <motion.span layoutId={reduceMotion ? undefined : `evidence-${scenario.id}`} transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeInOut" }} className="absolute -inset-x-0.5 inset-y-0 -z-10 rounded-sm bg-ai-orange/10" />
                                                        {scenario.evidence}
                                                    </span>
                                                    {scenario.emailAfter}
                                                </p>
                                                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-4">
                                                    <button type="button" onClick={() => selectStage(0)} className={`${FOCUS} inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm text-xs font-medium text-ink-muted hover:text-ink`}><span className="h-2 w-2 rounded-sm bg-ai-orange/40" aria-hidden="true" /> Connected to the source <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></button>
                                                    <button type="button" onClick={() => selectStage(2)} className={`${FOCUS} inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm text-sm font-medium text-ink hover:text-ai-orange`}>See the outcome <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                                                </div>
                                            </div>
                                        )}
                                        {stage === 2 && (
                                            <div>
                                                <div className="mb-7 flex items-center gap-2 text-xs text-ink-muted"><Calendar className="h-4 w-4" aria-hidden="true" /> 03 / THE CONVERSATION</div>
                                                <div className="mb-5 flex items-end justify-between gap-4"><h3 className="text-2xl font-medium tracking-tight text-ink">{scenario.meetingDay}</h3><span className="text-xs text-ink-subtle">Example calendar</span></div>
                                                <div className="relative border-y border-hairline py-6">
                                                    <div aria-hidden="true" className="absolute inset-0 grid grid-rows-3"><div className="border-b border-hairline-soft" /><div className="border-b border-hairline-soft" /><div /></div>
                                                    <div className="relative grid grid-cols-[64px_1fr] gap-3 sm:grid-cols-[76px_1fr]">
                                                        <span className="pt-4 font-mono text-xs text-ink-muted">{scenario.meetingTime}</span>
                                                        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.1 }} className="rounded-r-lg border-l-2 border-semantic-success bg-surface-subtle p-4">
                                                            <span className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted"><Check className="h-3.5 w-3.5 text-semantic-success" aria-hidden="true" /> Meeting booked · example</span>
                                                            <h4 className="text-base font-semibold text-ink">{scenario.meetingTitle}</h4>
                                                            <p className="mt-1 text-sm text-ink-muted">{scenario.prospect} · {scenario.company}</p>
                                                            <p className="mt-4 flex items-center gap-2 text-xs text-ink-muted"><Clock className="h-3.5 w-3.5" aria-hidden="true" /> 30 minutes</p>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                                <p className="mt-6 text-sm leading-relaxed text-ink-muted">The conversation starts with context. Keep the source and outreach alongside the meeting so your team knows why it matters.</p>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline bg-canvas/50 px-5 py-4 sm:px-8">
                            <p role="status" aria-live="polite" aria-atomic="true" className="text-xs text-ink-muted">{isPlaying ? `Playing example · ${STAGES[stage].label}` : `Step ${stage + 1} of 3 · ${STAGES[stage].label}`}</p>
                            <button type="button" onClick={togglePlayback} className={`${FOCUS} inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-hairline bg-surface-card px-4 text-sm font-medium text-ink transition-colors hover:border-ink-subtle motion-reduce:transition-none`}>
                                {isPlaying ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : stage === 2 ? <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
                                {isPlaying ? "Pause" : reduceMotion ? stage === 2 ? "Back to source" : "Next step" : stage === 2 ? "Replay example" : "Play example"}
                            </button>
                        </div>
                    </div>
                </LayoutGroup>
                <p className="mt-5 text-center text-xs leading-relaxed text-ink-subtle">An illustrative workflow, not a live feed. Explore each step at your own pace.</p>
            </div>
        </section>
    );
}
