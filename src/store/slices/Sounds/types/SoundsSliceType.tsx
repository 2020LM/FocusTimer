export type BackgroundSong = {
  id: number;
  isPlaying: string | boolean;
  song: string;
  duration: number;
  type: string;
  repeat: string | boolean;
  currentTime: number;
};

export type SoundsState = {
  songs: BackgroundSong[];
  currentSong: Partial<BackgroundSong>;
  volumeMusic: number;
  mutedMusic: boolean;
};

export type UpdateSongPayload = {
  [K in keyof BackgroundSong]: {
    index: number;
    attribute: K;
    value: BackgroundSong[K];
  };
}[keyof BackgroundSong];
