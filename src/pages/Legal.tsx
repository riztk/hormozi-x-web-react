import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  FileText,
  Shield,
  Scale,
  Server,
  AlertTriangle,
  ArrowLeft,
  Clock,
} from "lucide-react";

/* ────────────────────────────────────────────────────────
   Legal document registry
   ──────────────────────────────────────────────────────── */

interface LegalDoc {
  slug: string;
  title: string;
  icon: React.ElementType;
  lastUpdated: string;
  isStub: boolean;
  content: React.ReactNode;
}

function StubContent({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-hairline bg-canvas p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-hairline bg-surface-card">
        <Clock className="h-6 w-6 text-ink-subtle" />
      </div>
      <h3 className="text-lg font-semibold text-ink">Coming Soon</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
        Our {title} is being finalised by our legal team and will be published
        here shortly. For questions about data handling or compliance, contact us
        at{" "}
        <a
          href="mailto:legal@hormozix.ai"
          className="font-medium text-ai-orange hover:underline"
        >
          legal@hormozix.ai
        </a>
        .
      </p>
    </div>
  );
}

const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    lastUpdated: "September 2026",
    isStub: false,
    content: (
      <div className="space-y-8 text-[15px] leading-relaxed text-ink-muted">
        <p>
          Hormozi X Inc. ("we", "our", "us") respects your privacy and is
          committed to protecting the personal data of our customers, their
          prospects, and visitors to our website. This Privacy Policy explains
          how we collect, use, store, and share information when you use the
          Hormozi X platform and website.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            1. Information We Collect
          </h3>
          <p>
            We collect information you provide directly to us, including your
            name, work email, company name, job title, and any other information
            you choose to provide when creating an account, requesting a demo, or
            contacting us for support.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-ink">Account Data:</strong>{" "}
              Name, email, company, role, workspace configuration, and
              authentication credentials.
            </li>
            <li>
              <strong className="font-medium text-ink">Prospect Data:</strong>{" "}
              Business contact information sourced from public and licensed data
              providers on behalf of our customers for outreach campaigns.
            </li>
            <li>
              <strong className="font-medium text-ink">Usage Data:</strong>{" "}
              Platform interaction logs, feature usage analytics, and
              performance metrics.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            2. How We Use Your Information
          </h3>
          <p>
            We use the information we collect to provide and improve the Hormozi
            X platform, process demo requests, communicate with you about your
            account, ensure compliance with applicable regulations, and protect
            against fraudulent or malicious activity.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            3. Data Security
          </h3>
          <p>
            We implement industry-standard security measures including
            encryption at rest and in transit, tenant-isolated data storage,
            regular security audits, and strict access controls. All prospect
            data is processed in accordance with our customers' instructions and
            applicable data protection regulations.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            4. Data Retention
          </h3>
          <p>
            We retain personal data only for as long as necessary to fulfil the
            purposes for which it was collected, including any legal, accounting,
            or reporting requirements. Prospects may request deletion of their
            data at any time.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">5. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:privacy@hormozix.ai"
              className="font-medium text-ai-orange hover:underline"
            >
              privacy@hormozix.ai
            </a>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: "terms",
    title: "Terms of Service",
    icon: FileText,
    lastUpdated: "September 2026",
    isStub: false,
    content: (
      <div className="space-y-8 text-[15px] leading-relaxed text-ink-muted">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the
          Hormozi X platform, website, and related services ("Services")
          provided by Hormozi X Inc. By accessing or using our Services, you
          agree to be bound by these Terms.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            1. Acceptance of Terms
          </h3>
          <p>
            By creating an account or using any part of the Services, you
            represent that you have the legal authority to enter into these Terms
            on behalf of yourself and, if applicable, the organisation you
            represent. If you do not agree to these Terms, you must not use our
            Services.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            2. User Responsibilities
          </h3>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials, all activities that occur under your account,
            and ensuring your use of the Services complies with applicable laws
            and regulations, including but not limited to CAN-SPAM, GDPR, and
            CCPA.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="font-medium text-ink">Compliance:</strong> You
              agree to use the platform only for lawful outreach purposes and
              to honour all opt-out and suppression requests promptly.
            </li>
            <li>
              <strong className="font-medium text-ink">
                Account Security:
              </strong>{" "}
              You must enable multi-factor authentication when required and
              notify us immediately of any unauthorised access to your account.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            3. Limitations of Liability
          </h3>
          <p>
            To the maximum extent permitted by law, Hormozi X Inc. shall not be
            liable for any indirect, incidental, consequential, or punitive
            damages arising from your use of or inability to use the Services,
            including any loss of data, revenue, or business opportunities.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            4. Governing Law
          </h3>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the State of Delaware, without regard to its conflict of
            laws provisions.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: "dpa",
    title: "Data Processing Agreement",
    icon: Scale,
    lastUpdated: "",
    isStub: true,
    content: <StubContent title="Data Processing Agreement" />,
  },
  {
    slug: "subprocessors",
    title: "Sub-processors",
    icon: Server,
    lastUpdated: "",
    isStub: true,
    content: <StubContent title="Sub-processors List" />,
  },
  {
    slug: "acceptable-use",
    title: "Acceptable Use Policy",
    icon: AlertTriangle,
    lastUpdated: "",
    isStub: true,
    content: <StubContent title="Acceptable Use Policy" />,
  },
];

/* ────────────────────────────────────────────────────────
   Legal Hub Page Component
   ──────────────────────────────────────────────────────── */

export function Legal() {
  const { doc } = useParams<{ doc: string }>();
  const activeDoc = LEGAL_DOCS.find((d) => d.slug === doc);

  // Redirect unknown slugs to privacy by default
  if (!activeDoc) {
    return <Navigate to="/legal/privacy" replace />;
  }

  const ActiveIcon = activeDoc.icon;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-canvas px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Sidebar navigation */}
          <aside className="w-full shrink-0 lg:w-64">
            <div className="lg:sticky lg:top-24">
              <Link
                to="/"
                className="mb-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:text-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>

              <h2 className="mb-4 text-[11px] font-mono font-bold uppercase tracking-widest text-ink-subtle">
                Legal Documents
              </h2>

              <nav className="flex flex-row flex-wrap gap-1.5 lg:flex-col" aria-label="Legal documents">
                {LEGAL_DOCS.map((d) => {
                  const Icon = d.icon;
                  const isActive = d.slug === doc;
                  return (
                    <Link
                      key={d.slug}
                      to={`/legal/${d.slug}`}
                      className={`group flex min-h-[44px] items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all ${
                        isActive
                          ? "bg-surface-card border border-hairline text-ink shadow-2xs"
                          : "text-ink-muted hover:text-ink hover:bg-surface-card/60 border border-transparent"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 shrink-0 transition-colors ${
                          isActive ? "text-ai-orange" : "text-ink-subtle group-hover:text-ink"
                        }`}
                      />
                      <span>{d.title}</span>
                      {d.isStub && (
                        <span className="ml-auto rounded-full bg-canvas border border-hairline px-2 py-0.5 text-[9px] font-mono text-ink-subtle">
                          Soon
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Document content */}
          <motion.article
            key={activeDoc.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex-1 min-w-0 lg:max-w-4xl"
          >
            <div className="rounded-2xl border border-hairline bg-surface-card shadow-sm sm:overflow-hidden">
              <div className="border-b border-hairline bg-canvas/40 px-6 py-8 sm:px-12 sm:py-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-surface-card shadow-2xs">
                  <ActiveIcon className="h-6 w-6 text-ai-orange" />
                </div>
                <h1 className="text-2xl font-medium tracking-tight text-ink sm:text-4xl">
                  {activeDoc.title}
                </h1>
                {activeDoc.lastUpdated && (
                  <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-subtle">
                    Last updated: {activeDoc.lastUpdated}
                  </p>
                )}
              </div>

              <div className="px-6 py-8 sm:px-12 sm:py-12">
                <div className="prose prose-sm sm:prose-base prose-ink max-w-none">
                  {activeDoc.content}
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </main>
  );
}
