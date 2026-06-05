import Section001 from "./(core)/components/section-001";
import Section002 from "./(core)/components/section-002";
import Section003 from "./(core)/components/section-003";
import Section004 from "./(core)/components/section-004";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute right-[-10rem] top-[16rem] h-[24rem] w-[24rem] rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-amber-100/70 blur-3xl" />
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <Section001 />
        <Section002 />
        <Section003 />
        <Section004 />
      </div>
    </main>
  );
}
