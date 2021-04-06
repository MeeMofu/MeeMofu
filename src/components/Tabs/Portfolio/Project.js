import React,{useState} from 'react';
import { removeHyphensAndCapitalize } from '../../../utils/helpers';
import {Animated} from 'react-animated-css';

import ReactMarkdown from 'react-markdown';

function Project({ project }) {

    const [isVisible, setVisible] = useState(false);
  const { name, repo, link, description, skills } = project;

  return (
    <div className="project">
        <div className="project-container m-3" > 
            <img
                src={require(`../../../assets/projects/${name}.jpg`).default}
                alt={removeHyphensAndCapitalize(name)}
                className="project-bg"
            />
            <div className="project-text p-3 p-sm-4 m-3" style={{display:'flex', flexDirection:'column',justifyContent:'space-between'}} onClick={()=>{setVisible(true)}} onMouseEnter={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}}>
                <div>
                    <Animated animationIn="bounceIn" animationInDuration={700} animationOut="fadeOut" animationOutDuration={500} animationInDelay={0} isVisible={isVisible}>
                        <h2 style={{color:'var(--header-light)', textAlign:'center', borderBottom:'1px solid var(--header-light)', paddingBottom:'3px', marginBottom:'5px', fontWeight:'bold'}}>{removeHyphensAndCapitalize(name).toUpperCase()}</h2>
                    </Animated>
                    <div className={'pt-0 pt-sm-4 pt-md-0 pt-lg-4'} style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>

                        {skills.map((skill,index)=>{
                            return (<Animated animationIn="fadeInUp" animationInDuration={600} animationOutDuration={0}  animationOut="fadeOut"  animationOutDuration={500} animationInDelay={500+index*100} isVisible={isVisible}>
                                <div className={'text-center p-1 m-1'} style={{color:'var(--background)',backgroundColor:'rgba(30, 96, 145, 0.8)', borderRadius:'5px'}}>
                                    {skill}
                                </div>
                            </Animated>)
                        })}
                    </div>

                </div>
                <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={800} animationInDelay={0} isVisible={isVisible}>
                    <p className={'learnMoreBtn p-2'}>Learn More</p>
                    {/* <ReactMarkdown>{description}</ReactMarkdown> */}
                </Animated>
            </div>
        </div>
    </div>
  );
}

export default Project;
