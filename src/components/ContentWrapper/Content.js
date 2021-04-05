import React,{useState} from 'react';
import {Visibility} from 'semantic-ui-react';
import About from '../About';
import Portfolio from '../Tabs/Portfolio';

function Content({index,name,compHeight,setCompHeight,setActiveSection}) {

    const [isVisible, setVisible] = useState(false);

    const handleUpdate = (e,{calculations}) => {
    // Function to set the active section (based on position of the widow)
    // Select conditions for the section to be active
    const {onScreen,topVisible, topPassed, percentagePassed, direction, height} = calculations;
    if ( onScreen && ((topPassed && direction==='down')|| (!topVisible&&percentagePassed<0.5 &&direction==='up'))) setActiveSection(index);

    // Update the height if the height has changed
    if (height !== compHeight[index]){
      const temp = compHeight;
        temp[index]=height;
        setCompHeight(temp);
    }
    if (onScreen&&topVisible) setVisible(true)
}
    const contentSelect = ()=>{
        switch (name) {
            case 'About':
                return <About isVisible={isVisible}/>
            case 'Portfolio':
                return <Portfolio/>
            default:
                return <div/>
        }
    }

  return (
    <Visibility fireOnMount onUpdate={handleUpdate} onPassing={()=>{setVisible(true)}}>
        <div>{contentSelect()}</div>
    </Visibility>
  );
}

export default Content;
