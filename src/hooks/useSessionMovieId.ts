import { getSelectedMovieSessionId } from "@/lib/utils";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useSessionMovieId = () => {
  const [movieId, setMovieId] = useState<string | null>(null);

  useIsomorphicLayoutEffect(() => {
    const movieSessionId = getSelectedMovieSessionId();
    if (movieSessionId) {
      setMovieId(movieSessionId);
    }

    return () => {
      setMovieId(null);
    };
  }, []);

  return movieId;
};
