import React, { useEffect, useState } from 'react';
import {Animated} from "react-animated-css";

function TabBtn(props) {
    const {setVisible, thisTab, currentTab, setTab} = props;
    const [isActive,setActive] = useState(false);

    useEffect(()=>{
        // Update underline state whenever tab change
        (thisTab === currentTab)? setActive(true):setActive(false);
    },[thisTab,currentTab]);

    return (
        <div className={`tabBtn text px-3 py-2 ${currentTab.name === thisTab.name && 'tabActive'}`}
            onMouseEnter={() => {
                if (thisTab !== currentTab) setActive(true);
                // show line when hover and notactive
            }}
            onMouseLeave={() => {
                if (thisTab !== currentTab) setActive(false);
                // hide line when leave and not active
            }}
            onClick ={() => {
                if (thisTab !== currentTab) {
                    setActive(true); // set active and update current tab
    
                    setVisible(false); // hide content
                    setTimeout(()=>{
                        setTab(thisTab); 
                    },300)  // delay so that the animation is finished

                }
                
            }}>
            
                {thisTab.name}

            <Animated animationIn="zoomIn" animationOut="zoomOut" 
                animationInDuration={500} animationOutDuration={500} 
                isVisible={isActive}>
                    {/* A line that's animated to fade in and out */}
                    <div className="hl"></div>
            </Animated>
            
        </div>
    )
}

export default TabBtn;