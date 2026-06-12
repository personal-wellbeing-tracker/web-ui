import ThemeToggle from "../(core)/components/theme-toggle";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans text-zinc-900 dark:text-zinc-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}