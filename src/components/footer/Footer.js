import React from 'react';
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { logo } from "../../assets/index";
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="w-full py-20 border-t-[1px] border-t-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex gap-4">
          <a href="https://wa.me/+917828982951" aria-label="WhatsApp">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
          </a>
          <a href="https://github.com/Engglala243" aria-label="GitHub">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/aditya-patidar-9349a3218/" aria-label="LinkedIn">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden">
          <li>
            <a href="#home" className="relative text-lg hover:text-designColor duration-300 group">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#features" className="relative text-lg hover:text-designColor duration-300 group">
              Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#project" className="relative text-lg hover:text-designColor duration-300 group">
              Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#resume" className="relative text-lg hover:text-designColor duration-300 group">
              Document
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="relative text-lg hover:text-designColor duration-300 group">
              Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden">
          <li>
            <a href="#authentication" className="relative text-lg hover:text-designColor duration-300 group">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#status" className="relative text-lg hover:text-designColor duration-300 group">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#terms" className="relative text-lg hover:text-designColor duration-300 group">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#pricing" className="relative text-lg hover:text-designColor duration-300 group">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#rights" className="relative text-lg hover:text-designColor duration-300 group">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider mb-4">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden">
          <li>
            <a href="#documentation" className="relative text-lg hover:text-designColor duration-300 group">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#authentication" className="relative text-lg hover:text-designColor duration-300 group">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#api" className="relative text-lg hover:text-designColor duration-300 group">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#support" className="relative text-lg hover:text-designColor duration-300 group">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
          <li>
            <a href="#opensource" className="relative text-lg hover:text-designColor duration-300 group">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
