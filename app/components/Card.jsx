"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ConsultationModal from "./ContactModal";
import Link from "next/link";
import ProductInfoPortal from "../helpers/ProductInfoPortal";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [portalPosition, setPortalPosition] = useState({});
  const cardRef = useRef(null);

  // Отримуємо позицію картки для позиціонування порталу
  useEffect(() => {
    if (isHovered && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPortalPosition({
        bottom: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="relative group "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Основна картка */}
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-red-400 hover:shadow-xl">
        <div className="relative">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain w-full h-[302px]"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-44">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-red-500 text-xl font-bold">{product.price} грн</p>
          <ConsultationModal
            productName={product.name}
            productImage={product.imageSrc}
            productPrice={product.price}
          />
        </div>
      </div>

      {/* Портал з додатковою інформацією */}
      <ProductInfoPortal isOpen={isHovered} position={portalPosition}>
        {product.engine && (
          <p className="text-gray-600 flex justify-between text-sm">
            <span>Тип приводу:</span>
            <strong className="text-gray-800">{product.engine}</strong>
          </p>
        )}
        {product.diameter && (
          <p className="text-gray-600 flex justify-between text-sm">
            <span>Діаметр сировини:</span>
            <strong className="text-gray-800">{product.diameter}</strong>
          </p>
        )}
        {product.productivity && (
          <p className="text-gray-600 flex justify-between text-sm">
            <span>Продуктивність:</span>
            <strong className="text-gray-800">{product.productivity}</strong>
          </p>
        )}
        <p className="text-gray-600 flex justify-between text-sm">
          <span>Гарантія:</span>
          <strong className="text-gray-800">{product.warranty}</strong>
        </p>
        <hr className="my-2 border-gray-300" />
        <Link
          href={`/catalog/${product.id}`}
          className="text-red-500 hover:scale-105 flex justify-center"
        >
          ДЕТАЛЬНІШЕ
        </Link>
      </ProductInfoPortal>
    </div>
  );
}
