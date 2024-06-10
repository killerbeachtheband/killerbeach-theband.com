"use client";

import { useMenu } from "@/hooks/use-menu";

export function Menu() {
  const { menuItems, activeMenu, onChangeMenu } = useMenu();

  return (
    <nav>
      <ol className="flex flex-col space-y-4">
        {menuItems.map((item) => (
          <li key={item.text}>
            <button
              value={item.id}
              onClick={() => onChangeMenu(item.id)}
              disabled={item.id === activeMenu}
              className={`${item.id === activeMenu ? "underline" : ""} text-xl`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
