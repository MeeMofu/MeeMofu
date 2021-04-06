
import React from 'react';
import {Animated} from 'react-animated-css';
import Title from '../ContentWrapper/Title';

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

        {/* <div className ={'p-3 p-md-1'} style={{borderBottom:'3px solid var(--text)',width:'75%', margin:'40px auto 60px auto'}}></div> */}

            {/* <Title title={"Hello there"} isVisible={isVisible}></Title> */}
        <div className="row mb-5">
            <div className='col-10 text-center' style={{margin:'0 auto', color:'var(--header)'}}>
            <p style={{fontSize:'15px'}}>
                I'm Vinh Tran, a full stack web developer who loves slick and intuitive webdesigns. I loves to challenge myself, from designing a user friendly wireframe, to writing efficient algorithms that handles edge cases.
              </p>
              <p style={{fontSize:'15px'}}>
                Specialized in minimalistic, user-friendly web interfaces that provides responsive functionality. 
              </p>
            </div>
        </div>

        <div className="pt-3" style={styling.attributeContainer}>
            {skills.map((skill,index)=>{
                return <div key={`About-${index}`} className={"col-12 col-sm-6 col-md-2 py-2 px-0 py-xl-5 text-center"}>
                    <Animated animationIn="fadeInRight"  animationInDuration={1000} animationOut="fadeOut" animationOutDuration={2} animationInDelay={index*250} isVisible={isVisible}>
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
      <div className='pb-4' style={{maxWidth:950,margin:'0px auto 50px auto', boxSizing:'border-box'}}>
            
          <div className={'row pl-0 p-4 mx-0'} style={{textShadow:'1px 1px 3px rgba(0,48,73,0.97)', backgroundColor:'#26ACB1', borderRadius:10, marginBottom:10 }}>
                <h2 className={'col-12 col-sm-3 text-center pb-3 pb-sm-0'} style={{fontWeight:'bold', margin:'auto auto', color:'var(--background)'}}>Frontend</h2>
                <div className={'d-flex col-12 col-sm-9 justify-content-around'} >
                    {frontend.map((skill)=>{
                        return <div className={'d-block text-center'}>
                            <i className ={skill.icon} style={{fontSize:50, color:'var(--background)'}}></i>
                            <div style={{fontWeight:'bold', color:'var(--background)'}}>{skill.title}</div>


                        </div>

                    })}
                </div>
          </div>

          <div className={'row p-4 mx-0 text-right'} style={{textShadow:'1px 1px 3px rgba(0,48,73,0.97)', backgroundColor:'#165F98',width: '100%', borderRadius:10}}>
                <div className={'d-flex col-12 col-sm-9 justify-content-around'} >
                    {backend.map((skill)=>{
                        return <div className={'d-block text-center'}>
                            <i className ={skill.icon} style={{fontSize:50, color:'var(--background)'}}></i>
                            <div style={{fontWeight:'bold', color:'var(--background)'}}>{skill.title}</div>


                        </div>

                    })}
                </div>
                <h2 className={'col-12 col-sm-3 text-center pt-3 pt-sm-0'} style={{fontWeight:'bold', margin:'auto auto', color:'var(--background)'}}>Backend</h2>
          </div>
              
      </div>
      </>

  );
}

export default About;
