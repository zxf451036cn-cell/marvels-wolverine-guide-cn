import type { FactStatus } from "@/content/types";

const labels: Record<FactStatus, string> = {
  official: "Official",
  handsOn: "Hands-on",
  postLaunch: "Verify after launch",
};

export function StatusBadge({ status }: { status: FactStatus }) {
  return <span className={`status-badge status-badge--${status}`}>{labels[status]}</span>;
}
