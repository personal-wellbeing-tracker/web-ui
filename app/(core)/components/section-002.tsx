const trackingItems = [
  {
    title: "Meals",
    description:
      "Capture breakfast, lunch, dinner, and snacks so the AI can spot patterns without extra effort.",
  },
  {
    title: "Workouts",
    description:
      "Log strength, cardio, yoga, and recovery sessions with clear feedback on consistency.",
  },
  {
    title: "Sleep",
    description:
      "Turn sleep length and quality into a clean daily picture that helps you recover better.",
  },
  {
    title: "Screen time",
    description:
      "Understand when your device habits are affecting focus, mood, and wind-down routines.",
  },
  {
    title: "Steps",
    description:
      "See movement trends across the week and keep activity goals realistic and flexible.",
  },
  {
    title: "And more",
    description:
      "Add hydration, meditation, mood, supplements, and any other habits that matter to you.",
  },
];

export default function Section002() {
  return (
    <section
      id="section-002"
      className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-md sm:p-8">
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
          Section 002
        </div>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Track the signals that shape your day.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
          The experience stays simple on purpose. You add what matters, the app
          organizes it, and the AI learns from your real habits instead of
          guessing.
        </p>

        <div className="mt-8 rounded-[1.5rem] bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            Why it feels different
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Lightweight input, clear visuals, and calm feedback help the product
            stay useful every day, not just during the first week.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {trackingItems.map((item, index) => (
          <article
            key={item.title}
            className="group rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-lg shadow-slate-950/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                0{index + 1}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-950">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
