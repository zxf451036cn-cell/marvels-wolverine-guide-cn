import { describe, expect, it } from "vitest";

import { getCountdown } from "@/lib/countdown";

describe("getCountdown", () => {
  it("calculates whole remaining units", () => {
    expect(
      getCountdown(
        new Date("2026-09-14T00:00:00+08:00"),
        new Date("2026-09-15T00:00:00+08:00"),
      ),
    ).toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0, launched: false });
  });

  it("splits partial days into hours, minutes, and seconds", () => {
    expect(
      getCountdown(
        new Date("2026-09-14T12:34:45+08:00"),
        new Date("2026-09-15T00:00:00+08:00"),
      ),
    ).toEqual({ days: 0, hours: 11, minutes: 25, seconds: 15, launched: false });
  });

  it("never returns negative values after launch", () => {
    expect(
      getCountdown(
        new Date("2026-09-16T00:00:00+08:00"),
        new Date("2026-09-15T00:00:00+08:00"),
      ),
    ).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, launched: true });
  });
});
