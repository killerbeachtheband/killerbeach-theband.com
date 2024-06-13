"use client";

import { useMenu } from "@/hooks/use-menu";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

export function Menu() {
  const { menuItems, activeMenuId, onChangeMenu } = useMenu();

  return (
    <nav>
      <ol className="flex flex-col">
        {menuItems.map((item) => (
          <li
            key={item.text}
            onClick={() => onChangeMenu(item.id)}
            className="flex cursor-pointer items-center space-x-4 px-5 py-2 duration-300 hover:bg-white/10"
          >
            <p>{item.id}</p>
            <div className="group relative">
              <Image
                src="/solid.png"
                alt="menu"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              {item.id === activeMenuId ? (
                <Image
                  src="/wave.svg"
                  alt="menu"
                  width={15}
                  height={15}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              ) : (
                <MdPlayArrow
                  color="#fff"
                  size={24}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-300 group-hover:opacity-100"
                />
              )}
            </div>
            <p className="text-xl font-bold">{item.text}</p>
          </li>
        ))}
      </ol>
    </nav>
  );
}
