"use client";

import React from "react";
import Container from "./Container";
import Image from "next/image";
import caveChildren from "../public/coroleIcon/caveChildren.webp";
import spaceChildren from "../public/coroleIcon/spaceChildren.webp";
import flyingChildren from "../public/coroleIcon/flyingChildren.webp";
import coroleMinIcon from "../public/coroleIcon/coroleMinIcon.png";
import SizedBox from "@/components/SizedBox";




import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const Banner = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-emerald-500 to-lime-500 w-full rounded-bl-3xl rounded-br-3xl relative px-4 py-20 shadow-lg">
        
      <Container>
        <div className="text-white grid md:grid-cols-2 gap-20 place-items-center">
          {/* left */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                夢の世界につれこむ
              </h1>
            </FadeIn>
            <FadeIn>

            <Image
            src={coroleMinIcon}
            alt="coroleMinIcon"
            width={100}
            height={100}
            className="rounded-2xl object-cover transform hover:scale-105 transition-transform duration-300"
            priority 
          />
            </FadeIn>
            <FadeIn>
              <p className="text-base lg:text-lg tracking-wide xl:gap-10 font-sans leading-relaxed">
                私たち(株)COROLEは4人の<br />
                学生が立ち上げたAIスタートアップ企業です。<br />
                夢の世界につれこむという理念を掲げ、<br />
                子どもたちのWAO体験を大事に日々精進しています。<br />
                
              </p>
              <p className="text-base lg:text-lg tracking-wide xl:gap-10 font-sans leading-relaxed text-yellow-200 mt-3">
              株式会社COROLE(コロール)
              </p>
            </FadeIn>
            
            {/* right */}
          </div>
          <div className="w-full relative flex justify-center items-center gap-6">
            <motion.div
              initial={{ y: 200 }} /*初期*/
              animate={{ y: 0 }} /*最後*/
              transition={{ duration: 0.8 }}
            >
              <Image
                src={flyingChildren}
                alt="caveChildren"
                className="w-60 rounded-full object-cover shadow-xl transform rotate-12"
                priority
              />
            </motion.div>
            <div className="flex flex-col gap-7">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={spaceChildren}
                  alt="spaceChildren"
                  className="w-60 rounded-full object-cover shadow-xl transform -rotate-12 mb-3"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={caveChildren}
                  alt="caveChildren"
                  className="w-60 rounded-full object-cover shadow-xl transform scale-110"
                  
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>

      <SizedBox />
      
      </>
  );
};

export default Banner;
