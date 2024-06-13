import { CustomFlowbiteTheme, Drawer as FlowbiteDrawer } from "flowbite-react";
import { ReactNode } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const customTheme: CustomFlowbiteTheme["drawer"] = {
  root: {
    base: "fixed z-40 h-full overflow-y-auto",
    backdrop: "fixed inset-0 z-30 bg-neutral-900/50 backdrop-blur-md",
    edge: "bottom-8",
    position: {
      bottom: {
        on: "bottom-0 w-full",
        off: "bottom-0 w-full translate-y-[calc(100%-48px)]",
      },
    },
  },
  header: {
    inner: {
      titleIcon: "hidden",
      titleText: "m-0",
      closeButton: "hidden",
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
      <FlowbiteDrawer.Header
        titleIcon={open ? MdKeyboardArrowDown : MdKeyboardArrowUp}
        onClick={() => setIsOpen(!open)}
        className={`${open ? "m-2 rounded-md bg-primary/50 backdrop-blur-md" : "m-2 rounded-md bg-primary/50 backdrop-blur-md"} flex h-16 cursor-pointer items-center px-8`}
      >
        {headerContent}
      </FlowbiteDrawer.Header>
      <FlowbiteDrawer.Items className="p-4">{children}</FlowbiteDrawer.Items>
    </FlowbiteDrawer>
  );
}
