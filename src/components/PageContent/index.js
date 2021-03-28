import React from 'react';
import CurrentTab  from "./CurrentTab";
import About from "../Tabs/About";
import Portfolio from "../Tabs/Portfolio"
import Contact from "../Tabs/Contact";
import Resume from "../Tabs/Resume";
import {Animated} from "react-animated-css";

function Content(props) {
    const {viewTab, currentTab} = props;

    const renderPage = ()=>{
        switch (currentTab.name) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
             case 'Contact':
                return <Contact />;
             case 'Resume':
                return <Resume />;
            default:
                return <About />;
            
        }
        
    }

    return (
        <Animated animationIn="slideInLeft" animationOut="fadeOutRight" animationInDuration={700} animationOutDuration={300} isVisible={viewTab}>
            <div className="container py-5"  style={{color: "var(--text)", textShadow:" 1px 1px var(--header)"}}>
                <h2 className="text-center text-md-left px-1 px-md-3 px-lg-5" style={{ fontSize: "2.5rem", }} >{currentTab.name} </h2>
                <CurrentTab>{renderPage()}</CurrentTab> 
            </div>
        </Animated>

        
    )
}

export default Content