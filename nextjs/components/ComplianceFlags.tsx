"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { rules } from "@/lib/schedule";

export function ComplianceFlags() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="flex items-center gap-4 rounded-md border border-[#d6e2fb] border-l-4 border-l-clark bg-clark-tint px-5 py-4">
        <Zap size={18} className="shrink-0 text-warn-fg" />
        <p className="flex-1 text-[14.5px] leading-relaxed text-clark-body [text-wrap:pretty]">
          <strong className="font-bold text-clark-ink">Automated Compliance Flags Detected:</strong>{" "}
          Precision video cables require <strong className="font-bold">6 distinct non-black colors</strong> (§2.18.A.1).
          Wet/tunnel runs require <strong className="font-bold">water-blocked gel-fill</strong> (§2.18.A.3.d).{" "}
          <strong className="font-bold">25 spare connectors</strong> mandated for turnover (§2.18.B.1.h).
        </p>
        <button
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-[5px] border border-clark px-4 py-2.5 text-[14.5px] font-semibold leading-tight text-clark hover:bg-clark/5"
        >
          {open ? "Hide Rules" : `View All ${rules.length} Rules`}
        </button>
      </section>

      {open && (
        <section className="rounded-lg border border-clark-line bg-white px-6 py-5">
          <h2 className="mb-3 text-xs tracking-[0.1em] text-clark-muted">MANDATED RULES ({rules.length})</h2>
          <ul>
            {rules.map((r) => (
              <li key={r.ref} className="flex items-baseline gap-4 border-t border-clark-hair py-2.5 text-[14.5px]">
                <span className="min-w-[96px] font-mono text-[13px] text-clark">{r.ref}</span>
                <span className="text-clark-body">{r.text}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
