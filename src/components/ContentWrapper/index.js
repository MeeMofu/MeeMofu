import React, {useState, useRef, useEffect} from 'react';
import {Sticky} from 'semantic-ui-react';
import About from '../Tabs/About';
import NavBar from './Navbar';
import Portfolio from '../Tabs/Portfolio';
import Contact from '../Contact';
import Headroom from 'react-headroom';

const ContentWrapper = ({windowWidth, windowHeight,currentSection,setActiveSection})=> {
    const pageRef = useRef(null);
    // Create ref for the sticky container & header
    const [compHeight,setCompHeight] = useState([0,0,0,0]);

    useEffect(()=>{
        const temp = compHeight;
        temp[1]=windowHeight;
        setCompHeight(temp);
    },[compHeight,windowHeight])

    return (
        <div ref={pageRef}>
            <Sticky context={pageRef}>
                <NavBar windowWidth= {windowWidth} currentSection={currentSection} compHeight={compHeight}/>
            </Sticky>
            <About index={1} windowHeight= {windowHeight}
                compHeight={compHeight} setCompHeight={setCompHeight}
                setActiveSection={setActiveSection}/>
            <Portfolio index={2} windowHeight= {windowHeight}
                compHeight={compHeight} setCompHeight={setCompHeight}
                setActiveSection={setActiveSection}/>
            <Contact windowHeight= {windowHeight}/>
        </div>
        
        
    )

}

export default ContentWrapper;