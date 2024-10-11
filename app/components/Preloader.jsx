// components/Preloader.js
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Общая длительность анимации 2 секунды
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black h-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }} // Вся анимация длится 2 секунды
    >
      {/* Анимация звезды */}
      <motion.div
        className="absolute w-96 h-96"
        initial={{ scale: 1 }} // Начальная позиция звезды и масштаб
        animate={{ scale: 10 }} // Звезда увеличивается в 5 раз и перемещается вправо
        transition={{ duration: 2.5, ease: "easeInOut" }} // Длительность 1.5 сек
      >
        <Image
          src="/images/preloader.jpg"
          alt="Star Logo"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
