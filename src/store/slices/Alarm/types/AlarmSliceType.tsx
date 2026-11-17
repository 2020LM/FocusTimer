// Architecture & Global State Imports
import type { AlarmSoundData } from "../../../../components/sideBar/SideBarOptions/alarmSounds/data/alarmSoundData.ts";

export type AlarmSound = (typeof AlarmSoundData)[number];

export type AlarmState = {
  alarmSounds: AlarmSound[];
  alarmVolume: number;
  currentAlarm: AlarmSound;
  mutedAlarm: boolean;
};
