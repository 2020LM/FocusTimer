// Third-Party & Ecosystem Imports
import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

// Internal Tools & Utilities
import { translator } from "../../../../../../translator/translator.js";
import type { BackgroundImageProps } from "../../../types/ObjectDescription.js";
import { useBackgroundImageSelection } from "../../../hooks/useBackgroundImageSelection.js";

// Component Styles
import classes from "../../../view/backgrounds.module.css";

export const BackgroundImage = ({
  item,
  index,
  currentLanguage,
  type,
  isWide,
}: BackgroundImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { setBackgroundAndAlternativeImages } =
    useBackgroundImageSelection();

  const imageSrc = isWide ? item.src : item.src2;
  const altText =
    item.alt != undefined
      ? translator(currentLanguage.name, item.alt)
      : translator(currentLanguage.name, type);

  return (
    <div key={index} className={`${classes.fixxingMargins}`}>
      <div
        style={{
          display: !isLoaded ? "block" : "none",
        }}
      >
        <Blurhash width={68} height={60} hash={item.hash1} />
      </div>

      <div
        style={{
          display: isLoaded ? "block" : "none",
        }}
      >
        <button
          type="button"
          className={classes.backgroundButton}
          onClick={() =>
            setBackgroundAndAlternativeImages(item.src, item.src2, index)
          }
        >
          <img
            onLoad={() => setIsLoaded(true)}
            src={imageSrc}
            alt={altText}
          />
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
