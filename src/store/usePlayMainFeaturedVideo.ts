import { create } from "zustand";

interface PlayMainFeaturedVideoProps {
  isPlaying: boolean;
  isPlayButtonClicked: boolean;
  setPlay: (isPlayed: boolean, isClicked: boolean) => void;
}

export const usePlayMainFeaturedVideo = create<PlayMainFeaturedVideoProps>(
  (set) => ({
    isPlaying: false,
    isPlayButtonClicked: false,
    setPlay: (isPlaying, isPlayButtonClicked) =>
      set(() => ({ isPlaying, isPlayButtonClicked })),
  })
);
