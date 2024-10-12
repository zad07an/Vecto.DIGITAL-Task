"use client";

import { Button } from "../atoms/Button";
import { PlayButton } from "../molecules/PlayButton";

export const MainFeaturedButtons = () => {
  return (
    <div className=" w-full flex items-center md:flex-row flex-col gap-4 mt-4">
      <PlayButton />
      <Button className=" md:text-xl text-lg md:w-fit w-full px-10 font-semibold bg-gradient-to-br from-primary-blue to-muted-blue text-foreground">
        More Info
      </Button>
    </div>
  );
};
