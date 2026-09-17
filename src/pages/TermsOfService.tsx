export function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-ink mb-3">
          Terms of Service
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
            1. Acceptance of Terms
          </h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            2. User Responsibilities
          </h3>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-ink font-medium">Compliance:</strong> Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </li>
            <li>
              <strong className="text-ink font-medium">
                Account Security:
              </strong>{" "}
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">
            3. Limitations of Liability
          </h3>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-ink">4. Governing Law</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
        </div>
      </div>
    </div>
  );
}
