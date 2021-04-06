import React,{ useState} from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import {Animated} from 'react-animated-css';
import {Modal} from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import Title from '../Title';

function Project({ project }) {

    const [isVisible, setVisible] = useState(false);
    const [open,setOpen] =useState(false);
  const { name, repo, link, description, skills } = project;

  return (
    <div className="project">
        <div className="project-container m-3" > 
            <img
                src={require(`../../assets/projects/${name}.jpg`).default}
                alt={`${removeHyphensAndCapitalize(name)} by Vinh Tran`}
                className="project-bg"
            />
            <div className="project-text p-3 p-sm-4 m-3" style={{display:'flex', flexDirection:'column',justifyContent:'space-between'}} onMouseOver={()=>{setVisible(true)}} onMouseLeave={()=>{setVisible(false)}}>
                <div>
                    <Animated animationIn="bounceIn" animationInDuration={700} animationOut="fadeOut" animationOutDuration={500} animationInDelay={0} isVisible={!open && isVisible}>
                        <h2 style={{color:'var(--header-light)', textAlign:'center', borderBottom:'2px solid var(--header-light)', paddingBottom:'3px', marginBottom:'5px', fontWeight:'bold'}}>{removeHyphensAndCapitalize(name).toUpperCase()}</h2>
                    </Animated>
                    <div className={'pt-0 pt-sm-4 pt-md-0 pt-lg-4'} style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>

                        {skills.map((skill,index)=>{
                            return (<Animated animationIn="fadeInUp" key={`tool-used${index}`} animationInDuration={600} animationOut="fadeOut"  animationOutDuration={500} animationInDelay={500+index*100} isVisible={!open && isVisible}>
                                <div className={'text-center p-1 m-1'} style={{color:'var(--background)',backgroundColor:'rgba(30, 96, 145, 0.8)', borderRadius:'5px'}}>
                                    {skill}
                                </div>
                            </Animated>)
                        })}
                    </div>
                </div>
                <Animated animationIn="fadeInRight" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={800} animationInDelay={0} isVisible={!open && isVisible}>
                        <Modal closeIcon onClose={() => {setVisible(false); setOpen(false)}} onOpen={() => setOpen(true)} open={open} style={{height: 'auto',top: 'auto',left: 'auto', bottom: 'auto', right: 'auto', maxWidth:'400px', borderRadius:'7px', background:'var(--background)'}} 
                        trigger={<p className={'learnMoreBtn p-2'}>Learn More</p>}>
                            <Title title={removeHyphensAndCapitalize(name)} isVisible={open} mini/>
                            <Modal.Content style={{background:'var(--background)'}}>
                                <Animated animationIn="fadeIn" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={800} animationInDelay={200} isVisible={open} className={"px-2"}>
                                    <ReactMarkdown className={'pb-5  text-center'}>{description}</ReactMarkdown>
                                </Animated>
                                <Animated animationIn="fadeInDown" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={800} animationInDelay={500} isVisible={open} className={"px-2"}>
                                    <div className={'d-flex justify-content-around pt-2 pb-4'}>
                                        <div className={'d-block text-center'}>
                                        <a href={link} target="_blank" title={'View live'} rel="noopener noreferrer"><i className ="far fa-file-code" style={{fontSize:45, color:'var(--header-light)'}}></i></a>
                                            <div style={{fontWeight:'bold', color:'var(--header-light)'}}>Live page</div>
                                        </div>
                                        <div className={'d-block text-center'}>
                                        <a href={repo} title={'View Git'} target="_blank" rel="noopener noreferrer"><i className ="fab fa-github" style={{fontSize:45, color:'var(--header-light)'}}></i></a>
                                            
                                            <div style={{fontWeight:'bold', color:'var(--header-light)'}}>Github</div>
                                        </div>
                                    </div>
                                </Animated>
                            </Modal.Content>
                    </Modal>
                </Animated>
            </div>
        </div>
    </div>
  );
}

export default Project;
