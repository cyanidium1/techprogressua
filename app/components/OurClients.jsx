"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function OurClients() {
  const items = [
    {
      name: "АРБОРИСТИКА",
      imageSrc: "/images/Clients/Arbora.jpg",
    },
    {
      name: "ЛАНДШАФТНИЙ ДИЗАЙН",
      imageSrc: "/images/Clients/Design.jpg",
    },
    {
      name: "ФЕРМЕРСЬКЕ ГОСПОДАРСТВО",
      imageSrc: "/images/Clients/Farm.jpg",
    },
    {
      name: "КОМУНАЛЬНЕ ГОСПОДАРСТВО",
      imageSrc: "/images/Clients/Komunalne.jpg",
    },
    // {
    //   name: "ЛІСНЕ ГОСПОДАРСТВО",
    //   imageSrc: "/images/Clients/Lis.jpg",
    // },
    // {
    //   name: "ОПАЛЕННЯ",
    //   imageSrc: "/images/Clients/Opalenya.jpg",
    // },
    // {
    //   name: "САДОВЕ ГОСПОДАРСТВО",
    //   imageSrc: "/images/Clients/Sadove.jpg",
    // },
    // {
    //   name: "АВТОСЕРВІС (СТО)",
    //   imageSrc: "/images/Clients/Sto.jpg",
    // },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8">
      <SectionTitle text="Наші клієнти" />
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      >
        {items.map((item, index) => (
          <motion.div key={index} className="relative" variants={itemVariants}>
            <Image
              src={item.imageSrc}
              alt={item.name}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-full"
            />
            <div className="absolute w-full bottom-0 p-4 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
              <p className="text-white text-base font-bold">{item.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
