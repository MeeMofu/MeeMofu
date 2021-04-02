import React, {useState, useEffect} from 'react';
import NavButton from './NavButton';
import Headroom from 'react-headroom';
import {ScrollTo} from 'react-scroll-to';


const NavBar = ({windowWidth,currentSection,compHeight,setActiveSection})=>{

    const Buttons = ['Home', 'About', 'Portfolio'];
    
    // if (windowWidth>600)
        return (
            <ScrollTo>
                {({scroll}) => (
                    <nav className="row no-gutters col-12 header py-1" style={{borderBottom:'3px solid var(--text-hover)'}}>
                            {Buttons.map((button, index)=>{
                                return <NavButton index = {index} name = {button} scroll={scroll}
                                    currentSection={currentSection} setActiveSection={setActiveSection}
                                    compHeight={compHeight} />
                            })}
                    </nav>
                )}

            </ScrollTo>
        )
    // else return <></>
}
export default NavBar