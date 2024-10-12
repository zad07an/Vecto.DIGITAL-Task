"use client";

import { useImage } from "@/hooks/useImage";
import { useSessionMovieId } from "@/hooks/useSessionMovieId";
import { cn } from "@/lib/utils";
import { useMovieStore } from "@/store/useMovieStore";
import { usePlayMainFeaturedVideo } from "@/store/usePlayMainFeaturedVideo";
import { useMemo } from "react";
import { CarouselItem } from "../templates/Carousel/Carousel";

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

  const isSelected = useMemo(() => {
    return Boolean(movie.Id === itemId && sessionMovieId);
  }, [movie, itemId, sessionMovieId]);

  return (
    image && (
      <CarouselItem
        className={cn(
          "transition-all",
          isSelected
            ? "ring-4 ring-offset-2 ring-offset-background ring-primary-blue relative scale-105"
            : "active:scale-95"
        )}
        onClick={() => selectMovieHandler(itemId)}
        image={image}
      />
    )
  );
};
