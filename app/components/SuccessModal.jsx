import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function SuccessModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop="blur">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Вашу заявку відправлено
        </ModalHeader>
        <ModalBody>
          <p>Я зв'яжуся з вами найближчим часом :)</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" variant="flat" onPress={onClose}>
            Закрити
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
