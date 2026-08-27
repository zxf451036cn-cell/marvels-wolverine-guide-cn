"use client";

import { useEffect, useState } from "react";

import { getCountdown, type CountdownValue } from "@/lib/countdown";

type CountdownProps = {
  launchIso: string;
};

const units: readonly { key: keyof Omit<CountdownValue, "launched">; label: string }[] = [
  { key: "days", label: "天" },
  { key: "hours", label: "时" },
  { key: "minutes", label: "分" },
  { key: "seconds", label: "秒" },
];

export function Countdown({ launchIso }: CountdownProps) {
  const [countdown, setCountdown] = useState<CountdownValue | null>(null);

  useEffect(() => {
    const launch = new Date(launchIso);
    const update = () => setCountdown(getCountdown(new Date(), launch));

    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [launchIso]);

  if (!countdown) {
    return <p className="countdown__fallback">2026 年 9 月 15 日 · PS5</p>;
  }

  if (countdown.launched) {
    return <p className="countdown__launched">狩猎已经开始 · 现已登陆 PS5</p>;
  }

  return (
    <div className="countdown" aria-label="距离发售时间">
      {units.map(({ key, label }) => (
        <div className="countdown__unit" key={key}>
          <strong>{String(countdown[key]).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
