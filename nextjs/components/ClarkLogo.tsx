export function ClarkLogo() {
  return (
    <div className="flex items-center gap-3.5">
      <div className="flex w-10 flex-col gap-0.5" aria-hidden>
        {[100, 92, 84, 76, 68, 60, 52].map((w) => (
          <span key={w} className="block h-0.5 bg-white" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div>
        <div className="text-[22px] leading-none tracking-[0.34em]">CLARK</div>
        <div className="mt-1.5 text-[9px] tracking-[0.3em] opacity-95">WIRE &amp; CABLE</div>
      </div>
      <span className="sr-only">Clark Wire &amp; Cable</span>
    </div>
  );
}
