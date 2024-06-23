"use client"

import React from 'react';
import Image from 'next/image';
import FadeIn, { FadeInFromLeft, FadeInFromRight, ScaleInImage } from './FadeIn';
import smileGirl from "../public/coroleIcon/smileGirl.png";
import pocPoster from "../public/poster/pocPoster.png";


const activities = [
  {
    id: 1,
    text: '幼稚園や小学校にて実証実験を実施中です。実績: 京阪神の幼稚園さま、兵庫県のオルタナティブスクールさま',
    image: '/coroleIcon/proChildren.webp',
    shadow: true,
    reverse: false
  },
  {
    id: 2,
    text: '実証実験の結果から得られたフィードバックを基に改善を行っています。',
    image: '/coroleIcon/interview.webp',
    shadow: false,
    reverse: true
  },
  {
    id: 3,
    text: 'エデュテイメントとしての教育効果を示すため、\n大学さまとの連携を進行しております。',
    image: '/coroleIcon/academy.webp',
    shadow: true,
    reverse: false
  }
];

const Content = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 w-full rounded-bl-3xl rounded-3xl relative px-4 pt-10 shadow-lg mt-5" >
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
            <div className='my-40 transform hover:scale-105 transition-transform duration-300'>
      <ScaleInImage src={pocPoster.src} alt="pocPoster" width={1000} height={400} className="rounded-lg shadow-2xl" priority={true}></ScaleInImage>
      </div>
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