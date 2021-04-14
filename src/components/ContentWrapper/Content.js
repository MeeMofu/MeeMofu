import React,{useState} from 'react';
import {Visibility} from 'semantic-ui-react';
import Title from '../Title';
import About from '../About';
import Portfolio from '../Portfolio/';
import {Container} from 'semantic-ui-react';

function Content({index,name,compHeight,setCompHeight,setActiveSection,setScroll}) {

    const [isTitleSeen, setTitle] = useState(false);
    const [isSectionSeen, setSection] = useState(false);

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

    }

    const handleLargeScreen =(e,{calculations})=>{
        const {onScreen,topVisible, bottomVisible, fits} = calculations;
        // This is for the case where the the screen is too large to trigger the onPassing event
        if (onScreen && fits && bottomVisible && topVisible) setSection(true);
    }

    const contentSelect = ()=>{
        switch (name) {
            case 'About':
                return <About isVisible={isSectionSeen}/>
            case 'Portfolio':
                return <Portfolio isVisible={isSectionSeen}/>
            default:
                return <div/>
        }
    }

  return (
    <Visibility once={false} onTopPassed={()=>{if(setScroll) setScroll(true)}} onTopVisibleReverse={()=>{if(setScroll) setScroll(false)}} >
        <Visibility fireOnMount onBottomVisible={handleLargeScreen} onUpdate={handleUpdate} offset={[200,0]} onPassing={()=>{setSection(true)}} onOnScreen={()=>{setTitle(true)}} style={{overflow:'auto'}}>
            <Container>
                <Title title={name} isVisible={isTitleSeen}/>
                            <div >{contentSelect()}</div>
            </Container>

        </Visibility>
            

    </Visibility>
  );
}

export default Content;
