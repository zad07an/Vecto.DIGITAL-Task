"use client";

import { useImage } from "@/hooks/useImage";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useSessionMovieId } from "@/hooks/useSessionMovieId";
import { useMovieStore } from "@/store/useMovieStore";
import { usePlayMainFeaturedVideo } from "@/store/usePlayMainFeaturedVideo";
import { useState } from "react";
import { CarouselItem } from "../templates/Carousel/Carousel";
import { cn } from "@/lib/utils";

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
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const selectMovieHandler = (id: string) => {
    onSelectMovie(id);
    setPlay(false, false);
  };

  useIsomorphicLayoutEffect(() => {
    setIsSelected(Boolean(movie.Id === itemId && sessionMovieId));
    return () => {
      setIsSelected(false);
    };
  }, [movie, itemId, sessionMovieId]);

  return (
    image && (
      <CarouselItem
        className={cn(
          "transition-all",
          !!isSelected
            ? "ring-4 ring-offset-2 ring-offset-background ring-primary-blue relative scale-105"
            : "active:scale-95"
        )}
        onClick={() => selectMovieHandler(itemId)}
        image={image}
      />
    )
  );
};
