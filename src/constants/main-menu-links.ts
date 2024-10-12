import search from "@/assets/icons/ICON - Search.png";
import home from "@/assets/icons/Group 46.png";
import tv from "@/assets/icons/Group 56.png";
import movies from "@/assets/icons/Group 54.png";
import genres from "@/assets/icons/Group 53.png";
import watch_later from "@/assets/icons/Group 47.png";

export const MAIN_MENU_LINKS = [
  {
    href: "/search",
    name: "Search",
    icon: search,
  },
  {
    href: "/",
    name: "Home",
    icon: home,
  },
  {
    href: "/tv-shows",
    name: "TV Shows",
    icon: tv,
  },
  {
    href: "/movies",
    name: "Movies",
    icon: movies,
  },
  {
    href: "/genres",
    name: "Genres",
    icon: genres,
  },
  {
    href: "/watch-later",
    name: "Watch Later",
    icon: watch_later,
  },
];

export const MAIN_MENU_ADDITINAL_LINKS = [
  {
    href: "/language",
    name: "Language",
  },
  {
    href: "/get-gelp",
    name: "Get help",
  },
  {
    href: "/exit",
    name: "Exit",
  },
];
