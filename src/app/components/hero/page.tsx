"use client";
import React from "react";
import Video from "next-video";
import Typewriter from "../typewriter/page";
import "my.css";
import { Long_Cang, Roboto, Diphylleia } from "next/font/google";
const long_cang = Long_Cang({ weight: "400", subsets: ["latin"] });
const hjet = Roboto({ weight: "400", subsets: ["latin"] });

// import { Typewriter } from 'typewriter-effect';
// import myVideo from '/videos/herobg/desktop.mp4';

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop/Laptop Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover hidden md:block"
        autoPlay
        loop
        muted
      >
        <source src="/herobg/desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Desktop Typewriter */}
      <div className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center hidden md:flex">
        <div>
          <h1 className={long_cang.className}>Anuj Rawat</h1>
        </div>

        <Typewriter />
      </div>

      {/* Mobile Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
        autoPlay
        loop
        muted
      >
        <source src="/herobg/mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div></div>

      {/* Mobile Typewriter */}
      <div className="absolute bottom-0  left-0 w-full h-1/2 flex-col items-center justify-center lg:hidden md:hidden">
        <div className="inline-block pr-2 pl-2  pb-2 navglass ml-2 mt-64">
          <h1 className={`${hjet.className} text-4xl `}>Anuj Rawat</h1>
        </div>
        <div className="flex">
          <span className="mt-4 ml-1">
            {" "}
            <h1 className="text-3xl">I&apos;m a </h1>{" "}
          </span>
          {/* className={`${hjet.className} ml-2 pb-6 mt-2 text-5xl underline text-underline-red text-thin'} */}
          <div
            className={`${hjet.className} ml-2 pb-6 mt-2 text-5xl underline text-underline-red text-thin`}
          >
            <Typewriter />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
