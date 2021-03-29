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
            <Menu pointing secondary>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    classname={'tabBtn'}
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='friends'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}
                />
            </Menu>
            
        </>
    )
}

export default NavBar;