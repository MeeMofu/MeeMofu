import React, { useState } from 'react';
import Project from "./Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'trip-planner',
      description: 'MERN Stack',
      link: "https://still-taiga-93727.herokuapp.com/",
      repo: "https://github.com/MeeMofu/travel-planner"
    },
    {
      name: 'just-chattin',
      description: 'Express/Socket.io',
      link: "https://just-chattin.herokuapp.com/",
      repo: "https://github.com/jcgom3/Just-Chattin"
    },
    {
      name: 'weather-dashboard',
      description: 'HTML/CSS',
      link: "https://meemofu.github.io/weather-forecast/",
      repo: "https://github.com/MeeMofu/weather-forecast"
    },
    {
      name: 'CMS-blog',
      description: 'Node/IoT',
      link: "https://radiant-citadel-50156.herokuapp.com/",
      repo: "https://github.com/MeeMofu/CMS-blog"
    },
    // {
    //   name: 'calculator',
    //   description: 'React/JavaScript/CSS',
    //   link: "https://github.com",
    //   repo: "https://github.com"
    // },
  ]);

  return (
      <div className="row ">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
  );
};

export default Portfolio;
