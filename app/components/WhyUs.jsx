"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Advantages() {
  const advantages = [
    {
      icon: "/icons/HomePage/1.png",
      text: "Є виробниками: тому надаємо Консультації/ Гарантійне та Сервісне обслуговування/ Тех підтримку",
    },
    {
      icon: "/icons/HomePage/2.png",
      text: "Гарантія на все обладнання 1 рік.",
    },
    {
      icon: "/icons/HomePage/3.png",
      text: "Власне виробництво дозволяє нам завжди мати в наявності запчастини та комплектуючі для усього обладнання",
    },
    {
      icon: "/icons/HomePage/4.png",
      text: "Можливе виконання замовлень з урахуванням індивідуальних допрацювань за потреби клієнта",
    },
    {
      icon: "/icons/HomePage/5.png",
      text: "Головний принцип та перевага компанії - оптимальні доступні ціни при високій якості",
    },
    {
      icon: "/icons/HomePage/6.png",
      text: "Деталі та механізми, що підлягають надмірним навантаженням, виготовляються з легованої сталі",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Заголовок секции */}
      <SectionTitle text="ПЕРЕВАГИ" />

      {/* Сетка для преимуществ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }} // Активирует анимацию при вхождении на 30% во вьюпорт
            transition={{ duration: 0.5, delay: index * 0.2 }} // Появление поочередно
            className="flex items-center"
          >
            {/* Иконка */}
            <motion.div whileHover={{ scale: 1.2 }} className="mr-4">
              <Image
                src={advantage.icon}
                alt={`Иконка ${index + 1}`}
                width={90}
                height={90}
                className="object-contain"
              />
            </motion.div>

            {/* Текстовое описание */}
            <p className="text-gray-700 text-base max-w-[400px]">
              {advantage.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
