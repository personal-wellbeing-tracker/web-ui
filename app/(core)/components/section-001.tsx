const metrics = [
  { label: "Meals tracked", value: "24/7" },
  { label: "Sleep insights", value: "Ready" },
  { label: "AI plans", value: "Daily" },
];

const chips = ["Meals", "Workouts", "Sleep", "Screen time", "Steps", "Recovery"];

export default function Section001() {
  return (
    <section
      id="section-001"
      className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md"
    >
      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Section 001
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            A calm AI wellbeing companion for your everyday rhythm.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Track meals, workouts, sleep, screen time, steps, and more in one
            place. The app turns your daily data into practical AI recommendations
            and simple plans you can actually follow.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#section-003"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              See AI planning
            </a>
            <a
              href="#section-004"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Built for mobile and desktop
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/15">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white/70">Today&apos;s pulse</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                Live summary
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                  Energy
                </p>
                <p className="mt-2 text-3xl font-semibold">82%</p>
                <p className="mt-1 text-sm text-white/70">Balanced pace</p>
              </div>
              <div className="rounded-2xl bg-white/8 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                  Recovery
                </p>
                <p className="mt-2 text-3xl font-semibold">7.6h</p>
                <p className="mt-1 text-sm text-white/70">Sleep target met</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-400/20 to-sky-400/15 p-4">
              <p className="text-sm font-medium text-white/80">AI suggestion</p>
              <p className="mt-2 text-sm leading-6 text-white/85">
                Keep dinner lighter tonight, aim for a 20-minute walk, and reduce
                screen time after 9 PM to protect sleep quality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-white/70 bg-white/80 p-4 shadow-lg shadow-slate-950/5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-slate-950">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
