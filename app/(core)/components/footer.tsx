const links = [
  { href: "#section-001", label: "Overview" },
  { href: "#section-002", label: "Tracking" },
  { href: "#section-003", label: "AI" },
  { href: "#section-004", label: "Wearables" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-950">
            Wellbeing AI
          </p>
          <p className="mt-1 text-sm text-slate-500">
            A calmer way to understand your habits and plan your day.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-950 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
