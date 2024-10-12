"use client";

import CatalogueCard from "./CatalogueCard/CatalogueCard";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

export default function ProductionHomepage({ text, categories }) {
  return (
    <div className="max-w-screen-xl py-8">
      <SectionTitle text={text} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <CatalogueCard photos={category.photos} title={category.name} />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: categories.length * 0.2 }}
        >
          <CatalogueCard photos={"/images/all.jpg"} title="УСІ ТОВАРИ" />
        </motion.div>
      </div>
    </div>
  );
}
