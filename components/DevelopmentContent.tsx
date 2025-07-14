import Image from 'next/image';

/**
 * IT受託開発事業の概要と実績を表示するコンポーネント
 */
export default function DevelopmentContent() {
  const achievements = [
    {
      title: '製造計画立案システム',
      description:
        '製造業の製造計画を自動で立案するシステムにより、人手週40時間の手間を削減',
      customer: 'スポーツ用品メーカー様(東証プライム上場、従業員規模連結7000人)',
      icon: '../public/development/25914.png',
    },
    {
      title: '予算実績管理システム',
      description:
        'ExcelやAccessで拠点ごと別々に管理していた予算と実績のシステムを、共通のWebシステムとして構築し、既存の課題を解決',
      customer: '幼稚園～大学を有する私立学校法人様',
      icon: '../public/development/25914.png',
    },
    {
      title: 'デートプランアプリ',
      description:
        'デートスポット提案アプリの依頼を受けて開発を担当。',
      customer: 'モバイルアプリスタートアップ企業様',
      link: 'https://apps.apple.com/jp/app/sumade/id6737273502',
      icon: '../public/development/25914.png',
    },
    {
      title: 'SNS分析/マーケ調査',
      description:
        'サービスエリアに店舗出店する際のコンセプトを決めるためのマーケティング分析を実施。SNS投稿をAIで分析',
      customer: 'サービスエリア飲食・食品製造を手掛けるフードサービス企業様（従業員600人）',
      icon: '../public/development/25914.png',
    },
    {
      title: '図面管理システム',
      description: '金物メーカーの図面管理システムを新しいデータベースで再構築',
      customer: '金物のメーカー様（従業員100人）',
      icon: '../public/development/25914.png',
    },
    {
      title: 'AIコンサルティング',
      description: 'AIの仕組みや活用方法について従業員向け講習会を実施',
      customer: '不動産管理会社様（従業員130人）',
      icon: '../public/development/25914.png',
    },
    {
      title: 'Discordチャットボット',
      description:
        'Discord上でセミナー受講生が利用できる質疑応答AIチャットボットを開発',
      customer: 'AI人材育成／リスキリング支援ベンチャー企業様（従業員50人）',
      icon: '../public/development/25914.png',
    },
    {
      title: 'パズルゲームアプリ',
      description:
        '新しい類のパズルゲームアプリの依頼を受けて開発を担当。',
      customer: '個人のクリエイター様',
      link: 'https://apps.apple.com/jp/app/da-vinci-square/id6742235423',
      icon: '../public/development/25914.png',
    },
  ];

  return (
    <section className="space-y-12">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">会社概要</h1>
        <div>
          <h2 className="text-xl font-semibold">会社情報</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>株式会社COROLE</li>
            <li>法人番号:6140001133688</li>
            <li>
              <a
                href="https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6140001133688"
                className="text-blue-600 underline"
                target="_blank"
              >
                法人基本情報
              </a>
            </li>
            <li>設立: 2024/3/13</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">メンバー</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>役員：関西大学・慶應義塾大学の学生4名</li>
            <li>その他開発メンバー：学生5名+他社エンジニア5名</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">事業内容</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li className="font-semibold">IT受託開発</li>
            <li>映像制作</li>
            <li>ITコンサルティング</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">業務実績</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="p-4 border rounded-lg bg-neutral-50 space-y-2 shadow">
              {item.icon && (
                <div className="flex justify-center">
                  <Image src={item.icon} alt={item.title} width={40} height={40} />
                </div>
              )}
              <h3 className="font-semibold text-center">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="text-xs text-neutral-500">{item.customer}</p>
              {item.link && (
                <a href={item.link} className="text-blue-600 hover:underline text-xs" target="_blank">
                  リンク先へ
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}