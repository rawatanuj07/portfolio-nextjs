"use client";
import Typed from "typed.js";
import {  useRef, useState, useEffect } from "react";
import 'my.css';
// import { Howl } from 'howler';

export default function Typewriter() {
  // const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  // const [typingSound, setTypingSound] = useState<Howl | null>(null);

  const el = useRef(null);

  // const handleButtonClick = () => {
  //   // Create or resume AudioContext on user gesture (e.g., button click)
  //   const context = new AudioContext();
  //   setAudioContext(context);

  //   // Create the typing sound
  //   const sound = new Howl({
  //     src: ['/audio/keyb.mp3'],
  //     volume: 1.0,
  //     rate: 0.7,
  //     loop: true,
  //   });
  //   setTypingSound(sound);

  //   // Start the typing sound
  //   sound.play();


  // };

  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programmer.", "Developer.", "QA-Analyst."], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 1000,
      showCursor: false,
      loop: true,
    
    });

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <div className="flex">
      <span className="custom-cursor navglass " ref={el}></span>
      {/* <div className="flex">
        {!audioContext && <button onClick={handleButtonClick}>Start</button>}
      </div> */}
    </div>
  );
}