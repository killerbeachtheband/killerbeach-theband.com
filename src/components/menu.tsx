"use client";

import { useMenu } from "@/hooks/use-menu";
import Image from "next/image";

export function Menu() {
  const { menuItems, activeMenu, onChangeMenu } = useMenu();

  return (
    <nav>
      <ol className="flex list-decimal flex-col space-y-4 pl-5">
        {menuItems.map((item) => (
          <li
            key={item.text}
            onClick={() => onChangeMenu(item.id)}
            className="flex cursor-pointer items-center space-x-4"
          >
            <div className="relative">
              <Image
                src="/solid.png"
                alt="menu"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              {item.id === activeMenu && (
                <Image
                  src="/wave.svg"
                  alt="menu"
                  width={15}
                  height={15}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              )}
            </div>

            <div>
              <p className="text-xl">{item.text}</p>
              <p>aaaaaaaaaaaaa</p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
