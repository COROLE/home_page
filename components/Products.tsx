"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
import phoneBoy from "../public/coroleIcon/phoneBoy.png";

const services = [
    { id: 1, name: '【アパパネ】【Apapane】', video: 'https://www.youtube.com/watch?v=Zbrph7N_cw0',image:"/apapaneIcon/apapane.png", release: false, description: 'AI×子ども×エンタメ教育アプリアパパネ', description2: 'やらなあかん教育からやりたい教育への一歩', description3: 'AI(スマホ)とお話しして造る君だけの物語。まさに教育効果も期待できることばのマインクラフト' },
  ];

const Products = () => {
    const [play, setPlay] = useState(false);
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center rounded-br-3xl">
      <h1 className="text-3xl text-white font-bold mt-20 items-center justify-center">Products Of COROLE</h1>
      <p className="text-sm m-3 text-gray-200">from COROLE</p>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {services.map((service) => (
          <FadeIn key={service.id}>
            <div className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-gray-900 p-6 m-10">
              <div className="relative pt-[56.25%] overflow-hidden rounded-lg ">
                <ReactPlayer url={service.video} playing={play} controls width='100%' height='100%' style={{position: 'absolute', top: '0', left: '0'}} />
                { !service.release && <div className="absolute bottom-0 left-0 right-0 bg-orange-300 text-white text-center py-2 font-semibold opacity-90">近日公開</div> }
              </div>
              <button className={`${play ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'} text-white font-bold py-2 px-4 rounded mt-3`} onClick={() => setPlay(!play)}>
                {play ? 'Pause' : 'Play'}
              </button>
              <div className="px-6 py-4">
                <div className='flex items-center justify-normal'>
                <div className="font-bold text-3xl mb-3 font-sans text-white">{service.name}</div>
                <Image src={service.image} alt={service.image} width={50} height={50} className="object-cover shadow-lg" priority />
                </div>
                <p className="text-gray-300 text-lg font-sans">
                  {service.description}
                </p>
                <p className="text-gray-300 text-lg font-sans">
                  {service.description2}
                </p>
                <p className="text-gray-300 text-lg font-sans">
                  {service.description3}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn>
        
      <div className='flex justify-center items-end mt-60'>  {/* Increased margin-top from mt-40 to mt-60 to move the image further down */}
      <Image
                  src={phoneBoy}
                  alt="phoneBoy"
                  width={400} // Changed width from 100 to 50
                  height={400} // Changed height from 100 to 50
                  className="object-cover rounded-t-3xl bg-gradient-to-r from-emerald-500 to-lime-500 shadow-lg"
                  priority
                />
      </div>
      </FadeIn>
    </div>
  )
}

export default Products