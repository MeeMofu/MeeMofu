import React, {useState, useEffect} from 'react';
import Headroom from 'react-headroom';

const NavBar = ({windowWidth,currentSection,compHeight})=>{
    if (windowWidth>600)
        return (
            <nav className="row no-gutters col-12 header py-1" style={{borderBottom:'3px solid var(--text-hover)'}}>
                    <div className={`tabBtn text px-4 py-2 ${(currentSection===0)&&'tabActive'}`}>Home </div>
                    <div className={`tabBtn text px-4 py-2  ${(currentSection===1)&&'tabActive'}`}>About </div>
                    <div className={`tabBtn text px-4 py-2  ${(currentSection===2)&&'tabActive'}`}>Portfolio </div>
            </nav>
        )
    else return <></>
}
export default NavBar