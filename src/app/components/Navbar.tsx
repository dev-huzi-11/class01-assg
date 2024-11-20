"use client"
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-6 px-12 bg-slate-800 text-white shadow-xl md:flex justify-between items-center ">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">HuziPost</h1>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-end mt-4 md:mt-0`}>
        <ul className="md:flex gap-6 mb-4 md:mb-0">
          <Link href={"/"}>
            <li className="text-lg font-semibold cursor-pointer hover:text-slate-700 hover:underline py-2 md:py-0">
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="text-lg font-semibold cursor-pointer hover:text-slate-700 hover:underline py-2 md:py-0">
              About
            </li>
          </Link>
          <Link href={"/posts"}>
            <li className="text-lg font-semibold cursor-pointer hover:text-slate-700 hover:underline py-2 md:py-0">
              Posts
            </li>
          </Link>
          <Link href={"contact"}>
            <li className="text-lg font-semibold cursor-pointer hover:text-slate-700 hover:underline py-2 md:py-0">
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 font-bold text-lg transition duration-300 text-white ml-6">
            login
          </button>
          <button className="px-6 py-2.5 text-lg text-black font-semibold bg-gray-200 hover:bg-gray-300 transition duration-300 rounded-md border-2">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;