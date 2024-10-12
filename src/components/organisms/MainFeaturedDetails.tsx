"use client";

import { calculateDuration, getReleaseYear } from "@/lib/utils";
import { useMovieStore } from "@/store/useMovieStore";
import { MainFeaturedMovieTitle } from "../molecules/MainFeaturedMovieTitle";
import { MainFeaturedButtons } from "./MainFeaturedButtons";

export const MainFeaturedDetails = () => {
  const { movie } = useMovieStore();

  return (
    <div className=" xl:w-1/2 lg:w-3/4 w-full flex flex-col gap-4">
      <p className=" text-2xl font-semibold uppercase text-primary-muted">
        {movie.Category}
      </p>
      <MainFeaturedMovieTitle
        movieTitle={movie.Title}
        movieTitleImage={movie.TitleImage}
      />
      <div className=" w-fit flex items-center gap-4 font-semibold text-xl">
        <span>{getReleaseYear(movie.Date)}</span>
        <span>{movie.MpaRating}</span>
        <span>{calculateDuration(movie.Duration)}</span>
      </div>
      <p className="line-clamp-4 text-xl font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At deleniti,
        cumque rem tempora repudiandae illo, ipsa molestias ipsum, ratione
        aliquid sapiente asperiores. Quasi ullam magni, iste vero in numquam
        nobis aliquid ipsam magnam consequatur neque voluptate. Laborum labore
        aliquam ut tempora voluptates illum, neque amet pariatur perspiciatis
        harum aliquid fuga.
      </p>
      <MainFeaturedButtons />
    </div>
  );
};
