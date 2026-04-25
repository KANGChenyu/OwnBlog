export function ParticleBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[8%] top-[16%] h-2 w-2 rounded-full bg-cyan-200/70 shadow-[0_0_42px_12px_rgba(6,182,212,.22)]" />
      <div className="absolute right-[20%] top-[24%] h-1.5 w-1.5 rounded-full bg-violet-200/70 shadow-[0_0_38px_10px_rgba(139,92,246,.22)]" />
      <div className="absolute bottom-[24%] left-[45%] h-1 w-1 rounded-full bg-pink-200/70 shadow-[0_0_34px_8px_rgba(236,72,153,.18)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
    </div>
  );
}
