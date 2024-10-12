"use client";

import { MainFeaturedShadow } from "../atoms/MainFeaturedShadow";
import { MainFeaturedBackground } from "../molecules/MainFeaturedBackground";
import { MainFeaturedDetails } from "../organisms/MainFeaturedDetails";

export const MainFeatured = () => {
  return (
    <div className="p-10 lg:pt-36 md:pt-28 pt-20 w-full h-full relative">
      <MainFeaturedBackground />
      <MainFeaturedDetails />
      <MainFeaturedShadow direction="to-top" />
      <MainFeaturedShadow direction="to-right" />
    </div>
  );
};
