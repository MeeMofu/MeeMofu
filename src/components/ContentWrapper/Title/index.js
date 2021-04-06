import React from 'react';
import {Animated} from 'react-animated-css';

 const Title = ({title,isVisible})=>{
    return (
        <div>
              <Animated animationIn="flipInX" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={300} isVisible={isVisible}>
                <h1 style={{textAlign:'center', marginTop:'80px', fontSize:40, color:'var(--header)'}}>{title}</h1>
              </Animated>
              <Animated animationIn="zoomIn" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={0} animationInDelay={500}isVisible={isVisible}>
                <div style={{borderBottom:'3px solid var(--text)',width:120, margin:'0px auto 60px auto'}}></div>
                
              </Animated>
          </div>
    )

}

export default Title