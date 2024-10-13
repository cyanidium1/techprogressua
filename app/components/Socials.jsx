import {
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaViber, // Импортируем иконку Viber
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-4 mt-2 items-center">
      <a
        href="viber://chat?number=%2B380991485703"
        className="hover:text-red-500 transition duration-300 text-purple-600" // Viber
      >
        <FaViber size={24} /> {/* Используем иконку Viber */}
      </a>
      <a
        href="https://wa.me/380991485703"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition duration-300 text-[#25D366]" // WhatsApp
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href="https://t.me/yourtelegram"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500 transition duration-300 text-[#0088cc]" // Telegram
      >
        <FaTelegramPlane size={24} />
      </a>
      <a
        href="mailto:yourmail@example.com"
        className="hover:text-red-500 transition duration-300 text-red-500" // Email
      >
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default Socials;
