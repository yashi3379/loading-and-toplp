'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaEnvelope, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import logo from "@/public/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-custom-yellow shadow-custom-lg">
      <div className="flex h-18 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            style={{
              width: "148px",
              height: "auto",
            }}
          />
        </div>
        <button
          className="md:hidden text-custom-blue text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden md:flex space-x-4 items-center">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="/"
                className="flex items-center text-custom-blue transition duration-300 hover:text-custom-orange"
              >
                <FaHome className="mr-2" />
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center text-custom-blue transition duration-300 hover:text-custom-orange"
              >
                <FaEnvelope className="mr-2" />
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center rounded-xl bg-gradient-to-r from-custom-blue to-light-blue px-4 py-2 text-white shadow-custom-blue transition duration-300 hover:from-light-blue hover:to-custom-blue hover:shadow-lg"
              >
                <FaSignInAlt className="mr-2" />
                ログイン
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="flex items-center rounded-xl bg-gradient-to-r from-custom-green to-light-green px-4 py-2 text-white shadow-custom-green transition duration-300 hover:from-light-green hover:to-custom-green hover:shadow-lg"
              >
                <FaUserPlus className="mr-2" />
                新規登録
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-18 left-0 w-full bg-custom-yellow shadow-custom-lg z-50">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="flex items-center text-custom-blue transition duration-300 hover:text-custom-orange"
                onClick={toggleMenu}
              >
                <FaHome className="mr-2" />
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center text-custom-blue transition duration-300 hover:text-custom-orange"
                onClick={toggleMenu}
              >
                <FaEnvelope className="mr-2" />
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="flex items-center rounded-xl bg-gradient-to-r from-custom-blue to-light-blue px-4 py-2 text-white shadow-custom-blue transition duration-300 hover:from-light-blue hover:to-custom-blue hover:shadow-lg"
                onClick={toggleMenu}
              >
                <FaSignInAlt className="mr-2" />
                ログイン
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="flex items-center rounded-xl bg-gradient-to-r from-custom-green to-light-green px-4 py-2 text-white shadow-custom-green transition duration-300 hover:from-light-green hover:to-custom-green hover:shadow-lg"
                onClick={toggleMenu}
              >
                <FaUserPlus className="mr-2" />
                新規登録
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
