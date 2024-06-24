import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import coroleMinIcon from "../public/coroleIcon/coroleMinIcon.png";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";

const Footer = () => {
  const footerList = [
    { _id: 111, title: "お問い合わせ", link: "/contact", icon: true },
    { _id: 113, title: "プライバシーポリシー", link: "#", icon: true },
  ];

  return (
    <div className="w-full mt-10 bg-gray-900 text-white">
      <Container>
        <div className="text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between mb-2">
          <p className="mb-2">©︎ COROLE</p>
        
          <ul className="flex items-center gap-2 mb-2">
            {footerList.map((item) => (
              <Link href={item.link} key={item._id}>
                <li className="flex items-center gap-2 hover:text-blueLight duration-300 cursor-pointer">
                  {item.title}
                  {item.icon && <TbMinusVertical />}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-xl hover:text-blueLight cursor-pointer duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100063261875068"
              target="_blank"
              className="text-xl hover:text-blueLight cursor-pointer duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="text-xl hover:text-blueLight cursor-pointer duration-300"
            >
              <FaInstagram />
            </Link>
            <Image
            src={coroleMinIcon}
            alt="coroleMinIcon"
            width={100}  // 幅を指定
            height={100}
            className="w-20 rounded-2xl object-cover transform hover:scale-105 transition-transform duration-300"
            priority
          />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
