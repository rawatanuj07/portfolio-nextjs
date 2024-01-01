import React from "react";
import Video from "next-video";
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
    </div>
  );
}
