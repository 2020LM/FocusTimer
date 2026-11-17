
// Third-Party & Ecosystem Imports
import React from "react";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectBackgroundImagesByType } from "../../../../../../store/slices/Background/BackgroundSlice.js";
import { selectCurrentLanguage } from "../../../../../../store/slices/Languages/LanguageSlice.js";
import { RootState } from "../../../../../../store/store.js";

// Internal Tools & Utilities
import BackgroundImage from "../backgroundImage/view/BackgroundImage.tsx";
import { useBackgroundByTypeStyle } from "./BackgroundByTypeStyle.ts";

// Component Styles
import classes from "../../view/backgrounds.module.css";

export const BackgroundByType = (props: { type: string }) => {
  const backgroundImages = useSelector((state: RootState) =>
    selectBackgroundImagesByType(state, props.type)
  );

  const currentLanguage = useSelector(selectCurrentLanguage);
  const { isWide } = useBackgroundByTypeStyle();

  return (
    <div className={`${classes.container}  m-4`}>
      {backgroundImages.map((item, index) => (
        <BackgroundImage
          key={`${item.type}-${index}`}
          item={item}
          index={index}
          currentLanguage={currentLanguage}
          type={props.type}
          isWide={isWide}
        />
      ))}
    </div>
  );
};
