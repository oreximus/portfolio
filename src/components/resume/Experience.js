import { motion } from "framer-motion";
import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-4xl font-bold">Basic Experience</h2>
        </div>
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

        <ResumeCard
          title="Smart India Hackathon"
          subTitle="Department of Computer Science, Indore Institute of Science and Technology - (September 2023)"
          result="Offline"
          des={[
            "• Role: Team Leader.",
            "• Achievement: Led a team to develop an innovative solution that secured a top position among hundreds of competing projects.",
            "• Responsibilities:-",
            "  -- Coordinated with team members to brainstorm and implement a solution to a complex real-world problem.",
            "  -- Managed project timelines, ensuring timely delivery of each development phase.",
            "  -- Presented the project to a panel of industry experts, receiving commendations for creativity and technical prowess."
          ].map((item, index) => <div key={index}>{item}</div>)}
        />
  
        <ResumeCard
          title="Event Management"
          subTitle="Dazzle, Indore Institute of Science and Technology - (2023)"
          result="Offline"
          des={[
                "• Role: Coordinator.",
                "• Achievement: Successfully managed and executed a large-scale event with over 500 attendees.",
                "• Responsibilities:-",
                  "-- Coordinated with various teams to ensure seamless event planning and execution.",
                  "-- Managed schedules, logistics, and vendor relationships to ensure timely and efficient operations.",
                  "-- Supervised the setup and breakdown of event spaces, ensuring all safety and regulatory requirements were met.",
                  "-- Engaged with participants and handled on-the-spot issues, ensuring a smooth and enjoyable experience for all."
                ].map((item, index) => <div key={index}>{item}</div>)}
        />


        <ResumeCard
          title="Web Developer"
          subTitle="Apoliums - (May 2024 - June 2024)"
          result="Offline"
          des={[
                "• Role: Intermediate Web Developer.",
                "• Achievement: Successfully enhanced the user experience of a major client website, resulting in a 25% increase in user engagement.",
                "• Responsibilities:-",
                  "-- Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.",
                  "-- Collaborated with cross-functional teams to integrate RESTful APIs and optimize front-end performance.",
                  "-- Implemented robust state management solutions to ensure seamless data flow and application scalability.",
                  "-- Conducted code reviews and provided mentorship to junior developers, fostering a collaborative and growth-oriented environment.",
                  "-- Utilized version control systems (Git) to manage project workflows and maintain code integrity."
                ].map((item, index) => <div key={index}>{item}</div>)}
        />

      </div>
    </div>
    </motion.div>
  );
};

export default Experience;
