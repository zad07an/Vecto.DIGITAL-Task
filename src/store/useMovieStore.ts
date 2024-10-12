import DATA from "@/data/data.json";
import { getSelectedMovieSessionId } from "@/lib/utils";
import { TrendingMovieDataProps } from "@/types/definitions";
import { create } from "zustand";

interface MovieStoreProps {
  movie: TrendingMovieDataProps;
  movieId: string;
  selectedMovieBackground: string;
  onSelectMovie: (movieId: string | undefined) => void;
}

export const useMovieStore = create<MovieStoreProps>((set) => ({
  movie: { ...DATA.Featured, VideoUrl: "" },
  movieId:
    (typeof window !== "undefined" && getSelectedMovieSessionId()) ||
    DATA.Featured.Id,
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
