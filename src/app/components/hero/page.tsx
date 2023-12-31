"use client";
import React from "react";
import Video from "next-video";
import Typewriter from "../typewriter/page";
import "my.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const soboto = Roboto({ weight: "300", subsets: ["latin"] });

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
     
      <div className="absolute bottom-0 left-0 ml-6 h-full flex flex-col items-start justify-end hidden md:block md:flex">
        <div className="navglass mb-4">
          <h1 className={`${soboto.className} text-7xl ml-4 mb-4`}>
            Anuj Rawat
          </h1>
        </div>
        <div className="flex mb-16">
          <h1 className="text-3xl pt-2 lg:text-6xl">I&apos;m a </h1>
          <div className="navglass mb-4 lg:text-6 xl text-7xl navglass underline text-underline-red text-thin ml-4">
            <Typewriter />
          </div>
        </div>
      </div>

      {/* Mobile Video */}
      <div>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
          autoPlay
          loop
          muted
        >
          <source src="/herobg/mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mobile Typewriter */}
      <div className="absolute bottom-0  left-0 w-full h-1/2 flex-col items-center justify-center lg:hidden md:hidden">
        <div className="inline-block pr-2 pl-2  pb-2 navglass ml-2 mt-64">
          <h1 className={`${soboto.className} text-4xl `}>Anuj Rawat</h1>
        </div>
        <div className="flex">
          <span className="mt-4 ml-1">
            {" "}
            <h1 className="text-3xl">I&apos;m a </h1>{" "}
          </span>
          {/* className={`${hjet.className} ml-2 pb-6 mt-2 text-5xl underline text-underline-red text-thin'} */}
          <div
            className={`${roboto.className} ml-2 pb-2 mt-2 pl-1 text-5xl navglass underline text-underline-red text-thin`}
          >
            <Typewriter />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
