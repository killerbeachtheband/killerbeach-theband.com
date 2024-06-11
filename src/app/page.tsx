import { Player } from "@/components/player";
import { Menu } from "@/components/menu";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

export default function HomePage() {
  return (
    <main className="h-screen">
      <div className="relative">
        <Image
          src="/artist-photo.jpg"
          alt="artist photo"
          width={6000}
          height={4000}
          className="max-h-[80vh] object-cover"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
          <MdPlayCircleFilled color="#287080" size={56} />
          <Image
            src="/killer-beach-logo-white-transparent.png"
            alt="logo"
            width={1873}
            height={298}
            className="h-10 w-auto"
          />
        </div>
      </div>

      <div className="from-primary/50 h-48 bg-gradient-to-b to-neutral-950"></div>

      <Menu />
      <Player />
    </main>
  );
}
