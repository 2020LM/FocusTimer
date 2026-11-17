export type TimerValues = {
  totalSeconds: number;
  seconds: number;
  minutes: number;
};

export type TimeState = {
  initialSeconds: number;
  fixingTimer: boolean;
  triggeredFixingTime: boolean;
  secondsRestart: number;
  timeSetByUser: boolean;
} & TimerValues;
