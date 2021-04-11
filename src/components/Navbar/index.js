import React from 'react';
import NavContainer from './BarContainer';
import {Sticky} from 'semantic-ui-react';

import Headroom from 'react-headroom';

const NavBar = ({windowWidth,currentSection,compHeight,setActiveSection, context, startScroll})=>{

    const Buttons = ['Home', 'About', 'Portfolio','Contact'];
    // const [isScroll, setScroll] = useState(false);

    const styling = {
        sticky:{
            borderBottom:'3px solid var(--text)',
            width:windowWidth
        },
        headroom:{
            borderBottom:'3px solid var(--text)',
            display:'inline-block',
            width: windowWidth,
            overflowX: 'auto',
            overflowY:'hidden',
            whiteSpace:'nowrap', 
            height:43.33, 
            textAlign:'center'
        }
    }

    return <>
        {(windowWidth>600)&&
        <Sticky context={context}>
            <NavContainer buttons={Buttons} currentSection={currentSection} 
                setActiveSection={setActiveSection} compHeight={compHeight} 
                styling={styling.sticky}/>
        </Sticky>}

        {(startScroll && windowWidth<=600) && 
        <Headroom style={{zIndex:900}}>
            <NavContainer buttons={Buttons} currentSection={currentSection} 
                setActiveSection={setActiveSection} compHeight={compHeight} 
                styling={styling.headroom}/>
        </Headroom>}
    </>
}
export default NavBar