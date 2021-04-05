import React, {useState, useEffect} from 'react';
import NavButton from './BarButton';
import {Sticky} from 'semantic-ui-react';

import Headroom from 'react-headroom';
import {ScrollTo} from 'react-scroll-to';

const NavBar = ({windowWidth,currentSection,compHeight,setActiveSection, context})=>{

    const Buttons = ['Home', 'About', 'Portfolio','Contact'];
    const [isScroll, setScroll] = useState(false);

    
    
    if (windowWidth>600)
        return (
            <Sticky context={context}>
                <ScrollTo>
                    {({scroll}) => (
                        <nav className="row no-gutters col-12 header py-1 px-md-5" style={{borderBottom:'3px solid var(--text)',width:windowWidth}}>
                                {Buttons.map((button, index)=>{
                                    return <NavButton index = {index} name = {button} scroll={scroll}
                                        currentSection={currentSection} setActiveSection={setActiveSection}
                                        compHeight={compHeight} key={`BarButton-${index}`}
                                        isScroll={isScroll} setScroll={setScroll}/>
                                })}
                        </nav>
                    )}

                </ScrollTo>
            </Sticky>
        )
    else return (
        <Headroom style={{zIndex:900}}>
            <ScrollTo>
                    {({scroll}) => (
                        <nav className="no-gutters col-12 header p-1" style={{borderBottom:'3px solid var(--text)',overflowX: 'auto', overflowY:'hidden', width: windowWidth,whiteSpace:'nowrap', height:43.33, textAlign:'center'}}>
                                {Buttons.map((button, index)=>{
                                    return <NavButton index = {index} name = {button} scroll={scroll}
                                        currentSection={currentSection} setActiveSection={setActiveSection}
                                        compHeight={compHeight} key={`BarButton-${index}` }isMobile={windowWidth}
                                        isScroll={isScroll} setScroll={setScroll}/>
                                })}
                        </nav>
                    )}

                </ScrollTo>
        </Headroom>)
}
export default NavBar