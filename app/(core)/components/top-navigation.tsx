const navItems = [
  { href: "#section-001", label: "Overview" },
  { href: "#section-002", label: "Tracking" },
  { href: "#section-003", label: "AI" },
  { href: "#section-004", label: "Wearables" },
];

export default function TopNavigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/65 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#section-001" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-lg shadow-slate-950/15">
            W
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-slate-950">
              Wellbeing AI
            </p>
            <p className="text-xs text-slate-500">Smart habits, daily balance</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#section-004"
          className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Coming soon
        </a>
      </nav>
    </header>
  );
}
