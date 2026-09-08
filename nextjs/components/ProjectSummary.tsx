import { project } from "@/lib/schedule";

export function ProjectSummary() {
  return (
    <section className="flex flex-wrap items-center justify-between gap-7 rounded-lg border border-clark-line bg-white px-6 py-5">
      <div className="min-w-[380px] flex-1">
        <h1 className="text-[23px] font-semibold tracking-[-0.01em] text-clark-ink">{project.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-x-[18px] gap-y-2 text-sm text-clark-muted">
          <span><strong className="font-semibold text-clark-ink">Consultant:</strong> {project.consultant}</span>
          <span><strong className="font-semibold text-clark-ink">Architect:</strong> {project.architect}</span>
          <span><strong className="font-semibold text-clark-ink">Section:</strong> {project.section}</span>
          <span className="rounded-[5px] bg-ok-bg px-2.5 py-1 text-[13px] font-semibold text-ok-fg">
            Match Confidence: {project.matchConfidence}
          </span>
        </div>
      </div>
      <dl className="flex gap-10">
        {project.stats.map((s) => (
          <div key={s.label} className="text-right">
            <dd className="text-[27px] font-bold leading-tight text-clark">{s.value}</dd>
            <dt className="mt-1 text-[11px] tracking-[0.09em] text-clark-muted">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
