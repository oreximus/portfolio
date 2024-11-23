import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiHtml5Fill } from "react-icons/ri";

const Media = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://github.com/Engglala243" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/aditya-patidar-9349a3218/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="https://www.instagram.com/aditya_patidar_37/#" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Best Skills On</h2>
        <div className="flex gap-4">
          <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaReact />
            </span>
          </a>
          <a href="https://yesicon.app/ri/html5-fill" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <RiHtml5Fill />
            </span>
          </a>
          <a href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
