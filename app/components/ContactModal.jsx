import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { CiMobile1, CiUser, CiMail } from "react-icons/ci";
import Image from "next/image";
import SuccessModal from "./SuccessModal";
import { sendMessage } from "../lib/sendMessage";

export default function ConsultationModal({
  productName,
  productImage,
  productPrice,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = () => {
    const message = `<b>Консультація</b>\nІм'я: ${name}, Телефон: ${phone}, Пошта: ${email}.\n<b>Інтересує продукт:</b> ${productName}, ціна: ${productPrice} грн.`;

    sendMessage(message);
    onClose();
    setIsModalOpen(true);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        color="secondary"
        variant="flat"
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
      >
        ОТРИМАТИ КОНСУЛЬТАЦІЮ
      </Button>

      <div className="absolute">
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          placement="center"
          backdrop="blur"
        >
          <ModalContent>
            <ModalHeader>Консультація щодо продукту</ModalHeader>
            <ModalBody>
              <div className="flex items-center justify-between">
                <Image
                  src={productImage}
                  alt={productName}
                  width={160}
                  height={160}
                  className="rounded-lg object-contain"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold">{productName}</p>
                  <p className="text-red-500 text-xl font-bold">
                    {productPrice} грн
                  </p>
                </div>
              </div>
              <Input
                autoFocus
                endContent={<CiUser size={34} />}
                label="Ім'я"
                variant="bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                endContent={<CiMobile1 size={34} />}
                label="Телефон"
                variant="bordered"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                endContent={<CiMail size={34} />}
                label="Пошта"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Закрити
              </Button>
              <Button color="primary" onClick={handleSendMessage}>
                Надіслати
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <SuccessModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
}
