import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C-Language', percentage: 40 },
    { name: 'C++', percentage: 70 },
    { name: 'Python', percentage: 60 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'HTML', percentage: 65 },
    { name: 'CSS', percentage: 65 },
    { name: 'Bootstrap', percentage: 70 },
    { name: 'React-js', percentage: 80 },
    { name: 'Git-Github', percentage: 85 },
    { name: 'Mysql', percentage: 40 },
    { name: 'Vercel', percentage: 75 },
  ];

  const nonTechSkills = [
    { name: 'Communication', percentage: 40 },
    { name: 'Time Management', percentage: 70 },
    { name: 'Problem Solving', percentage: 50 },
    { name: 'Leadership', percentage: 40 },
    { name: 'Creativity', percentage: 40 },
    { name: 'Enthusiasm', percentage: 75 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {skills.map(skill => (
            <div key={skill.name} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ width: `${skill.percentage}%` }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.percentage}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Non-Tech Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {nonTechSkills.map(skill => (
            <div key={skill.name} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ width: `${skill.percentage}%` }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.percentage}%</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
