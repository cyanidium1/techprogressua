import Image from "next/image";

import { FaTruckFast } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa6";
const Hero = () => {
  return (
    <section>
      <Image
        src="/images/banner.jpg"
        className="rounded-xl"
        width={1280}
        height={334}
        alt="banner"
      />
      <div className="container mx-auto flex justify-around my-8 px-6">
        <div className="flex items-center">
          <FaTruckFast size={40} className="text-red-500" />
          <div className="ml-4">
            <h4 className="font-bold">Доставка по всій Україні.</h4>
            <p>Швидка доставка від 1 до 2 днів.</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaPercent size={40} className="text-red-500" />
          <div className="ml-4">
            <h4 className="font-bold">Акції та знижки.</h4>
            <p>Знижки на товари та акції.</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaShop size={40} className="text-red-500" />
          <div className="ml-4">
            <h4 className="font-bold">Зручна оплата.</h4>
            <p>Всі види оплат.</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaCcVisa size={40} className="text-red-500" />
          <div className="ml-4">
            <h4 className="font-bold">Приймання замовлень.</h4>
            <p>Приймання замовлень.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
