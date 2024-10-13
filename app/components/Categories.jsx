"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function CategoriesMenu({ categories }) {
  const [isOpen, setIsOpen] = useState(false);

  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".catalog-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full pt-2 pb-6 space-x-4 space-y-2 relative">
      {/* Кнопка Каталог с кликом */}
      <div className="inline-block catalog-menu">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer py-3 px-6 rounded-lg inline-flex items-center bg-red-600 text-white transition-transform duration-300 hover:scale-105"
        >
          <GrMenu className="mr-2" />
          КАТАЛОГ
        </button>

        {isOpen && (
          <div className="absolute z-20 top-16 left-0 w-80 bg-white shadow-lg p-4 border border-gray-200">
            {categories.map((category, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold text-base text-black mb-2">
                  {category.name}
                </h3>
                <ul className="space-y-1 text-gray-700">
                  {category.dropdownItems.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={`/${item.key}`}
                        className="block text-sm text-gray-600 font-light hover:text-red-500 transition duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {index < categories.length - 1 && (
                  <hr className="my-2 border-gray-300" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Сохраняем дропдауны для остальных категорий */}
      {categories.map((category, index) => (
        <Dropdown key={index}>
          <DropdownTrigger>
            <Button
              variant="light"
              className="text-black hover:text-red-500 transition duration-300"
            >
              {category.name}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label={`Menu for ${category.name}`}>
            {category.dropdownItems.map((item) => (
              <DropdownItem key={item.key}>
                <Link href={`/${item.key}`}>{item.name}</Link>
              </DropdownItem>
            ))}
            <DropdownItem>
              <Link href="/catalog" className="block text-black">
                Всі категорії
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ))}
    </div>
  );
}
