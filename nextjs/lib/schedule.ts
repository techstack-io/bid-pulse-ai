export type Tone = "ok" | "warn" | "info";

export type ScheduleRow = {
  section: string;
  application: string;
  competitorRefs: string[];
  clarkPn: string;
  quantity: string;
  compliance: string;
  tone: Tone;
};

export const toneClasses: Record<Tone, string> = {
  ok: "bg-ok-bg text-ok-fg",
  warn: "bg-warn-bg text-warn-fg",
  info: "bg-info-bg text-info-fg",
};

export const project = {
  title: "Levi's Stadium Improvements — Level 800 Production Suite",
  consultant: "WJHW, Inc.",
  architect: "Populous (21.5360.06)",
  section: "11 63 50 Video Production",
  matchConfidence: "98.4%",
  stats: [
    { value: "28", label: "IDENTIFIED RUNS/PARTS" },
    { value: "100%", label: "CLARK EQUIVALENT COVERAGE" },
    { value: "25 Spares", label: "AUTO-FLAGGED RULE" },
  ],
};

export const rules = [
  { ref: "§2.18.A.1", text: "Precision video cable runs must be furnished in 6 distinct non-black jacket colors for room-level identification." },
  { ref: "§2.18.A.3.d", text: "All wet-location and tunnel runs require water-blocked, gel-filled construction." },
  { ref: "§2.18.B.1.h", text: "25 spare connectors of each specified type delivered at project turnover." },
  { ref: "§2.17.C.2.a", text: "250 ft reeled camera assemblies supplied on Canare R460S (or approved equal) caster reels." },
];

export const scheduleRows: ScheduleRow[] = [
  { section: "2.17.C.1.c", application: "SMPTE Camera Cable (25 ft)", competitorRefs: ["Gepco GHF92A-0-25-PS", "Joseph JSCBLDN-25"], clarkPn: "Clark X-HFCTP-25-MF", quantity: "10 ea", compliance: "100% Direct Cross", tone: "ok" },
  { section: "2.17.C.2.a", application: "SMPTE Camera Cable (250 ft Reel)", competitorRefs: ["Gepco GHF92A-0-250-PS", "Joseph JSCBLDN-250"], clarkPn: "Clark X-HFCTP-250-MF", quantity: "2 ea", compliance: "Canare R460S Caster Reel Req.", tone: "warn" },
  { section: "2.17.D.1", application: "12G Precision Video (25 ft)", competitorRefs: ["Belden GVC11-BLACK-25", "Joseph JVC1694A-25"], clarkPn: "Clark X-CD7506-BLACK-25", quantity: "10 ea", compliance: "12G-SDI Certified", tone: "ok" },
  { section: "2.18.A.1.b", application: "Precision Video (Intra-room)", competitorRefs: ["Belden 4694"], clarkPn: "Clark CD 7506UHD", quantity: "Bulk (By Run)", compliance: "Order in 6 Colors", tone: "warn" },
  { section: "2.18.A.3.a", application: "SMPTE Hybrid (Riser)", competitorRefs: ["Belden 7804R  /  Gepco HDC920R"], clarkPn: "Clark HFCPV", quantity: "Bulk (By Run)", compliance: "CMR / Riser Rated", tone: "ok" },
  { section: "2.18.A.3.d", application: "SMPTE Hybrid (Moisture/Wet)", competitorRefs: ["Belden 7804WB"], clarkPn: "Clark HFCDB", quantity: "Bulk (By Run)", compliance: "Water-Blocked / Gel", tone: "ok" },
  { section: "2.18.B.3.c", application: "SMPTE Truck Interconnect Panel", competitorRefs: ["Canare FCS015A-MR"], clarkPn: "Clark X-HFC-EDW-ST-A6-1.5", quantity: "As Required", compliance: "Isolated Hybrid Module", tone: "info" },
  { section: "2.18.B.4.a", application: "Camera Field Modular Panel", competitorRefs: ["Canare  /  Neutrik opticalCON"], clarkPn: "Clark RP-MPA-I", quantity: "As Required", compliance: "Includes MP-T / MP-S / MP-B", tone: "ok" },
];
