"use client";
import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 w-full h-[35rem] flex justify-center items-center px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Discover Amazing Posts
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Explore our collection of thoughtfully curated posts from various
            topics. Stay informed, entertained, and inspired.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors">
              View Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
