import React, {useState, useEffect} from 'react';
import NavButton from './BarButton';
import {Sticky} from 'semantic-ui-react';

import Headroom from 'react-headroom';
import {ScrollTo} from 'react-scroll-to';
import { slide as Menu } from 'react-burger-menu'

const NavBar = ({windowWidth,currentSection,compHeight,setActiveSection, context})=>{

    const Buttons = ['Home', 'About', 'Portfolio','Contact'];
    
    if (windowWidth>600)
        return (
            <Sticky context={context}>
                <ScrollTo>
                    {({scroll}) => (
                        <nav className="row no-gutters col-12 header py-1" style={{borderBottom:'3px solid var(--text-hover)'}}>
                                {Buttons.map((button, index)=>{
                                    return <NavButton index = {index} name = {button} scroll={scroll}
                                        currentSection={currentSection} setActiveSection={setActiveSection}
                                        compHeight={compHeight} key={`BarButton-${index}`}/>
                                })}
                        </nav>
                    )}

                </ScrollTo>
            </Sticky>
        )
    else return (
        <Headroom style={{zIndex:900, }}>
            <ScrollTo>
                    {({scroll}) => (
                        <nav className="no-gutters col-12 header p-1" style={{borderBottom:'3px solid var(--text-hover)',overflowX: 'auto', overflowY:'hidden', width: '100%',whiteSpace:'nowrap', height:43.33, textAlign:'center'}}>
                                {Buttons.map((button, index)=>{
                                    return <NavButton index = {index} name = {button} scroll={scroll}
                                        currentSection={currentSection} setActiveSection={setActiveSection}
                                        compHeight={compHeight} key={`BarButton-${index}` }isMobile={windowWidth}/>
                                })}
                        </nav>
                    )}

                </ScrollTo>
        </Headroom>)
}
export default NavBar