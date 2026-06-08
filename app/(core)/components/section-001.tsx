import Link from "next/link";

export default function Section001() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        <h1 className="max-w-lg text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          A calm space for your daily rhythm.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Track meals, sleep, screen time, and workouts without the complexity. Wellbeing AI turns your habits into gentle, actionable insights to help you build sustainable balance.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/login"
            className="rounded-md bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Get Started
          </Link>
          <a href="#features" className="text-sm font-semibold leading-6 text-slate-950 hover:text-slate-700 transition-colors">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow border border-slate-200 p-8 rounded-lg bg-slate-50">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-slate-200 pb-4">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Live Summary</span>
            <span className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">Today</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Sleep</p>
              <p className="text-2xl font-semibold text-slate-950 mt-1">7.6 hrs</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Screen Time</p>
              <p className="text-2xl font-semibold text-slate-950 mt-1">2.4 hrs</p>
            </div>
          </div>
          <div className="bg-white p-4 border border-slate-200 rounded">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">AI Insight</p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">Your recovery is high today. Ideal day for a moderate workout, and plan to wind down screens by 9:30 PM.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
