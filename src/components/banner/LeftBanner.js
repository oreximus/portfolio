// import React from 'react';
// import { Cursor, useTypewriter } from "react-simple-typewriter";
// import Media from './Media';

// const LeftBanner = () => {
//     const [text] = useTypewriter({
//       words: ["Web Developer.", "Software Engineer."],
//       loop: true,
//       typeSpeed: 10,
//       deleteSpeed: 5,
//       delaySpeed: 700,
//     });

//     return (
//         <div className="w-full lg:w-1/2 flex flex-col gap-10">
//             <div className="flex flex-col gap-5">
//                 <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
//                 <h1 className="text-4xl lg:text-6xl font-bold text-white">
//                     Hi, I'm <span className="text-designColor capitalize">Aditya Patidar</span>
//                 </h1>
//                 <h2 className="text-2xl lg:text-4xl font-bold text-white">
//                     <span>{text}</span>
//                     <Cursor
//                         cursorBlinking="false"
//                         cursorStyle="|"
//                         cursorColor="#ff014f"
//                     />
//                 </h2>
//                 <p className="text-base font-bodyFont leading-6 tracking-wide">
//                 I am a B-Tech (CS) student, set to complete my graduation in 2025, with a solid grounding in web technologies and a robust understanding of Data Structures and Algorithms. Driven by a deep passion for coding, I aspire to share in-depth insights and valuable experiences gleaned from my ongoing journey in the tech world.
//                 </p>
//             </div>
//             {/* Media */}
//             <Media />
//         </div>
//     );
// }
// export default LeftBanner;

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "Software Engineer."],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 5,
    delaySpeed: 700,
  });

  return (
    // <div className="w-full min-h-screen flex flex-col justify-center items-center gap-10 px-5 lg:px-20">
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-8 px-8 lg:px-32 pt-10">
      <div className="flex flex-col gap-5 text-center lg:text-left">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Anubhav Singh Parte
          </span>
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide max-w-xl mx-auto lg:mx-0">
          I'm a Information Technology Enthusiast, who loves to explore amazing
          things in IT, to solve real world problem with the most optimized and
          updated solutions.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
