import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { featuresData } from "../../data/data";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <div className="flex gap-5">
          <a href="https://github.com/Engglala243">
            <span className="bannerIcon">
              <BsGithub />
            </span>
          </a>
          <a href="https://leetcode.com/u/Adityaptdr/">
            <span className="bannerIcon">
              <SiLeetcode />
            </span>
          </a>
          <a href="https://www.geeksforgeeks.org/user/adityapati7wx2/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
            <span className="bannerIcon">
              <SiGeeksforgeeks />
            </span>
          </a>
          <a href="https://www.codechef.com/users/lala43">
            <span className="bannerIcon">
              <SiCodechef />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
