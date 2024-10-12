import { MAIN_MENU_ADDITINAL_LINKS } from "@/constants/main-menu-links";
import { ListItems } from "../templates/ListItems";
import Link from "next/link";

export const MainMenuBottomLinks = () => {
  return (
    <ListItems
      className="w-fit flex-col gap-4 flex group-hover:visible invisible group-hover:opacity-100 opacity-0"
      items={MAIN_MENU_ADDITINAL_LINKS}
      renderItem={(item) => (
        <Link
          href={item.href}
          key={item.name}
          className=" text-foreground/10 text-2xl text-primary-muted font-bold"
        >
          {item.name}
        </Link>
      )}
    />
  );
};
