import React, {useState, useRef, useEffect} from 'react';
import {Sticky} from 'semantic-ui-react';
import About from '../Tabs/About';
import Portfolio from '../Tabs/Portfolio';
import Contact from '../Contact';

const ContentWrapper = ()=> {
    const pageRef = useRef(null);
    // Create ref for the sticky container & header
    useEffect (()=>{
        console.log("Content mounted");
    },[]);
    


    return (
        <div ref={pageRef}>
            <Sticky context={pageRef}>
                <nav className="row no-gutters col-12 header py-1" style={{borderBottom:'3px solid var(--text-hover)'}}>
                <div className={`tabBtn text px-4 py-2 tabActive`}>Home </div>
                <div className={`tabBtn text px-4 py-2 `}>About </div>
                <div className={`tabBtn text px-4 py-2 `}>Portfolio </div>
            </nav>
            </Sticky>
            <About/>
            <Portfolio />
            <Contact />
            <About/>
        </div>
        
        
    )

}

export default ContentWrapper;