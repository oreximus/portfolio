import React from 'react';
import { movie, book, news, cell, gym, clock } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center mb-12">
        <Title
          title="Explore My Projects"
          des="Showcasing My Work"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Movies Review | A Movies Review Web Application"
          des="Developed a Movies Review Web Application inspired by Netflix. This application allows users to explore and review movies and TV shows, create personalized watchlists, like/unlike content, and view trailers. The app features sections like 'New & Popular,' trending movies, top-rated shows, and coming soon releases, with an interactive and responsive design."
          src={movie}
          git="https://github.com/Engglala243/Movies_Review"
          live="https://movies-review-eosin.vercel.app/"
        />
        <ProjectsCard
          title="Git Information | A Web Application That Connects People Online"
          des="Designed and deployed a fully-fledged web application called New Page using ReactJS. The application includes various features such as a news converter, a button count tracker, and GitHub profile information retrieval. Additionally, the project supports adding more pages to enhance its functionality and user experience."
          src={book}
          git="https://github.com/Engglala243/New_Page"
          live="https://information-fetch.vercel.app/Github"
        />
        <ProjectsCard
          title="News App | A React-Based Web Application"
          des="Developed a real-time news web application using HTML, CSS, JavaScript, and React. This app aggregates and displays the latest news from various sources, providing users with up-to-date information on current events. Features include categorized news sections, live updates, and a responsive design for an optimal user experience across all devices."
          src={news}
          git="https://github.com/Engglala243/News_app"
          // live="https://newsanalyzer007.netlify.app/"
        />     
        <ProjectsCard
          title="Placement cell | Comprehensive Placement Cell Using React"
          des="Designed and developed a comprehensive Placement Cell Management System using React, featuring student and company profiles and job posting. The system ensures efficient management of placement activities with an intuitive, user-friendly interface and responsive design."
          src={cell}
          git="https://github.com/Engglala243/placementcell-main"
          // live="https://newsanalyzer007.netlify.app/"
        />     
        <ProjectsCard
          title="Fitness | Interactive Fitness Gym Using HTMl,CSS & JS"
          des="Created an Interactive Fitness Gym Management System using HTML, CSS, and JavaScript. The system includes features for managing memberships, scheduling classes, and tracking workout progress. It boasts a responsive design with user-friendly interfaces for optimal functionality across all devices."
          src={gym}
          git="https://github.com/Engglala243/Gym_fitlife"
          live="https://engglala243.github.io/Gym_fitlife/"
        />     
        <ProjectsCard
          title="Alarm Clock | Dynamic Alarm Clock Using HTML, CSS, and JS"
          des="Developed a Dynamic Alarm Clock Application utilizing HTML, CSS, and JavaScript. The app features real-time clock display, alarm setting with customizable tones, and snooze functionality. Designed with a responsive and user-friendly interface to ensure seamless operation across various devices."
          src={clock}
          git="https://github.com/Engglala243/alarmclock"
          live="https://engglala243.github.io/alarmclock/"
        />     
      </div>
    </section>
  );
}

export default Projects;
