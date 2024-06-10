"use client";

import { Menu } from "@/components/menu";
import { useMenu } from "@/hooks/use-menu";
import { Drawer } from "@/components/drawer";

export function Home() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  return (
    <main className="mx-auto mt-16 h-[calc(100vh-64px)] max-w-7xl bg-[url('/background.png')] bg-cover bg-center">
      <Menu />
      <Drawer setIsOpen={setIsMenuOpen} open={isMenuOpen}>
        <div></div>
      </Drawer>
    </main>
  );
}
