export default function Section004() {
  return (
    <section
      id="section-004"
      className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] mx-auto max-w-7xl px-2 mb-32"
    >
      <div className="rounded-lg border border-white/70 bg-white/80 p-6 backdrop-blur-md sm:p-8">
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Section 004
        </div>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Coming soon to watches.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Quick check-ins, glanceable summaries, and subtle nudges will make it
          easier to stay aligned with your goals wherever you are.
        </p>

        <div className="mt-8 rounded-lg bg-slate-950 p-5 text-white">
          <p className="text-sm font-medium text-white/70">Wearable preview</p>
          <p className="mt-2 text-lg font-semibold">
            Sleep, steps, and recovery at a glance
          </p>
          <p className="mt-2 text-sm leading-6 text-white/72">
            Designed for fast access, low-friction check-ins, and short
            recommendations on the move.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-white/70 bg-[linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(30,41,59,0.92))] p-6 text-white sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
              On-the-go experience
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              A cleaner daily loop
            </h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80">
            Mobile first
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Fast input",
              text: "Log the important stuff in seconds, then get back to your day.",
            },
            {
              title: "Clear insights",
              text: "See what changed, why it changed, and what to try next.",
            },
            {
              title: "Gentle reminders",
              text: "Stay consistent without feeling overwhelmed by alerts.",
            },
            {
              title: "Cross-device",
              text: "Move from desktop to phone and, soon, to a watch-friendly view.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.4rem] border border-white/10 bg-white/8 p-4"
            >
              <h4 className="text-base font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-white/72">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-white/10 bg-white/8 p-5">
          <p className="text-sm font-medium text-white/70">Built for balance</p>
          <p className="mt-2 text-sm leading-6 text-white/78">
            The interface keeps the story simple: understand your habits, spot
            patterns, and act on the next best step.
          </p>
        </div>
      </div>
    </section>
  );
}
