import { Modal as FlowbiteModal, ModalProps } from "flowbite-react";

export function Modal({ children, ...rest }: ModalProps) {
  return (
    <FlowbiteModal {...rest}>
      <FlowbiteModal.Header />
      <FlowbiteModal.Body>{children}</FlowbiteModal.Body>
    </FlowbiteModal>
  );
}
