"use client"

import React from 'react';
import Image from 'next/image';
import { FadeInFromLeft, FadeInFromRight } from './FadeIn';
import smileGirl from "../public/coroleIcon/smileGirl.png";


const activities = [
  {
    id: 1,
    text: '数々の幼稚園さまや小学校さまにて実証実験を行っております。',
    image: '/coroleIcon/proChildren.webp',
    shadow: true,
    reverse: false
  },
  {
    id: 2,
    text: '親御さまやお子様方から得られたフィードバックを参考に日々改良を行っております。',
    image: '/coroleIcon/interview.webp',
    shadow: false,
    reverse: true
  },
  {
    id: 3,
    text: 'エンタメ教育としての教育効果を示すため、\nアカデミアとの連携を進行しております。',
    image: '/coroleIcon/academy.webp',
    shadow: true,
    reverse: false
  }
];

const Content = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 w-full rounded-bl-3xl rounded-3xl relative px-4 pt-10 shadow-lg mt-5" style={{ position: 'sticky', top: '100vh', zIndex: 10 }}>
      {activities.map((activity) => (
        activity.reverse ? 
          <FadeInFromRight key={activity.id}>
            <div className="flex flex-row-reverse items-center justify-between gap-10 p-4 font-sans">
              <div className="w-1/2">
                <Image src={activity.image} alt="Activity Image" width={500} height={300} className="rounded-full object-cover shadow-lg" priority />
              </div>
              <div className="w-1/2 text-gray-700 text-lg font-semibold">
                {activity.text}
              </div>
            </div>
          </FadeInFromRight>
        :
          <FadeInFromLeft key={activity.id}>
            <div className="flex flex-row items-center justify-between gap-10 p-4 font-sans">
              <div className="w-1/2">
                <Image src={activity.image} alt="Activity Image" width={500} height={300} className="rounded-full object-cover shadow-lg" priority/>
              </div>
              <div className="w-1/2 text-gray-700 text-lg font-semibold">
                {activity.text}
              </div>
            </div>
          </FadeInFromLeft>
      ))}
      <div className='mt-10'></div>
      <div className='flex justify-center items-end mt-20'>
      <Image
                  src={smileGirl}
                  alt="smileGirl"
                  width={300} // Changed width from 100 to 50
                  height={300} // Changed height from 100 to 50
                  className="object-cover rounded-t-3xl bg-gradient-to-r from-emerald-500 to-lime-500 shadow-lg"
                  priority
                />
      </div>
    </div>
  );
}

export default Content