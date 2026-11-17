
// Architecture & Global State Imports
import { useAppSelector } from "../../../../../store/store.ts";
import { selectSongsByType } from "../../../../../store/slices/Sounds/SoundsSlice.ts";

// Internal Tools & Utilities
import BackgroundSound from "./BackgroundSound.tsx";

// Component Styles
import classes from "./backgroundSounds.module.css";

export const SongByType = ({ type }: { type: string }) => {
  const songs = useAppSelector((state) => selectSongsByType(state, type));

  return (
    <>
      <div className={`${classes.container}`}>
        <div className={`${classes.music}`}>
          {songs.map((item) => {
            return <BackgroundSound key={item.id} index={item.id - 1} />;
          })}
        </div>
      </div>
    </>
  );
};
