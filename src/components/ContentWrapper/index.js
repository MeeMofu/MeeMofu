import React, {useState, useRef} from 'react';
import NavBar from '../Navbar';
import Contact from '../Contact';
import Content from './Content';

const ContentWrapper = ({windowWidth, currentSection,setActiveSection,compHeight,setCompHeight})=> {
    const contentRef = useRef(null);
    // Create ref for the sticky container & header

    const [startScroll,setScroll] = useState(false);
    // Intended to hide NavBar on mobile. On mobile, the NavBar sits below the Homepage, only when it's scroll pass that it pops into header

    return (
        <div ref={contentRef} style={{backgroundColor:'var(--background)'}}>
            <NavBar windowWidth= {windowWidth}  compHeight={compHeight} context={contentRef}
                currentSection={currentSection} setActiveSection={setActiveSection}
                startScroll={startScroll}/>
            <Content index={1} name={'About'}
                compHeight={compHeight} setCompHeight={setCompHeight}
                setActiveSection={setActiveSection} setScroll={setScroll} startScroll={startScroll}/>
            <Content index={2} name={'Portfolio'}
                compHeight={compHeight} setCompHeight={setCompHeight}
                setActiveSection={setActiveSection}/>
            
            <Contact/>
        </div>
        
        
    )

}

export default ContentWrapper;