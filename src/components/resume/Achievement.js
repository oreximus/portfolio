import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 lg:flex-row"
    >
      <div className="flex-1">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold">ACCOLADES</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Attended Workshop (SIG)"
            subTitle="C, C++ and Java"
            result="Offline"
            des="Gained practical knowledge in C, C++, and Java programming languages. Enhanced coding skills through hands-on sessions and real-world examples. Collaborated with peers on projects and problem-solving exercises."
          />
          <ResumeCard
            title="2-Star at CODE STDIO"
            subTitle="Competitive Programming"
            result="Online"
            des="Achieved a 2-star rating on CodeChef! I'm grateful for the challenges, the knowledge gained, and the incredible community that has supported me along the way."
          />
          <ResumeCard
            title="Solved 200+ DSA Problems"
            subTitle="On Different Coding Platforms"
            result="Online"
            des="Successfully solved 200+ Data Structures and Algorithms problems! It's been an incredible journey of continuous learning, problem-solving, and honing my coding skills."
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold">EXTRACURRICULAR</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Placement Cell"
            subTitle="Volunteer at IIST"
            result="2023"
            des="Assisted in organizing campus recruitment drives and career fairs. Coordinated with companies and students to facilitate smooth placement processes. Provided support and guidance to peers in resume building and interview preparation."
          />
          <ResumeCard
            title="Completed Virtual Internships"
            subTitle="IBM"
            result="2024"
            des="Developed hands-on experience in cloud computing and Web technologies. Collaborated on real-world projects, enhancing problem-solving and technical skills. Attended expert-led sessions and received mentorship from industry professionals."
          />
          <ResumeCard
            title="Hackathon Participant"
            subTitle="Smart India Hackathon"
            result="2023"
            des="Collaborated with a multidisciplinary team to develop an innovative solution for a real-world problem. Utilized advanced programming skills and creative thinking to design and implement the project. Presented the project to industry experts, receiving valuable feedback and recognition."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
