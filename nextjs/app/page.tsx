import { SiteHeader } from "@/components/SiteHeader";
import { ProjectSummary } from "@/components/ProjectSummary";
import { ComplianceFlags } from "@/components/ComplianceFlags";
import { ScheduleTable } from "@/components/ScheduleTable";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-[1480px] flex-1 flex-col gap-[18px] p-6">
        <ProjectSummary />
        <ComplianceFlags />
        <ScheduleTable />
      </main>
    </div>
  );
}
