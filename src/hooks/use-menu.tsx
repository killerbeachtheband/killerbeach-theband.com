"use client";

import { type ReactNode, createContext, useState, useContext } from "react";

const menuItems = [
  { id: 1, text: "Tour" },
  { id: 2, text: "Music" },
  { id: 3, text: "News" },
  { id: 4, text: "About" },
  { id: 5, text: "Contact" },
] as const;

type MenuId = (typeof menuItems)[number]["id"];

type ContextValue = {
  menuItems: typeof menuItems;
  isMenuOpen: boolean;
  activeMenuId: MenuId;
  onChangeMenu: (id: MenuId) => void;
  setIsMenuOpen: (open: boolean) => void;
};

const MenuContext = createContext({} as ContextValue);

type MenuProviderProps = {
  children: ReactNode;
};
export function MenuProvider({ children }: MenuProviderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeMenuId, setActiveMenuId] = useState<MenuId>(1);

  function onChangeMenu(id: MenuId) {
    setIsMenuOpen(true);
    setActiveMenuId(id);
  }

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        isMenuOpen,
        activeMenuId,
        onChangeMenu,
        setIsMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
