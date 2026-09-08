# Clark Wire & Cable — Spec Extraction Boilerplate

Next.js (App Router) + Tailwind CSS + TypeScript starter for the submittal cross-reference view.

```bash
npm install
npm run dev
```

## Layout

- `app/layout.tsx` — fonts (Source Sans 3 / IBM Plex Mono) + globals
- `app/page.tsx` — page composition
- `components/SiteHeader.tsx` — Clark blue global nav (`ClarkLogo` = stripe mark + wordmark; swap in the real SVG when available)
- `components/ProjectSummary.tsx` — project meta + KPI stats
- `components/ComplianceFlags.tsx` — auto-flag callout with expandable rule list (client)
- `components/ScheduleTable.tsx` — searchable extracted schedule (client)
- `lib/schedule.ts` — typed data + compliance tone map; replace with your API/DB fetch

## Brand tokens

Defined in `tailwind.config.ts`: `clark` (#0043c8) and its ink/body/muted/line neutrals, plus
`ok` / `warn` / `info` badge pairs. Use these instead of raw hex.
