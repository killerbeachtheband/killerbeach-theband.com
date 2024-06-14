"use client";

import { Modal } from "@/components/modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdPlayCircleFilled } from "react-icons/md";

export function MainVisual() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
          <button type="button" onClick={() => setOpenModal(true)}>
            <MdPlayCircleFilled color="#287080" size={56} />
          </button>
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex flex-col items-center space-y-12 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="https://open.spotify.com/artist/7L96nhlGEEXlPKI0ZcDqSm?si=qc74MD0uSiiGkT6nBlZCRA">
            <Image
              src="/Spotify_Logo_RGB_Green.png"
              alt="spotify link"
              width={2362}
              height={709}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="https://music.apple.com/artist/killer-beach/1592423594">
            <Image
              src="/US-UK_Apple_Music_Listen_on_Badge_RGB_072720.svg"
              alt="spotify link"
              width={141}
              height={41}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="https://music.youtube.com/channel/UCcerN0KPyTcMMDhE3Rb3kAQ?si=BBE0dsX5-55lTPNB">
            <Image
              src="/yt_music_full_rgb_white.png"
              alt="spotify link"
              width={2366}
              height={441}
              className="h-8 w-auto"
            />
          </Link>
          <Link href="https://lin.ee/2D09sQK">
            <Image
              src="/LINE_MUSIC_primary_logo_green.png"
              alt="spotify link"
              width={405}
              height={74}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </Modal>
    </>
  );
}
