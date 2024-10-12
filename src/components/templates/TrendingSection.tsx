"use client";

import { TrendingSectionCarousel } from "../organisms/TrendingSectionCarousel";

export const TrendingSection = () => {
  return (
    <div className=" w-full flex flex-col gap-4 p-4 pb-0 absolute bottom-0">
      <p className=" text-3xl">Trending Now</p>
      <TrendingSectionCarousel />
    </div>
  );
};
