import type { Metadata } from "next";
import "./globals.css";
import ScrollSmootherProvider from "./(core)/components/scroll-smoother-provider";
import TopNavigation from "./(core)/components/top-navigation";
import Footer from "./(core)/components/footer";

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
      <body className="min-h-full flex flex-col bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(245,240,231,1)_35%,_rgba(237,242,247,1)_100%)] text-slate-950">
        <ScrollSmootherProvider>
          <TopNavigation />
          {children}
          <Footer />
        </ScrollSmootherProvider>
      </body>
    </html>
  );
}
