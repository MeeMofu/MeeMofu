
import React from 'react';
import {Animated} from 'react-animated-css';

const skills=[
    {
        icon:'far fa-thumbs-up',
        title: 'User friendly',
        description:'Ensure the best user experience through intuitive user interfaces'
    },
    {
        icon:'fas fa-mobile-alt',
        title: 'Responsive',
        description:'Web applications that can be view on any screen size'
    },
    {
        icon:'fas fa-tachometer-alt',
        title:'Efficient',
        description:'Custom tailored algorithms that are optimized for efficiency'
    },
    {
        icon:'fas fa-rocket',
        title: 'Dynamic',
        description:'Animated elements for a more feature-rich website'
    },
    // {
    //     icon:'fas fa-microchip',
    //     title:'Embedded',
    //     description:'Extend the boundary of web applications with low-power embbeded systems'
    // }
]

const styling={
    container: {
        display:'flex',
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    icon: {
        backgroundColor:'var(--text)',
        padding:'14px 0', 
        width:80,
        height:80, 
        margin:'0px auto', 
        borderRadius:'10px'
    },
    description:{
        maxWidth:250,
        margin:'0px auto'
    }
}

function About({isVisible}) {
  
  return (
      <>
      

        <div className="px-3" style={styling.container}>
            {skills.map((skill,index)=>{
                return <div key={`About-${index}`} className={"col-12 col-sm-6 col-md-2 py-2 px-0 py-xl-5 text-center"}>
                    <Animated animationIn="fadeInRight"  animationInDuration={1000} animationOut="fadeOut" animationOutDuration={0} animationInDelay={index*250} isVisible={isVisible}>
                        <div className={'d-flex d-sm-block'}>
                            <div style={styling.icon}>
                                <i className ={skill.icon} style={{color:'white',fontSize:50}}></i>
                            </div >
                        <div className={'col-7 col-sm-12 text-left text-sm-center px-0 pt-sm-2 pb-sm-5'} style={styling.description}>
                            <h2 className={'p-0 m-0 py-sm-2'} style={{color:'var(--header)'}}>{skill.title}</h2>
                            <div>{skill.description}</div>
                        
                        </div>
                        </div>
                    </Animated>
                </div>
            })}
            
        </div>
      
      </>

  );
}

export default About;
