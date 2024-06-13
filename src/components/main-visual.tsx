import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

export function MainVisual() {
  return (
    <div className="relative">
      <Image
        src="/artist-photo.webp"
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
  );
}
