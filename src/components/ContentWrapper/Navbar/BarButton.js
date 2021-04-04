import React from 'react';

const NavButton = ({index, name, currentSection,setActiveSection,compHeight,scroll,isMobile,isScroll, setScroll})=>{
    const handleScroll = () =>{
        let distance = 1;// Slight offset to fully pass previous component
            for (var i = 0; i <index; i++) 
                distance+=compHeight[i];
            if (index === 1 && !isMobile)
                distance-= 43; // Offset the NavBar on first component when on desktop
            if (index > 1 && isMobile)
                distance+= 44; //Offset on Mobile by navBar

        setScroll(true); // setScroll so that Navbar can't change
        scroll({x:0,y: distance, smooth:true});

        // Small timeout so that the page finished scrolling 
        setTimeout(()=>{
            setScroll(false);
            setActiveSection(index);
        },800);
        
    }
    return (
        <div onClick={handleScroll }style={{display:'inline-block'}}>
            <div className={`tabBtn text px-4 py-2  ${(currentSection===index) && !isScroll&&'tabActive'}`}>{name}</div>
        </div>
    )
}

export default NavButton;