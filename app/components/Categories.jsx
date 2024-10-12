"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function CategoriesMenu({ categories }) {
  return (
    <div className="w-full pt-2 pb-6 space-x-4 space-y-2">
      <Link
        href={"/catalog"}
        className="cursor-pointer py-2 px-4 rounded-xl inline-flex bg-red-500 text-white transition-transform duration-300 hover:scale-105"
      >
        КАТАЛОГ ПРОДУКЦІЇ:
      </Link>
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
