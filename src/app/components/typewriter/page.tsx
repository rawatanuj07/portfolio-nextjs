"use client";
import Typed from "typed.js";
import {  useRef, useState, useEffect } from "react";
import 'my.css';

export default function Typewriter() {


  const el = useRef(null);



  
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
      <span className="custom-cursor  " ref={el}></span>
    
    </div>
  );
}