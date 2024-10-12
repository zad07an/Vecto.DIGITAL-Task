"use client";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useSessionMovieId } from "@/hooks/useSessionMovieId";
import { useMovieStore } from "@/store/useMovieStore";
import { usePlayMainFeaturedVideo } from "@/store/usePlayMainFeaturedVideo";
import { useMemo, useRef } from "react";
import { MainFeaturedBackgroundImage } from "./MainFeaturedBackgroundImage";

export const MainFeaturedBackground = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { movie, selectedMovieBackground } = useMovieStore();
  const { isPlaying, setPlay, isPlayButtonClicked } =
    usePlayMainFeaturedVideo();
  const storedMovieSessionId = useSessionMovieId();

  const currentBackground = useMemo(() => {
    return selectedMovieBackground;
  }, [selectedMovieBackground]);

  useIsomorphicLayoutEffect(() => {
    // Only start the timeout if the user hasn't clicked the play button
    if (!isPlayButtonClicked && !isPlaying) {
      timeoutRef.current = setTimeout(() => {
        if (storedMovieSessionId) {
          setPlay(true, false);
        }
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [storedMovieSessionId, isPlaying, isPlayButtonClicked, setPlay]);

  return (
    <div className=" w-full h-[90%] max-h-dvh overflow-hidden absolute top-0 right-0 -z-20">
      {!isPlaying ? (
        <MainFeaturedBackgroundImage
          imageAlt={movie.CoverImage}
          imageSrc={currentBackground}
        />
      ) : (
        <video autoPlay loop muted>
          {/* movie.VideoUrl does not work, instead used this url to show video */}
          <source src="https://videos.pexels.com/video-files/28795094/12479211_2560_1440_24fps.mp4" />
        </video>
      )}
    </div>
  );
};
