"use client";
import Image from "next/image";
import { useState } from "react";
import ConsultationModal from "./ContactModal";
import Link from "next/link";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <div
        className={`w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-red-400 hover:shadow-xl
          ${hovered ? "absolute z-10 inset-x-0" : "relative"}
        `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          top: hovered ? 0 : "auto",
        }}
      >
        {/* Верхня частина - зображення продукту */}
        <div className="relative">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-[302px]"
          />
        </div>

        {/* Основна інформація */}
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

          {/* Кнопка внизу */}
          <ConsultationModal
            productName={product.name}
            productImage={product.imageSrc}
            productPrice={product.price}
          />
        </div>

        {/* Додаткова інформація знизу при ховері */}
        {hovered && (
          <div className="bg-white p-4 border-t border-gray-200">
            {product.engine && (
              <p className="text-gray-600 flex justify-between text-sm">
                <span>Тип приводу:</span>
                <strong className="text-gray-800 text-sm">
                  {product.engine}
                </strong>
              </p>
            )}
            {product.diameter && (
              <p className="text-gray-600 flex justify-between text-sm">
                <span>Діаметр сировини:</span>
                <strong className="text-gray-800 text-sm">
                  {product.diameter}
                </strong>
              </p>
            )}
            {product.productivity && (
              <p className="text-gray-600 flex justify-between text-sm">
                <span>Продуктивність:</span>
                <strong className="text-gray-800 text-sm">
                  {product.productivity}
                </strong>
              </p>
            )}
            <p className="text-gray-600 flex justify-between text-sm">
              <span>Гарантія:</span>
              <strong className="text-gray-800 text-sm">
                {product.warranty}
              </strong>
            </p>
            <hr className="my-2 border-gray-300" />

            <Link
              href={`/catalog/${product.id}`}
              className="text-red-500 hover:scale-105 flex justify-center"
            >
              ДЕТАЛЬНІШЕ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
