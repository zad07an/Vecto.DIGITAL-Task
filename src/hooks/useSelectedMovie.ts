import { getSelectedMovieSessionId } from "@/lib/utils";
import { useMovieStore } from "@/store/useMovieStore";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useUpdateSession = () => {
  const { onSelectMovie, movie } = useMovieStore();

  useIsomorphicLayoutEffect(() => {
    const selectedSessionMovieId = getSelectedMovieSessionId();
    if (selectedSessionMovieId) {
      onSelectMovie(selectedSessionMovieId);
    } else {
      sessionStorage.removeItem("movieId");
    }
  }, [movie]);
};
