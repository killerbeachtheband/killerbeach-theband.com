import { Modal as FlowbiteModal, ModalProps } from "flowbite-react";

export function Modal({ title, children, ...rest }: ModalProps) {
  return (
    <FlowbiteModal {...rest} className="bg-neutral-950/50">
      <FlowbiteModal.Header
        className="items-center rounded-t-md border border-neutral-700 bg-neutral-950"
        theme={{
          title: "text-neutral-200 text-lg w-full font-bold text-center",
        }}
      >
        {title}
      </FlowbiteModal.Header>
      <FlowbiteModal.Body className="rounded-b-md border border-neutral-700 bg-neutral-950 p-14">
        {children}
      </FlowbiteModal.Body>
    </FlowbiteModal>
  );
}
