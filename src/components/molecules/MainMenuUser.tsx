import profile_pic from "@/assets/squid_game.jpg";
import Image from "next/image";

export const MainMenuUser = () => {
  return (
    <div className=" w-fit group-hover:visible invisible flex items-center gap-6 group-hover:opacity-100 opacity-0 transition-all duration-200">
      <Image
        src={profile_pic.src}
        alt=""
        width={64}
        height={64}
        className="w-16 min-w-16 aspect-square object-cover rounded-full overflow-hidden border border-primary-muted"
      />
      <span className=" text-2xl font-semibold">Daniel</span>
    </div>
  );
};
