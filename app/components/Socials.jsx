import {
  FaTelegramPlane,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-4 mt-2 items-center">
      <a
        href="viber://chat?number=%2B380991485703"
        className="hover:text-red-500 transition duration-300 text-gray-500"
      >
        <FaPhoneAlt size={20} />
      </a>
      <a
        href="https://wa.me/380991485703"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition duration-300 text-[#665CAC]"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://t.me/yourtelegram"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition duration-300 text-[#0088cc]"
      >
        <FaTelegramPlane size={24} />
      </a>
      <a
        href="mailto:yourmail@example.com"
        className="hover:text-red-500 transition duration-300 text-gray-500"
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default Socials;
