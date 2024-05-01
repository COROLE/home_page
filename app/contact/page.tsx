"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import FadeIn from '@/components/FadeIn'; // Added import for FadeIn component
import callingBoy from "../../public/coroleIcon/callingBoy.png";



const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });
    if (response.ok) {
      alert('お問い合わせありがとうございます。追ってご連絡いたします。');
      setEmail('');
      setMessage('');
    } else {
      alert('送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
      <div className="bg-gradient-to-r from-emerald-500 to-lime-500 flex flex-col items-center justify-center font-sans rounded-b-3xl">
          <FadeIn> {/* Wrapped the main div with FadeIn component */}
          
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl mt-20 mb-5">
          <h2 className="text-2xl font-bold text-center mb-6">お問い合わせ</h2>
          <p className='text-sm font-semibold text-center text-red-500'>※現在はbeta版のため送信ができません。</p>
          <p className='text-sm font-semibold text-center text-red-500'>こちらのアドレスへご連絡お願いいたします。</p>
          <Link href="mailto:corole830@gmail.com">
            <p className='text-sm font-semibold text-center text-red-500'>corole830@gmail.com</p>
          </Link>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            送信
          </button>
        </form>
    </FadeIn>


        <Image
                  src={callingBoy}
                  alt="callingBoy"
                  width={300} // Changed width from 100 to 50
                  height={300} // Changed height from 100 to 50
                  className="object-cover"
                />

      </div>
  );
};

export default ContactPage;

