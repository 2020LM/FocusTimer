// Architecture & Global State Imports
import type { BackgroundItem } from "../../../../components/sideBar/SideBarOptions/backgrounds/types/ObjectDescription.js";

export type BackgroundState = {
  background: string;
  indexBackgroundImage: number;
  backgroundImages: BackgroundItem[];
  backgroundLoaded: boolean;
};
