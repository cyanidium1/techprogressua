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
    <div className="w-full py-4 space-x-4">
      <p className="py-2 px-4 rounded-xl inline-flex bg-red-500 text-white">
        Швидкий пошук по категоріям:
      </p>
      {categories.map((category, index) => (
        <Dropdown key={index}>
          <DropdownTrigger>
            <Button
              variant="bordered"
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
          </DropdownMenu>
        </Dropdown>
      ))}
    </div>
  );
}
