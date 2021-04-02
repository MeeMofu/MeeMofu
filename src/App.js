import './App.css';
import React, {useEffect, useState} from 'react';
import Home from './components/Home';
import ContentWrapper from './components/ContentWrapper';

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
  // This will be the state of the Nav bar. The value can be
  // 0: Home
  // 1: About
  // 2: Portfollio
  // 3: Contact

  const { windowHeight, windowWidth } = useWindowDimensions();

  return (
    <>
      <Home windowWidth={windowWidth} windowHeight= {windowHeight} 
        setActiveSection={setActiveSection}/>  
      <ContentWrapper windowWidth={windowWidth} windowHeight= {windowHeight}
        currentSection={currentSection} setActiveSection={setActiveSection}/>
    </>
  );
}

export default App;
