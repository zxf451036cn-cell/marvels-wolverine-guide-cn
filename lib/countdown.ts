export type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  launched: boolean;
};

export function getCountdown(now: Date, launch: Date): CountdownValue {
  const remainingSeconds = Math.max(
    0,
    Math.floor((launch.getTime() - now.getTime()) / 1000),
  );
  const launched = remainingSeconds === 0;
  const days = Math.floor(remainingSeconds / 86_400);
  const hours = Math.floor((remainingSeconds % 86_400) / 3_600);
  const minutes = Math.floor((remainingSeconds % 3_600) / 60);
  const seconds = remainingSeconds % 60;

  return { days, hours, minutes, seconds, launched };
}
