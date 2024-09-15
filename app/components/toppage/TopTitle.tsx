'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBook, FaGlobeAmericas, FaLightbulb } from 'react-icons/fa'; // React Icons
import { useEffect } from 'react';
import logo from '@/public/title-image.png'; // ロゴ画像
// import heroImage from '@/public/hero-image.png'; // ヒーローセクションの背景画像
// // import step1Image from '@/public/step1.png'; // ステップ1の画像
// // import step2Image from '@/public/step2.png'; // ステップ2の画像
// // import step3Image from '@/public/step3.png'; // ステップ3の画像

const Toptitle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // ヘッダーの高さ分の上部パディングを追加
    <main className="bg-blue-600 text-gray-800 pt-5">
      {/* ヒーローセクション */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Image src={logo} alt="Yeah! English Picture Diary" width={360} height={240} className="mx-auto animate-bounce" />
          <h1 className="text-4xl font-bold mt-8 animate-fade-in">英語をもっと楽しく、もっと身近に！</h1>
          <p className="mt-4 text-lg">このアプリで、日常英語を楽しく学び、毎日の出来事を英語で表現しよう！</p>
          <div className="mt-8">
            <Link href="/" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-full font-bold hover:bg-yellow-500 transition duration-300 transform hover:scale-110">
                今すぐ始める
            </Link>
          </div>
          <div className="mt-8">
            {/* <Image src={heroImage} alt="Hero Image" layout="responsive" className="transform transition-transform duration-700 hover:scale-105" /> */}
          </div>
        </div>
      </section>

      {/* ご利用の流れセクション */}
      <section className="py-16 px-4 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8 fade-in">どうやって使うの？</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center fade-in">
            {/* <Image src={step1Image} alt="Step 1" width={100} height={100} className="mx-auto" /> */}
            <h3 className="text-xl font-bold mt-4">ステップ1</h3>
            <p className="mt-2">アプリをダウンロードして、はじめよう！</p>
          </div>
          <div className="text-center fade-in">
            {/* <Image src={step2Image} alt="Step 2" width={100} height={100} className="mx-auto" /> */}
            <h3 className="text-xl font-bold mt-4">ステップ2</h3>
            <p className="mt-2">日記を書いて、毎日少しずつ英語力アップ！</p>
          </div>
          <div className="text-center fade-in">
            {/* <Image src={step3Image} alt="Step 3" width={100} height={100} className="mx-auto" /> */}
            <h3 className="text-xl font-bold mt-4">ステップ3</h3>
            <p className="mt-2">書いた日記をシェアして、友達と楽しもう！</p>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8 fade-in">このアプリの強み</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="fade-in p-6 bg-yellow-100 rounded-lg shadow-md">
            <FaGlobeAmericas className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">日常英語が学べる</h3>
            <p>資格や受験勉強ではカバーできない、リアルな日常英語を楽しく学べます。</p>
          </div>
          <div className="fade-in p-6 bg-yellow-100 rounded-lg shadow-md">
            <FaBook className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">自分の出来事を英語で表現</h3>
            <p>自分の体験や出来事を英語で記録し、オリジナルの英単語を増やしましょう。</p>
          </div>
          <div className="fade-in p-6 bg-yellow-100 rounded-lg shadow-md">
            <FaLightbulb className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">イメージで覚える英単語</h3>
            <p>自動生成されたイラストと一緒に英単語を覚えるから、忘れにくい！</p>
          </div>
        </div>
      </section>

      {/* フッターセクション */}
      <footer className="py-8 bg-blue-600 text-center text-white">
        <p className="text-sm">© 2024 Yeah! 英絵日記. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/download" className="text-white underline">
            今すぐダウンロード
          </Link>
        </div>
        {/* お問合せ */}
        <div className="mt-4">
          <Link href="/contact" className="text-white underline">
            お問い合わせ
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Toptitle;
