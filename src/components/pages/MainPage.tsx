import { MainFeatured } from "../templates/MainFeatured";
import { TrendingSection } from "../templates/TrendingSection";

export const MainPage = () => {
  return (
    <section className=" w-full h-full flex flex-col items-start relative">
      <MainFeatured />
      <TrendingSection />
    </section>
  );
};
