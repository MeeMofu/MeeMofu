import React, {useState, useRef, useEffect} from 'react';
import NavBar from './Navbar';
import Contact from '../Contact';
import Content from './Content';

const ContentWrapper = ({windowWidth, windowHeight,currentSection,setActiveSection})=> {
    const contentRef = useRef(null);
    // Create ref for the sticky container & header
    const [compHeight,setCompHeight] = useState([windowHeight,0,0,0]);

    useEffect(()=>{
        // Update Home Height.
        if (windowHeight !== compHeight[0]){
            const temp = compHeight;
            temp[0]=windowHeight;
            setCompHeight(temp);
        }
        
    },[compHeight,windowHeight]);

    return (
        <div ref={contentRef}>
            <NavBar windowWidth= {windowWidth}  compHeight={compHeight} context={contentRef}
                currentSection={currentSection} setActiveSection={setActiveSection}/>
            <Content index={1} name={'About'}
                compHeight={compHeight} setCompHeight={setCompHeight}
                setActiveSection={setActiveSection}/>
            <Content index={2} name={'Portfolio'}
                compHeight={compHeight} setCompHeight={setCompHeight}
                setActiveSection={setActiveSection}/>
            
            <Contact/>
        </div>
        
        
    )

}

export default ContentWrapper;