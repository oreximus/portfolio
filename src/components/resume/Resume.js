import React, { useState } from "react";
import { FcDownload } from "react-icons/fc";
import Aditya_Resume from "../../assets/ptdr.pdf";
import Title from "../layouts/Title";
import Achievement from "./Achievement";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("education");

  const renderSection = () => {
    switch (activeSection) {
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "achievements":
        return <Achievement />;
      default:
        return <Education />;
    }
  };

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="All About Me" des="My Resume" />
        <a href={Aditya_Resume} download="RESUME (Anubhav_Resume)">
          <FcDownload
            style={{
              marginLeft: "0.5em",
              fontSize: "2.5em",
              cursor: "pointer",
            }}
          />
        </a>
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {["education", "skills", "experience", "achievements"].map(
            (section) => (
              <li
                key={section}
                onClick={() => setActiveSection(section)}
                className={`${
                  activeSection === section
                    ? "border-designColor rounded-lg"
                    : "border-transparent"
                } resumeLi`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ),
          )}
        </ul>
      </div>
      {renderSection()}
    </section>
  );
};

export default Resume;
