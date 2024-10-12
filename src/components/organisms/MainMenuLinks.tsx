import { MAIN_MENU_LINKS } from "@/constants/main-menu-links";
import { ListItems } from "../templates/ListItems";
import { ActiveLink } from "../atoms/ActiveLink";
import Image from "next/image";

export const MainMenuLinks = () => {
  return (
    <ListItems
      className=" w-fit flex flex-col gap-4"
      items={MAIN_MENU_LINKS}
      renderItem={(item) => (
        <ActiveLink
          key={item.name}
          href={item.href}
          className=" w-fit group-hover:w-full flex items-center justify-start gap-6 group-hover:pr-6 group-hover:rounded-xl rounded-full"
        >
          <div className=" size-16 flex items-center justify-center">
            <Image
              src={item.icon.src}
              alt={`${item.name} icon`}
              width={24}
              height={24}
            />
          </div>
          <span className="text-2xl group-hover:block hidden">{item.name}</span>
        </ActiveLink>
      )}
    />
  );
};
