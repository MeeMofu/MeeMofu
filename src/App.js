import './App.css';
import React, {useEffect, useState} from 'react';
import PageContent from './components/Navigation/Bar';
import Home from './components/Home';



// Getting user's window dimension to fit sections
// Credit to https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
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
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Home width={width} height= {height-43.33}/> 
      {/* 43.33 is the width of the Navigation bar */}
        <PageContent width={width} height= {height-43.33}/>
      
    </>
  );
}

export default App;
