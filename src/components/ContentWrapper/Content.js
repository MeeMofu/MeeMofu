import React,{useState} from 'react';
import {Visibility} from 'semantic-ui-react';
import Title from '../ContentWrapper/Title';
import About from '../About';
import Portfolio from '../Tabs/Portfolio';
import {Container} from 'semantic-ui-react';

function Content({index,name,compHeight,setCompHeight,setActiveSection}) {

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


    const contentSelect = ()=>{
        switch (name) {
            case 'About':
                return <About isVisible={isSectionSeen}/>
            case 'Portfolio':
                return <Portfolio/>
            default:
                return <div/>
        }
    }

  return (
    <Visibility fireOnMount onUpdate={handleUpdate} offset={[150,0]} onPassing={()=>{setSection(true)}} onOnScreen={()=>{setTitle(true)}} style={{overflow:'auto'}}>
        <Container>
            <Title title={name} isVisible={isTitleSeen}/>
                        <div >{contentSelect()}</div>
        </Container>
            

    </Visibility>
  );
}

export default Content;
