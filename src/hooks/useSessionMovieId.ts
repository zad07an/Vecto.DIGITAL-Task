import { getSelectedMovieSessionId } from "@/lib/utils";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";
import { useMovieStore } from "@/store/useMovieStore";

export const useSessionMovieId = () => {
  const [movieId, setMovieId] = useState<string | null>(null);
  const { movie } = useMovieStore();

  useIsomorphicLayoutEffect(() => {
    const movieSessionId = getSelectedMovieSessionId();
    if (movieSessionId) {
      setMovieId(movieSessionId);
    }

    return () => {
      setMovieId(null);
    };
  }, [getSelectedMovieSessionId, movie]);

  return movieId;
};
