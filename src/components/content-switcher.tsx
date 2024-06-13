"use client";

import { useMenu, type MenuId } from "@/hooks/use-menu";
import { ReactNode } from "react";

type Props = {
  contents: Record<MenuId, ReactNode>;
};

export function ContentSwitcher({ contents }: Props) {
  const { activeMenuId } = useMenu();
  return contents[activeMenuId];
}
