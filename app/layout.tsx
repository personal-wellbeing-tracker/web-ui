import type { Metadata } from "next";
import "./globals.css";
import ScrollSmootherProvider from "./(core)/components/scroll-smoother-provider";
import TopNavigation from "./(core)/components/top-navigation";
import Footer from "./(core)/components/footer";
import { AuthProvider } from "./(core)/providers/auth-provider";
import ThemeToggle from "./(core)/components/theme-toggle";

export const metadata: Metadata = {
  title: "Wellbeing AI",
  description:
    "An AI-driven wellbeing app that tracks meals, workouts, sleep, screen time, steps, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-950">
        <ThemeToggle />
        <AuthProvider>
          <ScrollSmootherProvider>
            <TopNavigation />
            {children}
            <Footer />
          </ScrollSmootherProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
