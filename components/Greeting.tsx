import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import greeting from '../public/personal/greeting.jpg'; 

const Greeting = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 min-h-screen flex flex-col items-center justify-center rounded-b-2xl">
      <FadeIn>
        <h1 className="text-4xl font-bold text-white m-20">代表挨拶</h1>
      </FadeIn>
      <FadeIn>
        <div className="rounded-full overflow-hidden w-48 h-48 md:rounded-3xl md:w-auto md:h-auto">
          <Image
            src={greeting}
            alt="greeting"
            width={400}
            height={500}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      </FadeIn>
      <FadeIn>
        <div className='flex flex-col text-white items-center justify-center font-sans font-semibold'>
          <p className='mt-10 px-5 text-center text-sm md:text-base'>(株)COROLE 代表取締役CEO/ 関西大学商学部</p>
          <p className='mt-1 text-center text-sm md:text-base'>上村 温大</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col items-center justify-center gap-10 p-4 font-sans sm:px-3">
          <div className="w-full text-center">
            <p className="text-white text-sm mt-10 md:text-lg font-sans">
              私自身、幼少期の頃に自分の世界観というものをはっきりと持っていました。<br />
              頻繁に幻想キャラと戦闘しており、その話をよく親に持ちかけたものです笑<br />
              しかし、自分の夢ある世界観はイマイチ皆に理解されず、<br />
              自分の中だけで完結してしまっていたという少し悲しい過去がありました。<br />
              年月が経ち、社会を知るにつれ、夢への情熱も希釈し、<br />
              今振り返っても少し寂しく思います。
            </p>
            <p className="text-white text-sm font-normal m-10 md:text-lg">
              そのため私たち株式会社COROLEは、<br />
              『夢の世界につれこむ』<br />
              という経営理念のもと、最初にアパパネアプリを通して、<br />
              子供のWAO体験を拡充させ、常識に囚われすぎず、個性を尊重し、<br />
              子供たちが次のステップに進みやすい社会環境にしていく活動に励んでおります。
            </p>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-row-reverse items-center justify-center gap-10 p-4 font-sans">
          <div className="w-full text-center">
            <p className="text-white text-sm font-normal mb-20 md:text-lg">
              これまで、たくさんの大先輩方に支えられて<br />
              一歩一歩着実に歩みを進めております。<br />
              みなさま、<br />
              (株)COROLEの応援<br />
              どうぞよろしくお願いいたします。
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Greeting;