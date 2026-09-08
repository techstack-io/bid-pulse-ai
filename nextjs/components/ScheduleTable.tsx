"use client";

import { useMemo, useState } from "react";
import { scheduleRows, toneClasses } from "@/lib/schedule";

const COLUMNS = ["SECTION", "APPLICATION", "SPECIFIED COMPETITOR REF", "PROPOSED CLARK P/N", "QUANTITY", "COMPLIANCE / JACKET"];

export function ScheduleTable() {
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return scheduleRows;
    return scheduleRows.filter((r) =>
      [r.section, r.application, r.clarkPn, r.compliance, ...r.competitorRefs].join(" ").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section className="overflow-hidden rounded-lg border border-clark-line bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
        <h2 className="text-[19px] font-semibold text-clark-ink">
          Extracted Cable &amp; Hardware Schedule <span className="font-normal text-clark-muted">(Filtered to Clark Equivalents)</span>
        </h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search spec section, part number..."
          aria-label="Search schedule"
          className="w-[290px] max-w-full rounded-[5px] border border-[#d5dde8] px-3 py-2 text-[14.5px] text-clark-ink placeholder:text-clark-muted"
        />
      </div>

      <div className="grid grid-cols-schedule border-y border-clark-line bg-[#f7f9fc] px-6 py-2.5 text-[11.5px] tracking-[0.09em] text-clark-muted">
        {COLUMNS.map((c) => <span key={c}>{c}</span>)}
      </div>

      <ul>
        {rows.map((row) => (
          <li key={row.section} className="grid grid-cols-schedule items-center gap-2 border-b border-clark-hair px-6 py-3.5 text-[14.5px] hover:bg-[#fafcff]">
            <span className="font-mono text-[13px] text-clark">{row.section}</span>
            <span className="text-clark-body">{row.application}</span>
            <span className="font-mono text-[12.5px] leading-relaxed text-[#5b6a7d]">
              {row.competitorRefs.map((ref) => <span key={ref} className="block">{ref}</span>)}
            </span>
            <span className="font-bold text-clark-ink">{row.clarkPn}</span>
            <span className="font-semibold text-clark-body">{row.quantity}</span>
            <span>
              <span className={`inline-block rounded-[5px] px-2.5 py-1 text-[13px] font-semibold ${toneClasses[row.tone]}`}>
                {row.compliance}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="px-6 py-3.5 text-[13.5px] text-clark-muted">
        {rows.length === scheduleRows.length
          ? `Showing all ${scheduleRows.length} extracted line items`
          : `Showing ${rows.length} of ${scheduleRows.length} extracted line items`}
      </p>
    </section>
  );
}
