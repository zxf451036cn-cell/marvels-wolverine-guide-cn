import type { FactStatus } from "@/content/types";

const labels: Record<FactStatus, string> = {
  official: "官方确认",
  handsOn: "媒体试玩",
  postLaunch: "发售后验证",
};

export function StatusBadge({ status }: { status: FactStatus }) {
  return <span className={`status-badge status-badge--${status}`}>{labels[status]}</span>;
}
