"use client";

import { useMemo, useState } from "react";
import { scheduleRows } from "@/lib/schedule";

const COLUMNS = [
  "SECTION",
  "APPLICATION",
  "SPECIFIED PRODUCT",
  "CLARK PRODUCT",
  "QUANTITY",
  "STATUS",
  "COMPLIANCE",
  "ACTIONS",
];

const statusClasses: Record<string, string> = {
  "clark-specified": "bg-emerald-50 text-emerald-700",
  "clark-alternate": "bg-blue-50 text-blue-700",
  "product-selection": "bg-amber-50 text-amber-700",
  "needs-review": "bg-orange-50 text-orange-700",
  "bid-risk": "bg-red-50 text-red-700",
  "no-match": "bg-slate-100 text-slate-600",
};

const statusLabels: Record<string, string> = {
  "clark-specified": "Clark Specified",
  "clark-alternate": "Clark Alternate",
  "product-selection": "Product to Select",
  "needs-review": "Needs Review",
  "bid-risk": "Bid Risk",
  "no-match": "No Clark Match",
};

export function ScheduleTable() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();

    return scheduleRows.filter((row) => {
      const matchesStatus =
        statusFilter === "all" || row.status === statusFilter;

      if (!matchesStatus) return false;

      if (!q) return true;

      return [
        row.section,
        row.application,
        row.clarkPn ?? "",
        row.compliance ?? "",
        row.quantity ?? "",
        row.status,
        ...(row.specifiedProducts ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, statusFilter]);

  return (
    <section className="overflow-hidden rounded-lg border border-clark-line bg-white">
      <div className="flex flex-wrap items-start justify-between gap-4 px-6 py-5">
        <div>
          <h2 className="text-[19px] font-semibold text-clark-ink">
            Clark Takeoff / Bill of Materials
          </h2>

          <p className="mt-1 text-[13.5px] text-clark-muted">
            Extracted from the bid specification. Review quantities, product
            matches, and unresolved requirements before requesting pricing from
            Clark.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-[5px] border border-[#d5dde8] bg-white px-3 py-2 text-[14px] text-clark-ink"
          >
            <option value="all">All statuses</option>
            <option value="clark-specified">Clark Specified</option>
            <option value="clark-alternate">Clark Alternate</option>
            <option value="product-selection">Product to Select</option>
            <option value="needs-review">Needs Review</option>
            <option value="bid-risk">Bid Risk</option>
            <option value="no-match">No Clark Match</option>
          </select>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search section, product, part number..."
            aria-label="Search takeoff"
            className="w-[300px] max-w-full rounded-[5px] border border-[#d5dde8] px-3 py-2 text-[14px] text-clark-ink placeholder:text-clark-muted"
          />

          <button
            type="button"
            className="rounded-[5px] border border-[#cbd5e1] bg-white px-4 py-2 text-[14px] font-semibold text-clark-ink hover:bg-[#f8fafc]"
          >
            Export
          </button>

          <button
            type="button"
            className="rounded-[5px] bg-clark px-4 py-2 text-[14px] font-semibold text-white hover:opacity-90"
          >
            Request Quote
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1250px]">
          <div className="grid grid-cols-[90px_1.5fr_1.7fr_1.2fr_90px_150px_1.4fr_90px] border-y border-clark-line bg-[#f7f9fc] px-6 py-2.5 text-[11px] tracking-[0.08em] text-clark-muted">
            {COLUMNS.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>

          <ul>
            {rows.map((row) => (
              <li
                key={row.id}
                className="grid grid-cols-[90px_1.5fr_1.7fr_1.2fr_90px_150px_1.4fr_90px] items-start gap-3 border-b border-clark-hair px-6 py-4 text-[14px] hover:bg-[#fafcff]"
              >
                <span className="font-mono text-[12.5px] text-clark">
                  {row.section}
                </span>

                <div>
                  <div className="font-medium text-clark-body">
                    {row.application}
                  </div>

                  {row.sourcePage && (
                    <div className="mt-1 text-[12px] text-clark-muted">
                      Page {row.sourcePage}
                    </div>
                  )}
                </div>

                <div className="font-mono text-[12.5px] leading-relaxed text-[#5b6a7d]">
                  {row.specifiedProducts?.length ? (
                    row.specifiedProducts.map((product) => (
                      <span key={product} className="block">
                        {product}
                      </span>
                    ))
                  ) : (
                    <span className="text-clark-muted">Not specified</span>
                  )}
                </div>

                <div>
                  {row.clarkPn ? (
                    <span className="inline-block rounded-[5px] bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800">
                      {row.clarkPn}
                    </span>
                  ) : (
                    <span className="text-[13px] text-clark-muted">
                      To be determined
                    </span>
                  )}
                </div>

                <span className="font-semibold text-clark-body">
                  {row.quantity ?? "—"}
                  {row.unit ? ` ${row.unit}` : ""}
                </span>

                <span>
                  <span
                    className={`inline-block rounded-[5px] px-2.5 py-1 text-[12px] font-semibold ${
                      statusClasses[row.status] ??
                      "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {statusLabels[row.status] ?? row.status}
                  </span>
                </span>

                <div>
                  <div className="text-[13px] leading-relaxed text-clark-body">
                    {row.compliance || "—"}
                  </div>

                  {row.confidence && (
                    <div className="mt-1 text-[11.5px] uppercase tracking-[0.05em] text-clark-muted">
                      {row.confidence} confidence
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  className="text-left text-[13px] font-semibold text-clark hover:underline"
                >
                  Review
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5">
        <p className="text-[13.5px] text-clark-muted">
          {rows.length === scheduleRows.length
            ? `Showing all ${scheduleRows.length} extracted line items`
            : `Showing ${rows.length} of ${scheduleRows.length} extracted line items`}
        </p>

        <p className="text-[12.5px] text-clark-muted">
          AI-extracted results should be reviewed before submitting for pricing.
        </p>
      </div>
    </section>
  );
}
