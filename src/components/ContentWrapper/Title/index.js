import React from 'react';
import {Animated} from 'react-animated-css';

 const Title = ({title,isVisible,mini})=>{
    return (
        <div>
              <Animated animationIn="flipInX" animationInDuration={1000} animationOutDuration={0}  animationOut="fadeOut"  animationInDelay={mini?0:300} isVisible={isVisible}>
                <h1 style={{textAlign:'center', margin:`${mini?'20px 0px 7px 0px':'80px 0px 15px 0px'}`, fontSize:`${mini?'30px':'40px'}`, color:'var(--header)'}}>{title}</h1>
              </Animated>
              <Animated animationIn="zoomIn" animationInDuration={1000} animationOut="fadeOut" animationOutDuration={0} animationInDelay={mini?0:500}isVisible={isVisible}>
                <div style={{borderBottom:'3px solid var(--text)',width:120, margin:`${mini?'0px auto':'0px auto 60px auto'}`}}></div>
                
              </Animated>
          </div>
    )

}

export default Title