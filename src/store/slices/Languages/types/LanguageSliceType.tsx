// Architecture & Global State Imports
import type { LanguageData } from "../../../../components/sideBar/SideBarOptions/languegueOptions/data/languageData.ts";

export type Language = (typeof LanguageData)[number];

export type LanguageState = {
  languages: Language[];
  currentLanguage: Language;
};
