"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { createContext, ReactNode, useContext } from "react";
import "./carousel.css";
import { PropsWithClassName } from "@/types/definitions";
import { cn } from "@/lib/utils";

interface CarouselProps extends PropsWithClassName {
  children: ReactNode;
}

const CarouselContext = createContext<boolean | undefined>(undefined);

const useCarouselContext = (componentName: string) => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error(`${componentName} should be used withing CarouselContext`);
  }
  return context;
};

export const Carousel = ({ children, className }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    active: true,
  });

  return (
    <CarouselContext.Provider value={true}>
      <section className={cn("embla", className)}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container py-4 pl-4">{children}</div>
        </div>
      </section>
    </CarouselContext.Provider>
  );
};

interface CarouselItemProps extends PropsWithClassName {
  image: string;
  onClick: () => void;
}

export const CarouselItem = ({
  image,
  onClick,
  className,
}: CarouselItemProps) => {
  useCarouselContext("CarouselItem");

  return (
    <div
      className={cn(
        "embla__slide cursor-pointer relative bg-background border border-primary-muted select-none ml-6",
        className
      )}
      onClick={onClick}
    >
      <Image src={image} alt={`${image} cover`} fill className="object-cover" />
    </div>
  );
};
