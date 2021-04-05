
import React from 'react';
import {Animated} from 'react-animated-css';
const skills=[
    {
        title: 'User friendly',
        description:'Ensure the best user experience through intuitive user interfaces'
    },
    {
        title: 'Responsive',
        description:'Web applications that can be view on any screen size'
    },
    {
        title:'Efficient',
        description:'Custom tailored algorithms that are optimized for efficiency'
    },
    {
        title: 'Dynamic',
        description:'Eye-catching animated components for a more feature-rich website'
    },
    {
        title:'Embedded',
        description:'Extend the boundary of web applications with low-power embbeded systems'
    }
]

function About({isVisible}) {
  
  return (
      <div style={{overflow:'auto'}}>
          <div>
              <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut" isVisible={isVisible}>
                <h1 style={{textAlign:'center', marginTop:'80px', fontSize:40}}>My products are...</h1>
              </Animated>
              <Animated animationIn="bounceInLeft" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={0} animationInDelay={100}isVisible={isVisible}>
                <div style={{borderBottom:'3px solid',width:250, margin:'0px auto 80px auto', }}></div>
                
              </Animated>
          </div>
        <div className="px-3 d-flex justify-content-center flex-wrap" >
            {skills.map((skill,index)=>{
                return <div className={"col-12 col-md-4 p-5 text-center"}>
                    <Animated animationIn="bounceInLeft"  animationInDuration={1000} animationOut="fadeOut" animationOutDuration={0} animationInDelay={index*150} isVisible={isVisible}>

                    <div style={{maxWidth:250, margin:'0px auto'}}>
                        <h2>{skill.title}</h2>
                        <div>{skill.description}</div>
                        
                    </div>
                    </Animated>
                </div>
            })}
            
        </div>
      </div>
  );
}

export default About;
