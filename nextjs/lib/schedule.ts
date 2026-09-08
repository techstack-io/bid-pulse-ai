export type ScheduleStatus =
  | "clark-specified"
  | "clark-alternate"
  | "product-selection"
  | "needs-review"
  | "bid-risk"
  | "no-match";

export type Confidence = "high" | "medium" | "low";

export type ScheduleRow = {
  id: string;
  section: string;
  application: string;
  specifiedProducts: string[];
  clarkPn?: string | null;
  quantity?: string | number | null;
  unit?: string | null;
  status: ScheduleStatus;
  compliance?: string;
  sourcePage?: number;
  sourceText?: string;
  confidence?: Confidence;
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
  {
    ref: "§2.18.A.1",
    text: "Precision video cable runs must be furnished in 6 distinct non-black jacket colors for room-level identification.",
  },
  {
    ref: "§2.18.A.3.d",
    text: "All wet-location and tunnel runs require water-blocked, gel-filled construction.",
  },
  {
    ref: "§2.18.B.1.h",
    text: "25 spare connectors of each specified type delivered at project turnover.",
  },
  {
    ref: "§2.17.C.2.a",
    text: "250 ft reeled camera assemblies supplied on Canare R460S (or approved equal) caster reels.",
  },
];

export const scheduleRows: ScheduleRow[] = [
  {
    id: "smpte-camera-25",
    section: "2.17.C.1.c",
    application: "SMPTE Camera Cable (25 ft)",
    specifiedProducts: [
      "Gepco GHF92A-0-25-PS",
      "Clark X-HFCTP-25-MF",
      "Joseph JSCBLDN-25",
    ],
    clarkPn: "X-HFCTP-25-MF",
    quantity: 10,
    unit: "ea",
    status: "clark-specified",
    compliance: "100% Direct Cross",
    confidence: "high",
  },

  {
    id: "smpte-camera-250-reel",
    section: "2.17.C.2.a",
    application: "SMPTE Camera Cable (250 ft Reel)",
    specifiedProducts: [
      "Gepco GHF92A-0-250-PS",
      "Clark X-HFCTP-250-MF",
      "Joseph JSCBLDN-250",
    ],
    clarkPn: "X-HFCTP-250-MF",
    quantity: 2,
    unit: "ea",
    status: "clark-specified",
    compliance: "Canare R460S caster reel required",
    confidence: "high",
  },

  {
    id: "precision-video-25",
    section: "2.17.D.1",
    application: "12G Precision Video (25 ft)",
    specifiedProducts: [
      "Belden/Gepco GVC11-BLACK-25",
      "Clark X-CD7506-BLACK-25",
      "Joseph JVC1694A-25",
    ],
    clarkPn: "X-CD7506-BLACK-25",
    quantity: 10,
    unit: "ea",
    status: "clark-specified",
    compliance: "12G-SDI Certified",
    confidence: "high",
  },

  {
    id: "precision-video-intra-room",
    section: "2.18.A.1.b",
    application: "Precision Video (Intra-room)",
    specifiedProducts: [
      "Belden 4694",
      "Clark CD 7506UHD",
    ],
    clarkPn: "CD 7506UHD",
    quantity: "Bulk (By Run)",
    status: "clark-specified",
    compliance: "Order in 6 Colors",
    confidence: "high",
  },

  {
    id: "smpte-hybrid-riser",
    section: "2.18.A.3.a",
    application: "SMPTE Hybrid (Riser)",
    specifiedProducts: [
      "Belden 7804R",
      "Gepco HDC920R",
      "Clark HFCPV",
    ],
    clarkPn: "HFCPV",
    quantity: "Bulk (By Run)",
    status: "clark-specified",
    compliance: "CMR / Riser Rated",
    confidence: "high",
  },

  {
    id: "smpte-hybrid-wet",
    section: "2.18.A.3.d",
    application: "SMPTE Hybrid (Moisture/Wet)",
    specifiedProducts: [
      "Belden 7804WB",
      "Clark HFCDB",
    ],
    clarkPn: "HFCDB",
    quantity: "Bulk (By Run)",
    status: "clark-specified",
    compliance: "Water-Blocked / Gel",
    confidence: "high",
  },

  {
    id: "smpte-truck-panel",
    section: "2.18.B.3.c",
    application: "SMPTE Truck Interconnect Panel",
    specifiedProducts: [
      "Canare FCS015A-MR",
      "Clark X-HFC-EDW-ST-A6-1.5",
    ],
    clarkPn: "X-HFC-EDW-ST-A6-1.5",
    quantity: "As Required",
    status: "clark-specified",
    compliance: "Isolated Hybrid Module",
    confidence: "high",
  },

  {
    id: "camera-field-panel",
    section: "2.18.B.4.a",
    application: "Camera Field Modular Panel",
    specifiedProducts: [
      "Canare",
      "Neutrik opticalCON",
      "Clark RP-MPA-I",
    ],
    clarkPn: "RP-MPA-I",
    quantity: "As Required",
    status: "clark-specified",
    compliance: "Includes MP-T / MP-S / MP-B",
    confidence: "high",
  },
];