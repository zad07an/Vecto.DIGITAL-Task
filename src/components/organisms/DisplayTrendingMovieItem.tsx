"use client";

import { useImage } from "@/hooks/useImage";
import { useMovieStore } from "@/store/useMovieStore";
import { usePlayMainFeaturedVideo } from "@/store/usePlayMainFeaturedVideo";
import { CarouselItem } from "../templates/Carousel/Carousel";
import { useSessionMovieId } from "@/hooks/useSessionMovieId";
import { useMemo } from "react";

interface DisplayTrendingMovieItem {
  itemId: string;
  imageSrc: string;
}

export const DisplayTrendingMovieItem = ({
  itemId,
  imageSrc,
}: DisplayTrendingMovieItem) => {
  const { movie, onSelectMovie } = useMovieStore();
  const { setPlay } = usePlayMainFeaturedVideo();
  const { image } = useImage(imageSrc);
  const sessionMovieId = useSessionMovieId();

  const selectMovieHandler = (id: string) => {
    onSelectMovie(id);
    setPlay(false, false);
  };

  const isSelectedMovie = useMemo(() => {
    return movie.Id === itemId && sessionMovieId;
  }, [movie, itemId, sessionMovieId]);

  return (
    image && (
      <CarouselItem
        className={`${
          isSelectedMovie &&
          "ring-4 ring-offset-2 ring-offset-background ring-primary-blue relative scale-105"
        }`}
        onClick={() => selectMovieHandler(itemId)}
        image={image}
      />
    )
  );
};
