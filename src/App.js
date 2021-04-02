import './App.css';
import React, {useEffect, useState} from 'react';
import Home from './components/Home';
import ContentWrapper from './components/ContentWrapper';
import {Visibility} from 'semantic-ui-react';

// Getting user's window dimension to fit sections
// Credit to https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

function getWindowDimensions() {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return {
    windowWidth,
    windowHeight
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [currentSection,setActiveSection] = useState(0);
  
  // const [homeVisibility,setHome] = useState({
  //   percentagePassed: 0,
  //   topVisible: false,
  //   bottomVisible: false,
  //   fits: false,
  //   passing: false,
  //   onScreen: false,
  //   offScreen: false,});
  
  const handleUpdate = (e,{calculations}) => {
    // console.log(state);
    const {bottomVisible, topVisible} = calculations;
    if (bottomVisible && topVisible) console.log('HOME');
  }
  const { windowHeight, windowWidth } = useWindowDimensions();
  return (
    <>
      <Visibility fireOnMount onUpdate={handleUpdate}>
        <Home windowWidth={windowWidth} windowHeight= {windowHeight-43.33}/>  {/* 43.33 is the height of the Navigation bar */}
      </Visibility>
      
      <ContentWrapper windowWidth={windowWidth} windowHeight= {windowHeight-43.33}/>
    </>
  );
}

export default App;
