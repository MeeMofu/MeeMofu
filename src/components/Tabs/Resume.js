import React from 'react';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      {/* <p>
        Download my <a href="https://www.linkedin.com/">resume</a>
        </p> */}
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS libraries</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>REST APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
