"use client";

import { Drawer } from "@/components/drawer";
import { useMenu } from "@/hooks/use-menu";
import Image from "next/image";
import { ReactNode } from "react";
import { MdPlayArrow } from "react-icons/md";

type Props = {
  children: ReactNode;
};

export function Player({ children }: Props) {
  const { menuItems, activeMenuId, isMenuOpen, setIsMenuOpen } = useMenu();
  const activeMenu = menuItems.find(({ id }) => id === activeMenuId);

  if (!activeMenu) return null;

  return (
    <Drawer
      setIsOpen={setIsMenuOpen}
      open={isMenuOpen}
      headerContent={
        <div className="flex w-full items-center justify-between px-5">
          <div className="flex items-center space-x-4">
            <Image
              src="/solid.png"
              alt="menu"
              width={40}
              height={40}
              className="h-10 w-10 invert-[50%]"
            />
            <div>
              <p className="font-bold">{activeMenu.text}</p>
              <p className="text-sm">2024.06.21 FUCKING LIVE at Sendai</p>
            </div>
          </div>
          <MdPlayArrow size={36} />
        </div>
      }
    >
      {children}
    </Drawer>
  );
}
