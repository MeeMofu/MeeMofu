import React, {useState, useEffect} from 'react';

const NavButton = ({index, name, currentSection,setActiveSection,compHeight,scroll,isMobile})=>{
    const handleScroll = () =>{
        let distance = 1;// Slight offset to fully pass previous component
            for (var i = 0; i <index; i++) 
                distance+=compHeight[i];
            if (index === 1 && !isMobile)
                distance-= 43; // Offset the NavBar on first component when on desktop
            if (index > 1 && isMobile)
                distance+= 44; //Offset on Mobile by navBar
        // console.log(compHeight);
        scroll({x:0,y: distance, smooth:true});
        setActiveSection(index);
        
    }
    return (
        <div onClick={handleScroll }style={{display:'inline-block'}}>
            <div className={`tabBtn text px-4 py-2  ${(currentSection===index)&&'tabActive'}`}>{name}</div>
        </div>
    )
}

export default NavButton;