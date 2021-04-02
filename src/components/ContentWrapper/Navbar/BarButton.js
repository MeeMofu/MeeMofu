import React, {useState, useEffect} from 'react';

const NavButton = ({index, name, currentSection,setActiveSection,compHeight,scroll})=>{
    const handleScroll = () =>{
        let distance = 0;
        if (index>0) {
            for (var i = 0; i <index; i++) 
                distance+=compHeight[i];
            distance +=1; // Slight offset to fully pass previous component
            if (index === 1)
                distance-= 43.33;
            // Offset the NavBar on first component
        }
        // console.log(compHeight);
        scroll({x:0,y: distance, smooth:true})
        setActiveSection(index);
    }
    return (
        <div onClick={handleScroll}>
            <div className={`tabBtn text px-4 py-2  ${(currentSection===index)&&'tabActive'}`}>{name}</div>
        </div>
    )
}

export default NavButton;