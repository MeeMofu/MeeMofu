import React, { useEffect } from "react";
import {Visibility} from 'semantic-ui-react';
import Canvas from './animatedBackGround';

function Home({windowWidth, windowHeight, setActiveSection}) {
    const navHeight = 43.33; // NavBar height, deaduct from Home section height to fit

    const handleUpdate = (e,{calculations}) => {
        const {bottomVisible, topVisible, direction,percentagePassed} = calculations;
        // if (bottomVisible && topVisible) console.log('HOME');
        if (bottomVisible && (( topVisible)||(percentagePassed<0.5 &&direction==='up'))) setActiveSection(0); 
        // set current section to 0, which is Home
    }

    return(
      <Visibility fireOnMount onUpdate={handleUpdate}>
        <div className={"text-center d-flex align-items-center justify-content-center"} style={{minHeight:300,height:(windowWidth>600?windowHeight-navHeight:windowHeight),position:'relative',fontFamily: "Ubuntu Mono",color:'white'}}>
         <div style={{ position:'absolute'}} className={'p-5 mx-3'}>
                <p style={(windowWidth>600)?
                    {fontSize:"40px"}:
                    {fontSize:"7vw"}} className={'m-0'}>
                        Please to meet you, I am
                </p>
                <p style ={(windowWidth>600)?
                    {fontSize:"80px",color:' var(--text)', fontWeight:'bold'}:
                    {fontSize:"12vw",color:' var(--text)', fontWeight:'bold'}} 
                    className={'p-2 m-0'}>Vinh Tran</p>
                <p style={(windowWidth>600)?
                    {fontSize:"30px"}:
                    {fontSize:"5.5vw"}} className={'m-0'}
                    >Electrical Engineer {'&'} full stack web developer</p>
                {(windowWidth<600) && <i className={"fas fa-mug-hot pt-5"} style={{fontSize:"20vw",color:' var(--text)'}}></i>}
            </div>
            <Canvas windowWidth={windowWidth} windowHeight= {(windowWidth>600?windowHeight-navHeight:windowHeight)} />

        </div>
      </Visibility>

    )
}

export default Home;