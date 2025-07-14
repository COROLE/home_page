import React from 'react';
import { FadeInFromLeft, FadeInFromRight } from './FadeIn';
import Image from 'next/image';

const achievements = [
  {
    id: 1,
    title: '製造計画立案システム',
    day: '2025/6',
    description: '製造業の製造計画を自動で立案するシステムにより、人手週40時間の手間を削減【スポーツ用品メーカー様(東証プライム上場、従業員規模連結7000人)】',
    image: '/development/schedule.jpg',
    reverse: false,
  },
  {
    id: 2,
    title: '予算実績管理システム',
    day: '2025/7',
    description: 'ExcelやAccessで拠点ごと別々に管理していた予算と実績のシステムを、共通のWebシステムとして構築し、既存の課題を解決【幼稚園～大学を有する私立学校法人様】',
    image: '/development/budget.jpg',
    reverse: true,
  },
  {
    id: 3,
    title: 'デートプランアプリ',
    day: '2025/1',
    description: 'デートスポット提案アプリの依頼を受けて開発を担当。【モバイルアプリスタートアップ企業様】https://apps.apple.com/jp/app/sumade/id6737273502',
    image: '/development/sumade.png',
    reverse: false,
  },
  {
    id: 4,
    title: 'SNS分析/マーケ調査',
    day: '2025/5',
    description: 'サービスエリアに店舗出店する際のマーケティング分析を行う。SNSから特定の用語の投稿を取得し、内容をAIやデータサイエンスで分析【サービスエリア飲食・食品製造を手掛けるフードサービス企業様（従業員600人）】',
    image: '/development/sns.jpg',
    reverse: true,
  },
  {
    id: 5,
    title: '図面管理システム',
    day: '2025/2',
    description: '金物のメーカーさんの図面管理システムについて、古いデータベースシステムを新しく再構築【金物のメーカー様（従業員100人）】',
    image: '/development/drawing.jpg',
    reverse: false,
  },
  {
    id: 6,
    title: 'AIコンサルティング',
    day: '2025/2',
    description: 'AIの仕組みや活用方法について従業員の方々に講習会を開く【不動産管理会社様（従業員130人）】',
    image: '/development/consulting.jpg',
    reverse: true,
  },
  {
    id: 7,
    title: 'Discordチャットボット',
    day: '2024/8',
    description: 'Discordにて、セミナー受講生が使える質疑応答AIチャットボットシステムの開発【AI人材育成／リスキリング支援ベンチャー企業様（従業員50人）】',
    image: '/development/chat.jpg',
    reverse: false,
  },
  {
    id: 8,
    title: 'パズルゲームアプリ',
    day: '2025/6',
    description: '新しい類のパズルゲームアプリの依頼を受けて開発を担当。【個人のクリエイター様】https://apps.apple.com/jp/app/da-vinci-square/id6742235423',
    image: '/development/puzzle.webp',
    reverse: true,
  },
];

const DevelopmentContent = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
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

export default DevelopmentContent;
