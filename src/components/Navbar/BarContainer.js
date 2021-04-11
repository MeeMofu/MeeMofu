import React, {useState} from 'react';
import NavButton from './BarButton';
import {ScrollTo} from 'react-scroll-to';

const NavContainer = ({buttons, currentSection, setActiveSection,compHeight, styling})=>{

    const [isScroll, setScroll] = useState(false);
    return(
        <ScrollTo>
            {({scroll}) => (
                <nav className="row no-gutters col-12 header py-1" style={styling}>
                        {buttons.map((button, index)=>{
                            return <NavButton index = {index} name = {button} scroll={scroll}
                                currentSection={currentSection} setActiveSection={setActiveSection}
                                compHeight={compHeight} key={`BarButton-${index}`}
                                isScroll={isScroll} setScroll={setScroll}/>
                        })}
                </nav>
            )}
        </ScrollTo>

    )
}
export default NavContainer;