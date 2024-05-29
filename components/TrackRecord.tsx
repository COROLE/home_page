import React from 'react';
import { FadeInFromLeft, FadeInFromRight } from './FadeIn';
import Image from 'next/image';


const achievements = [
  { id: 1, title: 'Achievement 1', day: '2023/09/11', description: '関西大学HACK-Academyの起業プログラム、イノベーションキャンプに参加し、事業の価値創造、ターゲット仮説をブラッシュアップし、インキュベーションプログラムで実証実験を行う。活動費の支援に加えてAlpfaDrive様のメンタリングを半年間受ける', image: '/event/kandai.jpg', reverse: false },
  { id: 2, title: 'Achievement 2', day: '2023/10/08', description: 'Code for Japan様が主催するCCC U-22の大会でCode for Japan賞・Salesforce賞を獲得', image: '/event/ccc.jpg', reverse: true },
  { id: 3, title: 'Achievement 3', day: '2023/12/09', description: 'Skyland Ventures様主催の荒波23秋のイベントで総合優秀賞・Skyland Ventures賞・Buisiness賞を受賞', image: '/event/aranami.jpeg', reverse: false },
  { id: 4, title: 'Achievement 4', day: '2024/03/02', description: 'g0v様のSch001(スクール) とCode for Japan様のCCC U-22合同イベントで台湾大学にてピッチ', image: '/event/taiwan.jpg', reverse: true },
  { id: 5, title: 'Achievement 5', day: '2024/03/07', description: 'FINOLAB様主催のカオスピッチにて今までよりもぶっ飛んだカオスなプレゼンテーションで『夢の世界につれこむ』という経営理念を表現', image: '/event/chaos.jpg', reverse: false },
  { id: 6, title: 'Achievement 6', day: '2024/05/28', description: 'Ecosystem Link #7にて若手起業家としての登壇に推薦され、今までのPOC実績を公開', image: '/event/ecosystem_link.JPG', reverse: true }
];

const TrackRecord = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          achievement.reverse ? 
            <FadeInFromRight key={achievement.id}>
              <div className="flex flex-col lg:flex-col items-center justify-between gap-10 p-4 bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src={achievement.image} alt={achievement.title} width={300} height={200} className="rounded-lg object-cover" priority/>
                <div className="text-gray-700 text-lg">
                  <h3 className="text-xl">{achievement.title}</h3>
                  <p className='font-sans my-2'>{achievement.description}</p>
                  <p className='text-gray-600'>{achievement.day}</p>
                </div>
              </div>
            </FadeInFromRight>
          :
            <FadeInFromLeft key={achievement.id}>
              <div className="flex flex-col lg:flex-col items-center justify-between gap-10 p-4 bg-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src={achievement.image} alt={achievement.title} width={300} height={200} className="rounded-lg object-cover" />
                <div className="text-gray-700 text-lg">
                  <h3 className="text-xl">{achievement.title}</h3>
                  <p className='font-sans my-2'>{achievement.description}</p>
                  <p className='text-gray-600'>{achievement.day}</p>
                </div>
              </div>
            </FadeInFromLeft>
        ))}
        
      </div>
    </div>
  );
}

export default TrackRecord;
