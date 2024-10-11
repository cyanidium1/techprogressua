"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";
import CallButton from "./CallBtn";

export default function Footer() {
  const currentPath = usePathname();
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
    <footer className=" bg-black ">
      <CallButton />
      <div className="max-w-screen-xl mx-auto px-[30px] sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between w-full pt-16 sm:pt-10 xl:pt-20 pb-16">
        <Link href="/" className="relative w-48 h-48 mx-auto lg:mx-0">
          <Image
            src="/images/logo.png"
            alt="Footer logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>

        <div className="sm:flex">
          <div className="flex items-end sm:items-start justify-between mt-16 mb-14 sm:flex-col sm:mr-24 sm:mt-0">
            <div className="flex flex-col gap-3">
              <p className="text-base leading-[19px] lg:text-lg lg:leading-[21px] text-white font-semibold uppercase">
                Контакти
              </p>
              <div className="text-lg text-white">
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
            </div>
            <Socials />
          </div>
          <div className="flex justify-between sm:gap-24">
            <div className="flex flex-col gap-3 max-w-32">
              <p className="text-base leading-[19px] lg:text-lg lg:leading-[21px] text-white font-semibold uppercase">
                Адреса
              </p>
              <a
                href="https://maps.app.goo.gl/vSoDeMYbQEyMX33q7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-[17px] sm:text-base sm:leading-[19px] text-white font-normal hover:text-red-500 transition duration-300"
              >
                м. Кам'янець-Подільский
              </a>
            </div>
            <div className="flex flex-col gap-3 pr-12 xl:pr-0">
              <p className="text-base leading-[19px] lg:text-lg lg:leading-[21px] text-white font-semibold uppercase ">
                Навігація
              </p>
              <ul className="flex flex-col gap-[10px] max-w-20 xl:max-w-none">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm leading-[17px] sm:text-base sm:leading-[19px] font-normal text-white hover:text-red-500 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
