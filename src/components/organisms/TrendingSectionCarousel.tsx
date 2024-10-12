"use client";

import DATA from "@/data/data.json";
import { useClient } from "@/hooks/useClient";
import { useUpdateSession } from "@/hooks/useSelectedMovie";
import { filterAndSortData } from "@/lib/filter-and-sort-data";
import { useMovieStore } from "@/store/useMovieStore";
import { useMemo } from "react";
import { Carousel } from "../templates/Carousel/Carousel";
import { DisplayTrendingMovieItem } from "./DisplayTrendingMovieItem";
import { LoadingSpinner } from "../atoms/LoadingSpinner";
import { useSessionMovieId } from "@/hooks/useSessionMovieId";

export const TrendingSectionCarousel = () => {
  const { movie } = useMovieStore();
  const isClient = useClient();
  const sessionMovieId = useSessionMovieId();

  const filteredAndSortedData = useMemo(() => {
    const restOfMovies = filterAndSortData(movie.Id);
    return (sessionMovieId ? [movie, ...restOfMovies] : DATA.TendingNow).slice(
      0,
      50
    );
  }, [movie, sessionMovieId]);

  useUpdateSession();

  if (!isClient)
    return (
      <div className=" h-72">
        <LoadingSpinner />
      </div>
    );

  return (
    <Carousel>
      {filteredAndSortedData.map((item) => (
        <DisplayTrendingMovieItem
          key={item.Id}
          itemId={item.Id}
          imageSrc={item.CoverImage}
        />
      ))}
    </Carousel>
  );
};
