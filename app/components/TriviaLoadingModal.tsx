"use client";

import { Trivia } from "@/types/type";
import Image from "next/image";
import logo from "@/public/logo.png"; // アップロードした画像のパスを適用
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

interface TriviaLoadingModalProps {
  trivia: Trivia | null;
}

const TriviaLoadingModal: React.FC<TriviaLoadingModalProps> = ({ trivia }) => {
  // triviaがnullであればモーダルを表示しない
  if (!trivia) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50 transition-opacity duration-500 ease-in-out">
      <div className="bg-yellow-400 rounded-lg shadow-md overflow-hidden max-w-lg w-full mx-4 p-4 max-h-[80vh]">
        {/* ロゴの追加 */}
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Logo" width={80} height={80} style={{ width: "auto", height: "auto" }} />
        </div>

        <div className="bg-orange-100 p-3 rounded-lg overflow-auto max-h-[60vh]">
          <h2 className="text-lg font-bold mb-2 text-orange-700 text-center">
            {trivia.title}
          </h2>
          <div className="flex flex-col md:flex-row ">
            {/* 日本語のトリビア */}
            <div className="md:w-1/2 p-2 border-b-2 border-orange-400 md:border-none">
              <p
                className="text-gray-800 text-base font-poppins "
                style={{ wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{ __html: trivia.trivia }}
              ></p>
            </div>
            {/* 英語のトリビア */}
            <div className="md:w-1/2 p-2 md:border-l-2 border-orange-400">
              <p
                className="text-gray-800 text-base font-poppins leading-tight"
                style={{ wordBreak: "break-word" }}
                dangerouslySetInnerHTML={{ __html: trivia.trivia_en }}
              ></p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="relative w-48 h-32 md:w-64 md:h-40">
              <Image
                src={trivia.image.url}
                alt={trivia.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ローディング画面 */}
      <div className="mt-4 flex flex-col items-center">
        <ThreeDots fill="#000" />
        <p className="mt-4 text-lg font-medium">
          Loading<span className="dots"></span>
        </p>
      </div>

      <style jsx>{`
        @keyframes dotAnimation {
          0% {
            content: "";
          }
          25% {
            content: ".";
          }
          50% {
            content: "..";
          }
          75% {
            content: "...";
          }
          100% {
            content: "";
          }
        }

        .dots::after {
          content: "";
          animation: dotAnimation 1.5s infinite steps(4);
        }
      `}</style>
    </div>
  );
};

export default TriviaLoadingModal;
