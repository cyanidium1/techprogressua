"use client";

import { motion } from "framer-motion";
import ProductCard from "./Card";
import SectionTitle from "./SectionTitle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductLine({ title, items }) {
  return (
    <div className="max-w-7xl mx-auto py-8">
      {/* Заголовок секции */}
      <SectionTitle text={title} />

      {/* Сетка товаров */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the element is in view
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProductCard
              product={{
                imageSrc: item.mainphoto.url, // Фото товара
                name: item.name,
                price: item.price,
                description: item.description,
                engine: item.engine, // Можешь добавить другие поля, если нужно
                diameter: item.diameter,
                productivity: item.productivity,
                warranty: item.warrancy,
                id: item.id,
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
