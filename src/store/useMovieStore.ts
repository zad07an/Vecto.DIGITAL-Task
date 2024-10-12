import DATA from "@/data/data.json";
import { TrendingMovieDataProps } from "@/types/definitions";
import { create } from "zustand";

interface MovieStoreProps {
  movie: TrendingMovieDataProps;
  selectedMovieBackground: string;
  onSelectMovie: (movieId: string | undefined) => void;
}

export const useMovieStore = create<MovieStoreProps>((set) => ({
  movie: { ...DATA.Featured, VideoUrl: "" },
  selectedMovieBackground: DATA.Featured.CoverImage,
  onSelectMovie: (movieId) => {
    if (!movieId) return;

    sessionStorage.setItem("movieId", movieId);
    const movie = DATA.TendingNow.find((item) => item.Id === movieId);

    return set(() => ({
      movie,
      selectedMovieBackground: movie?.CoverImage,
    }));
  },
}));
