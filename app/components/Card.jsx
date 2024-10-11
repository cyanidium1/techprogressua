"use client";
import Image from "next/image";
import { useState } from "react";
import ConsultationModal from "./ContactModal";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 relative max-h-[600px] hover:shadow-red-400 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Верхняя часть карточки - изображение продукта */}
      <div className="relative">
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={500}
          height={500}
          className="object-contain w-full h-[302px]"
        />
      </div>

      {/* Основная информация продукта */}
      <div className="p-4 flex flex-col justify-between h-44">
        <div className="flex-grow">
          <div className="flex justify-end items-center">
            <p className="text-gray-600 mr-2">Ціна:</p>
            <p className="text-red-500 text-xl font-bold">
              {product.price} грн
            </p>
          </div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </div>

        {/* Кнопка всегда внизу */}
        <ConsultationModal
          productName={product.name}
          productImage={product.imageSrc}
          productPrice={product.price}
        />
      </div>
    </div>
  );
}
