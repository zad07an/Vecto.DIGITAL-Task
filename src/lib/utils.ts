import clsx from "clsx";
import { ClassValue } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export async function getImage(
  src: string | undefined
): Promise<StaticImageData | null> {
  try {
    if (!src) return null;
    const image = await import(`@/assets/${src}`);
    return image.default as StaticImageData;
  } catch (error) {
    console.error("Image not found:", error);
    return null;
  }
}

export function getSelectedMovieSessionId() {
  return sessionStorage.getItem("movieId") || undefined;
}

export function getReleaseYear(date: string) {
  const newDate = new Date(date);

  return newDate.getFullYear();
}

export function calculateDuration(movieDuration: string) {
  const duration = Number(movieDuration);

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  if (!hours) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}
