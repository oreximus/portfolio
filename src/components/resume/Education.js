import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science"
            subTitle="INDORE INSTITUTE OF SCIENCE AND TECHNOLOGY (2021 - 2025)"
            result="7.26/10"
          />
          <ResumeCard
            title="MP Board (XII)"
            subTitle="PITHAMPUR PUBLIC SCHOOL (2020 - 2021)"
            result="7.68/10"
          />
          <ResumeCard
            title="MP-Board (X)"
            subTitle="PITHAMPUR PUBLIC SCHOOL (2018 - 2019)"
            result="7.52/10"
          />
        </div>
      </div>
      
      {/* Part Two */}
      <div className="flex-1">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certified Courses</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development with HTML, CSS, and JavaScript"
            subTitle="Skills Gained: HTML5, CSS, JavaScript"
            result="Nov 2023"
            des="Successfully completed and received a passing grade in CAD101EN: Introduction to Web Development with HTML, CSS, and JavaScript, a course offered by IBM, an online learning initiative of IBM."
          />
          <ResumeCard
            title="Python on Devtown"
            subTitle="Skills Gained: Python Basics of Deep Learning"
            result="Dec 2022"
            des="Aditya Patidar in collaboration with GDSC KIIT Chapter. Devtown certifies their successful completion of Python."
          />
          <ResumeCard
            title="Great Learning"
            subTitle="Skills Gained: Basics of Cyber Security"
            result="Dec 2022"
            des="Completed the 'Cyber Security Threats and Governance' online course from Great Learning. Grateful for the valuable knowledge imparted, and looking forward to more such opportunities for learning and growth."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
