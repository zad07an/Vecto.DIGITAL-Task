import { MainMenuUser } from "../molecules/MainMenuUser";
import { MainMenuBottomLinks } from "./MainMenuBottomLinks";
import { MainMenuLinks } from "./MainMenuLinks";

export const MainMenu = () => {
  return (
    <aside className=" group w-fit z-20 h-full main-menu">
      <div className=" w-28 h-full" />
      <nav className=" w-28 fixed left-0 top-0 group-hover:w-full max-w-lg bg-gradient-to-r from-black/80 to-transparent h-full flex flex-col justify-between gap-4 group-hover:bg-gradient-to-r px-6 py-10 z-50">
        <div className=" w-full flex flex-col gap-8">
          <MainMenuUser />
          <MainMenuLinks />
        </div>
        <MainMenuBottomLinks />
      </nav>
    </aside>
  );
};
