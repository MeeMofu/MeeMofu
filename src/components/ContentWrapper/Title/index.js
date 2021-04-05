import React from 'react';
import {Animated} from 'react-animated-css';

 const Title = ({title,isVisible})=>{
    return (
        <div>
              <Animated animationIn="flipInX" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut" isVisible={isVisible}>
                <h1 style={{textAlign:'center', marginTop:'80px', fontSize:40}}>{title}</h1>
              </Animated>
              <Animated animationIn="zoomIn" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={0} animationInDelay={100}isVisible={isVisible}>
                <div style={{borderBottom:'3px solid',width:120, margin:'0px auto 80px auto', }}></div>
                
              </Animated>
          </div>
    )

}

export default Title