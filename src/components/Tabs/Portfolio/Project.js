import React from 'react';
import { removeHyphensAndCapitalize } from '../../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description } = project;

  return (
    <div className="project col-12 col-md-6 p-0" key={name}>
        <div className="project-container m-3">
            <img
                src={require(`../../../assets/projects/${name}.jpg`).default}
                alt={removeHyphensAndCapitalize(name)}
                className="project-bg"
            />
            <div className="project-text p-3 p-sm-4 m-3">
                <h3>
                <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                <a href={repo}>
                    <i className="fab fa-github"></i>
                </a>
                </h3>
                <p>{description}</p>
            </div>
        </div>
    </div>
  );
}

export default Project;
