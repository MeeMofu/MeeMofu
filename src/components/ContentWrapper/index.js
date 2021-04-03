import React, {useState, useRef, useEffect} from 'react';
import About from '../Tabs/About';
import NavBar from './Navbar';
import Portfolio from '../Tabs/Portfolio';
import Contact from '../Contact';
import Headroom from 'react-headroom';

const ContentWrapper = ({windowWidth, windowHeight,currentSection,setActiveSection,appRef})=> {
    const contentRef = useRef(null);
    // Create ref for the sticky container & header
    const [compHeight,setCompHeight] = useState([windowHeight,0,0,0]);

    useEffect(()=>{
        if (windowHeight !== compHeight[0]){
            const temp = compHeight;
            temp[0]=windowHeight;
            setCompHeight(temp);
        }
        
    },[compHeight,windowHeight])

    return (
        <div ref={contentRef}>
            <NavBar windowWidth= {windowWidth}  compHeight={compHeight} context={contentRef}
                currentSection={currentSection} setActiveSection={setActiveSection} appRef={appRef}/>
            
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