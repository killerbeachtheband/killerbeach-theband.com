"use client";

import { useMenu } from "@/hooks/use-menu";
import { Drawer } from "@/components/drawer";
import Image from "next/image";

export function Player() {
  const { menuItems, activeMenuId, isMenuOpen, setIsMenuOpen } = useMenu();
  const activeMenu = menuItems.find(({ id }) => id === activeMenuId);

  if (!activeMenu) return null;

  return (
    <Drawer
      setIsOpen={setIsMenuOpen}
      open={isMenuOpen}
      headerContent={
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
      }
    >
      <div></div>
    </Drawer>
  );
}