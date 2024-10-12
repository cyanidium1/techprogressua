"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Image,
  Divider,
} from "@nextui-org/react";

import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import Socials from "./Socials";
// import BasketModal from "./BasketModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const currentPath = usePathname();
  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);

  // Updated menu items with their corresponding links
  const menuItems = [
    { name: "Про нас", href: "/about" },
    { name: "Відео", href: "/video" },
    { name: "Доставка та оплата", href: "/delivery-payment" },
    { name: "Співробітництво", href: "/cooperation" },
    { name: "Контакти", href: "/contacts" },
  ];

  const path = currentPath.split("/");

  if (path[1] === "admin") {
    return null;
  }
  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="sm:py-5 bg-customDark"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
      >
        {/* Mobile menu toggle and logo */}
        <NavbarContent className="sm:hidden pr-2" justify="center">
          <NavbarBrand>
            <Link href="/">
              <Image height={45} src="/images/logo.png" alt="logo" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <div className="flex items-center justify-between w-full">
          {/* Desktop menu items */}
          <NavbarContent
            className="hidden sm:flex !basis-auto !grow-0"
            justify="start"
          >
            <Link href="/">
              <Image width={210} src="/images/logo.png" alt="logo" />
            </Link>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex xl:gap-8" justify="center">
            {menuItems.map((item, index) => (
              <NavbarItem key={index}>
                <Link color="foreground" href={item.href}>
                  <p
                    className={`text-base font-semibold 
                      ${
                        currentPath === item.href
                          ? "text-red-500"
                          : "text-white"
                      }`}
                  >
                    {item.name}
                  </p>
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent className="hidden sm:flex !basis-auto !grow-0">
            <NavbarItem className="relative">
              <div className="flex flex-col items-center text-white">
                <div className="text-base">
                  <a
                    href="tel:+380991485703"
                    className="hover:text-red-500 transition duration-300"
                  >
                    (099) 148-57-03
                  </a>
                  <br />
                  <a
                    href="tel:+380985063484"
                    className="hover:text-red-500 transition duration-300"
                  >
                    (098) 506-34-84
                  </a>
                </div>
                <Socials />
              </div>
            </NavbarItem>
          </NavbarContent>
        </div>

        {/* Mobile menu toggle button */}
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        {/* Mobile menu items */}
        <NavbarMenu className="pt-10 px-8 pb-8">
          {menuItems.map((item, index) => (
            <div key={`${item.name}-${index}`}>
              <NavbarMenuItem>
                <Link
                  className="w-full text-white"
                  color="foreground"
                  href={item.href}
                  size="lg"
                  style={{ fontWeight: 600 }}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
              <Divider className="mt-5 mb-8 bg-black" />
            </div>
          ))}

          {/* Clickable phone number */}
          <div className="mt-auto">
            <NavbarMenuItem>
              <Link
                href="tel:+380970047705"
                className="text-white text-xl"
                style={{ fontWeight: 600 }}
              >
                +38(097) 004 77 05
              </Link>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </Navbar>
      {/* {isBasketModalOpen && (
        <BasketModal setIsBasketModalOpen={setIsBasketModalOpen} />
      )} */}
    </>
  );
}
