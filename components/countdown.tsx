"use client";

import { useEffect, useState } from "react";

import { getCountdown, type CountdownValue } from "@/lib/countdown";

type CountdownProps = {
  launchIso: string;
};

const units: readonly { key: keyof Omit<CountdownValue, "launched">; label: string }[] = [
  { key: "days", label: "DAYS" },
  { key: "hours", label: "HRS" },
  { key: "minutes", label: "MIN" },
  { key: "seconds", label: "SEC" },
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
    return <p className="countdown__fallback">SEPTEMBER 15, 2026 · PS5</p>;
  }

  if (countdown.launched) {
    return <p className="countdown__launched">THE HUNT HAS BEGUN · AVAILABLE ON PS5</p>;
  }

  return (
    <div className="countdown" aria-label="Time until launch">
      {units.map(({ key, label }) => (
        <div className="countdown__unit" key={key}>
          <strong>{String(countdown[key]).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
