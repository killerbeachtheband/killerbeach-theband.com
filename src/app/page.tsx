import { Player } from "@/components/player";
import { Menu } from "@/components/menu";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";
import { News } from "@/components/news";
import { ContentSwitcher } from "@/components/content-switcher";

export default function HomePage() {
  return (
    <main>
      <div className="relative">
        <Image
          src="/artist-photo.jpg"
          alt="artist photo"
          width={6000}
          height={4000}
          className="max-h-[80vh] object-cover"
        />
        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between p-5">
          <Image
            src="/killer-beach-logo-white-transparent.png"
            alt="logo"
            width={1873}
            height={298}
            className="h-10 w-auto"
          />
          <button>
            <MdPlayCircleFilled color="#287080" size={56} />
          </button>
        </div>
      </div>

      <div className="relative pb-20 pt-5">
        <div className="absolute left-0 top-0 -z-10 h-48 w-full bg-gradient-to-b from-primary/50 to-neutral-950"></div>
        <Menu />
      </div>

      <Player>
        <ContentSwitcher
          contents={{
            1: <>Tour</>,
            2: <>Music</>,
            3: <News />,
            4: <>About</>,
            5: <>Contact</>,
          }}
        />
      </Player>
    </main>
  );
}
