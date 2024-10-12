import { useImage } from "@/hooks/useImage";
import Image from "next/image";
import { LoadingSpinner } from "../atoms/LoadingSpinner";

interface MainFeaturedMovieTitle {
  movieTitle: string;
  movieTitleImage: string;
}

export const MainFeaturedMovieTitle = ({
  movieTitle,
  movieTitleImage,
}: MainFeaturedMovieTitle) => {
  const { image, isPending } = useImage(movieTitleImage);

  if (isPending) return <LoadingSpinner />;

  return (
    <>
      {image ? (
        <Image
          src={image}
          alt=""
          width={576}
          height={80}
          className="object-contain"
        />
      ) : (
        <p className=" text-6xl font-semibold uppercase">{movieTitle}</p>
      )}
    </>
  );
};
