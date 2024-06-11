"use client";

import { Menu } from "@/components/menu";
import { useMenu } from "@/hooks/use-menu";
import { Drawer } from "@/components/drawer";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

export function Home() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <main className="h-screen">
      {/* <video
        id="video"
        poster="/artist-photo.jpg"
        playsInline
        muted
        autoPlay
        loop
      >
        <source src="/mv.mp4" type="video/mp4" />
      </video> */}
      <div className="relative">
        <Image
          src="/artist-photo.jpg"
          alt="artist photo"
          width={6000}
          height={4000}
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

      <div className="h-48 bg-gradient-to-b from-[#287080]/50 to-neutral-950"></div>

      <Menu />
      <Drawer setIsOpen={setIsMenuOpen} open={isMenuOpen}>
        <div></div>
      </Drawer>
    </main>
  );
}
