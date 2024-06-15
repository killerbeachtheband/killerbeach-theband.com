import { CustomFlowbiteTheme, Drawer as FlowbiteDrawer } from "flowbite-react";
import Image from "next/image";
import { ReactNode } from "react";

const customTheme: CustomFlowbiteTheme["drawer"] = {
  root: {
    base: "fixed z-40 h-full overflow-y-auto",
    backdrop: "fixed inset-0 z-30 bg-neutral-900/50 backdrop-blur",
    edge: "bottom-8",
    position: {
      bottom: {
        on: "bottom-0 w-full",
        off: "bottom-0 w-full translate-y-[calc(100%-48px)]",
      },
    },
  },
  items: {
    base: "bg-transparent",
  },
};

type Props = {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  headerContent?: ReactNode;
  children: ReactNode;
};

export function Drawer({ open, setIsOpen, headerContent, children }: Props) {
  return (
    <FlowbiteDrawer
      open={open}
      onClose={() => setIsOpen(false)}
      theme={customTheme}
      position="bottom"
      className="duration-500 ease-out"
      edge
    >
      <header
        onClick={() => setIsOpen(!open)}
        className={`${open ? "justify-center bg-neutral-950" : "m-2 rounded-md bg-primary/50 backdrop-blur"} sticky top-0 flex h-16 cursor-pointer items-center`}
      >
        {open ? (
          <Image
            src="/killer-beach-logo-white-transparent.png"
            alt="logo"
            width={1873}
            height={298}
            className="h-3 w-auto"
          />
        ) : (
          headerContent
        )}
      </header>
      <FlowbiteDrawer.Items className="p-5">{children}</FlowbiteDrawer.Items>
    </FlowbiteDrawer>
  );
}
