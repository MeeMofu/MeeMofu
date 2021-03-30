import React, {useState} from 'react';
import { Menu,Segment } from 'semantic-ui-react';

function NavBar({width, height}) {
    const [activeItem, setActiveItem] =useState('home');
    const handleItemClick = function(e,{name}){
        setActiveItem(name);
        console.log(name);
    }
    return (
        <>
        <nav className="row no-gutters col-12 header">
            <div className={`tabBtn text px-3 py-2 tabActive`}>Home </div>
            <div className={`tabBtn text px-3 py-2 `}>About </div>
            <div className={`tabBtn text px-3 py-2 `}>Portfolio </div>
        </nav>
        </>
    )
}

export default NavBar;