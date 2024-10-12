"use client";

import { useImage } from "@/hooks/useImage";
import Image from "next/image";
import { LoadingSpinner } from "../atoms/LoadingSpinner";

interface MainFeaturedBackgroundImageProps {
  imageSrc: string;
  imageAlt: string;
}

export const MainFeaturedBackgroundImage = ({
  imageAlt,
  imageSrc,
}: MainFeaturedBackgroundImageProps) => {
  const { image, isPending } = useImage(imageSrc);

  if (isPending) return <LoadingSpinner />;

  return (
    image && <Image src={image} alt={imageAlt} fill className=" object-cover" />
  );
};
