import React, { useState } from 'react';

import Project from "./Project";
import {Animated} from 'react-animated-css';

function Portfolio({isVisible}) {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'trip-planner',
      description: `A React application that users can use to plan out budgets for their trips with real prices from travel agencies. This application is designed to fetch real-life data with [Amadeus](https://developers.amadeus.com/) REST API, providing accurate pricing for better budgeting. The data is stored in the server so users can create their own trips and save them for later.
      
The current API used for searching airports only provide results within the US`,
      skills:['MongoDB', 'Express.js' ,'React.js','Node.js', 'REST API', 'Graphql', 'Booststrap', 'Semantic UI'],
      link: "https://still-taiga-93727.herokuapp.com/",
      repo: "https://github.com/MeeMofu/travel-planner"
    },
    {
      name: 'just-chattin',
      description: `This application is a collab with two members in our UCF programming bootcamp course. The base of our application is [ChatCord](https://github.com/bradtraversy/chatcord). My role was to provide more functionality in the backend so that users can be authenticated. Once creating an account and logging in, users are provided with cookies so that socket.io can identify which user is sending a message, disconnecting, and logging out.`,
      skills:['Express.js','Node.js', 'Socket.io', 'MySQL','Sequelize', 'Handelbars'],
      link: "https://just-chattin.herokuapp.com/",
      repo: "https://github.com/jcgom3/Just-Chattin"
    },
    {
      name: 'weather-dashboard',
      description: 'A simple website with JQuery and Bootstrap that provide weather forecast with Open Weather API. The users can get weather forecast for a given city. The app features an autocomplete field, helping users find their locations easier',
      skills:['JQuery', 'Bootstrap','REST API'],
      link: "https://meemofu.github.io/weather-forecast/",
      repo: "https://github.com/MeeMofu/weather-forecast"
    },
    {
      name: 'CMS-blog',
      description: `An experiemntal project for a blogging site. Users can create an account, post their own blog post, and comment on other posts. User info, blog content, and comments.
      
The current page does not have any content approval nor moderators, so please proceed with caution and have courtesy. Thank you in advance.`,
      skills:['Express.js','Node.js','MySQL','Sequelize', 'Handelbars'],
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
          <Animated key={"project" + index} className={'col-12 col-md-6 p-0'} animationIn="fadeInRight"  animationInDuration={1000} animationOut="fadeOut" animationOutDuration={2} animationInDelay={200+index*250} isVisible={isVisible}>
            <Project project={project}/>
          </Animated>
        ))}
    </div>
      
  );
};

export default Portfolio;
