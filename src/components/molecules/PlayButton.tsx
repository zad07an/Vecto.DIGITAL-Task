import { useSessionMovieId } from "@/hooks/useSessionMovieId";
import { usePlayMainFeaturedVideo } from "@/store/usePlayMainFeaturedVideo";
import { Pause, Play } from "lucide-react";
import { Button } from "../atoms/Button";

export const PlayButton = () => {
  const { isPlaying, setPlay } = usePlayMainFeaturedVideo();
  const storedMovieSessionId = useSessionMovieId();

  const onTogglePlay = () => {
    if (storedMovieSessionId) {
      setPlay(!isPlaying, true);
    }
  };

  return (
    <Button
      className=" md:text-xl text-lg md:w-fit w-full px-10 font-semibold disabled:pointer-events-none disabled:opacity-50"
      disabled={!storedMovieSessionId}
      onClick={onTogglePlay}
    >
      {isPlaying ? (
        <>
          <Pause className="fill-background" size={18} /> Pause
        </>
      ) : (
        <>
          <Play className="fill-background" size={18} /> Play
        </>
      )}
    </Button>
  );
};
