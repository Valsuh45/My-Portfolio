import React from "react";

const About = () => {
  return (
    <div
      data-name="about"
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-gray-500 opacity-55">
            About
          </p>
        </div>
        <p className="text-xl mt-20 opacity-55">
          Hey there, it's Valantine Suh 😎, I am an experienced Software
          Engineer with an aspiring zeal to excel in the Tech Field. I've
          contributed to a few of projects using the named frameworks in the{" "}
          <a
            href="#experience"
            className="text-blue-500 font-bold hover:underline"
          >
            Experience
          </a>{" "}
          Section.
        </p>
        <br />
        <p className="text-xl opacity-55">
          Skilled software engineer with 2 years of experience in the industry.
          Highly adept at handling various responsibilities by prioritizing my
          tasks, establishing clear deadlines and finding creative solutions to
          eliminate obstacles. My experience has equipped me with the necessary
          tools to succeed this position: <br />
          * Web App dev. <br />
          * Desktop App dev <br />
          * API dev <br />
          * Micro-Services <br />
          * DevOps <br />
        </p>
      </div>
    </div>
  );
};

export default About;
