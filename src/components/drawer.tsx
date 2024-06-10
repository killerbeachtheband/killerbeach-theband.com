import { CustomFlowbiteTheme, Drawer as FlowbiteDrawer } from "flowbite-react";
import { ReactNode } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const customTheme: CustomFlowbiteTheme["drawer"] = {
  root: {
    base: "fixed z-40 h-[calc(100%-48px)] overflow-y-auto",
    backdrop: "fixed inset-0 z-30 bg-neutral-900/50 backdrop-blur-md",
    edge: "bottom-0 ",
    position: {
      bottom: {
        on: "bottom-0 w-full",
        off: "bottom-0 w-full translate-y-[calc(100%-48px)]",
      },
    },
  },
  header: {
    inner: {
      titleText: "m-0",
      closeIcon: "hidden",
    },
  },
  items: {
    base: "bg-transparent",
  },
};

type Props = {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
};

export function Drawer({ open, setIsOpen, children }: Props) {
  return (
    <FlowbiteDrawer
      open={open}
      onClose={() => setIsOpen(false)}
      theme={customTheme}
      position="bottom"
      className="duration-300"
      edge
    >
      <FlowbiteDrawer.Header
        titleIcon={open ? MdKeyboardArrowDown : MdKeyboardArrowUp}
        onClick={() => setIsOpen(!open)}
        className="bg-neutral-950 p-4"
      />
      <FlowbiteDrawer.Items className="p-4">{children}</FlowbiteDrawer.Items>
    </FlowbiteDrawer>
  );
}
