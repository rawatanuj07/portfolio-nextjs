import Typed from "typed.js";
import { useEffect, useRef } from "react";
import 'my.css';

import { Long_Cang } from 'next/font/google'
const long_cang = Long_Cang({ weight: "400", subsets: ['latin'] })

export default function Typewriter() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Programmer.", "Developer.", "QA-Analyst."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 70,
      backDelay: 1000,
    //   smartBackspace: true,
      showCursor: false,
      loop: true,
      

    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex">
      {/* <h1 className={long_cang.className}>Anuj Rawat</h1> */}
      {/* Element to display typing strings */}
     <span className="custom-cursor navglass" ref={el}></span>
    </div>
  );
}
