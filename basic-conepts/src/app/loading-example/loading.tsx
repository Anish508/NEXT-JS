export default function loader() {
      return (
            <main
                  className="min-h-dvh grid place-items-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"
                  aria-busy="true"
                  aria-live="polite"
                  aria-label="Loading content"
            >
                  <div className="w-full max-w-6xl p-6 sm:p-8">
                        {/* Top bar skeleton */}
                        <div className="mb-8 flex items-center justify-between">
                              <div className="h-8 w-40 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                              <div className="hidden sm:flex gap-3">
                                    <div className="h-8 w-20 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                    <div className="h-8 w-24 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                    <div className="h-8 w-16 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                              </div>
                        </div>

                        {/* Centered spinner + label for small screens */}
                        <div className="mb-8 flex items-center gap-3 sm:hidden">
                              <span
                                    className="inline-block h-6 w-6 rounded-full border-2 border-neutral-300 dark:border-neutral-700 border-t-transparent motion-safe:animate-spin"
                                    role="status"
                                    aria-label="Loading"
                              />
                              <span className="text-sm text-neutral-500 dark:text-neutral-400">Loading…</span>
                        </div>

                        {/* Hero skeleton */}
                        <div className="mb-8 h-40 sm:h-56 w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />

                        {/* Card grid skeleton */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              {Array.from({ length: 6 }).map((_, i) => (
                                    <div
                                          key={i}
                                          className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5"
                                    >
                                          <div className="mb-4 h-32 w-full rounded-xl bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                          <div className="mb-2 h-5 w-3/4 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                          <div className="mb-2 h-4 w-1/2 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                          <div className="h-9 w-28 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                                    </div>
                              ))}
                        </div>

                        {/* Bottom spinner for larger screens */}
                        <div className="mt-10 hidden sm:flex items-center justify-center gap-3">
                              <span
                                    className="inline-block h-7 w-7 rounded-full border-2 border-neutral-300 dark:border-neutral-700 border-t-transparent motion-safe:animate-spin"
                                    role="status"
                                    aria-label="Loading"
                              />
                              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                    Fetching data…
                              </span>
                        </div>
                  </div>
            </main>
      )
}