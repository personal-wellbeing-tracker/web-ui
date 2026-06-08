const steps = [
  {
    title: "Collect",
    description:
      "Your daily meals, workouts, sleep, screen time, steps, and habits are captured in one flow.",
  },
  {
    title: "Interpret",
    description:
      "The AI looks for relationships, like late scrolling affecting sleep or activity improving focus.",
  },
  {
    title: "Plan",
    description:
      "You get short recommendations and a practical plan for the day ahead, not a wall of data.",
  },
];

export default function Section003() {
  return (
    <section
      id="section-003"
      className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] mx-auto max-w-7xl px-2 mb-32"
    >
      <div className="rounded-lg border border-slate-950/5 bg-slate-950 p-6 text-white sm:p-8">
        <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
          Section 003
        </div>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          AI recommendations that feel practical, not noisy.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
          Each insight is grounded in your habits and designed to help you make
          one better decision at a time.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.4rem] bg-white/8 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                Step 0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-lg border border-white/70 bg-white/80 p-6 backdrop-blur-md sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
            What it can help with
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Daily guidance that adapts to your routine.
          </h3>
        </div>

        <div className="grid gap-3">
          {[
            "Suggests meal timing based on energy dips and activity.",
            "Nudges you toward recovery when sleep has been inconsistent.",
            "Plans workouts around your real schedule, not an ideal one.",
            "Flags screen-time habits that may be stealing focus or rest.",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200 bg-slate-50/80 p-4"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
              <p className="text-sm leading-6 text-slate-600">{item}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-gradient-to-br from-amber-50 to-rose-50 p-5">
          <p className="text-sm font-semibold text-slate-900">
            Example recommendation
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            You slept 40 minutes less than usual and your steps are down today.
            The app suggests a lighter evening routine, a short walk, and an
            earlier bedtime target.
          </p>
        </div>
      </div>
    </section>
  );
}
