import { getImage } from "@/lib/utils";
import { useState, useTransition } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export const useImage = (imageSrc: string) => {
  const [image, setImage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useIsomorphicLayoutEffect(() => {
    (() => {
      startTransition(async () => {
        try {
          const image = await getImage(imageSrc);
          if (image?.src) {
            setImage(image.src);
          }
        } catch (err) {
          console.error("Failed to get image:", err);
        }
      });
    })();
  }, [imageSrc, getImage, startTransition]);

  return { image, isPending };
};
