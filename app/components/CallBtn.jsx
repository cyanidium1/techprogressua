import React from "react";
import { FaPhone } from "react-icons/fa";

const CallButton = () => {
  return (
    <a
      className="cc-calto-action-ripple right-16 bottom-24 flex justify-center items-center hover:scale-110 duration-300 transition-transform"
      href="tel:9999999"
    >
      <FaPhone size={32} />
    </a>
  );
};

export default CallButton;
