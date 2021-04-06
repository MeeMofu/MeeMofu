import React from "react";
import {Visibility} from 'semantic-ui-react';
import Canvas from './animatedBackGround';

function Home({windowWidth, windowHeight, setActiveSection}) {
    const navHeight = 40.33; // NavBar height, deaduct from Home section height to fit

    const handleUpdate = (e,{calculations}) => {
        const {bottomVisible, topVisible, direction,percentagePassed} = calculations;
        // if (bottomVisible && topVisible) console.log('HOME');
        if (bottomVisible && (( topVisible)||(percentagePassed<0.5 &&direction==='up'))) setActiveSection(0); 
        // set current section to 0, which is Home
    }

    const styling = {
        background:{
            // background:' rgb(19,68,106)',
            background: 'linear-gradient(0deg, rgba(19,68,106,1) 0%, rgba(26,117,159,1) 35%, rgba(82,182,154,1) 100%)',
        },
        shader: {
            background:'var(--deepen)',
            position:'relative',
            width:'100%',
            height:'100%',
            display:'flex',
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center'
        },
        container:{
            position:'absolute',
            color:'white',
            textShadow:'2px 2px 3px rgba(0,48,73,0.97)',
        }
    }

    return(
      <Visibility fireOnMount onUpdate={handleUpdate}>
        <div style={styling.background}>
            <div style={styling.shader}>

         <div style={styling.container} className={'p-5 mx-3'}>
                <p style ={(windowWidth>600)?
                    {fontSize:"50px",fontWeight:'bold'}:
                    {fontSize:"12vw", fontWeight:'bold'}} 
                    className={'p-3 m-0'}>VINH TRAN</p>
                <p style={(windowWidth>600)?
                    {fontSize:"20px"}:
                    {fontSize:"5.5vw"}} className={'m-0'}
                    >Electrical Engineer {'&'} full stack web developer</p>
                <i className={"fas fa-mug-hot pt-5"} style={{fontSize:`${(windowWidth>600)?'100px':'20vw'}`, color:' var(--text)'}}></i>
            </div>
            <Canvas windowWidth={windowWidth} windowHeight= {(windowWidth>600?windowHeight-navHeight:windowHeight+navHeight)} />
            </div>

        </div>
      </Visibility>

    )
}

export default Home;