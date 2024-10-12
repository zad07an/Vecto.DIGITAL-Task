import { cn } from "@/lib/utils";

interface MainFeaturedShadowProps {
  direction?: "to-top" | "to-right";
}

export const MainFeaturedShadow = ({
  direction = "to-top",
}: MainFeaturedShadowProps) => {
  return (
    <div
      className={cn(
        "w-full h-full from-background to-transparent absolute bottom-0 right-0 -z-10",
        direction === "to-top" ? "bg-gradient-to-t" : "bg-gradient-to-r"
      )}
    ></div>
  );
};
