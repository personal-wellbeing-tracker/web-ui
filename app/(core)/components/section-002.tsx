export default function Section002() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-slate-500 uppercase tracking-widest">Features</h2>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Everything you need. Nothing you don't.
        </p>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          We removed the complicated tracking widgets and daily point systems. Keep your focus on simple daily metrics.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col border-t border-slate-200 pt-6">
            <dt className="text-xl font-semibold leading-7 text-slate-950">
              01. Minimal Logging
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
              <p className="flex-auto">Easily record meals, workouts, sleep quality, and active time. Built to be completed in under 60 seconds a day.</p>
            </dd>
          </div>
          <div className="flex flex-col border-t border-slate-200 pt-6">
            <dt className="text-xl font-semibold leading-7 text-slate-950">
              02. Calm Analytics
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
              <p className="flex-auto">No stress logs or scoreboards. Our AI looks at your patterns and gives simple, conversational notes on energy.</p>
            </dd>
          </div>
          <div className="flex flex-col border-t border-slate-200 pt-6" id="privacy">
            <dt className="text-xl font-semibold leading-7 text-slate-950">
              03. Privacy First
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
              <p className="flex-auto">We respect your data. Your tracked details are encrypted and private, and you can export or delete your profile anytime.</p>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
