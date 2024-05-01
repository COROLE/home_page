import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn'; 



const teamMembers = [
  { name: '上村 温大', image: '/personal/haruto.jpg', role: 'CEO', status: '関西大学商学部',bio: 'エンジニア・AI・ビズデブ・デザイン', color: 'bg-red-500' },
  { name: '上村 翔太', image: '/personal/shota.png', role: 'CSO', status: '関西大学社会学部',bio: 'ビズデブ・データサイエンス', color: 'bg-blue-500' },
  { name: '樋渡 雅樹', image: '/personal/masaki.JPG', role: 'COO', status: '慶應義塾大学理工学部',bio: 'エンジニア・AI・英語', color: 'bg-green-500' },
  { name: '池内 晶', image: '/personal/akira.png', role: 'CTO', status: '香川高専情報工学科',bio: 'エンジニア・AI・情報', color: 'bg-yellow-500' }
];

const TeamCard = () => {
    return (
      <div className="bg-gray-900 text-white py-20 rounded-b-3xl">
        <div className="container mx-auto px-4 mt-20">
          <h2 className="text-3xl font-bold text-center mb-20">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {teamMembers.map(member => (
              <FadeIn key={member.name}> {/* FadeIn コンポーネントで各カードをラップ */}
                <div className={`p-4 rounded-xl shadow-xl text-center ${member.color} transform hover:scale-105 transition-transform duration-300`}>
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                    <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover"/>
                  </div>
                  <h4 className="text-sm">{member.role}</h4>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-xs">{member.status}</p>
                  <p className="text-xs font-sans">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
 <div className='mb-10'></div>
            
          </div>
        </div>
      </div>
    )
  }
  
  export default TeamCard;