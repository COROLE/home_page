"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { headerListItems } from "../constants";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import coroleMinIcon from "../public/coroleIcon/coroleMinIcon.png";

interface HeaderListItem {
  _id: string;
  link: string;
  title: string;
}

function Header() {
  const [active, setActive] = useState<string | undefined>(undefined);
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerClass, setHeaderClass] = useState("top-0");

  useEffect(() => {
    setActive(pathName);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHeaderClass("top-[-100px]"); // スクロールダウン時にヘッダーを隠す
      } else {
        setHeaderClass("top-0 opacity-100"); // スクロールアップ時にヘッダーを表示
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, pathName]);


  return (
    <div className={`w-full h-20 bg-white p-5 fixed ${headerClass} left-0 z-50 transition-all duration-300`}>
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href={"/"} className="relative group overflow-hidden">
          <p className="text-2xl font-bold">Inc.COROLE</p>
          <span className="absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>
        <div className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold tracking-wider mr-3">
          <ul className="flex gap-8">
            {headerListItems.map((item: HeaderListItem) => (
              <Link href={item.link} key={item._id}>
                <li
                  className={`${
                    active === item.link ? "text-primeColor" : "text-gray-600"
                  } hover:text-primeColor cursor-pointer duration-300 group relative`}
                >
                  {item.title}
                  <span
                    className={`${
                      active === item.link ? "scale-110" : "scale-0"
                    } absolute w-full h-[2px] bg-primeColor scale-0 group-hover:scale-100 -bottom-[1px] left-0 duration-500 transition-transform`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>

        </div>

        <div className="w-7 h-5 group lg:hidden flex flex-col justify-between cursor-pointer overflow-hidden" onClick={() => setShowMenu(true)}>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor inline-flex -translate-x-3 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor "></span>
        </div>
        <AnimatePresence>
        {showMenu && (
        <div className="w-full h-screen lg:hidden fixed top-0 right-0 bg-darkBlue bg-opacity-50 z-50" onClick={() => setShowMenu(false)}>
          <motion.div id="menuContainer" className="w-[70%] h-full bg-darkBlue p-4 relative" initial={{x:-300, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.2}} exit={{ x: -300, opacity: 0 }}>
          <span className="absolute right-2 top-8 text-3xl text-white hover:text-green-300 cursor-pointer duration-300" onClick={() => setShowMenu(false)}>
            <IoCloseSharp/>
          </span>
          <Link href={'/'} onClick={() => setShowMenu(false)}>
          <p className="text-3xl font-bold text-white my-5 hover:text-green-200" >Inc.COROLE</p>
          </Link>
          <ul className="flex flex-col text-gray-300 text-sm gap-3 font-semibold" onClick={() => setShowMenu(false)}>
            {headerListItems.map((item: HeaderListItem) => (
            <Link key={item._id} href={item.link}>
            <li className="text-base hover:text-white cursor-pointer duration-300 py-1">{item.title}</li>
            </Link>
            ))}
            <Image
            src={coroleMinIcon}
            alt="coroleMinIcon"
            className="w-20 rounded-2xl object-cover mt-4 transform hover:scale-105 transition-transform duration-300"
          />
          </ul></motion.div>
        </div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}

export default Header;
