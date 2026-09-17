export function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-ink mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-ink-muted">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8 text-[15px] leading-relaxed text-ink-muted">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            1. Information We Collect
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-ink font-medium">Personal Data:</strong>{" "}
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </li>
            <li>
              <strong className="text-ink font-medium">Usage Data:</strong>{" "}
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            2. How We Use Your Information
          </h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">3. Data Security</h3>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">4. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:hello@hormozix.ai"
              className="text-ai-orange hover:underline font-medium"
            >
              hello@hormozix.ai
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
