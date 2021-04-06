import React, { useState } from 'react';

import Project from "./Project";
import {Animated} from 'react-animated-css';

function Portfolio({isVisible}) {

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
      <div className="row" style={{marginBottom:60}}>
        {projects.map((project, index) => (
                    <Animated className={'col-12 col-md-6 p-0'} animationIn="fadeInRight"  animationInDuration={1000} animationOut="fadeOut" animationOutDuration={2} animationInDelay={200+index*250} isVisible={isVisible}>
                      <Project
                        project={project}
                        key={"project" + index}
                      />

                    </Animated>
        ))}
      </div>
      
  );
};

export default Portfolio;
