'use client';

import { useState, useEffect } from 'react';
import TriviaLoadingModal from '../components/TriviaLoadingModal';
import { useTrivias } from '../hooks/useTrivias';
import { Trivia } from '@/types/type';

const Page = () => {
  const { trivias, error } = useTrivias();
  const [currentTrivia, setCurrentTrivia] = useState<Trivia | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('Fetched trivias:', trivias); // 取得したトリビアのデータを表示

    if (trivias.length > 0) {
      const randomIndex = Math.floor(Math.random() * trivias.length);
      setCurrentTrivia(trivias[randomIndex]);
      console.log('Initial trivia set:', trivias[randomIndex]); // 初期のトリビアを表示

      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * trivias.length);
        setCurrentTrivia(trivias[randomIndex]);
        console.log('Updated trivia set:', trivias[randomIndex]); // 更新されたトリビアを表示
      }, 15000);

      return () => clearInterval(intervalId);
    }
  }, [trivias]);

  const startLoading = () => {
    console.log('Loading started'); // ローディング開始時にログを表示
    setIsLoading(true);
    setShowModal(true); // ボタンを押した時にモーダルを表示

    setTimeout(() => {
      console.log('Loading ended'); // ローディング終了時にログを表示
      setIsLoading(false);
      setShowModal(false); // 1分後にモーダルを非表示
    }, 60000);
  };

  console.log('Is loading:', isLoading, 'Show modal:', showModal); // ローディングとモーダルの状態を表示

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button
        onClick={startLoading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
      >
        Start 1 Minute Loading
      </button>

      {showModal && <TriviaLoadingModal trivia={currentTrivia} />}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Page;
