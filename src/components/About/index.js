
import React from 'react';
import {Animated} from 'react-animated-css';

const skills=[
    {
        icon:'far fa-thumbs-up',
        title: 'User friendly',
        description:'Best user experience through intuitive user interfaces'
    },
    {
        icon:'fas fa-mobile-alt',
        title: 'Responsive',
        description:'Web applications that can be view on any screen size'
    },
    {
        icon:'fas fa-tachometer-alt',
        title:'Efficient',
        description:'Custom tailored algorithms, optimized for efficiency'
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
];

const frontend =[
    {
        icon:'fab fa-html5',
        title:'HTML5'
    },
    {
        icon:'fab fa-css3-alt',
        title:'CSS3'
    },
    {
        icon:'fab fa-react',
        title: 'React.js'
    },
    {
        icon:'fab fa-bootstrap',
        title: 'Bootstrap'
    }
];

const backend =[
    {
        icon:'fab fa-js-square',
        title:'Javascript'
    },
    {
        icon:'fab fa-node-js',
        title:'Node.js'
    },
    {
        icon:'fas fa-server',
        title: 'Express.js'
    },
    {
        icon:'fab fa-envira',
        title: 'Mongodb'
    }
];

const styling={
    attributeContainer: {
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
        <Animated animationIn="fadeInDown" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={200} isVisible={isVisible}>
            <div className="row mb-5">
                        <div className='col-10 text-center' style={{margin:'0 auto', color:'var(--header)'}}>
                        <p style={{fontSize:'15px'}}>
                            I'm Vinh Tran, a full stack web developer who loves slick and intuitive designs. I love to challenge myself, from designing a user friendly wireframe, to writing efficient algorithms that handles edge cases.
                        </p>
                        <p style={{fontSize:'15px'}}>
                            Specialized in minimalistic, intuitive interfaces that provides robust functionality. 
                        </p>
                        </div>
                    </div>
          
        </Animated>
       

        <div className="pt-3 pb-4 pb-sm-0" style={styling.attributeContainer}>
            {skills.map((skill,index)=>{
                return <div key={`About-${index}`} className={"col-12 col-sm-6 col-md-2 py-2 px-0 py-xl-5 text-center"}>
                    <Animated animationIn="fadeInRight"  animationInDuration={1000} animationOut="fadeOut" animationOutDuration={2} animationInDelay={200+index*250} isVisible={isVisible}>
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
            
      <div className='pb-4 pt-5 pt-md-3' style={{maxWidth:950,margin:'0px auto 50px auto', boxSizing:'border-box'}}>
            
        <Animated animationIn="bounceInLeft" animationInDuration={1700} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={600} isVisible={isVisible}>
          <div className={'row pl-0 p-4 mx-0'} style={{textShadow:'1px 1px 3px rgba(0,48,73,0.97)', backgroundColor:'#26ACB1', borderRadius:10, marginBottom:10 }}>
                <Animated animationIn="fadeInRight" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={1800} isVisible={isVisible} style={{ margin:'auto auto'}}>
                    <h2 className={'col-12 col-md-3 text-center pb-2 pb-md-0'} style={{fontWeight:'bold', color:'var(--background)'}}>Frontend</h2>

                </Animated>
                <div className={'d-flex col-12 col-md-9 justify-content-around p-0'} >
                    {frontend.map((skill,index)=>{
                        return <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={1600+index*100} isVisible={isVisible}>
                            <div className={'d-block text-center'}>
                                <i className ={skill.icon} style={{fontSize:45, color:'var(--background)'}}></i>
                                <div style={{fontWeight:'bold', color:'var(--background)' ,fontSize:'11px'}}>{skill.title}</div>


                            </div>

                        </Animated>

                    })}
                </div>
          </div>
        </Animated>

        <Animated animationIn="bounceInRight" animationInDuration={1700} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={600} isVisible={isVisible}>
            

          <div className={'row p-4 mx-0 text-right'} style={{textShadow:'1px 1px 3px rgba(0,48,73,0.97)', backgroundColor:'#165F98',width: '100%', borderRadius:10}}>
                <div className={'d-flex col-12 col-md-9 justify-content-around p-0'} >
                    {backend.map((skill,index)=>{
                        return <Animated animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={1600+index*100} isVisible={isVisible}>
                        <div className={'d-block text-center'}>
                            <i className ={skill.icon} style={{fontSize:45, color:'var(--background)'}}></i>
                            <div style={{fontWeight:'bold', color:'var(--background)',fontSize:'11px'}}>{skill.title}</div>


                        </div>

                        </Animated>

                    })}
                </div>
                <Animated animationIn="fadeInLeft" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={1800} isVisible={isVisible} style={{ margin:'auto auto'}}>
                    <h2 className={'col-12 col-md-3 text-center pt-2 pt-md-0'} style={{fontWeight:'bold', color:'var(--background)'}}>Backend</h2>

                </Animated>
          </div>
    </Animated>
              
      </div>
      </>

  );
}

export default About;
